import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tab = 'home';
  types ;
  inputValue;
  savedValue;
  isMouseOver = false;

  constructor(private homeService: HomeService)  {
    this.types = this.homeService.getMusicianTypes();
  }

  changeTab(tabType) {
    this.tab = tabType;
  }


  buttonClick(event) {
    console.log(event);
  }

  onKeyUp(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  saveValue(value) {
    this.savedValue = value;
  }

  onMouse() {
    this.isMouseOver = !this.isMouseOver;
  }

  onValueChanged(event) {
    console.log(event.novoValor);
  }

  ngOnInit() {
  }

}
