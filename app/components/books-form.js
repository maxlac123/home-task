import Component from '@ember/component';

export default Component.extend({
  actions: {
    submitForm(e) {
      e.preventDefault();

      this.onsubmit({
        id: this.get('idBooks'),
        book: this.get('book'),
        author: this.get('author'),
        page: this.get('page'),
        tags: this.get('tags'),
      });

    },
  },
  didReceiveAttrs() {
    this._super(...arguments);
    // this.set('firstName', this.get('books.book'));

    this.setProperties({
      idBooks: this.get('books.id') ? this.get('books.id') : undefined,
      book: this.get('books.book'),
      author: this.get('books.author'),
      page: this.get('books.page'),
      tags: this.get('books.tags'),
  });
},
});
