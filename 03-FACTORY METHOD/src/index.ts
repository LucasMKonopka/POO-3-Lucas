import CarTransport from "./transport/CarTransport";
import Transport from "./transport/Transport";
import MotorcycleTransport from "./transport/MotorcycleTransport";

declare var process;

let transport : Transport;
if(process.argv.includes("uber")){
    transport = new CarTransport();
}else if(process.argv.includes("eats")){
    transport = new MotorcycleTransport();
}else{
    console.log("Selecione o tipo correto de transporte!");
}
if(transport){
    transport.startTransport();
}