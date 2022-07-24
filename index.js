class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    run(s) {
        return `Speed ${s * this.age}`;
    }
}

const dog2 = new Dog('Sam', 6);
const dog3 = new Dog('Petya', 7);

console.log(dog2)
console.log(dog3)
console.log(dog2.run(3))
console.log(dog3.run(2))

