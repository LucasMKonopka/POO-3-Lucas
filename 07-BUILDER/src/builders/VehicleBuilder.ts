import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import IBuilder from "./interfaces/IBuilder";

export default class VehicleBuilder implements IBuilder{
    private vehicle = new Vehicle();

    reset(): void {
        this.vehicle = new Vehicle();
    }
    getVehicle(): Vehicle {
        const result : Vehicle = this.vehicle;
        this.reset();
        return result;
    }
    addWheel(wheel: Wheel) {
        this.vehicle.addWheel(wheel);
    }
    setVehicleType(value: VehicleType) {
        this.vehicle.vehicleType = value;
    }
    setSeats(seats: number) {
        this.vehicle.seats = seats;
    }
    setEngine(engine: Engine) {
        this.vehicle.engine = engine;
    }
    setTrasnmission(transmission: Transmission) {
        this.vehicle.transmission = transmission;
    }

}