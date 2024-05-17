import ITransportadora from "./interfaces/ITransportadora";

export default class Transportadora implements ITransportadora{
    sendTransportadora(): void {
        console.log("Enviando encomenda via Transportadora!");
    }
    receiveTransportadora(): void {
        console.log("Recebendo encomenda via Transportadora!");
    }

}