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

  public fdatumNarodeniaChanged($event) {
    this.zviera.datumNarodenia = [
      1 * $event.substring(6),
      1 * $event.substring(3, 5),
      1 * $event.substring(0, 2)
    ];
  }

  public fdatumNadobudnutiaChanged($event) {
    this.zviera.datumNadobudnutia = [
      1 * $event.substring(6),
      1 * $event.substring(3, 5),
      1 * $event.substring(0, 2)
    ];
  }

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

  odoslatZviera() {
    this.eventEmiter.emit(this.zviera);
    $('#zvieraEditModal').modal('hide');
  }
}