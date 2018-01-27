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

  typParcelySaMeni(event: any) {
    this.pole.typParcely = event.target.value;
  }

  cisloParcelySaMeni(event: any) {
    this.pole.cisloParcely = event.target.value;
  }

  typPozemkuSaMeni(event: any) {
    this.pole.typPozemku = event.target.value;
  }

  vymeraSaMeni(event: any) {
    this.pole.vymera = event.target.value;
  }

  vlastnictvoSaMeni(event: any) {
    this.pole.vlastnictvo = event.target.value;
  }

  odoslatPole() {
    this.eventEmiter.emit(this.pole);
    $('#userPoleModal').modal('hide');
    window.location.reload(true);
  }
}