import ICorreios from "./interfaces/ICorreios";

export default class Correios implements ICorreios{
    sendCorreios(): void {
        console.log("Enciando encomenda via Correios!");
    }
    receiveCorreios(): void {
        console.log("Recebendo ecomenda via Correios!");
    }

}