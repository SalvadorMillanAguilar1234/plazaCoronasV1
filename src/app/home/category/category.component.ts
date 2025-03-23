import { Component, OnInit } from '@angular/core';
import { IonRow, IonCol, IonIcon } from '@ionic/angular/standalone';
interface ICategory{
  name: string, title: string
}
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports:[
    IonRow,IonCol,IonIcon
  ]
})
export class CategoryComponent  implements OnInit {
  listCategory:ICategory[] = [{
    name:'',
    title:''
  }];
  constructor() {
   }

  ngOnInit() {
    console.log(this.listCategory);
    
  }

}
