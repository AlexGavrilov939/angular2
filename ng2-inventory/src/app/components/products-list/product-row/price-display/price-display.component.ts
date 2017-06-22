import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  styleUrls: ['./price-display.component.css'],
  template: `
    <div class="price-display">\${{ price }}</div>
  `
})
class PriceDisplayComponent implements OnInit {

  @Input() price: number;

  constructor() {
    console.log('=THIS_PRICE:', this.price);
  }

  ngOnInit() {
  }

}

export default PriceDisplayComponent;