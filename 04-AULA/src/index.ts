import GameLocation from "./Location/GameLocation";
import Location from "./Location/Location";
import MovieLocation from "./Location/MovieLocation";

declare var process;

let location : Location;
if(process.argv.includes("GTA")){
    location = new GameLocation();
}else if(process.argv.includes("Ate o ultimo homem")){
    location = new MovieLocation();
}else{
    console.log("Selecione o tipo correto de locacao!");
}

if(location){
    location.startItem();
}
