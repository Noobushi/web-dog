import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent {

  @Output() tabSelected = new EventEmitter<number>();
  usernameValue: string = "";
  passwordValue: string = "";
  firstNameValue: string = "";
  lastNameValue: string = "";
  descriptionValue: string = "";


  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackBar: MatSnackBar) { }

  userFormGroup = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    description: ["", Validators.required]
  })

  onSubmit(userFormGroup: any) {
    this.userService.create(userFormGroup).subscribe();
  }

  selectNextTab(index: number) {
    this.tabSelected.emit(index);
    this.snackBar.open("something");
  }
}
