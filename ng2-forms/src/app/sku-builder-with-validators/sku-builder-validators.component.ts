import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'form-sku-builder-validators',
  templateUrl: './sku-builder-validators.component.html',
  styleUrls: ['./sku-builder-validators.component.css']
})
export class SkuBuilderValidatorsComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;
  productName: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123', Validators.compose([
          Validators.required, this.skuValidator
      ])], // specify FormControls
      'productName':  ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
    //this.sku.valueChanges.subscribe(
    //    (value: string) => {
    //      console.log('sku changed to:', value);
    //    }
    //);
    //this.myForm.valueChanges.subscribe( (form: any) => {
    //      console.log('form changed to:', form);
    //    }
    //);
    this.myForm.controls['productName'].valueChanges.subscribe(
        (value: string) => {
          this.productName = value;
          console.log('PRODUCT NAME CHANGED!', this.productName);
          // analog for two-way data binding with ngModel
        }
    )
  }

  skuValidator(control: FormControl) {
    if (!control.value.match(/^123/)) {
      return {invalidSku: true}; }
  }

  //function skuValidator(control: FormControl): { [s: string]: boolean } { if (!control.value.match(/^123/)) {
  //return {invalidSku: true}; }
  //}

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}