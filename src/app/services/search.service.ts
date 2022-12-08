import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchTextChanged = new Subject<string>();

  constructor() {}
}
