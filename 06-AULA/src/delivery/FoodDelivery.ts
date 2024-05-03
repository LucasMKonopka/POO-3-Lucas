import IDrink from "../menu/drinks/interfaces/IDrink";
import Hamburguer from "../menu/foods/Hamburguer";
import HotDog from "../menu/foods/HotDog";
import IFood from "../menu/foods/interfaces/IFood";
import IDeliveryFactorys from "./interfaces/IDeliveryFactory";

export default class FoodDelivery implements IDeliveryFactorys{
    createDeliveryDrink(): IDrink {
        return new Hamburguer();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }

}