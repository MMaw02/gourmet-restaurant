import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  images = [
    '../../assets/img/hero-1.jpg',
    '../../assets/img/hero-2.jpg',
    '../../assets/img/hero-3.jpg',
  ];

}
