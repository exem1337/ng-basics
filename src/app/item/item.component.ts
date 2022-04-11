import { Component, Input } from '@angular/core';
import { IItem } from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: IItem = {
    id: 0,
    name: '',
    description: '',
    price: 0
  };

  constructor() {}
}
