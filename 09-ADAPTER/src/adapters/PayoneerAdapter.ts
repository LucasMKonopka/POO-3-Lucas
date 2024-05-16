import Payoneer from "../payoneer/Payoneer";
import IPayPalPayment from "../paypal/interfaces/IPaypalPayment";
import Token from "../utils/Token";

export default class PayonerAdapter implements IPayPalPayment{

    constructor(private payoneer: Payoneer){
        console.log("Adaptando Payoneer no PayPal");
    }
    

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.payoneer.sendPayment();
    }
    paypalReceive(): void {
        this.payoneer.receivePayment();
    }

}