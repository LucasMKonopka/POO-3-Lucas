import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicoptero: Iniciando decolagem!");
    }
    getCargo(): void {
        console.log("Helicoptero: Passageiros embarcados");
    }
    checkWind(): void {
        console.log("Helicoptero: ventos a 25km");
    }

}
