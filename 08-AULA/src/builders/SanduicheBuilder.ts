import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import Sauces from "../components/Sauces";
import SanduicheType from "../components/SaunduicheType";
import Sanduiche from "../products/Sanduiche";

import IBuilder from "./interface/IBuilder";

export default class SanduicheBuilder implements IBuilder{

    private sanduiche = new Sanduiche();

    reset(): void {
       this.sanduiche = new Sanduiche();
    }
    getSanduiche(): Sanduiche{
        const result : Sanduiche = this.sanduiche;
        this.reset();
        return result;
    }
    setSanduicheType(value: SanduicheType) {
        this.sanduiche.sanduicheType = value;
    }
    setBread(bread: Bread) {
        this.sanduiche.bread = bread;
    }
    setProtein(protein: Protein) {
        this.sanduiche.protein = protein;
    }
    setSalad(salad: Salad) {
        this.sanduiche.salad = salad;
    }
    addSauces(sauce: Sauces) {
        this.sanduiche.addSauces(sauce);
    }
    
}