import Beer from "../menu/drinks/Beer";
import SoftDrink from "../menu/drinks/SoftDrink";
import IDrink from "../menu/drinks/interfaces/IDrink";
import IFood from "../menu/foods/interfaces/IFood";
import IDeliveryFactorys from "./interfaces/IDeliveryFactory";

export default class AiqFomeDelivery implements IDeliveryFactorys{
    createDeliveryDrink(): IDrink{
        return new Beer();
    }
    createDeliveryFood(): IFood{
        return new SoftDrink();
    }

}