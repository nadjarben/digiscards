import fetch from 'isomorphic-fetch';
import { API } from '../../utils/environment';

export const emailContactForm = data => {

    return fetch(`${API}/contact/mail`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
