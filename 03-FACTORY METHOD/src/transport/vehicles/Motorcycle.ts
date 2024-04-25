import IVehicle from "./interfaces/IVehicle";

export default class Car implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Iniciando trajeto para entrega!");
    }
    getCargo(): void {
        console.log("Moto: Pacote recebido para iniciar entrega!");
    }

}