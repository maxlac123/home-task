import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ["search"],
  search: '',
  dataService: service('data'),
  actions: {
    async getSpeakers(e) {
      e.preventDefault();

      await this.get('dataService').editSpeakers({
        id: this.get('id'),
      });

      this.transitionToRoute('speakers-edit');


    },
    async deleteSpeakers(speakers) {
      try{
        await this.get('dataService').deleteSpeakers(speakers);
        this.transitionToRoute('speakers');
      }
      catch(e){
        this.transitionToRoute('error');
      }
    }
  }
});
