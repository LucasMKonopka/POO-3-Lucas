import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    startDelivery() {
        this.getType();
        console.log("Drink: Saiu para entrega!");
    }
    getType() {
        console.log("Drink: Drink recebido com sucesso!");
    }

}