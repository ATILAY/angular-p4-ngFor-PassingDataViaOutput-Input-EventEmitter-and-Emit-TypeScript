import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverNameNgModel = '';
  serverCreationStatusNgModel = 'No server was created!';
  allowNewServerNgmodel = false;

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer =  !this.allowNewServer;
      this.allowNewServerNgmodel = !this.allowNewServerNgmodel;
      
    }, 3000);
    
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName( event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onCreateServerNgModel(){
    this.serverCreationStatusNgModel = 'Server was created!'+` `+this.serverNameNgModel;
  }
  onUpdateServerNameNgModel( event: Event){
     this.serverNameNgModel = (<HTMLInputElement>event.target).value;



  }

}
