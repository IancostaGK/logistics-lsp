// ❌ BAD — VehicleBase forces all subclasses to implement startEngine(),
// but ElectricScooter cannot honour that contract → LSP violation.

export abstract class VehicleBase {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly icon: string,
  ) {}

  abstract startEngine(): string;
}

export class Truck extends VehicleBase {
  override startEngine(): string {
    return `${this.name}: V8 engine roaring — ready to haul freight!`;
  }
}

export class Motorcycle extends VehicleBase {
  override startEngine(): string {
    return `${this.name}: Engine revving at high RPM — let's ride!`;
  }
}

// ❌ LSP VIOLATION: throws instead of returning a string
export class ElectricScooter extends VehicleBase {
  override startEngine(): string {
    throw new Error('No engine! I am electric and cannot start an engine.');
  }
}
