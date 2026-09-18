/**
 * Step 1: Define an Interface
 * Create an interface called Vehicle with the following methods:
 * startEngine() (void): A method to start the vehicle's engine.
 * stopEngine() (void): A method to stop the vehicle's engine.
 * drive(distance: number) (void): A method to drive the vehicle a certain distance.
 */
interface Vehicle {
  startEngine(): void;
  stopEngine(): void;
  drive(distance: number): void;
}

/**
 * Step 2: Create an Abstract Class
 * Create an abstract class called BaseVehicle that implements the 
 * Vehicle interface. The abstract class should include:
 * - A constructor that takes make (string) and model (string) as arguments 
 *     and stores them as protected properties.
 * - An abstract method getFuelType() that returns a string indicating the 
 *   type of fuel used by the vehicle (e.g., "petrol", "diesel", "electric").
 * - Implement the startEngine() and stopEngine() methods in the abstract class. 
 * For now, these methods can just print messages like "Engine started" and "Engine stopped."
 */
abstract class BaseVehicle implements Vehicle {
  protected make: string;
  protected model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  public startEngine(): void {
    console.log('Engine started.');
  }
  public stopEngine(): void {
    console.log('Engine stopped.');
  }

  abstract drive(distance: number): void
  abstract getFuelType(): string;
}

/**
 * Step 3: Create Concrete Classes
 * Create two concrete classes, Car and Motorcycle, that extend the BaseVehicle class. 
 * Each should:
 * - Implement the getFuelType()  method.
 * - Implement the drive(distance: number) method to simulate driving a certain 
 *   distance (e.g., print the message "Driving {distance} km").
 */
class Car extends BaseVehicle {
  private fuelType: string;

  constructor(make: string, model: string, fuelType: string) {
    super(make, model);
    this.fuelType = fuelType;
  }

  public getFuelType(): string {
      return this.fuelType;
  }

  public drive(distance: number): void {
    console.log(`Driving ${distance} km.`);
  }

}
class MotorCycle extends BaseVehicle {
  constructor(make: string, model: string) {
    super(make, model);
  }

  public getFuelType(): string {
      return 'electric';
  }

  public drive(distance: number): void {
    console.log(`Driving ${distance} km.`);
  }
}

/**
 * Step 4: Usage:
 * Create a Car object and a Motorcycle object.
 * Start their engines.
 * Drive each vehicle a certain distance.
 * Stop their engines.
 * Print the fuel type for each vehicle.
 */

let car: Car = new Car('Audi', 'A1', 'petrol');
car.startEngine();
car.drive(100);
car.stopEngine();
console.log(car.getFuelType());
let motorbike: MotorCycle = new MotorCycle('Honda', 'CoolBike1');
car.startEngine();
car.drive(100);
car.stopEngine();
console.log(car.getFuelType());