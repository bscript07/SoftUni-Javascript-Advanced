class Person {
    constructor(a, b, c, d) {
        this.firstName = a
        this.lastName = b
        this.age = c
        this.email = d
    }

    toString = () => `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
}