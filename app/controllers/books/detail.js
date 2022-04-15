import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  // refresh() {
  //   this._router._routerMicrolib.refresh(this);
  // },
  dataService: service('data'),
  actions: {
    async deleteBooks(books) {
        await books.destroyRecord();

        this.transitionToRoute('books.index');
    }
  }
});
