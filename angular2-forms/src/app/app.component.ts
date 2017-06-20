import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  formControl: FormControl;

  constructor() {
    let nameControl = new FormControl("Nate");
    let name = nameControl.value;
    console.log('NAME:', nameControl.errors);

    let personInfo = new FormGroup({
      firstName: new FormControl("Nate"),
      lastName: new FormControl("Murray"),
      zip: new FormControl("90210")
    })
  }


}
