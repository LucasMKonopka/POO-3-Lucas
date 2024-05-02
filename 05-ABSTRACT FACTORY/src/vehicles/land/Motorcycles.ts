import ILandVehicles from "./interfaces/ILandVehicles";

export default class Motorcycles implements ILandVehicles{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Iniciando a entrega!");
    }
    getCargo(): void {
        console.log("Moto: encomenda retirada!");
    }

}