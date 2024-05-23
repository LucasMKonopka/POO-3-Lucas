import IPlatform from "./interfaces/IPlatform";

export default class Facebook implements IPlatform{
 
    constructor(){
        this.configureRMTP();
        console.log("Facebook: Plataforma configurada!")
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: Configurando Broadcasting.");
    }
    authToken(): void {
        throw new Error("Facebook: Autorizando a plataforma.");
    }

}