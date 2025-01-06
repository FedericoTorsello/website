import { Component, inject, input } from '@angular/core';
import { ContentService } from '../../service/content.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drop-list',
  imports: [    
    CdkDropList,
    CdkDrag
  ],
  templateUrl: './drop-list.component.html',
  styleUrl: './drop-list.component.scss',
})
export class DropListComponent {
  private dragDropService = inject(ContentService);

  items = input<any[]>(['TEST']);

  drop(event: CdkDragDrop<string[]>) {
    this.dragDropService.drop(event);
  }
}
