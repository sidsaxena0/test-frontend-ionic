import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-discover-section',
  templateUrl: './discover-section.component.html',
  styleUrls: ['./discover-section.component.scss'],
  standalone: true,

  imports: [
    RouterLink
  ]
})
export class DiscoverSectionComponent   {

  constructor() { }



}
