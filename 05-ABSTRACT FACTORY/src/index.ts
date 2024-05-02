import Client from "./clients.ts/Client";
import Company from "./transport/Company";
import IndriveTransport from "./transport/IndriveTransport";
import NineNineTransport from "./transport/NineNineTransport";
import UberTransport from "./transport/UberTransport";
import ITransportFactory from "./transport/interfaces/ITransportFactory";

const currentCompany = Company.INDRIVE;
let factory: ITransportFactory;

switch(currentCompany){
    case Company.UBER:
        factory = new UberTransport();
        break;
    case Company.NINENINE:
        factory = new NineNineTransport();
        break;
    case Company.INDRIVE:
        factory = new IndriveTransport();
        break;
    default:
        console.log("Companhia não definida!");
}

const client = new Client(factory);
client.startRoute();