import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRange,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

import { personCircle, personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';
import { LoadingComponent } from './loading/loading.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoryComponent } from './category/category.component';
import { ReservedComponent } from './reserved/reserved.component';
import { CatalogueComponent } from './catalogue/catalogue.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    FormsModule,
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonRange,
    IonText,
    IonTitle,
    IonToggle,
    IonToolbar,LoadingComponent, CommonModule, NavBarComponent, CategoryComponent, ReservedComponent, CatalogueComponent],
})
export class HomePage  implements OnInit {
  paletteToggle = false;
  loading = true;

  constructor(private renderer: Renderer2) {
    
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ personCircle, personCircleOutline, sunny, sunnyOutline });
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false
    }, 2000);
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initialize the dark palette based on the initial
    // value of the prefers-color-scheme media query
    // this.initializeDarkPalette(prefersDark.matches);
    this.toggleDarkPalette(false)

    // Listen for changes to the prefers-color-scheme media query
    // prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));
    
  // Elimina la clase 'dark' del documento
  document.documentElement.classList.remove('dark');

  // Fuerza el modo claro en el localStorage
  localStorage.setItem('darkMode', 'false');

  this.renderer.addClass(document.body, 'home-background');
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(event: CustomEvent) {
    console.log('lo que se debe de mandar', event.detail.checked);
    
    this.toggleDarkPalette(event.detail.checked);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }
}