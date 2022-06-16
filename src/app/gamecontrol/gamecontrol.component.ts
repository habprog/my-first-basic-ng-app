import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() interFired:EventEmitter<number> = new EventEmitter();
  interval:number = 0;
  lastNumber:number = 0;
  isGameStart = false;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.isGameStart = true;
    this.interval = setInterval(()=>{
      this.interFired.emit(this.lastNumber +=1);
    }, 1000);
  }

  onPauseGame(){
    this.isGameStart = false;
    clearInterval(this.interval);
  }
}
