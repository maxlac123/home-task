import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop'

export default Route.extend({
  dataService: service('data'),
  queryParams: {
    search: {
      refreshModel: true
    },
    tag_like: {
      refreshModel: true
    }
  },

  model({ search, tag_like }) {
    let promise = new Promise((resolve, reject) =>{
      later(async() => {
      try {
        let books = search ? await this.get("dataService").getBooks(search) : await this.get("dataService").getBooks()
        resolve(books);
      }
      catch (e) {
        reject('error')
      }
      }, 1000 );
    }).
    then((books) => {
      this.set('controller.model', books);
    }).
    finally(() => {
      if (promise === this.get('modelPromise')) {
        this.set('controller.isLoading', false);
      }
    });

    this.set('modelPromise', promise);
    return { isLoading: true };
  },

  setupController(controller, model){
    this._super(...arguments);
    controller.set('isLoading', true);
  },
  actions: {
    refreshBooks() {
      this.refresh;
    },
    loading(transition, originRoute) {
      return false;
    }
  }
});
