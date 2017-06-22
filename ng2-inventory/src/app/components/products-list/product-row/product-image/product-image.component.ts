import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-image',
  styleUrls: ['./product-image.component.css'],
  host: {class: 'ui small image'},
  template: `
    <img class="product-image" [src]="imageUrl">
  `
})
class ProductImageComponent implements OnInit {

  @Input() imageUrl: string;


  constructor() { }

  ngOnInit() {
  }

}

export default ProductImageComponent;
