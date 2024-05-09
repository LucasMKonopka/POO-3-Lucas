import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

director.constructSedanCar();
const sedan : Vehicle = builder.getVehicle();
console.log("Criando veiculo");
console.log("Tipo: " +sedan.vehicleType);
console.log("Potencia: " +sedan.engine.power);
console.log("Transmissao: " +sedan.transmission);
console.log("Assentos " +sedan.seats);
console.log("Rodas: " +sedan.wheels.length + " - Aro: " +sedan.wheels[0].rim);
console.log("=================================");

director.constructTruck();
const truck : Vehicle = builder.getVehicle();
console.log("Criando veiculo");
console.log("Tipo: " +truck.vehicleType);
console.log("Potencia: " +truck.engine.power);
console.log("Transmissao: " +truck.transmission);
console.log("Assentos " +truck.seats);
console.log("Rodas: " +truck.wheels.length + " - Aro: " +truck.wheels[0].rim);
console.log("=================================");

director.constructMoto();
const moto : Vehicle = builder.getVehicle();
console.log("Criando veiculo");
console.log("Tipo: " +moto.vehicleType);
console.log("Potencia: " +moto.engine.power);
console.log("Transmissao: " + moto.transmission);
console.log("Assentos " +moto.seats);
console.log("Rodas: " +moto.wheels.length + " - Aro: " +moto.wheels[0].rim);
console.log("=================================");