import Component from '@ember/component';

export default Component.extend({
  actions: {
    submitForm(e) {
      e.preventDefault();

      this.onsubmit({
        book: this.get('book'),
      });

    },
    didReceiveAttrs() {
      this._super(...arguments);
      // this.set('firstName', this.get('books.book'));

      this.setProperties({
        book: this.get('books.book'),
    });
  },
  }
});
