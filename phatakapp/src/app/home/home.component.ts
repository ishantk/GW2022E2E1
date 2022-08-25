import { Component, OnInit } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, onSnapshot, setDoc } from '@angular/fire/firestore';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showForm: boolean = false;
  phatakForm = new FormGroup(
    {
      phatakname: new FormControl(''),
      inchargename: new FormControl(''),
      inchargephone: new FormControl(''),
      latitude: new FormControl(''),
      longitude: new FormControl(''),
      phatakimage: new FormControl(''),
      phatakId: new FormControl(''),
    }
  ); 

  phataksList: any[] = [];

  constructor(
    private firestore: Firestore
  ) { }

  ngOnInit(): void {
    //Read Operation
    let collectionRef = collection(this.firestore, "phataks");
    onSnapshot(collectionRef, (value) => {
      this.phataksList = value.docs.map(e => ({ id: e.id, ...e.data() }));
    }, (error) => {
      console.log(error);
      
    })
    // getDocs(collectionRef).then((value) => {
    //   // console.log();
    //   this.phataksList = value.docs.map(e => ({ id: e.id, ...e.data() }));
    // })
  }

  // Create Operation
  addPhatakToFirebase(){
    console.log("Function Add Executed");
    console.log(this.phatakForm.value);
    let value = {...this.phatakForm.value};
    
    // addDoc(collection(this.firestore, "phataks"), value)
    
    value['phatakId'] = value?.phatakId.length === 0 ? doc(collection(this.firestore, "phataks")).id : value.phatakId;
    let docRef = doc(this.firestore, "phataks/" + value.phatakId)
    setDoc(docRef, value)
    .then(() => {
      console.log("Saved");
      this.phatakForm.reset();
      this.showForm = !this.showForm;
    }, (error) => {
      console.error(error);
      
    })

    console.log(value);
    
  }

  updatePhatak(phatak: any) {
    this.showForm = true;
    this.phatakForm.setValue({
      phatakname: phatak.phatakname,
      inchargename: phatak.inchargename,
      inchargephone: phatak.inchargephone,
      latitude: phatak.latitude,
      longitude: phatak.longitude,
      phatakimage: phatak.phatakimage,
      phatakId: phatak.phatakId
    });

    console.log(">>> Phatak Obj: ", phatak);
    console.log(">>> Phatak Form: ", this.phatakForm.value);
    
  }

  deletePhatak(phatakId: string) {
    let docRef = doc(this.firestore, "phataks/" + phatakId);
    deleteDoc(docRef).then(() => {
      console.log("Delete Successfully");
    })
    .catch((error) => {
      console.log(error);
    })
  }

}
