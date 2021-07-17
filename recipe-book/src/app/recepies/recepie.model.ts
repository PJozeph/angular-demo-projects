import { Ingredient } from "../shared/ingredient.model";

export class Recepie {

    public id : number;
    public name : string;
    public description : string;
    public imagePath: string;
    public ingredinets : Ingredient []; 

    constructor(id: number, name : string, desc : string, imagePath : string, ingredinets : Ingredient [] ) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredinets = ingredinets;
    }

}