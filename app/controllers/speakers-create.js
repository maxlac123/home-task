import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('speakers', EmberObject.create())
    this.get('speakers').set('name', '');
    this.get('speakers').set('family', '');
    this.get('speakers').set('surname', '');
  },
  dataService: service('data'),
  actions: {
    async saveSpeakers(speakers) {
      await this.get('dataService').createSpeakers(speakers);

      this.transitionToRoute('speakers');
    }
  }
});
