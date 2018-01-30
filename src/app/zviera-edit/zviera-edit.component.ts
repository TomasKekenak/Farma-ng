import { Component, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { Zviera } from '../Zviera';

declare var $: any;

@Component({
  selector: 'app-zviera-edit',
  templateUrl: './zviera-edit.component.html',
  styleUrls: ['./zviera-edit.component.css']
})
export class ZvieraEditComponent implements OnChanges {

  @Output() eventEmiter: EventEmitter<Zviera> = new EventEmitter<Zviera>();

  @Input() public zviera: Zviera;
  @Input() public actionWithZviera: string = 'add';



  constructor() { }

  ngOnChanges() {

  }

  get nazovModalnehoOkna() {
    if (this.actionWithZviera == 'add') {
      return "Pridanie zvieraťa";
    } else {
      return "Editácia zvieraťa";
    }
  }

  get vypisZvierata() {
    this.zviera.datumNarodenia = "[" + this.zviera.fdatumNarodenia.substring(6) + ","
      + this.zviera.fdatumNarodenia.substring(3, 5) + "," + this.zviera.fdatumNarodenia.substring(0, 2) + "]";
    this.zviera.datumNadobudnutia = "[" + this.zviera.fdatumNadobudnutia.substring(6) + ","
      + this.zviera.fdatumNadobudnutia.substring(3, 5) + "," + this.zviera.fdatumNadobudnutia.substring(0, 2) + "]";
    return JSON.stringify(this.zviera);
  }

  registracneCisloSaMeni(event: any) {
    this.zviera.registracneCislo = event.target.value;
  }

  druhSaMeni(event: any) {
    this.zviera.druh = event.target.value;
  }

  plemenoSaMeni(event: any) {
    this.zviera.plemeno = event.target.value;
  }

  pohlavieSaMeni(event: any) {
    this.zviera.pohlavie = event.target.value;
  }

  kupnaCenaSaMeni(event: any) {
    this.zviera.kupnaCena = event.target.value;
  }

  datumNarodeniaSaMeni(event: any) {
    this.zviera.fdatumNarodenia = event.target.value;
    this.zviera.datumNarodenia = "[" + this.zviera.fdatumNarodenia.substring(6) + ","
      + this.zviera.fdatumNarodenia.substring(3, 5) + "," + this.zviera.fdatumNarodenia.substring(0, 2) + "]";
  }

  datumNadobudnutiaSaMeni(event: any) {
    this.zviera.fdatumNadobudnutia = event.target.value;
    this.zviera.datumNadobudnutia = "[" + this.zviera.fdatumNadobudnutia.substring(6) + ","
      + this.zviera.fdatumNadobudnutia.substring(3, 5) + "," + this.zviera.fdatumNadobudnutia.substring(0, 2) + "]";
  }

  odoslatZviera() {
    this.eventEmiter.emit(this.zviera);
    $('#zvieraPoleModal').modal('hide');
    window.location.reload(true);
  }
}