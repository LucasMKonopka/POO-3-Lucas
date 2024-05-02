import IAircraft from "../../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../../vehicles/land/interfaces/ILandVehicles";

export default interface ITransportFactory{
    createTransportVehicle(): ILandVehicle;
    createTransportAircraft(): IAircraft;
}