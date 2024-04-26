import Game from "./Itens/Game";
import IItem from "./Itens/interfaces/IItem";
import Location from "./Location";

export default class GameLocation extends Location{
    protected createItem() : IItem{
        return new Game();
    }
}