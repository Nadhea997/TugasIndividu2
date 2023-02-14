/** Assign ke variabel */
const sayHay = () => {
    console.log('Hay, Nadhea Deni Putri');
};
const sayHello = () => {
    console.log('Hello, Nadhea Deni Putri');
};
sayHay(); // Hay, Nadhea Deni Putri
sayHello(); // Helo, Nadhea Deni Putri

/** Assing ke object */
const objs = { sayHay, sayHello };
objs.sayHay(); // Hay, Nadhea Deni Putri
objs.sayHello(); // Helo, Nadhea Deni Putri

/** Assign ke array */
const array = [sayHay, sayHello];
array[0](); // Hay, Nadhea Deni Putri
array[1](); // Helo, Nadhea Deni Putri

/** Parsing ke dalam argument */
const say = (method) => {
    method();
};
say(sayHay); // Hay, Nadhea Deni Putri
say(sayHello); // Helo, Nadhea Deni Putri
