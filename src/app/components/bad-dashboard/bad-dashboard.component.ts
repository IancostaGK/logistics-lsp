import { Component } from '@angular/core';
import { Truck, Motorcycle, ElectricScooter, VehicleBase } from '../../models/bad/vehicle-base';
import { DiscussionSidebarComponent } from '../discussion-sidebar/discussion-sidebar.component';

interface VehicleCard {
  vehicle: VehicleBase;
  result: string | null;
  error: string | null;
}

@Component({
  selector: 'app-bad-dashboard',
  standalone: true,
  imports: [DiscussionSidebarComponent],
  templateUrl: './bad-dashboard.component.html',
})
export class BadDashboardComponent {
  cards: VehicleCard[] = [
    { vehicle: new Truck(1, 'Big Red Truck', '🚚'), result: null, error: null },
    { vehicle: new Motorcycle(2, 'Speed Rider', '🏍️'), result: null, error: null },
    { vehicle: new ElectricScooter(3, 'EcoZip Scooter', '🛴'), result: null, error: null },
  ];

  dispatch(card: VehicleCard): void {
    try {
      card.result = card.vehicle.startEngine();
      card.error = null;
    } catch (e) {
      card.error = (e as Error).message;
      card.result = null;
    }
  }

  dispatchAll(): void {
    this.cards.forEach(card => this.dispatch(card));
  }

  reset(): void {
    this.cards.forEach(card => {
      card.result = null;
      card.error = null;
    });
  }
}
