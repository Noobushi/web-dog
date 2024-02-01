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
  petImage: string = "assets/pictures/pet-images/questionMark.png";
  isBig!: boolean;
  isBright!: boolean;
  isHeavy!: boolean;
  isSizeChosen: boolean = false;
  isColorChosen: boolean = false;
  isWeightChosen: boolean = false;

  selectNextTab(index: number) {
    this.tabSelected.emit(index);
  }

  performSizeAction(chipName: string) {
    if (chipName === "big") {
      this.starClassApplier(3, "angerStarId");
      this.starClassApplier(6, "initiativeStarId");
      this.petImage = "assets/pictures/pet-images/bigDogBody.png";
      this.isBig = true;
    } else if (chipName === "small") {
      this.starClassApplier(6, "angerStarId");
      this.starClassApplier(2, "initiativeStarId");
      this.petImage = "assets/pictures/pet-images/smallDogBody.png";
      this.isBig = false;
    }
    this.isSizeChosen = true;
    this.activeSizeChip = chipName;
  }

  performColorAction(chipColor: string) {
    if (chipColor === "bright") {
      this.starClassApplier(2, "stealthStarId")
      this.starClassApplier(5, "charismaStarId")
      this.isBright = true;
    } else if (chipColor === "dark") {
      this.starClassApplier(5, "stealthStarId")
      this.starClassApplier(2, "charismaStarId")
      this.isBright = false;
    }
    this.isColorChosen = true;
    this.activeColorChip = chipColor;
  }

  performWeightAction(chipWeight: string) {
    if (chipWeight === "heavy") {
      this.starClassApplier(2, "weightStarId")
      this.starClassApplier(6, "defenceStarId")
      if (this.isBig) {
        this.petImage = "assets/pictures/pet-images/bigDogBodyWithVest.png";
      } else {
        this.petImage = "assets/pictures/pet-images/smallDogBodyWithVest.png";
      }
      this.isHeavy = true;
    } else if (chipWeight === "light") {
      this.starClassApplier(6, "weightStarId")
      this.starClassApplier(2, "defenceStarId")
      this.isHeavy = false;
    }
    this.isWeightChosen = true;
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
  reset() {
    this.isSizeChosen = false;
    this.isColorChosen = false;
    this.isWeightChosen = false;
  }
}
