import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../share-data-interface';

@Component({
  selector: 'app-first-child',
  standalone: true,
  imports: [],
  templateUrl: './first-child.component.html',
  styleUrl: './first-child.component.css',
})
export class FirstChildComponent {
  @Input() item!: Item;
  @Output() newItemEvent = new EventEmitter<Item>();

  handleReadMore() {
     this.newItemEvent.emit(this.item);
  }
}
