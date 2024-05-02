import ILandVehicles from "./interfaces/ILandVehicles";

export default class Car implements ILandVehicles{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando transporte!");
    }
    getCargo(): void {
        console.log("Carro: Passageiros embarcados!");
    }

}