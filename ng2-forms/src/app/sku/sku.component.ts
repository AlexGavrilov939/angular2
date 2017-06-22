import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.css']
})
export class SkuComponent implements OnInit {

  sku: string;
  constructor() { }

  onSubmit(value) {
    console.log('=VALUE:', value);
    console.log('=SKU:', this.sku);
    return false;
  }

  ngOnInit() {
  }

}
