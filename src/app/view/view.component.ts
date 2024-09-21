import { Component, inject, OnInit } from '@angular/core';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { ImageListComponent } from '../image-list/image-list.component';
import { Agt360imageViewComponent, RotateImage } from 'agt360image-view';
import { image1 } from '../sample-images';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-view',
  standalone: true,
  imports: [UploadImageComponent, ImageListComponent, Agt360imageViewComponent, MatSnackBarModule ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent implements OnInit {

  private _snackbar = inject(MatSnackBar);

  lists: Array<string> = [
    image1
  ];

  src: string | undefined = undefined
  width = 500;
  height = 500;
  autoroatate: RotateImage = {    // Optional
    isRotate: true,
    rotateSpeed: 0.5
  };

  ngOnInit(): void {
    this.src = undefined
    this.width = window?.innerWidth / 1.2;
    this.height = 500;
    this.autoroatate = {    // Optional
      isRotate: true,
      rotateSpeed: 0.5
    };
  }


  addImage(file: string) {
    this.lists = [
      ...this.lists,
      file
    ]
  }

  deleteImage(index: number) {
    this.lists.splice(index, 1);
    this.lists = [...this.lists]
    this.src = undefined;
    this._snackbar.open('Image deleted successfully', 'Close', { duration: 2000 });
  }
}
