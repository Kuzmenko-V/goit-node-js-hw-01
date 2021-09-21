const { program } = require("commander");
const contactsOperations = require('./db')

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const options = program.opts();

(async () => {
    const { action, id, name, email, phone } = options;
    switch (action) {
    case 'list':
      try {
        const result = await contactsOperations.getContacts();
        console.log(result);
      }
      catch (error) {
        console.log(error.massage);
      }
    break;

    case 'get':
            try {
            const result = await contactsOperations.getContactById(id);
            if (!result) { throw new Error(`Контакта с id=${id} не найдено`);}
            console.log(result);
        }
        catch (error) {
           console.log(error);
        }
    break;
    
    case 'add':
        try {
            const result = await contactsOperations.addContact(name,email,phone);
            console.log(result);
        }
        catch (error) {
            console.log(error.massage);
        }
    break;
        
    case 'update':
        try {
            const result = await contactsOperations.updateContactById(id, name, email, phone);
            if (!result) { throw new Error(`Контакта с id=${id} не найдено`);}
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    break;

    case 'remove':
        try {
            const result = await contactsOperations.removeById(id);
            if (!result) { throw new Error(`Контакта с id=${id} не найдено`);}
            console.log(`Контакт с id=${id} удален успешно`);
        }
        catch (error) {
            console.log(error);
        }    
    break;

    default:
      console.log("Неизвестная команда!");
  }
})();
