import Transport from "./Transport";
import Motorcycle from "./vehicles/Motorcycle";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default class CarTransport extends Transport{
    protected createTransport(): IVehicle {
        return new Motorcycle();
    }

}