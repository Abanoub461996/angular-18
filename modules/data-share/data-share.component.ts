import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from './interfaces';

@Component({
  selector: 'app-data-share',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-share.component.html',
  styleUrls: ['./data-share.component.css'],
})
export class DataShareComponent {
  items: Item[] = [
    { name: 'item1', id: 1, description: 'description1' },
    { name: 'item2', id: 2, description: 'description2' },
    { name: 'item3', id: 3, description: 'description3' },
  ];
}
