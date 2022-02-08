import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop'

export default Route.extend({
  dataService: service('data'),

  model() {
    return new Promise((resolve, reject) =>{

      later(async() => {
      try {
        let books = await this.get("dataService").getBooks();
        resolve(books);
      }
      catch (e) {
        reject('error')
      }
      }, 2000 );
    });
  }
});
