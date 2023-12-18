import { Component, Input, Output, EventEmitter } from '@angular/core';
import { upcomingProducts, Upcoming } from '../upcomingProducts';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css',
})
export class AlertsComponent {
  @Input() upcomingProducts: Upcoming | undefined;
  @Output() notify = new EventEmitter();
}
