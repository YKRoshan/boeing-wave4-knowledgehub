import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TokenService } from './service/token.service';
import { AuthService } from './service/auth.service';
import {SearchinfoService } from './service/searchinfo.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SearchbuttonComponent } from './searchbutton/searchbutton.component';
import { FileDropModule } from 'ngx-file-drop';

// MDB Angular Free
import { WavesModule, ButtonsModule, IconsModule, MDBBootstrapModule } from 'angular-bootstrap-md'

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  
} from '@angular/material';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './service/upload.service';
import { HeaderComponent } from './header/header.component';
import { SearchcardComponent } from './searchcard/searchcard.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { RouterModule } from '@angular/router';
import { DataService } from './domain/data-service';
import { ChatComponent } from './chat/chat.component';
import { IdGeneratorComponent } from './id-generator/id-generator.component';
import { SessionId } from './domain/sessionId';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    SearchbuttonComponent,
    UploadComponent,
    HeaderComponent,
    SearchcardComponent,
    PaginatorComponent,
    ChatComponent,
    IdGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule,
    MatButtonModule,
    FileDropModule,
    IconsModule,
    ButtonsModule,
    WavesModule,
    MDBBootstrapModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path : 'searchinfo', component: SearchcardComponent}
    ])
  ],
  providers: [TokenService,SearchinfoService,
              AuthService,UploadService,DataService,SessionId],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
  entryComponents: [ChatComponent]

})
export class AppModule { }


