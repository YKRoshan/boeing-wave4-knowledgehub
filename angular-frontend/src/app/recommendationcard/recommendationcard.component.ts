import { Component, OnInit } from '@angular/core';
import { SessionId } from '../domain/sessionId';
import $ from 'jquery'

@Component({
  selector: 'app-recommendationcard',
  templateUrl: './recommendationcard.component.html',
  styleUrls: ['./recommendationcard.component.scss']
})
export class RecommendationcardComponent implements OnInit {

  object3:any;

  constructor(private result : SessionId) { }

  ngOnInit() {
    $.fn.commentCards = function(){

      return this.each(function(){
    
        var $this = $(this),
            $cards = $this.find('.card'),
            $current = $cards.filter('.card--current'),
            $next;
    
        $cards.on('click',function(){
          if ( !$current.is(this) ) {
            $cards.removeClass('card--current card--out card--next');
            $current.addClass('card--out');
            $current = $(this).addClass('card--current');
            $next = $current.next();
            $next = $next.length ? $next : $cards.first();
            $next.addClass('card--next');
          }
        });
    
        if ( !$current.length ) {
          $current = $cards.last();
          $cards.first().trigger('click');
        }
    
        $this.addClass('cards--active');
    
      })
    
    };
    
    $('.cards').commentCards();
    this.object3 = this.result.recommendation;
  }

}
