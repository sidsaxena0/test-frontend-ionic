import { Component, OnInit } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
  standalone: true,

  imports: [
    RouterLink
  ]
})
export class HowItWorksComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
