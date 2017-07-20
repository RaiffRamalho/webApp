import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  userActive = true;
  task = {
    descripition: 'any task',
    responsable: {number: 3333}
  };

  constructor() { }
  ngOnInit() {
  }

  onClickActive() {
    this.userActive = !this.userActive;
  }
}
