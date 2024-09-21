import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss'
})
export class UploadImageComponent {

  imageEvent = output<string>()

  open(event: Event) {
    const fileHandle = (event.target as HTMLInputElement)?.files as any;
    const file = fileHandle[0] as File;
    this.imageEvent.emit(URL.createObjectURL(file));
  }


}
