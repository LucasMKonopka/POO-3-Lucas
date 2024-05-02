import ILandVehicles from "./interfaces/ILandVehicles";

export default class Scooter implements ILandVehicles{
    startRoute(): void {
        this.getCargo();
        console.log("Scooter: Pacote Recebido!");
    }
    getCargo(): void {
        console.log("Scooter: Pacote retirado!");
    }

}