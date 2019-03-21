import { Component, OnInit } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import $ from 'jquery';
import { SessionId } from '../domain/sessionId';

@Component({
  selector: 'app-id-generator',
  templateUrl: './id-generator.component.html',
  styleUrls: ['./id-generator.component.css']
})
export class IdGeneratorComponent{

  public title = 'WebSockets chat';
  private stompClient;

  public message : string;

  private  sessionId = this.IDGenerator();

  constructor(private SessionIdNew:SessionId) {
    this.SessionIdNew.SessionId=this.sessionId;
    this.initializeWebSocketConnection();
    console.log(this.SessionIdNew.SessionId);
  }
  initializeWebSocketConnection() {
 
    let id = this.sessionId+"";
    const socket = new SockJS('https://localhost:8097/socket');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.stompClient.subscribe("/topic/public/"+id, (message) => {
        var res = JSON.parse(message.body);
        res.forEach(element => {
          _this.show(element);
        });
      });
    });
  }
  show(name){
    this.SessionIdNew.greetings.push(name);
  }

IDGenerator() {
  length=16;

  // Random number from 0 to length
  const randomNumber = (length) => {
    return Math.floor(Math.random() * length)
  }
  
  // Generate Pseudo Random String, if safety is important use dedicated crypto/math library for less possible collisions!
  const generateID = (length) => {
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";
    
    for (let i = 0; i < length; i++) {
      text += possible.charAt(randomNumber(possible.length));
    }
    
    return text;
  }
  return generateID(16);
    }
 

  

  
  

}

