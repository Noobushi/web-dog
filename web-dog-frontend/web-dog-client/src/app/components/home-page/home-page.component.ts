import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private userService: UserService) {
  }

  createUser() {
    this.userService.create().subscribe((user) => {
      this.userService.setCurrentUserId(user.id);
    });
  }

}
