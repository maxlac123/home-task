import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('books', EmberObject.create())
    this.get('books').set('book', '');
    this.get('books').set('author', '');
    this.get('books').set('page', '');
  },
  dataService: service('data'),
  actions: {
    async saveBooks(books) {
      await this.get('dataService').createBooks(books);

      this.transitionToRoute('books.index');
    }
  }
});
