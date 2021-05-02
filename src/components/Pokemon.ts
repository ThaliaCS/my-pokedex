export interface PokemonInterface{

    name:string,
    url: string

}
export default class Pokemon {
    //private type: string;
    //private image: string;

    constructor(private name: string, private url: string){}
}

