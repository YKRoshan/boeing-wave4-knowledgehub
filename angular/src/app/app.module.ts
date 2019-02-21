import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TokenService } from './service/token.service';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadService } from './upload.service';
import { FileDropModule } from 'ngx-file-drop';
import { LoginbuttonComponent } from './loginbutton/loginbutton.component';
import { SearchbuttonComponent } from './searchbutton/searchbutton.component';
import { FooterComponent } from './footer/footer.component';
import {MaterialModule} from './material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UploaderComponent,
    LoginbuttonComponent,
    SearchbuttonComponent,
    FooterComponent
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
    // FileDropModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule
  ],
  providers: [TokenService,
              AuthService,
              UploadService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }


