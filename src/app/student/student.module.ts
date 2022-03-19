import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDividerModule} from '@angular/material/divider';
import { MyCommonModule } from '../MyCommon.module';


@NgModule({
  declarations: [
    StudentComponent,
    // NavBarComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatCardModule, MatIconModule, MatButtonModule, MatAutocompleteModule, MatDividerModule,
    MyCommonModule,

  ],

})
export class StudentModule { }
