import Transport from "../Transport";
import Motorcycle from "./Motorcycle";
import IVehicle from "./interfaces/IVehicle";

export default class CarTransport extends Transport{
    protected createTransport(): IVehicle {
        return new Motorcycle();
    }

}