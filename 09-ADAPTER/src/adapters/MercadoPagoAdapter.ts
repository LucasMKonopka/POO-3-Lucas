import MercadoPago from "../mercadoPago/MercadoPago";
import IPayPalPayment from "../paypal/interfaces/IPaypalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapters implements IPayPalPayment{

    constructor(private mercadopago : MercadoPago){
        console.log("Adaptando Mercado Pago no PayPal");
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.mercadopago.sendPayment();
    }
    paypalReceive(): void {
        this.mercadopago.receivePayment();
    }

}