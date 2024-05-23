import Youtube from "./platforms/Youtube";
import IPlatform from "./platforms/interfaces/IPlatform";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform : IPlatform){
    console.log("Aguarde...");
    const live = new Live(platform);
    live.broadcasting();
    live.result();
}

function startAdvancedLive(platform : IPlatform){
    console.log("Aguarde...");
    const live = new AdvancedLive(platform);
    live.broadcasting();
    live.result();
    live.subtitles();
    live.comments();
    console.log("---------------------------");
}

startAdvancedLive(new Youtube());
startLive(new Youtube());