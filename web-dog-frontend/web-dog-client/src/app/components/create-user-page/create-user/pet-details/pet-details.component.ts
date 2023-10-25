import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent {

  @Output() tabSelected = new EventEmitter<number>();

  selectNextTab(index: number) {
    this.tabSelected.emit(index);
  }
}
