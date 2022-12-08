import { Component, Input, OnInit } from '@angular/core';
import {
  faAnglesDown,
  faAnglesUp,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css'],
})
export class GifComponent implements OnInit {
  @Input() item: any;

  faAnglesDown = faAnglesDown;
  faAnglesUp = faAnglesUp;
  faCircleCheck = faCircleCheck;

  loading: boolean = true;

  openExpand: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onLoad() {
    this.loading = false;
  }

  toggleExpand() {
    this.openExpand = !this.openExpand;
  }

  onError() {}
}
