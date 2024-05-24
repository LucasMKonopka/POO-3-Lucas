import IConsole from "../consoles/interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{

    constructor(console : IConsole){
        super(console);
    }

    challenge(): void{
        console.log("Vença a partida no modo difícil!")
    }

}