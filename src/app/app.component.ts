import { Component } from '@angular/core';
import { Pizzas } from './models/pizzas.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'La-pizza';


  public pizzas: Array<Pizzas> = [
    {
      image: '../assets/pizza.png',
      title: 'La Cuma',
      content: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
      price: 29.90,
    },
    {
      image: '../assets/pizza.png',
      title: 'La Menta',
      content: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
      price: 25.90,
    },
    {
      image: '../assets/pizza.png',
      title: 'La Toca',
      content: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
      price: 29.90,
    },
    {
      image: '../assets/pizza.png',
      title: 'La Top',
      content: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
      price: 25.50,
     },
    // {
    //   image: '../assets/pizza.png',
    //   title: 'La Menta',
    //   content: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    //   price: 26.00,
    // },
    // {
    //   image: '../assets/pizza.png',
    //   title: 'La Toca',
    //   content: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    //   price: 23.80,
    // }
  ]
}
