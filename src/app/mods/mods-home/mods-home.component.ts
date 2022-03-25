import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;
  items = [
    {
      title: 'Question 1?',
      content: 'A1',
    },
    {
      title: 'Question 2?',
      content: 'A2',
    },
    {
      title: 'Question 3',
      content: 'A3',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
