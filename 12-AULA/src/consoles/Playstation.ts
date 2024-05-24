import IConsole from "./interfaces/IConsole";

export default class Playstation implements IConsole{

    constructor(){
        this.configureGame();
        console.log("Playstation: jogo sendo iniciado!");
    }
    configureGame(): void {
        this.authToken();
        console.log("Playstation: Carregando jogos");
    }
    authToken(): void {
        console.log("Playstation: Autorizando sessão");
    }

}
