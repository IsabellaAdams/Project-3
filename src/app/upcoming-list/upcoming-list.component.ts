import { Component } from '@angular/core';
import { upcomingProducts, Upcoming } from '../upcomingProducts';

@Component({
  selector: 'app-upcoming-list',
  templateUrl: './upcoming-list.component.html',
  styleUrl: './upcoming-list.component.css',
})
export class UpcomingListComponent {
  upcomingProducts = [...upcomingProducts];
  Upcoming = [...upcomingProducts];
  createRandom = [...upcomingProducts];

  showInfo(upcomingProducts: any) {
    window.alert(
      `Name of product: ${upcomingProducts.name}\n Price: ${upcomingProducts.price}\nDescription: ${upcomingProducts.description}`
    );
  }

  onNotify() {
    window.alert('You will be notified the day this item goes up for sale.');
  }
}
