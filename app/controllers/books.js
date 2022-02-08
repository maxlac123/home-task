import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async getBook(e) {
      e.preventDefault();

      await this.get('dataService').editBooks({
        id: this.get('id'),
      });

      this.transitionToRoute('edit-books');


    }
  }
});
