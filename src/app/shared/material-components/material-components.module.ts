import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

const componentsArray = [
  MatFormFieldModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatInputModule,
  MatIconModule,
  MatTooltipModule,
  MatDialogModule,
  MatGridListModule,
  MatButtonModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatCheckboxModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...componentsArray
  ],
  exports: [...componentsArray]
})
export class MaterialComponentsModule { }
