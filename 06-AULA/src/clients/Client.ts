import IDeliveryFactorys from "../delivery/interfaces/IDeliveryFactory";
import IDrink from "../menu/drinks/interfaces/IDrink";
import IFood from "../menu/foods/interfaces/IFood";

export class Client{
    private food : IFood;
    private drink : IDrink;
    
	constructor(factory: IDeliveryFactorys) {
		this.food = factory.createDeliveryFood();
		this.drink = factory.createDeliveryDrink();
	}
    startDelivery(){
        this.food.startDelivery();
        this.drink.startDelivery();
    }
    


}