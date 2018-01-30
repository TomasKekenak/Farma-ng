import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ZvierataService } from './zvierata.service';
import { Zviera } from '../Zviera';

declare var $: any;

@Component({
  selector: 'app-zvierata',
  templateUrl: './zvierata.component.html',
  styleUrls: ['./zvierata.component.css']
})
export class ZvierataComponent implements OnInit {

  selectedZviera: Zviera;
  selectedZvieraIndex: number;
  public actionWithZviera: string;
  public zvierataJson: string;
  public stavKomunikacie: string;
  zvierata: Zviera[];
  //zvierata: Zviera[] = [new Zviera(1, "32a", "krava", "hneda", "z", "1992-09-21", "2000-11-21", 100, ""),
  //new Zviera(2, "321q", "kon", "arabsky", "m", "2000-11-21", "2005-01-21", 0, "")];

  constructor(private zvierataService: ZvierataService) { }

  ngOnInit() {
    this.updateZvierata();
  }



  updateZvierata() {
    this.zvierataService.getZvierataFromServer().subscribe(zvierata => {
      this.zvierata = zvierata;
      this.zvierataJson = JSON.stringify(this.zvierata);
      this.stavKomunikacie = 'ok';
    },
      error => {
        console.log("Nastala chyba: " + JSON.stringify(error));
        this.stavKomunikacie = 'error';
      });
  }




  select(zviera) {
    
    this.selectedZviera = zviera;
  }

  zvieraEditEventHandler(zviera: Zviera) {
    if (this.actionWithZviera == "add") {
      this.stavKomunikacie = null;
      /* zviera.datumNarodenia = zviera.fdatumNarodenia.substring(6) + ","
        + zviera.fdatumNarodenia.substring(3, 5) + "," + zviera.fdatumNarodenia.substring(0, 2);
      zviera.datumNadobudnutia = zviera.fdatumNadobudnutia.substring(6) + ","
        + zviera.fdatumNadobudnutia.substring(3, 5) + "," + zviera.fdatumNadobudnutia.substring(0, 2);*/
        

      this.zvierataService.addZviera(zviera).subscribe(_ => {
        this.stavKomunikacie = 'ok';
      },
        error => {
          console.log("Nastala chyba: " + JSON.stringify(error));
          this.stavKomunikacie = 'error';
        });
    }
    if (this.actionWithZviera == "edit") {
      this.stavKomunikacie = null;
      this.zvierataService.addZviera(zviera).subscribe(_ => {
        this.stavKomunikacie = 'ok';
      },
        error => {
          console.log("Nastala chyba: " + JSON.stringify(error));
          this.stavKomunikacie = 'error';
        });
    }
    else {
      this.zvierata.splice(this.selectedZvieraIndex, 1, zviera);
    }
  }

  pridajButton() {
    this.selectedZviera = new Zviera(0, "", "", "", "", "", "", "", "", 0, "");
    this.actionWithZviera = "add";
  }

  editZvieraClick(zviera: Zviera) {
    this.selectedZviera = JSON.parse(JSON.stringify(zviera));
    this.actionWithZviera = "edit";
    this.selectedZvieraIndex = this.zvierata.indexOf(zviera);
    // zobrazí modálne okno
    $('#zvieraEditModal').modal('toggle');
  }

}
