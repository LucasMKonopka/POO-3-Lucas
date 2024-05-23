import IPlatform from "./interfaces/IPlatform";

export default class Twitch implements IPlatform{

    constructor(){
        this.configureRMTP();
        console.log("Twitch: Plataforma configurada!")
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Twitch: Configurando Broadcasting.");
    }
    authToken(): void {
        throw new Error("Twitch: Autorizando a plataforma.");
    }

}