import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events'; //nodejs lib but we need angular eventemitter

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
   @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber:number = 0;

  constructor() { }

  ngOnInit() {
  }
  onStartGame(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit( this.lastNumber + 1 );
      this.lastNumber++;

    },1000);
  }
  onPauseGame(){
    clearInterval(this.interval);
  }
}
