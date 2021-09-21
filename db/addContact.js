const shortid = require('shortid');
const updateContacts = require("./updateContacts");
const getContacts = require("./getContacts");

const addContact = async (name='',email='',phone='') => {
    const contacts = await getContacts();
    const newContact = {
        id: shortid.generate(),
        name,
        email,
        phone        
};
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
}

module.exports =  addContact;
