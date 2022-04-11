import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../models/item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() card: IItem[] = [];

    constructor() {}
}
