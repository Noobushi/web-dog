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
  chipWeightList: string[] = PetChipConstants.chipWeightList;
  angerStats: number[] = [1, 2, 3, 4, 5, 6];
  stealthStats: number[] = [1, 2, 3, 4, 5, 6];
  weightStats: number[] = [1, 2, 3, 4, 5, 6];
  activeChip!: string;

  selectNextTab(index: number) {
    this.tabSelected.emit(index);
  }

  performSizeAction(chipName: string) {
    if (chipName === "big") {
      this.starClassApplier(3, "angerStarId");
    } else if (chipName === "small") {
      this.starClassApplier(6, "angerStarId");
    }
    this.activeChip = chipName;
  }

  performColorAction(chipColor: string) {
    if (chipColor === "bright") {
      this.starClassApplier(2, "stealthStarId")
    } else if (chipColor === "dark") {
      this.starClassApplier(5, "stealthStarId")
    }
    this.activeChip = chipColor;
  }

  performWeightAction(chipWeight: string) {
    if (chipWeight === "heavy") {
      this.starClassApplier(2, "weightStarId")
    } else if (chipWeight === "light") {
      this.starClassApplier(6, "weightStarId")
    }
    this.activeChip = chipWeight;
  }

  starClassApplier(value: number, elementName: string) {
    let starId = "";
    for (let i = 6 - 1; i >= 0; i--) {
      starId = elementName + i;
      document.getElementById(starId)?.classList.remove("selected");
    }
    for (let i = 0; i < value; i++) {
      starId = elementName + i;
      document.getElementById(starId)?.classList.add("selected");
    }
  }
}
