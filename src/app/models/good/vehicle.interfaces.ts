// ✅ GOOD — Segregated interfaces: each vehicle only implements what it can do.

export interface Vehicle {
  id: number;
  name: string;
  icon: string;
}

export interface EngineVehicle extends Vehicle {
  startEngine(): string;
}

export interface ElectricVehicle extends Vehicle {
  chargeBattery(): string;
}

// Type guards — allow safe dispatch without try/catch
export function isEngineVehicle(v: Vehicle): v is EngineVehicle {
  return typeof (v as EngineVehicle).startEngine === 'function';
}

export function isElectricVehicle(v: Vehicle): v is ElectricVehicle {
  return typeof (v as ElectricVehicle).chargeBattery === 'function';
}
