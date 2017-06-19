import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import ProductModel from 'app/models/ProductModel';
import CounterModel from 'app/models/CounterModel';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  host: {'class': 'item'}
})
class ProductRowComponent implements OnInit {

  @Input() productItem: ProductModel;

  counter: CounterModel;

  constructor() {
    this.counter = new CounterModel(true);
  }

  increase(): boolean {
    this.counter.increase();
    return false;
  }

  decrease(): boolean {
    this.counter.decrease();
    return false;
  }

  ngOnInit() {
  }

}

export default ProductRowComponent;
