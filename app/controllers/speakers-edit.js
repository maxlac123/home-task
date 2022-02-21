import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
     async saveSpeakers(speakers) {
      await this.get('dataService').updateSpeakers(speakers);

      this.transitionToRoute('speakers');
    }
  }
});
