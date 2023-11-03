import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-avatar-image',
  templateUrl: './avatar-image.component.html',
  styleUrls: ['./avatar-image.component.css']
})
export class AvatarImageComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { image: any }) {
  }

  save(imageId: number) {

  }
}
