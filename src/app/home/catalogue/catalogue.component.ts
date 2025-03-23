import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonRow, IonCol, IonIcon,IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
  imports:[CommonModule,
    IonRow,IonCol,IonIcon,IonCard]
})
export class CatalogueComponent  implements OnInit {
listaCatalogue:number[] = [1,1,1,1,1,1,1];
  constructor() { }

  ngOnInit() {}

}
