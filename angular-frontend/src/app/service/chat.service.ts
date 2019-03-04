import { Injectable } from '@angular/core';

// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  constructor(private dialog:MatDialog) {}

  // Sends and receives messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
               .then(res => {
                  const speech = res.result.fulfillment.speech;
                  if (speech=='so you want to search about spring Close this bot and Hold on...')
                  {
                    console.log("inside if of speech");
                    // this.navigate();
                  this.closeDialog();
                  }
                  const botMessage = new Message(speech, 'bot');
                  this.update(botMessage);
               });}

        // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }

  closeDialog(){
    setTimeout(()=>{    
      this.dialog.closeAll();
 }, 3000);   

  }

}
