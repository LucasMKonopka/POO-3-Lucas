import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    startDelivery() {
        this.getType();
        console.log("Refrigerante: Saiu para entrega!");
    }
    getType() {
        console.log("Refrigerante: Recebido com sucesso!");
    }

}