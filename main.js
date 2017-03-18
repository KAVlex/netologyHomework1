"use strict";

class Pokemon {
  constructor(name, level) {
      this.name = name;
      this.level = level;
  }

  show(){
    console.log(`Покемон - ${this.name}, уровень - ${this.level}`);
  }
}

class PokemonList extends Array{
  constructor(...pokemons) {
    super(...pokemons);
  }

  add(name, level){
    super.push(new Pokemon(name, level));
  }
}
