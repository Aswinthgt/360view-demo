import { Component, computed, input, InputSignal, output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [MatChipsModule, MatIconModule],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.scss'
})
export class ImageListComponent {
  newLists: InputSignal<Array<string>> = input.required();
  selectedImage = output<string>();
  deletedImage = output<number>();

  protected lists = computed(()=> this.newLists())

}
