import IItem from "./interfaces/IItem";

export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("Game: Iniciando jogo...");
    }
    getDescription(): void {
        console.log("Game: Jogo iniciado com sucesso!");
    }

}