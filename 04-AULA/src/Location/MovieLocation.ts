import Movie from "./Itens/Movie";
import IItem from "./Itens/interfaces/IItem";
import Location from "./Location";

export default class MovieLocation extends Location{
    protected createItem() : IItem{
        return new Movie();
    }
}