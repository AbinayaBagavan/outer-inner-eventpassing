import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl:'./user.component.html',
  styleUrls: [ './user.component.css' ]
})
export class UserComponent  {
  userDetails:any=[{ id: 1, name: 'Rajesh' },
  { id: 2, name: 'Ritesh' },
  { id: 3, name: 'Snephal' }];

  selectedUser:any;
  @Output() sendRecord:EventEmitter<any> = new EventEmitter();
  SendDetails(data:any) {
    console.log("data sending")
    this.selectedUser=data;
    this.sendRecord.emit(this.selectedUser);
  }

}