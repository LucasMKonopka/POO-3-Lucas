import SanduicheBuilder from "../builders/SanduicheBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import Sauces from "../components/Sauces";
import SanduicheType from "../components/SaunduicheType";

export default class Director{
    
    constructor(private builder : SanduicheBuilder){}

    constructorXBURGUER(){
        this.builder.setSanduicheType(SanduicheType.XBURGUER);
        this.builder.setBread(Bread.INTEGRAL);
        this.builder.addSauces(Sauces.BARBECUE);
        this.builder.addSauces(Sauces.MAIONESE);
        this.builder.setProtein(Protein.BOVINO);
        this.builder.setSalad(Salad.ALFACE);
    }


    constructorXSALADA(){
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setBread(Bread.FORMA);
        this.builder.addSauces(Sauces.MAIONESE);
        this.builder.addSauces(Sauces.KETCHUP);
        this.builder.setProtein(Protein.FRANGO);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.setSalad(Salad.PEPINO);
        this.builder.setSalad(Salad.REPOLHO);
        this.builder.setSalad(Salad.TOMATE);
    }


    constructorHOTDOG(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.HOTDOG);
        this.builder.setProtein(Protein.SALSICHA);
        this.builder.setProtein(Protein.SALSICHA);
        this.builder.addSauces(Sauces.KETCHUP);
        this.builder.addSauces(Sauces.MOSTARDA);
        this.builder.addSauces(Sauces.MAIONESE);

    }
}