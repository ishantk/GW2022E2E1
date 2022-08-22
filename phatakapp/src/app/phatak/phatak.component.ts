import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phatak',
  templateUrl: './phatak.component.html',
  styleUrls: ['./phatak.component.css']
})
export class PhatakComponent implements OnInit {

  showForm = true;

  phatakForm = new FormGroup(
    {
      phatakname: new FormControl(''),
      inchargename: new FormControl(''),
      inchargephone: new FormControl(''),
      latitude: new FormControl(''),
      longitude: new FormControl(''),
      phatakimage: new FormControl('')
    }
  ); 

  constructor() { }

  ngOnInit(): void {
  }

  addPhatakToFirebase(){
    console.log("Function Add Executed");
    console.log(this.phatakForm.value);
    
  }

}
