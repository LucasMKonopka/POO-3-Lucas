import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructorHOTDOG();
const hotdog : Sanduiche = builder.getSanduiche();
console.log("Fazendo Sanduiche");
console.log("Tipo: " +hotdog.sanduicheType);
console.log("Salada: "+hotdog.salad);
console.log("Pão: "+hotdog.bread);
console.log("Proteina: "+hotdog.protein);
console.log("Molho " +hotdog.sauces.length);
console.log("=================================");

director.constructorXBURGUER();
const xburguer : Sanduiche = builder.getSanduiche();
console.log("Fazendo Sanduiche");
console.log("Tipo: " +xburguer.sanduicheType);
console.log("Salada: "+xburguer.salad);
console.log("Pão: "+xburguer.bread);
console.log("Proteina: "+xburguer.protein);
console.log("Molho " +xburguer.sauces.length);
console.log("=================================");

director.constructorXSALADA();
const xsalada : Sanduiche = builder.getSanduiche();
console.log("Fazendo Sanduiche");
console.log("Tipo: " +xsalada.sanduicheType);
console.log("Salada: "+xsalada.salad);
console.log("Pão: "+xsalada.bread);
console.log("Proteina: "+xsalada.protein);
console.log("Molho " +xsalada.sauces.length);
console.log("=================================");