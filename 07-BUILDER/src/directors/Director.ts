import IBuilder from "../builders/interfaces/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director{

    constructor(private builder : IBuilder){}

    constructSedanCar(){
        this.builder.setVehicleType(VehicleType.SEDAN);
        this.builder.setSeats(5);
        this.builder.setTrasnmission(Transmission.AUTOMATIC);
        this.builder.setEngine(new Engine(1300));
        this.builder.addWheel(new Wheel(14));
        this.builder.addWheel(new Wheel(14));
        this.builder.addWheel(new Wheel(14));
        this.builder.addWheel(new Wheel(14));
    }

    constructTruck(){
        this.builder.setVehicleType(VehicleType.TRUCK);
        this.builder.setSeats(3);
        this.builder.setTrasnmission(Transmission.MANUAL);
        this.builder.setEngine(new Engine(18000));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
    }
    
    constructMoto(){
        this.builder.setVehicleType(VehicleType.MOTO);
        this.builder.setSeats(2);
        this.builder.setTrasnmission(Transmission.MANUAL);
        this.builder.setEngine(new Engine(1000));
        this.builder.addWheel(new Wheel(12));
        this.builder.addWheel(new Wheel(12));

    }
}