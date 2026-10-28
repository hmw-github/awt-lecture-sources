/**
 * Step 1: Define an Interface
 * Create an interface called Vehicle with the following methods:
 * startEngine() (void): A method to start the vehicle's engine.
 * stopEngine() (void): A method to stop the vehicle's engine.
 * drive(distance: number) (void): A method to drive the vehicle a certain distance.
 */
interface Vehicle {
  // TODO
  startEngine(): void,
  stopEngine(): void,
  drive(distance: number): void
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

// TODO: abstract class BaseVehicle implements Vehicle { ... }
abstract class BaseVehicle implements Vehicle {
  protected make: string;
  protected model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  public abstract getFuelType(): string;
}

/**
 * Step 3: Create Concrete Classes
 * Create two concrete classes, Car and Motorcycle, that extend the BaseVehicle class. 
 * Each should:
 * - Implement the getFuelType()  method.
 * - Implement the drive(distance: number) method to simulate driving a certain 
 *   distance (e.g., print the message "Driving {distance} km").
 *
 * Details:
 * - Car: the constructor takes make, model and fuelType (string) and passes
 *   make and model to the BaseVehicle constructor (super). getFuelType()
 *   returns the stored fuelType.
 * - Motorcycle: the constructor takes only make and model. getFuelType()
 *   always returns "electric".
 */

// TODO: class Car extends BaseVehicle { ... }

// TODO: class Motorcycle extends BaseVehicle { ... }

/**
 * Step 4: Usage:
 * Create a Car object and a Motorcycle object.
 * Start their engines.
 * Drive each vehicle a certain distance.
 * Stop their engines.
 * Print the fuel type for each vehicle.
 *
 * Concretely:
 * 1. Create a Car "car" with make 'Audi', model 'A1' and fuel type 'petrol'.
 *    Start its engine, drive 100 km, stop its engine and print its fuel type.
 * 2. Create a Motorcycle "motorbike" with make 'Honda' and model 'CoolBike1'.
 *    Start its engine, drive 50 km, stop its engine and print its fuel type.
 *
 * Expected output:
 *   Engine started.
 *   Driving 100 km.
 *   Engine stopped.
 *   petrol
 *   Engine started.
 *   Driving 50 km.
 *   Engine stopped.
 *   electric
 */

// TODO
