import { Client } from "./clients/Client";
import AiqFomeDelivery from "./delivery/AiqFomeDelivery";
import Company from "./delivery/Company";
import FoodDelivery from "./delivery/FoodDelivery";
import IDeliveryFactorys from "./delivery/interfaces/IDeliveryFactory";

const currentCompany = Company.IFOOD;
let factory: IDeliveryFactorys;

switch(currentCompany){
    case Company.IFOOD:
        factory = new FoodDelivery();
        break;
    case Company.AIQFOME:
        factory = new AiqFomeDelivery();
        break;
    default:
        console.log("Delivery não especificado");
}
const client = new Client(factory);
client.startDelivery();