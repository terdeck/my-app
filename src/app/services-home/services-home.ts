import { Component } from '@angular/core';
import { Highlight } from './highlight';

@Component({
  selector: 'app-services-home',
  standalone: true,
  imports: [Highlight],
  templateUrl: './services-home.html',
  styleUrl: './services-home.css',
})
export class ServicesHomeComponent {

}
