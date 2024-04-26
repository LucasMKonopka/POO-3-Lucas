import IItem from "./interfaces/IItem";

export default class Movie implements IItem{
    start(): void {
        this.getDescription();
        console.log("Filme: Iniciando filme...");
    }
    getDescription(): void {
        console.log("Filme: Filme iniciado com sucesso!");
    }

}