import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule],
})

export class MaterialModule{}