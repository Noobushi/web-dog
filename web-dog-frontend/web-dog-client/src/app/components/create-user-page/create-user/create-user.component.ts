import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  selectedIndex: number = 0;

  constructor() { }

  selectTab(index: number) {
    this.selectedIndex = index;
  }

  onTabChange(event: MatTabChangeEvent): void {
    this.selectedIndex = event.index;
  }


}
