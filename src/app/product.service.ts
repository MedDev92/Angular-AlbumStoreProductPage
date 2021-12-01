import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl: string;
  constructor(private _http: HttpClient) {}

  getAlbum (id: number){
    this._http.get(this._albumUrl);
}
}
