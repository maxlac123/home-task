import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
     async saveBooks(books) {
      let booksModel = this.get('model');
      booksModel.set('book', books.book);
      booksModel.set('author', books.author);
      booksModel.set('page', books.page);
      booksModel.set('tags', books.tags);

      await booksModel.save();

      this.transitionToRoute('books.index');
    }
  }
});
