import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-home',
  standalone: true,
  imports: [],
  templateUrl: './contact-home.html',
  styleUrl: './contact-home.css',
})
export class ContactHome implements OnInit {
  isUnchanged = true;
  onCancel(event?: KeyboardEvent) {
    const evtMsg = event ? 'Event target is' + (event.target as HTMLElement).textContent : '';
    alert('Cancelled.' + evtMsg);
  }

  constructor() {}
  ngOnInit(): void {
  }
}
