import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Motorcycles from "../vehicles/land/Motorcycles";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicles";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNine implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Motorcycles();
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter();
    }

}