import { Component } from '@angular/core';
import { DiscussionSidebarComponent } from '../discussion-sidebar/discussion-sidebar.component';
import {
  ITruck,
  IMotorcycle,
  IElectricScooter,
  OverengineeredTruck,
  OverengineeredMotorcycle,
  OverengineeredElectricScooter,
} from '../../models/overengineered/vehicle-interfaces';

type AnyVehicle = ITruck | IMotorcycle | IElectricScooter;

interface VehicleCard {
  icon: string;
  vehicle: AnyVehicle;
  result: string | null;
}

interface InterfaceBlock {
  name: string;
  fields: string[];
}

@Component({
  selector: 'app-overengineered-dashboard',
  standalone: true,
  imports: [DiscussionSidebarComponent],
  templateUrl: './overengineered-dashboard.component.html',
})
export class OverengineeredDashboardComponent {
  readonly newFieldLabel = 'weight: number';
  readonly interfaceCount = 3;

  highlightAll = false;

  overengineeredInterfaces: InterfaceBlock[] = [
    {
      name: 'ITruck',
      fields: ['id: number', 'name: string', 'color: string', 'maxSpeed: number', 'payload: number', 'dispatch(): string'],
    },
    {
      name: 'IMotorcycle',
      fields: ['id: number', 'name: string', 'color: string', 'maxSpeed: number', 'payload: number', 'dispatch(): string'],
    },
    {
      name: 'IElectricScooter',
      fields: ['id: number', 'name: string', 'color: string', 'maxSpeed: number', 'payload: number', 'dispatch(): string'],
    },
  ];

  goodInterfaces = [
    { name: 'ITruck', extra: 'payload: number' },
    { name: 'IMotorcycle', extra: 'topSpeed: number' },
    { name: 'IElectricScooter', extra: 'batteryCapacity: number' },
  ];

  vehicleCards: VehicleCard[] = [
    { icon: '🚚', vehicle: new OverengineeredTruck(1, 'Big Red Truck'), result: null },
    { icon: '🏍️', vehicle: new OverengineeredMotorcycle(2, 'Speed Rider'), result: null },
    { icon: '🛴', vehicle: new OverengineeredElectricScooter(3, 'EcoZip Scooter'), result: null },
  ];

  simulateAddField(): void {
    this.overengineeredInterfaces.forEach(iface => {
      if (!iface.fields.includes(this.newFieldLabel)) {
        iface.fields = [...iface.fields, this.newFieldLabel];
      }
    });
    this.highlightAll = true;
  }

  resetSimulation(): void {
    this.overengineeredInterfaces.forEach(iface => {
      iface.fields = iface.fields.filter(f => f !== this.newFieldLabel);
    });
    this.highlightAll = false;
  }

  dispatch(card: VehicleCard): void {
    card.result = card.vehicle.dispatch();
  }

  dispatchAll(): void {
    this.vehicleCards.forEach(card => this.dispatch(card));
  }
}
