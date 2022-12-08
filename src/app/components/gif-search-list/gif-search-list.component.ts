import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/services/api-http.service';
import { SearchService } from 'src/app/services/search.service';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gif-search-list',
  templateUrl: './gif-search-list.component.html',
  styleUrls: ['./gif-search-list.component.css'],
})
export class GifSearchListComponent implements OnInit {
  searchText: string = '';
  gifInfo: any;
  gifDataList: any;
  index: number = 0;
  gifDataCol: Array<Array<any>> = [[], [], [], []];
  faAnglesDown = faAnglesDown;
  loading: boolean = false;
  seeMore: boolean = true;

  constructor(
    private apiHttp: ApiHttpService,
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchText = this.route.snapshot.params['id'];

    this.searchService.searchTextChanged.next(this.searchText);

    this.searchService.searchTextChanged.subscribe((data) => {
      this.searchText = data;
      this.gifDataCol = [[], [], [], []];
      this.index = 0;
      this.getGifList();
    });

    this.getGifList();
  }

  getGifList() {
    if (this.index === 0) {
      this.loading = true;
    }
    this.apiHttp
      .get(
        `/search?offset=${this.index}&type=gifs&sort=&q=${this.searchText}&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g&pingback_id=184e8246270e0f88`
      )
      .subscribe((res) => {
        this.gifInfo = { ...res };
        this.gifDataList = this.gifInfo.data;
        const remainGifs =
          this.gifInfo.pagination.count +
          this.gifInfo.pagination.offset -
          this.gifInfo.pagination.total_count;
        this.seeMore = remainGifs === 0 ? false : true;
        this.loading = false;
        this.divideData(this.gifDataList);
      });
    this.index += 25;
  }

  divideData(arr: Array<any>) {
    arr.map((item, index) => {
      this.gifDataCol[index % 4].push(item);
    });
  }

  trackByFn(index: any, item: any) {
    return item.id;
  }
}
