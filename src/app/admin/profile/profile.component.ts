import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  @Input() data = 'asdads';
  url = 'http://google.com';
  logged = true;
  name: string;
  pessoa: any = {
    name: '',
    age: 0
  };
  constructor() { }

  ngOnInit() {
  }

  getLogged() {
    return this.logged;
  }

}
