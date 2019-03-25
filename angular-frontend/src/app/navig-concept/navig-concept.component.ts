import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navig-concept',
  templateUrl: './navig-concept.component.html',
  styleUrls: ['./navig-concept.component.css']
})
export class NavigConceptComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.navigate(['/display'])
  }

}
