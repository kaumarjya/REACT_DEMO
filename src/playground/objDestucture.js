//object destucuting
const book = {
  title: "Some book",
  author: "Some author ",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self" } = book.publisher;
console.log(publisherName);

//Array destucuting
const address = ["157 SC Chatterjee st", "Konnagar", "WB", "712235"];
const [, city, state, zip] = address;
console.log(`I am in ${city} ${state}.`);

const item = ["coffee (hot)", "10", "15", "25"];
const [itemName, , medium] = item;
console.log(`A medium ${itemName} costs ${medium}`);
