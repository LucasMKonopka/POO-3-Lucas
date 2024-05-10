import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import Sauces from "../components/Sauces";
import SanduicheType from "../components/SaunduicheType";

export default class Sanduiche{
    
    private _sanduicheType: SanduicheType;
    
    private _sauces : Sauces[] = [];
    private _bread : Bread;
    private _protein : Protein;
    private _salad : Salad;


    public get sanduicheType(): SanduicheType {
        return this._sanduicheType;
    }
    public set sanduicheType(value: SanduicheType) {
        this._sanduicheType = value;
    }
    
    public get bread() {
        return this._bread;
    }
    public set bread(value) {
        this._bread = value;
    }
    
    public get protein() {
        return this._protein;
    }
    public set protein(value) {
        this._protein = value;
    }
    
    public get salad() {
        return this._salad;
    }
    public set salad(value) {
        this._salad = value;
    }
    
    public get sauces() {
        return this._sauces;
    }
    public set sauces(value) {
        this._sauces = value;
    }

    public addSauces(sauce : Sauces){
        this._sauces.push(sauce);
    }

}