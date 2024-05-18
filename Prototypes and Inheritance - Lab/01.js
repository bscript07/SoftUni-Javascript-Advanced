function createPerson(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;

    return {

        _firstName: firstName,
        _lastName: lastName,

        get firstName() {
            return this._firstName;
        },

        set firstName(newFirstName) {
            this._firstName = newFirstName;
        },

        get lastName() {
            return this._lastName;
        },

        set lastName(newLastName) {
            this._lastName = newLastName;
        },

        get fullName() {
            return `${this._firstName} ${this._lastName}`;
        },

        set fullName(newFullName) {
            let parts = newFullName.split(" ");

            if (parts.length === 2) {
                this._firstName = parts[0];
                this._lastName = parts[1];
            }
        }
    }
}