import { Component, OnInit } from '@angular/core';
import { Pole } from '../Pole';
import { Observable } from 'rxjs/Observable';
import { PoliaService } from './polia.service';

declare var $: any;

@Component({
  selector: 'app-polia',
  templateUrl: './polia.component.html',
  styleUrls: ['./polia.component.css']
})
export class PoliaComponent implements OnInit {

  selectedPole: Pole;
  selectedPoleIndex: number;
  public actionWithPole: string;
  public usersJson: string;
  public stavKomunikacie: string;

  polia: Pole[] = [new Pole(6, 'E', '12a', 192, 'vlastnik', 'mrkva'),
  new Pole(6, 'E', '15b', 147, 'najomca', 'ryza')];


  constructor(private poliaService: PoliaService) { }

  ngOnInit() {
    this.updatePolia();
  }

  updatePolia() {
    this.poliaService.getPoliaFromServer().subscribe(polia => {
      this.polia = polia;
      this.usersJson = JSON.stringify(this.polia);
      this.stavKomunikacie = 'ok';
    },
      error => {
        console.log("Nastala chyba: " + JSON.stringify(error));
        this.stavKomunikacie = 'error';
      });
  }




  select(pole) {
    this.selectedPole = pole;
  }

  poleEditEventHandler(pole: Pole) {
    if (this.actionWithPole == "add") {
      this.stavKomunikacie = null;
      this.poliaService.addPole(pole).subscribe(_ => {
        this.stavKomunikacie = 'ok';
      },
        error => {
          console.log("Nastala chyba: " + JSON.stringify(error));
          this.stavKomunikacie = 'error';
        });
    }
    if (this.actionWithPole == "edit") {
      this.stavKomunikacie = null;
      this.poliaService.addPole(pole).subscribe(_ => {
        this.stavKomunikacie = 'ok';
      },
        error => {
          console.log("Nastala chyba: " + JSON.stringify(error));
          this.stavKomunikacie = 'error';
        });
    }
    else {
      this.polia.splice(this.selectedPoleIndex, 1, pole);
    }
  }

  pridajButton() {
    this.selectedPole = new Pole(0, "", "", 0, "", "");
    this.actionWithPole = "add";
  }

  editPoleClick(pole: Pole) {
    this.selectedPole = JSON.parse(JSON.stringify(pole));
    this.actionWithPole = "edit";
    this.selectedPoleIndex = this.polia.indexOf(pole);
    // zobrazí modálne okno
    $('#poleEditModal').modal('toggle');
  }

}
