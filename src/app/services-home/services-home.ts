import { Component } from '@angular/core';
import { HighlightDirective } from './highlight';

@Component({
  selector: 'app-services-home',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './services-home.html',
  styleUrl: './services-home.css',
})
export class ServicesHomeComponent {

}
