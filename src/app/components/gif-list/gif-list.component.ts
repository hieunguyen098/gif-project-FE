import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/services/api-http.service';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css'],
})
export class GifListComponent implements OnInit {
  gifInfo: any;
  gifDataList: any;
  index: number = 0;
  gifDataCol: Array<Array<any>> = [[], [], [], []];
  faAnglesDown = faAnglesDown;
  loading: boolean = false;
  seeMore: boolean = true;

  constructor(
    private apiHttp: ApiHttpService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchService.searchTextChanged.next('');
    this.getGifList();
  }

  getGifList() {
    if (this.index === 0) {
      this.loading = true;
    }
    this.apiHttp
      .get(
        `/trending?offset=${this.index}&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g&pingback_id=184e0b476dc77c23`
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
