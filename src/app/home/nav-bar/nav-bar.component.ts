import { Component, OnInit } from '@angular/core';
import { IonRow, IonCol, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports:[IonRow, IonCol, IonIcon]
})
export class NavBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
