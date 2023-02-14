/** Deklarasi biasa */
const firstName = 'Nadhea';
const lastName = 'Deni Putri';
const getName = () => {
    const fullName = `${firstName} ${lastName}`;
    return fullName;
};

console.log(firstName); // Nadhea
console.log(getName()); // Nadhea Deni Putri

/** Immediately Invoked Function Expression */
(() => {
    const firstName = 'Nadhea';
    const lastName = 'Deni Putri';
    const getName = () => {
        const fullName = `${firstName} ${lastName}`;
        return fullName;
    };

    console.log(firstName); // Nadhea
    console.log(getName()); // Nadhea Deni Putri
})();

console.log(firstName); // undefined
console.log(getName()); // undefined
