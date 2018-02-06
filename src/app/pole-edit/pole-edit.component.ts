import { Component, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { Pole } from '../Pole';

declare var $: any;

@Component({
  selector: 'app-pole-edit',
  templateUrl: './pole-edit.component.html',
  styleUrls: ['./pole-edit.component.css']
})
export class PoleEditComponent implements OnChanges {

  @Output() eventEmiter: EventEmitter<Pole> = new EventEmitter<Pole>();

  @Input() public pole: Pole = new Pole(0, "", "", 0, "", "");
  @Input() public actionWithPole: string='add';

  

  constructor() {
    //this.actionWithPole = actionWithPole;
  }

  ngOnChanges() {

  }

  get nazovModalnehoOkna() {
    if (this.actionWithPole == 'add') {
      return "Pridanie pola";
    } else {
      return "Editácia pola";
    }
  }

  get vypisPola() {
    return JSON.stringify(this.pole);
  }


  odoslatPole() {
    this.eventEmiter.emit(this.pole);
    $('#poleEditModal').modal('hide');
    //window.location.reload(true);
  }
}