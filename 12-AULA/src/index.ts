import Playstation from "./consoles/Playstation";
import Xbox from "./consoles/Xbox";
import IConsole from "./consoles/interfaces/IConsole";
import AdvancedPlay from "./play/AdvancedPlay";

function startAdvancedPlay(consoles : IConsole){
    console.log("Aguarde um instante");
    const play = new AdvancedPlay (consoles);
    play.playing();
    play.result();
    play.challenge();
}
startAdvancedPlay(new Playstation());
startAdvancedPlay(new Xbox());