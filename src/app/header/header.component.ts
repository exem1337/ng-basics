import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../models/item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() card: IItem[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
