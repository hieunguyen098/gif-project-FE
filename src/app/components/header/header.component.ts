import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SearchService } from 'src/app/services/search.service';
import { FormControl } from '@angular/forms';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ApiHttpService } from 'src/app/services/api-http.service';
import { Subscription } from 'rxjs-compat';
import 'rxjs/add/operator/debounceTime';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  faMagnifyingGlass = faMagnifyingGlass;
  searchText: string = '';
  searchInputControl = new FormControl();
  searchSuggestOptions: string[] = [];
  searchCtrlSub?: Subscription;
  @ViewChild(MatAutocompleteTrigger)
  autocompleteTrigger?: MatAutocompleteTrigger;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private location: Location,
    private apiHttp: ApiHttpService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      const decodedURL = decodeURI(this.location.path());
      if (!decodedURL.includes('/search/')) {
        this.searchText = '';
        this.searchSuggestOptions = [];
      }
    });
    this.searchService.searchTextChanged.subscribe((data) => {
      this.searchText = data;
    });
    this.searchCtrlSub = this.searchInputControl.valueChanges
      .debounceTime(300)
      .subscribe((newValue) => {
        if (!!newValue) this.onInput(newValue);
        else this.searchSuggestOptions = [];
      });
  }

  ngOnDestroy() {
    this.searchCtrlSub?.unsubscribe();
  }

  onSearchKeyPress(event: any) {
    if (event.keyCode === 13) {
      this.autocompleteTrigger?.closePanel();
      this.search();
    }
  }

  search(): void {
    if (this.searchText.trim()) {
      this.searchService.searchTextChanged.next(this.searchText);
      this.router.navigate(['/search', this.searchText]);
    } else return;
  }

  onInput(text: string): void {
    this.apiHttp
      .get(`/search/tags?q=${text}&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g`)
      .subscribe((res: any) => {
        const result = { ...res };
        this.searchSuggestOptions = result.data.map((item: any) => {
          return item.name;
        });
      });
  }
}
