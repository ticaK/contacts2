import axios from 'axios'

class ContactsService {
    getAll(){
        return axios.get('http://localhost:8000/api/contacts')
    }

    create(contact) {
        return axios.post('http://localhost:8000/api/contacts',contact);
    }

}

export const contactsService= new ContactsService();