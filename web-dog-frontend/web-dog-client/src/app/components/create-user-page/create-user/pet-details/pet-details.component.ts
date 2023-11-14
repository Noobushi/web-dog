import { Component, EventEmitter, Output } from '@angular/core';
import PetChipConstants from 'src/app/constants/pet-chip-conastants';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent {

  @Output() tabSelected = new EventEmitter<number>();
  chipSizeList: string[] = PetChipConstants.chipSizeList;
  chipColorList: string[] = PetChipConstants.chipColorList;
  angerStats: number[] = [1, 2, 3, 4, 5, 6];
  activeChip!: string;

  selectNextTab(index: number) {
    this.tabSelected.emit(index);
  }

  performSizeAction(chipName: string) {
    if (chipName === "big") {
      this.starClassApplier(3);
    } else if (chipName === "small") {
      this.starClassApplier(6);
    }
    this.activeChip = chipName;
  }

  performColorAction(chipColor: string) {
    if (chipColor === "white") {
    } else if (chipColor === "black") {
    }
    this.activeChip = chipColor;
  }

  starClassApplier(value: number) {
    let starId = "";
    for (let i = 6 - 1; i >= 0; i--) {
      starId = "starId" + i;
      document.getElementById(starId)?.classList.remove("selected");
    }
    for (let i = 0; i < value; i++) {
      starId = "starId" + i;
      document.getElementById(starId)?.classList.add("selected");
    }
  }
}
