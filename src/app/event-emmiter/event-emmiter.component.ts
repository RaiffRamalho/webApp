import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-emmiter',
  templateUrl: './event-emmiter.component.html',
  styleUrls: ['./event-emmiter.component.css']
})
export class EventEmmiterComponent implements OnInit {

  constructor() { }

  @Input() valor = 0;

  @Output() changedValue = new EventEmitter();

  decrement() {
    this.valor--;
    this.changedValue.emit({novoValor: this.valor});
  }

  increment() {
    this.valor++;
    this.changedValue.emit({novoValor: this.valor});

  }

  ngOnInit() {
  }

}
