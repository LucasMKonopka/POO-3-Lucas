import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    startDelivery() {
        this.getType();
        console.log("Food: Saiu para entrega!");
    }
    getType() {
        console.log("Food: Comida recebida!");
    }

}