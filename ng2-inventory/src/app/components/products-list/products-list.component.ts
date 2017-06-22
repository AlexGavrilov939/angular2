import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import ProductModel from 'app/models/ProductModel';

@Component({
  selector: 'products-list',
  styleUrls: ['./products-list.component.css'],
  template: `
  <ul>
    <li *ngFor="let currentItem of productsList">
      <product-row [productItem]="currentItem"
         (click)="clicked(currentItem)"
         [class.selected]="isSelected(currentItem)">
      </product-row>
    </li>
  </ul>`
})
class ProductsListComponent implements OnInit {

  @Input() productsList: Array<ProductModel>;

  currentProduct: ProductModel;
  onProductSelected: EventEmitter<ProductModel>;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(currentProduct: ProductModel): boolean {
    this.currentProduct = currentProduct;
    this.onProductSelected.emit(currentProduct);
    return false;
  }

  isSelected(product: ProductModel): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }



  ngOnInit() {
  }

}

export default ProductsListComponent;
