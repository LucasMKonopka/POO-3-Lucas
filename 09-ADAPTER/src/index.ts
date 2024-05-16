import MercadoPagoAdapters from "./adapters/MercadoPagoAdapter";
import PayonerAdapter from "./adapters/PayoneerAdapter";
import MercadoPago from "./mercadoPago/MercadoPago";
import Payoneer from "./payoneer/Payoneer";
import IPayoneerPayment from "./payoneer/interfaces/IPayoneerPayment";
import PayPal from "./paypal/PayPal";
import IPayPalPayment from "./paypal/interfaces/IPaypalPayment";

//const payment : IPayPalPayment = new PayPal();
//const payment : IPayPalPayment = new PayonerAdapter(new Payoneer);
//payment.paypalPayment();
//payment.paypalReceive();

const payment2 : IPayPalPayment = new MercadoPagoAdapters(new MercadoPago);
payment2.paypalPayment();
payment2.paypalReceive();