import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop'

export default Route.extend({
  dataService: service('data'),
  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model({ search }) {
    let promise = new Promise((resolve, reject) =>{
      later(async() => {
      try {
        let speakers = search ? await this.get("dataService").getSpeakers(search) : await this.get("dataService").getSpeakers()
        resolve(speakers);
      }
      catch (e) {
        reject('error')
      }
      }, 1000 );
    }).
    then((speakers) => {
      this.set('controller.model', speakers);
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
    refreshSpeakers() {
      this.refresh;
    },
    loading(transition, originRoute) {
      return false;
    }
  }
});
