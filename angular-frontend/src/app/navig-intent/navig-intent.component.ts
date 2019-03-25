import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navig-intent',
  templateUrl: './navig-intent.component.html',
  styleUrls: ['./navig-intent.component.css']
})
export class NavigIntentComponent implements OnInit {

  constructor(private router:Router) { }


  ngOnInit() {
    this.router.navigate(['/displayIntent'])
  }

}
