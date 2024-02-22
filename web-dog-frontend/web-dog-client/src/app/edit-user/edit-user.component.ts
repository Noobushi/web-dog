import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { UserService } from '../service/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Output() tabSelected = new EventEmitter<number>();
  userFormGroup!: FormGroup;
  usernameValue: string = this.data.user.username;
  passwordValue: string = this.data.user.password;
  firstNameValue: string = this.data.user.firstName;
  lastNameValue: string = this.data.user.lastName;
  descriptionValue: string = this.data.user.description;
  currentUserId!: number;

  constructor(public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: any },
    private userService: UserService, private formBuilder: FormBuilder,
    private snackBar: MatSnackBar) {
    this.currentUserId = this.data.user.id;
  }

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
    this.userService.edit(this.currentUserId, userFormGroup).subscribe();
  }

  updateInfo(userFormGroup: any) {
    this.userService.edit(this.currentUserId, userFormGroup.value).subscribe();
    this.dialogRef.close();
    this.snackBar.open(`User ${this.userFormGroup.value['username']} successfully updated...`, "X", { duration: 3000, horizontalPosition: 'right' });
  }

  cancelEvent() {
    this.dialogRef.close();
  }

}
