import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileDetailsComponent implements OnInit {

  @Output() tabSelected = new EventEmitter<number>();
  userFormGroup!: FormGroup;
  usernameValue: string = "";
  passwordValue: string = "";
  firstNameValue: string = "";
  lastNameValue: string = "";
  descriptionValue: string = "";
  currentUserId!: number;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      description: ["", Validators.required]
    })
  }

  onSubmit(userFormGroup: any) {
    this.userService.create(userFormGroup).subscribe(user => {
      this.currentUserId = user.id;
    });
  }

  selectNextTab(index: number) {
    this.tabSelected.emit(index);
    this.snackBar.open("Profile details saved...", "X", { duration: 3000, horizontalPosition: 'right' });
  }

  updateInfo(userFormGroup: any) {
    this.userService.edit(this.currentUserId, userFormGroup.value).subscribe();
  }
}
