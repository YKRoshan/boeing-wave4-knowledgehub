import { Component, OnInit } from '@angular/core';
import { SessionId } from '../domain/sessionId';

@Component({
  selector: 'app-toptrending',
  templateUrl: './toptrending.component.html',
  styleUrls: ['./toptrending.component.scss']
})
export class ToptrendingComponent implements OnInit {
  object5:any;
  constructor(private result : SessionId) { }

  ngOnInit() {
    this.object5 = this.result.searchfreq;
  }

}
