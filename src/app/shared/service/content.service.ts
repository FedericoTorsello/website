import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ContenutoEccedente {
  id: string;
  contenuto: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  // private itemsSource = new BehaviorSubject<string[]>([]);
  // items$ = this.itemsSource.asObservable();

  // setItems(items: string[]) {
  //   this.itemsSource.next(items);
  // }

  // initializeItems(items: string[]) {
  //   this.itemsSource.next(items);
  // }

  // addItem(item: string) {
  //   const currentItems = this.itemsSource.value;
  //   this.itemsSource.next([...currentItems, item]);
  // }

  // removeItem(item: string) {
  //   const currentItems = this.itemsSource.value.filter(i => i !== item);
  //   this.itemsSource.next(currentItems);
  // }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
