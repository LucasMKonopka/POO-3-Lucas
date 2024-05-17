import ICorreios from "../correios/interfaces/ICorreios";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapters implements ICorreios{

    constructor(private transportadora: Transportadora){
        console.log("Adaptando Transportadora nos Correios!");
    }

    sendCorreios(): void {
        this.transportadora.sendTransportadora();
    }
    receiveCorreios(): void {
        this.transportadora.receiveTransportadora();
    }

}