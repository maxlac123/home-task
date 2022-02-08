import Service from '@ember/service';
import ENV from 'task2/config/environment';


export default Service.extend({
  getBooks() {
    return fetch(`${ENV.backendURL}/books`).then((response) => response.json());
  },
  getBook(id) {
    return fetch(`${ENV.backendURL}/books/${id}`).then((response) => response.json());
  },

  deleteBooks(books) {
    return fetch(`${ENV.backendURL}/books/${books.id}`, { method: 'DELETE'});
  },

  createBooks(books) {
    return fetch(`${ENV.backendURL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(books)
    });
  },
  updateBooks(books) {
    return fetch(`${ENV.backendURL}/books/${books.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(books)
    });
  },

});
