import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  socialNetwork: string;
  dataToSend: string;

  constructor() {
    this.socialNetwork = 'musician social network';
    this.dataToSend = 'data from server';
  }

  ngOnInit() {
  }

}
