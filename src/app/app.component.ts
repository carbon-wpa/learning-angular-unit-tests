import { Component } from '@angular/core';
import { ProductModel, ProductsService } from './services/products.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public value: number;
  public data: ProductModel[];
  public isChecked = false;

  constructor(public productsService: ProductsService) {
  }

  public getProducts(): void {
    this.productsService.getProductsList()
      .pipe(
        take(1)
      )
      .subscribe(data => this.data = data);
  }

  public changeBackground(): void {
    this.isChecked = !this.isChecked;
  }


}
