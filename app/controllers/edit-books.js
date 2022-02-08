import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
     async saveBooks(books) {
      await this.get('dataService').updateBooks(books);

      this.transitionToRoute('books.index');
    }
  }
});
