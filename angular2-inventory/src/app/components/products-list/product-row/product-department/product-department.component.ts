import { Component, OnInit, Input } from '@angular/core';
import ProductModel from 'app/models/ProductModel';

@Component({
  selector: 'product-department',
  styleUrls: ['./product-department.component.css'],
  template: `
    <div class="product-department">
      <span *ngFor="let name of product.department; let i=index">
        <a href="#">{{ name }}</a>
        <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
      </span>
    </div>
  `
})
class ProductDepartmentComponent implements OnInit {

  @Input() product: ProductModel;

  constructor() { }

  ngOnInit() {
  }

}

export default ProductDepartmentComponent;
