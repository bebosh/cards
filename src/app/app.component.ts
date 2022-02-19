import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'A picture of a tree'
    },
    {
      title: 'Snowy mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'Mounatin',
      content: 'A picture of a mountain'
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'Biking',
      content: 'A picture of Biking'
    }
  ]
}
