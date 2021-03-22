// contacts.js

const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

//  Раскомментируй и запиши значение
const contactsPath = path.join(__dirname, "./db/contacts.json");

async function readFile(path) {
  const fileData = await fs.readFile(path, "utf-8");
  const contacts = JSON.parse(fileData);
  return contacts;
}

// TODO: задокументировать каждую функцию
async function listContacts() {
  // ...твой код
  const contacts = await readFile(contactsPath);
  return console.table(contacts);
}

async function getContactById(contactId) {
  // ...твой код
  const contacts = await readFile(contactsPath);
  const contact = contacts.find((el) => el.id === contactId);
  return console.table(contact);
}

async function removeContact(contactId) {
  // ...твой код
  const contacts = await readFile(contactsPath);
  const idx = contacts.findIndex((el) => el.id === contactId);
  if (idx !== -1) {
    const deleteContact = contacts[idx];
    contacts.splice(idx, 1);
    console.log("Удаляем контакт", deleteContact);
  }

  const updatedContacts = JSON.stringify(contacts);
  const updatedData = await fs.writeFile(contactsPath, updatedContacts);
  console.table("Таблица контактов после удаления контакта", contacts);
  return console.table(contacts);
}

async function addContact(name, email, phone) {
  // ...твой код
  const contacts = await readFile(contactsPath);
  const newContact = {
    id: v4(),
    name: name,
    email: email,
    phone: phone,
  };
  contacts.push(newContact);
  console.log("Добавляем контакт", newContact);
  const updatedContacts = JSON.stringify(contacts);
  const updatedData = await fs.writeFile(contactsPath, updatedContacts);
  return console.table(contacts);
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
