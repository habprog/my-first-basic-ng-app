import { Component, OnInit } from '@angular/core';
import {timestamp} from "rxjs/operators";

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css'],
})
export class Practice2Component implements OnInit {
  buttonToggle = true;
  logs: Array<{name: any, logTime: any}> = [];
  constructor() {
  }

  ngOnInit(): void {
  }

  onToggle(){
    this.logs.push({
      name: `button toggled ${this.logs.length + 1}`,
      logTime: new Date()
    });
    this.buttonToggle = !this.buttonToggle;
  }

}
