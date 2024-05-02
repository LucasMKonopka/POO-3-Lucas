import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: Iniciando decolagem!");
    }
    getCargo(): void {
        console.log("Drone: Pacote recebido");
    }
    checkWind(): void {
        console.log("Drone: ventos a 20km");
    }
}