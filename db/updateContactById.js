const getContacts = require("./getContacts");
const updateContacts = require("./updateContacts");

const updateContactById = async (id, name='',email='',phone='') => {
    const contacts = await getContacts();
    const newContact = {
        id,
        name,
        email,
        phone        
    };
    const idx = contacts.findIndex(item => item.id == id);
    if (idx === -1) { return null; }
    contacts[idx] = {...contacts[idx], ...newContact};
    await updateContacts(contacts);
    return contacts[idx];
}

module.exports = updateContactById;