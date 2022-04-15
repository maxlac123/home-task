import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ["search", "tag_like"],
  search: '',
  tag_like: '',
  dataService: service('data'),
  actions: {
    async getBook(e) {
      e.preventDefault();

      await this.get('dataService').editBooks({
        id: this.get('id'),
      });

      this.transitionToRoute('edit-books');


    },
    async deleteBooks(books) {
      await books.destroyRecord();

      this.transitionToRoute('books.index')
    }
  }
});
