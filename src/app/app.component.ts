import { Component, OnChanges } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Farma';

  /*
  typEntity: string;

  setTypEntity(typEntity: string) {
    this.typEntity = typEntity;
  }*/


  PrivateMessage() {
    $('[ng-click]').click(function () {
      // Ensure all tabs are closed
      $('.tab-pane').removeClass('active');
      // Read the attribute of the tab you want to open and set it as active
      $('#' + $(this).data('tab')).addClass('active');
});
  }
}


