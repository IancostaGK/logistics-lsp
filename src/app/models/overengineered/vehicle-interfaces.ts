// ⚠️ OVERENGINEERED — Each vehicle gets its own interface with all fields duplicated.
// Adding a single shared field requires editing every interface.

export interface ITruck {
  id: number;
  name: string;
  color: string;
  maxSpeed: number;
  payload: number;
  dispatch(): string;
}

export interface IMotorcycle {
  id: number;
  name: string;
  color: string;
  maxSpeed: number;
  payload: number;
  dispatch(): string;
}

export interface IElectricScooter {
  id: number;
  name: string;
  color: string;
  maxSpeed: number;
  payload: number;
  dispatch(): string;
}

export class OverengineeredTruck implements ITruck {
  readonly color = 'Red';
  readonly maxSpeed = 120;
  readonly payload = 20000;

  constructor(public readonly id: number, public readonly name: string) {}

  dispatch(): string {
    return `${this.name}: Truck dispatched with ${this.payload} kg payload!`;
  }
}

export class OverengineeredMotorcycle implements IMotorcycle {
  readonly color = 'Blue';
  readonly maxSpeed = 220;
  readonly payload = 100;

  constructor(public readonly id: number, public readonly name: string) {}

  dispatch(): string {
    return `${this.name}: Motorcycle dispatched at ${this.maxSpeed} km/h top speed!`;
  }
}

export class OverengineeredElectricScooter implements IElectricScooter {
  readonly color = 'Green';
  readonly maxSpeed = 60;
  readonly payload = 50;

  constructor(public readonly id: number, public readonly name: string) {}

  dispatch(): string {
    return `${this.name}: Electric scooter dispatched silently at ${this.maxSpeed} km/h!`;
  }
}
