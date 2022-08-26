import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, onSnapshot, setDoc, Timestamp, GeoPoint } from '@angular/fire/firestore';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { uploadBytes } from '@firebase/storage';
import { values } from 'cypress/types/lodash';

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
      status: new FormControl(1),
      timings: new FormArray([])
    }
  ); 

  phataksList: any[] = [];
  tempImage: any = null;

  constructor(
    private firestore: Firestore,
    private storage: Storage
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

  getTimingsArrayFromPhatakForm() {
    return this.phatakForm.get('timings') as FormArray;
  }

  addTimingDetailsToArray() {
    this.getTimingsArrayFromPhatakForm().push(new FormGroup({
      time: new FormControl(null),
      trafficStatus: new FormControl(''),
      train: new FormControl('')
    }))
  }

  removeTimingDetailsToArray(idx: number) {
    this.getTimingsArrayFromPhatakForm().removeAt(idx);
  }

  selectImage(event) {
    console.log(">>> Files: ", event.target.files);
    this.tempImage = event.target.files[0]
  }

  // Create Operation
  async addPhatakToFirebase(){
    console.log("Function Add Executed");
    let value: any = {...this.phatakForm.value};
    
    // addDoc(collection(this.firestore, "phataks"), value)
    let phatakInfo = {
      phatakId: value?.phatakId?.length === 0 ? doc(collection(this.firestore, "phataks")).id : value.phatakId,
      location: [value.latitude, value.longitude],
      phatakName: value.phatakname,
      inchargeName: value.inchargename,
      inchargePhone: value.inchargephone,
      status: value.status,
      timings: value.timings.map(e => ({
        trafficStatus: e.trafficStatus,
        train: e.train,
        time: Timestamp.fromDate(new Date(e.time))
      })),
      phatakImage: value.phatakimage
    }

    if(this.tempImage != null) {
      let storageRef = ref(this.storage, "phataks/" + this.tempImage.name)
      await uploadBytes(storageRef, this.tempImage);
      phatakInfo.phatakImage = await getDownloadURL(storageRef);
      alert(phatakInfo.phatakImage);
    }

    let docRef = doc(this.firestore, "phataks/" + phatakInfo.phatakId)
    setDoc(docRef, phatakInfo)
    .then(() => {
      alert("Saved");
      this.getTimingsArrayFromPhatakForm().clear();
      this.phatakForm.reset({});
      this.showForm = !this.showForm;
    }, (error) => {
      console.error(error);
      
    })
  }

  updatePhatak(phatak: any) {
    this.showForm = true;
    let datepipe = new DatePipe('en-US');
    this.phatakForm = new FormGroup({
      phatakname: new FormControl(phatak.phatakName),
      inchargename: new FormControl(phatak.inchargeName),
      inchargephone: new FormControl(phatak.inchargePhone),
      latitude: new FormControl(phatak.location[0]),
      longitude: new FormControl(phatak.location[1]),
      phatakimage: new FormControl(phatak.phatakImage),
      phatakId: new FormControl(phatak.phatakId),
      status: new FormControl(phatak.status),
      timings: new FormArray(phatak.timings.length === 0 ? [] : phatak.timings.map(element => new FormGroup({
        time: new FormControl(datepipe.transform(element.time.toDate(), 'yyyy-MM-dd HH:mm')),
        trafficStatus: new FormControl(element.trafficStatus),
        train: new FormControl(element.train)
      })))
    });


    // this.phatakForm.patchValue({
    //   phatakname: phatak.phatakName,
    //   inchargename: phatak.inchargeName,
    //   inchargephone: phatak.inchargePhone,
    //   latitude: phatak.location[0],
    //   longitude: phatak.location[1],
    //   phatakimage: phatak.phatakImage,
    //   phatakId: phatak.phatakId,
    //   status: phatak.status,
    // });

    // phatak.timings.forEach(element => {
    //   // console.log(element);
    //   this.getTimingsArrayFromPhatakForm().push(new FormGroup({
    //     time: new FormControl(datepipe.transform(element.time.toDate(), 'yyyy-MM-dd HH:mm')),
    //     trafficStatus: new FormControl(element.trafficStatus),
    //     train: new FormControl(element.train)
    //   }))
    // });
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
