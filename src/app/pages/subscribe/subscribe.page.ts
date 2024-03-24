import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SubscribePage implements OnInit {
  selectedOption: string = '';
  selectedChip: string | null = null;

  constructor() {
  }

  ngOnInit() {
  }


  selectOption(option: string): void {
    this.selectedOption = option;
  }


  toggleSelected(chip: string): void {
    this.selectedChip = chip;
  }

  isSelected(chip: string): boolean {
    return this.selectedChip === chip;
  }
}
