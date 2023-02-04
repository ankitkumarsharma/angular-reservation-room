import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { ReservationDataModel } from 'src/app/core/models/app.models';
import { ApiService } from 'src/app/core/services/api.service';
import { ReservationFormDialogComponent } from '../reservation-form-dialog/reservation-form-dialog.component';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.scss']
})
export class ReservationTableComponent implements OnInit, OnDestroy {
  tooltip = {
    view: 'Click for view more details',
    edit: 'Click for edit records',
    delete: 'Click for Delete'
  }
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone','note','action'];
  @ViewChild(MatTable) table!: MatTable<any>;
  dataSource = new MatTableDataSource();
  private unsubscribe$ = new Subject();
  noData_flag!:boolean;
  constructor(private apiService: ApiService, public dialog: MatDialog){}
  ngOnInit(){
    this.getReservationData();
  }
  getReservationData(){
    this.apiService.getData()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((data)=>{
      this.dataSource.data = data;
      this.noData();
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  noData(){
    if(this.dataSource.data){
      this.noData_flag = true;
    } else {
      this.noData_flag = false;
    }
  }
  openFormDialog(data:any, option:string,index?:number){
    let updatedData = {
      updatedData: data,
      option: option,
      index: index
    }
    let autoFocus = option === 'view' ? false : true
    const dialogRef = this.dialog.open(ReservationFormDialogComponent,{
      data: updatedData,
      width: '100%',
      autoFocus: autoFocus
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(typeof result.index == 'number'){
          this.dataSource.data[result.index] = this.setRecordObject(result.data);
          this.table.renderRows();
        } else {
          this.dataSource.data = [...this.dataSource.data, this.setRecordObject(result.data)];
          this.noData();
        }
      }
    });
  }
  deleteRecord(index:number){
    this.dataSource.data.splice(index,1);
    this.table.renderRows();
    if(this.dataSource.data.length === 0){
      this.noData_flag = false;
    } else {
      this.noData_flag = true;
    }
  }
  setRecordObject(result:any){
    let item:ReservationDataModel = {
      stay: {
        arrivalDate: result.arrivalDate,
        departureDate: result.departureDate
      },
      room: {
        roomSize: result.roomSize,
        roomQuantity: result.roomQuantity
      },
      firstName: result.firstName,
      lastName: result.lastName,
      email: result.email,
      phone: result.phone,
      addressStreet: {
        streetName: result.streetName,
        streetNumber: result.streetNumber
      },
      addressLocation: {
        zipCode: result.zipCode,
        state: result.state,
        city: result.city
      },
      extras: result.extras,
      payment: result.payment,
      note: result.note,
      tags: result.tags,
      reminder: result.reminder,
      newsletter: result.newsletter,
      confirm: result.confirm
    }
    return item;
  }
  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
