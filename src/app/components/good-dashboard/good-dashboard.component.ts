import { Component } from '@angular/core';
import { DiscussionSidebarComponent } from '../discussion-sidebar/discussion-sidebar.component';
import {
  Vehicle,
  isEngineVehicle,
  isElectricVehicle,
} from '../../models/good/vehicle.interfaces';
import { GoodTruck, GoodMotorcycle, GoodElectricScooter } from '../../models/good/vehicles';

interface VehicleCard {
  vehicle: Vehicle;
  result: string | null;
}

@Component({
  selector: 'app-good-dashboard',
  standalone: true,
  imports: [DiscussionSidebarComponent],
  templateUrl: './good-dashboard.component.html',
})
export class GoodDashboardComponent {
  readonly isEngineVehicle = isEngineVehicle;
  readonly isElectricVehicle = isElectricVehicle;

  cards: VehicleCard[] = [
    { vehicle: new GoodTruck(1, 'Big Red Truck', '🚚'), result: null },
    { vehicle: new GoodMotorcycle(2, 'Speed Rider', '🏍️'), result: null },
    { vehicle: new GoodElectricScooter(3, 'EcoZip Scooter', '🛴'), result: null },
  ];

  dispatch(card: VehicleCard): void {
    if (isEngineVehicle(card.vehicle)) {
      card.result = card.vehicle.startEngine();
    } else if (isElectricVehicle(card.vehicle)) {
      card.result = card.vehicle.chargeBattery();
    }
  }

  dispatchAll(): void {
    this.cards.forEach(card => this.dispatch(card));
  }

  reset(): void {
    this.cards.forEach(card => (card.result = null));
  }

  getActionLabel(vehicle: Vehicle): string {
    if (isEngineVehicle(vehicle)) return '🔑 Start Engine';
    if (isElectricVehicle(vehicle)) return '⚡ Charge Battery';
    return '🚀 Dispatch';
  }

  getVehicleTypeBadge(vehicle: Vehicle): string {
    if (isEngineVehicle(vehicle)) return '⚙️ EngineVehicle';
    if (isElectricVehicle(vehicle)) return '⚡ ElectricVehicle';
    return 'Vehicle';
  }
}
