import IConsole from "./interfaces/IConsole";

export default class Xbox implements IConsole{

    constructor(){
        this.configureGame();
        console.log("Xbox: jogo sendo iniciado!");
    }

    configureGame(): void {
        this.authToken();
        console.log("Xbox: Carregando jogos");
    }
    authToken(): void {
        console.log("Xbox: Autorizando sessão");
    }

}