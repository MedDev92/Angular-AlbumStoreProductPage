import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Album } from './album';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  constructor(private _http: HttpClient) {}

  getAlbum (id: number) : Observable<Album>{
    return this._http.get(this._albumUrl)
      ;
  }
}
