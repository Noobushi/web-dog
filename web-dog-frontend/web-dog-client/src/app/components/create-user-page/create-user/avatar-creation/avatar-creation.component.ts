import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-avatar-creation',
  templateUrl: './avatar-creation.component.html',
  styleUrls: ['./avatar-creation.component.css']
})
export class AvatarCreationComponent {

  constructor(private userService: UserService) {
  }

  @Output() tabSelected = new EventEmitter<number>();

  selectNextTab(index: number) {
    this.tabSelected.emit(index);
    if (index == 0) {
    }
  }
}
