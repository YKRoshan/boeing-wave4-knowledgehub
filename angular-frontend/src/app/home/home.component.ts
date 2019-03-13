import { Component, OnInit, ViewChild, Injector, PLATFORM_ID, Inject } from '@angular/core';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { userInfo } from '../domain/login-info';
import { AuthInterceptor } from '../service/auth-interceptor';
import { AuthService } from '../service/auth.service';
import{MatDialog,MatDialogConfig, MatDialogRef} from "@angular/material";
import { LoginComponent } from '../login/login.component';
import { ChatComponent } from '../chat/chat.component';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { SearchinfoService } from '../service/searchinfo.service';
import { DataService } from '../domain/data-service';
import { isPlatformServer } from '@angular/common';
import { SessionId } from '../domain/sessionId';

const configKey = makeStateKey('CONFIG');
declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  Islogged=this.dataService.login;
  user:any;
  info:any;
  add:boolean;
  // show:boolean=false;
  object : any;
  private stompClient;

  public message : string;
  chatComponent: MatDialogRef<ChatComponent>;


  constructor(public token:TokenService,private router:Router,private auth:AuthService,private dialog:MatDialog,
    private injector: Injector,
      private state : TransferState,
      private searchService : SearchinfoService,
      private SessionIdNew:SessionId,
      public dataService:DataService,
      public result : SessionId,
      @Inject(PLATFORM_ID) private platformid: Object,private route:Router) { this.title = 'Voice Search POC';
      //isPlatformServer -Returns whether a platform id represents a server platform.
      if(isPlatformServer(this.platformid)){
        //this.injector.get - Retrieves an instance from the injector based on the provided token.
        //injector get - abstract get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): T
        const envJson = this.injector.get('CONFIG')? this.injector.get('CONFIG'): {};
        //state of TransferState set method- set<T>(key: StateKey<T>, value: T): void
        this.state.set(configKey, envJson as any);}}

  //This method checks for token on when you load the component.
  ngOnInit() {
    // window.sessionStorage.clear();
    if(this.token.getToken()){
       this.user=this.token.getUser();
       this.dataService.login="LogOut"
      //  this.Islogged = "Log Out";
    }
    else{
      // this.Islogged="Login"
      // close();
    }
  }

  openDialog() {
    this.chatComponent = this.dialog.open(ChatComponent,{ disableClose: true});
  }
  // This method is to"Log Out" signout or
  //  naviagte to login component based on whether admin logged in or not.
  logging() {
    if(this.token.getToken()){
       this.token.signout();
      //  window.location.reload();
       this.dataService.login="Login";
    }
    else{
      this.dialog.open(LoginComponent)
     
    }
  }
  reloadPage(){
    window.location.reload();
  }

  // This method is used to navigate to home component. 
  navigate(){
    this.router.navigate(['/home']);
  }

  addfiles(){
    this.add = true;
  }

  open(){
    this.dialog.open(LoginComponent)
  }
  close(){
    this.dialog.closeAll()
  }
  
    public title : string;
    // viewChild- Property decorator that configures a view query
    // The change detector looks for the first element or the directive matching
    // the selector in the view DOM. If the view DOM changes, and a new child 
    // matches the selector, the property is updated.
    @ViewChild('gSearch') formSearch;
    @ViewChild('searchKey') hiddenSearchHandler;
    searchTerm: string;
  
  
  public voiceSearch(){
    //we create the webkitSpeechRecognition object which provides the speech interface,
    // and set some of its attributes and event handlers.
    if('webkitSpeechRecognition' in window){
        const vSearch = new webkitSpeechRecognition();
        vSearch.continuous = false;
        vSearch.interimresults = false;
        vSearch.lang = 'en-US';
        // activate the speech recognizer by .start()
        vSearch.start();
        const voiceSearchForm = this.formSearch.nativeElement;
        const voiceHandler = this.hiddenSearchHandler.nativeElement;
        vSearch.onresult = function(event){
          //storing the result in value
          //returns a string containing the transcript of the recognised word(s).
          voiceHandler.value = event.results[0][0].transcript;
            vSearch.stop();
            //submitting the form with the value
            // voiceSearchForm.submit();
        }
        //if error is encountered, show error in console and stop the speech recognition
        vSearch.onerror = function(event){
            console.log(event);
            vSearch.stop();
        }
    } 
    //if browser does not have webkitspeechrecognition
    else {
      console.log("Your browser does not support voice recognition feature.");
      }
  }
  
  
  google(){
    this.route.navigateByUrl("https://www.google.com/search")
  }
  
  // getdata() {  
  //   this.dataService.dataService = this.searchTerm; 
  //   this.router.navigate(['/cards']);
  // }

  // post(search:string){
  //   var chatMessage = {
  //     sessionId : this.SessionIdNew.SessionId,
  //     searchString : search,
  //    };
  //    console.log(this.SessionIdNew.SessionId);
      
  //   this.searchService.getResults(chatMessage).subscribe((data)=>{
  //     console.log(",mnmnjnk,")
  //   });
  // }
  subscribe(search:string){
    var output = {
      sessionId : this.SessionIdNew.SessionId,
      searchString : search
    };
    this.searchService.postResults(output).subscribe();
    this.dataService.dataService = this.searchTerm; 
    // console.log("home :"+this.result.greetings);
    // console.log("TO searchservice :"+output.sessionId+" "+output.searchString);
    // this.object = this.result.greetings;
    this.result.show = true;
    // this.router.navigate(['/cards'])

  }

}







