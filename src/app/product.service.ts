import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Album} from './album';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  constructor(private _http: HttpClient) {}

  getAlbum (id: number) : Observable<Album> {
    return this.getAlbum(1).map((response.json -> this._albumUrl)){
      
    }
  }
}
