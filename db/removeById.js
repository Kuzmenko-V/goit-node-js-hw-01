const getContacts = require("./getContacts");
const updateContacts = require("./updateContacts");

const removeById = async (id) => {
    const contacts = await getContacts();
    const idx = contacts.findIndex(item => item.id === id);
    if (idx === -1) { return null; }
    contacts.splice(idx, 1);
    await updateContacts(contacts);
    return true;
}

module.exports = removeById;