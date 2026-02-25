import { EngineVehicle, ElectricVehicle } from './vehicle.interfaces';

export class GoodTruck implements EngineVehicle {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly icon: string,
  ) {}

  startEngine(): string {
    return `${this.name}: V8 engine roaring — ready to haul freight!`;
  }
}

export class GoodMotorcycle implements EngineVehicle {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly icon: string,
  ) {}

  startEngine(): string {
    return `${this.name}: Engine revving at high RPM — let's ride!`;
  }
}

export class GoodElectricScooter implements ElectricVehicle {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly icon: string,
  ) {}

  chargeBattery(): string {
    return `${this.name}: Battery charged to 100% — ready to ride silently!`;
  }
}
