import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../config/constants';
@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  apiRoot: string = Constants.API_ENDPOINT;

  constructor(private http: HttpClient) {}
  public get(url: string, options?: any) {
    const apiURL = `${this.apiRoot}${url}`;
    return this.http.get(apiURL, options);
  }

  public post(url: string, data: any, options?: any) {
    const apiURL = `${this.apiRoot}${url}`;
    return this.http.post(apiURL, data, options);
  }

  public put(url: string, data: any, options?: any) {
    const apiURL = `${this.apiRoot}${url}`;
    return this.http.put(apiURL, data, options);
  }

  public delete(url: string, options?: any) {
    const apiURL = `${this.apiRoot}${url}`;
    return this.http.delete(apiURL, options);
  }
}
