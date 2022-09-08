class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `nama ${this.name}, umur ${this.age} tahun, kaki ${this.legs}, spesies ${this.species}, status ${this.status}`;
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age)
        this.legs = 0;
        this.species = 'shark';
        this.status = status;
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age)
        this.legs = 4;
        this.species = 'cat';
        this.status = status;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age)
        this.legs = 4;
        this.species = 'dog';
        this.status = status;
        this.master = master;
    }
    GreetMaster() {
        return `Hello ${this.master}`
    }
    
}

module.exports = {
    Shark,
    Cat,
    Dog
}


