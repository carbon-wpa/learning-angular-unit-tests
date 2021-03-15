import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = 'https://604f06e5c20143001744c32d.mockapi.io';

  constructor(private  http: HttpClient) {
  }

  public getProductsList(): Observable<ProductModel[]> {
    return this.http.get<IProducts[]>(`${this.API_URL}/products`)
      .pipe(
        map(res => res.map(item => new ProductModel(item)))
      );
  }
}

export interface IProducts {
  id?: string;
  createdAt?: string;
  name?: string;
  color?: string;
  price?: string;
}

export class ProductModel {
  public id: number;
  public created: moment.Moment;
  public name: string;
  public color: string;
  public price: number;

  constructor(input: IProducts) {
    this.id = +input?.id;
    this.created = input?.createdAt ? moment(input.createdAt) : null;
    this.name = input?.name;
    this.price = +input?.price;
  }

}
