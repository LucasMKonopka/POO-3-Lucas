import TransportadoraAdapters from "./adapters/TransportadoraAdapters";
import ICorreios from "./correios/interfaces/ICorreios";
import Transportadora from "./transportadora/Transportadora";

const entrega : ICorreios = new TransportadoraAdapters(new Transportadora);
entrega.sendCorreios();
entrega.receiveCorreios();
