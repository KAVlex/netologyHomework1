"use strict";

class Pokemon {
  constructor(name, level) {
      this.name = name;
      this.level = level;
  }

  show(){
    console.log(`Покемон - ${this.name}, уровень - ${this.level}`);
  }

  valueOf(){
    return this.level;
  }
}

class PokemonList extends Array{

  add(name, level){
    super.push(new Pokemon(name, level));
  }

  show(){
    console.log('=================================');
    console.log(`Всего покемонов - ${this.length}`);
    this.map(pokemon => pokemon.show());
    console.log('=================================');
  }

  max(){
    let maxLevel = Math.max(...this);
    return this.filter(pokemon => pokemon.level == maxLevel);
  }
}

var squirtle = new Pokemon('Сквиртл', 1);
var wartortle = new Pokemon('Вартортл', 2);

var lost = new PokemonList(squirtle, wartortle);
var found = new PokemonList(
    new Pokemon('Чармандер', 1),
    new Pokemon('Чармелеон', 2),
    new Pokemon('Чаризард', 3)
  );

lost.add('Бластойз', 3);  // Добавляем через метод add класса PokemonList
lost.push(new Pokemon('Бульбазавр', 1));   //Добавляем через метод push класса Array

found.add('Ивизавр', 2);
found.push(new Pokemon('Венузавр', 3));

console.log("Потерянные:");
lost.show();
console.log("Найденные:");
found.show();

found.push(lost.shift());
console.log("Потерянные после перемещения:");
lost.show();
console.log("Найденные после перемещения:");
found.show();

console.log("Найденные покемоны с максимальным уровнем:");
found.max().show();
