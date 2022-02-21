import Service from '@ember/service';
import ENV from 'task2/config/environment';


export default Service.extend({
  //BOOKS
  getBooks(search) {
    let queryParams = '';
    if (search) {
      queryParams=`?q=${search}`;
    }

    return fetch(`${ENV.backendURL}/books${queryParams}`).then((response) => response.json());
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
  //SPEAKERS
  getSpeakers(search) {
    let queryParams = '';
    if (search) {
      queryParams=`?q=${search}`;
    }
    if (tag_like) {
      queryParams=`_like=${tag_like}`;
    }

    return fetch(`${ENV.backendURL}/speakers${queryParams}`).then((response) => response.json());
  },
  getSpeaker(id) {
    return fetch(`${ENV.backendURL}/speakers/${id}`).then((response) => response.json());
  },

  deleteSpeakers(speakers) {
    return fetch(`${ENV.backendURL}/speakers/${speakers.id}`, { method: 'DELETE'});
  },

  createSpeakers(speakers) {
    return fetch(`${ENV.backendURL}/speakers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speakers)
    });
  },
  updateSpeakers(speakers) {
    return fetch(`${ENV.backendURL}/speakers/${speakers.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speakers)
    });
  },

});
