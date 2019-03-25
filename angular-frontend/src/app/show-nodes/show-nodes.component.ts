import { Component, OnInit } from '@angular/core';
import {WOW} from 'wowjs/dist/wow.min'


@Component({
  selector: 'app-show-nodes',
  templateUrl: './show-nodes.component.html',
  styleUrls: ['./show-nodes.component.css','../../assets/conceptsLib/font-awesome/css/font-awesome.min.css',
  '../../assets/conceptsLib/animate/animate.min.css','../../assets/conceptsLib/ionicons/css/ionicons.min.css',
  '../../assets/conceptsLib/owlcarousel/assets/owl.carousel.min.css','../../assets/conceptsLib/magnific-popup/magnific-popup.css',
'../../assets/conceptsLib/ionicons/css/ionicons.min.css','../../assets/conceptsLib/bootstrap/css/bootstrap.min.css']
})
export class ShowNodesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new WOW().init();

  }

}
