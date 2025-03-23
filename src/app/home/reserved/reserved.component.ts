import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonRow, IonCol, IonIcon, IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.scss'],
  imports:[
    IonRow,IonCol,IonIcon, IonCard, CommonModule
  ]
})
export class ReservedComponent  implements OnInit {
  listReserved: number[] = [1,1,1,1,1];
  constructor() { }

  ngOnInit() {}

}
