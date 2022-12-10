import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  members = ['Siwy', 'Endrju', 'Omen', 'Enespo'];
  rendermembers(){
     this.members.forEach((member => {
      let memberString:string = member
     memberString.forEach(element => {
      console.log(element)
     });
     });

  }
 
}
