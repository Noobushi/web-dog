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
  initiativeStats: number[] = [1, 2, 3, 4, 5, 6];
  charismaStats: number[] = [1, 2, 3, 4, 5, 6];
  defenceStats: number[] = [1, 2, 3, 4, 5, 6];
  activeSizeChip!: string;
  activeColorChip!: string;
  activeWeightChip!: string;
  petImage: string = "assets/pictures/pet-images/questionMark.jpg";

  selectNextTab(index: number) {
    this.tabSelected.emit(index);
  }

  performSizeAction(chipName: string) {
    if (chipName === "big") {
      this.starClassApplier(3, "angerStarId");
      this.starClassApplier(6, "initiativeStarId");
      this.petImage = "assets/pictures/pet-images/bigDogBody.jpg";
    } else if (chipName === "small") {
      this.petImage = "assets/pictures/pet-images/smallDogBody.webp";
      this.starClassApplier(6, "angerStarId");
      this.starClassApplier(2, "initiativeStarId");
    }
    this.activeSizeChip = chipName;
  }

  performColorAction(chipColor: string) {
    if (chipColor === "bright") {
      this.starClassApplier(2, "stealthStarId")
      this.starClassApplier(5, "charismaStarId")
    } else if (chipColor === "dark") {
      this.starClassApplier(5, "stealthStarId")
      this.starClassApplier(2, "charismaStarId")
    }
    this.activeColorChip = chipColor;
  }

  performWeightAction(chipWeight: string) {
    if (chipWeight === "heavy") {
      this.starClassApplier(2, "weightStarId")
      this.starClassApplier(6, "defenceStarId")
    } else if (chipWeight === "light") {
      this.starClassApplier(6, "weightStarId")
      this.starClassApplier(2, "defenceStarId")
    }
    this.activeWeightChip = chipWeight;
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
