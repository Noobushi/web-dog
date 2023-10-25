import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-avatar-creation',
  templateUrl: './avatar-creation.component.html',
  styleUrls: ['./avatar-creation.component.css']
})
export class AvatarCreationComponent {

  @Output() tabSelected = new EventEmitter<number>();

  selectNextTab(index: number) {
    this.tabSelected.emit(index);
  }
}
