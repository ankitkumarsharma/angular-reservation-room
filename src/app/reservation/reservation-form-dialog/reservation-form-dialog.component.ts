import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { CONSTANTS } from 'src/app/core/constants/app.constant';
import { ReservationDataModel } from 'src/app/core/models/app.models';
@Component({
  selector: 'app-reservation-form-dialog',
  templateUrl: './reservation-form-dialog.component.html',
  styleUrls: ['./reservation-form-dialog.component.scss']
})
export class ReservationFormDialogComponent implements OnInit {
  reservationForm!:FormGroup;
  roomSize = [
    {label:'Presidential Suite', value:'presidential-suite'},
    {label:'Business Suite', value:'business-suite'},
  ];
  stateList = CONSTANTS.stateList;
  extraList = CONSTANTS.extraList;
  getFirstNameLength(){
    let firstName = this.reservationForm.controls['firstName'].value;
    return firstName.length;
  }
  getLastNameLength(){
    let firstName = this.reservationForm.controls['lastName'].value;
    return firstName.length;
  }
  checked = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTags!: Observable<string[]>;
  selectedTagsArr: string[] = []
  tags: string[] = CONSTANTS.tags;

  @ViewChild('tag') tag!: ElementRef<HTMLInputElement>;

  dialogOptionFromTable!:string;
  itemIndexFromTable!:number;
  constructor(public dialogRef: MatDialogRef<ReservationFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder){
    }
    ngOnInit(): void {
      console.log(this.data)
      this.reservationFormCreate();
      this.filterTags();
      this.dialogOptionFromTable = this.data.option;
      this.itemIndexFromTable = this.data.index;
      if(this.getViewOnly()){
        this.setValueInreservationForm();
        this.reservationForm.controls['tags'].disable();
        this.reservationForm.disable();
      } else if(this.getEditOnly()){
        this.setValueInreservationForm();
      }
    }
    getViewOnly(){
      return this.dialogOptionFromTable === 'view';
    }
    getEditOnly(){
      return this.dialogOptionFromTable === 'edit';
    }
    getCreateOnly(){
      return this.dialogOptionFromTable === 'new';
    }
    get getControls(){
      return this.reservationForm.controls;
    }
    setValueInreservationForm(){
      console.log(this.reservationForm.value)
      let data = this.data.updatedData;
      let objDataForDisplay = this.createDataObject(data);
      console.log(objDataForDisplay);
      let createDataObjectForSetValue = this.createDataObjectForSetValue(data);
      console.log(createDataObjectForSetValue);
      this.reservationForm.setValue(createDataObjectForSetValue);
      this.selectedTagsArr = data.tags;
    }

    createDataObject(data:any){
      let updateObj:any;
      Object.keys(this.reservationForm.value).map((itemParent)=>{
        Object.keys(data).map((itemChild)=>{
          if(itemChild == 'addressLocation'){
            let addressLocation:any;
            Object.keys(data.addressLocation).map((addressLocationChild)=>{
              addressLocation = {...addressLocation, [addressLocationChild]: data.addressLocation[addressLocationChild]};
              updateObj = {...updateObj, addressLocation: addressLocation}
            })
          } else if(itemChild == 'addressStreet'){
            let addressStreet:any;
            Object.keys(data.addressStreet).map((addressStreetChild)=>{
              addressStreet = {...addressStreet, [addressStreetChild]: data.addressStreet[addressStreetChild]};
              updateObj = {...updateObj, addressStreet: addressStreet}
            })
          } else if(itemChild == 'room'){
            let room:any;
            Object.keys(data.room).map((roomChild)=>{
              room = {...room, [roomChild]: data.room[roomChild]};
              updateObj = {...updateObj, room: room}
            })
          } else if(itemChild == 'stay'){
            let stay:any;
            Object.keys(data.stay).map((stayChild)=>{
              stay = {...stay, [stayChild]: data.stay[stayChild]};
              updateObj = {...updateObj, stay: stay}
            })
          } else if(itemParent == itemChild){
            updateObj = {...updateObj,[itemParent]: data[itemParent]}
          }
        })
      });
      return updateObj;
    }
    createDataObjectForSetValue(data:any){
      let updateObj:any;
      Object.keys(this.reservationForm.value).map((itemParent)=>{
        Object.keys(data).map((itemChild)=>{
          if(itemChild == 'addressLocation'){
            Object.keys(data.addressLocation).map((addressLocationChild)=>{
              updateObj = {...updateObj, [addressLocationChild]: data.addressLocation[addressLocationChild]}
            })
          } else if(itemChild == 'addressStreet'){
            Object.keys(data.addressStreet).map((addressStreetChild)=>{
              updateObj = {...updateObj, [addressStreetChild]: data.addressStreet[addressStreetChild]}
            })
          } else if(itemChild == 'room'){
            Object.keys(data.room).map((roomChild)=>{
              updateObj = {...updateObj, [roomChild]: data.room[roomChild]}
            })
          } else if(itemChild == 'stay'){
            Object.keys(data.stay).map((stayChild)=>{
              updateObj = {...updateObj, [stayChild]: data.stay[stayChild]}
            })
          } else if(itemParent == itemChild){
            updateObj = {...updateObj,[itemParent]: data[itemParent]}
          }
        })
      });
      return updateObj;
    }

    reservationFormCreate(){
      this.reservationForm = this._fb.group({
        arrivalDate:['', Validators.required],
        departureDate:['', Validators.required],
        roomSize:['', Validators.required],
        roomQuantity:['', [Validators.required, Validators.max(5)]],
        firstName:['', [Validators.required, Validators.maxLength(25)]],
        lastName:['',[Validators.maxLength(25)]],
        email:['', [Validators.required,Validators.email]],
        phone:['', [Validators.required, Validators.pattern(CONSTANTS.phoneNoRegx)]],
        streetName:['', Validators.required],
        streetNumber:[''],
        zipCode:['', Validators.required],
        state:['', Validators.required],
        city:['', Validators.required],
        extras:[''],
        payment:[''],
        note:[''],
        tags:['' ],
        reminder:[''],
        newsletter:[''],
        confirm:[''],
      })
    }
    onSubmit(){
      if(this.reservationForm.valid){
        let data = {
          data: this.reservationForm.value,
          index: this.itemIndexFromTable
        }
        this.dialogRef.close(data);
      } else {
        this.reservationForm.markAllAsTouched()
      }
    }

    filterTags(){
      this.filteredTags = this.reservationForm.controls['tags'].valueChanges.pipe(
        startWith(null),
        map((tag: string | null) => (tag ? this._filterTags(tag) : this.tags.slice())),
      );
    }
    addTag(event: MatChipInputEvent): void {
      const value = (event.value || '').trim();
      if (value) {
        this.selectedTagsArr.push(value);
      }
      event.chipInput!.clear();
      this.reservationForm.controls['tags'].setValue(null);
    }

    removeTag(tag: string): void {
      const index = this.selectedTagsArr.indexOf(tag);

      if (index >= 0) {
        this.selectedTagsArr.splice(index, 1);
      }
    }

    selectedTags(event: MatAutocompleteSelectedEvent): void {
      this.selectedTagsArr.push(event.option.viewValue);
      this.tag.nativeElement.value = '';
      this.reservationForm.controls['tags'].setValue(null);
    }

    private _filterTags(value: string): string[] {
      if(typeof value != 'string') return [];
      const filterValue = value.toLowerCase();

      return this.tags.filter(tag => tag.toLowerCase().includes(filterValue));
    }

    getRequiredError(value:string){
      return `${value} is required!`
    }

}
