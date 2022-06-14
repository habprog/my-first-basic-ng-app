import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreateStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  username = '';
  servers = ['Server system', 'Server system 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onServerCreate(){
    this.serverCreated = this.serverName != '';
    this.servers.push(this.serverName);
    this.serverCreateStatus = 'Server created! Name is ' + this.serverName;
  }

  OnClearUsername(){
    this.username = '';
    focus();
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
