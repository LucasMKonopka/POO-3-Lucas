import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    startDelivery() {
        this.getType();
        console.log("HotDog: Saiu para entrega");
    }
    getType() {
        console.log("HotDog: HotDog recebido com sucesso!");
    }

}