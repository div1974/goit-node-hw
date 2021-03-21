// contacts.js

const fs = require("fs").promises;
const path = require("path");

//  Раскомментируй и запиши значение
const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
  // ...твой код
  const data = await fs.readFile(contactsPath, "utf-8");
  return console.table(JSON.parse(data));
}

async function getContactById(contactId) {
  // ...твой код
  const data = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(data);
  const contact = contacts.find((el) => el.id === contactId);
  return console.table(contact);
}

async function removeContact(contactId) {
  // ...твой код
  const data = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(data);
  const idx = contacts.findIndex((el) => el.id === contactId);
  if (idx !== -1) {
    const deleteContact = contacts[idx];
    contacts.splice(idx, 1);
    console.log("Удаляем контакт", deleteContact);
  }

  const updatedContacts = JSON.stringify(contacts);
  const updatedData = await fs.writeFile(contactsPath, updatedContacts);
  console.table("Таблица контактов после удаления контакта", contacts);
  return console.table(JSON.parse(await fs.readFile(contactsPath, "utf-8")));
}

async function addContact(name, email, phone) {
  // ...твой код
  const data = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(data);
  const length = contacts.length;
  const newContact = {
    id: length + 1,
    name: name,
    email: email,
    phone: phone,
  };
  contacts.push(newContact);
  console.log("Добавляем контакт", newContact);
  const updatedContacts = JSON.stringify(contacts);
  const updatedData = await fs.writeFile(contactsPath, updatedContacts);
  return console.table(JSON.parse(await fs.readFile(contactsPath, "utf-8")));
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
