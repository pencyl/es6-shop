class Person {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }

}

class Introvert extends Person {

    constructor(options) {
        super(options);
        this.quiet = true;
    }

    getName() {
        const name = super.getName();
        return `${name} is quiet`;
    }

}

const person = new Introvert('Don');
person.name; //Don
console.log(person.name)
person.quiet; //true
console.log(person.getName()); //Don is quiet
