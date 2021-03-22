const contactsOperation = require("./contacts");
const argv = require("yargs").argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list":
        // ...
        contactsOperation.listContacts();
        break;

      case "get":
        // ... id
        contactsOperation.getContactById(id);
        break;

      case "add":
        // ... name email phone
        contactsOperation.addContact(name, email, phone);
        break;

      case "remove":
        // ... id
        contactsOperation.removeContact(id);
        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (err) {
    console.log(err);
  }
}

invokeAction(argv);
