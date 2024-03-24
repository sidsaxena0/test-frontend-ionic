import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {DiscoverSectionComponent} from "../../components/discover-section/discover-section.component";
import {HowItWorksComponent} from "../../components/how-it-works/how-it-works.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, DiscoverSectionComponent, HowItWorksComponent],
})
export class HomePage {
  constructor() {}
}
