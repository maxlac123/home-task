import Component from '@ember/component';

export default Component.extend({
  actions: {
    submitForm(e) {
      e.preventDefault();

      this.onsubmit({
        id: this.get('idSpeakers'),
        name: this.get('name'),
        family: this.get('family'),
        surname: this.get('surname'),
      });

    },
  },
  didReceiveAttrs() {
    this._super(...arguments);
    // this.set('firstName', this.get('books.book'));

    this.setProperties({
      idSpeakers: this.get('speakers.id') ? this.get('speakers.id') : undefined,
      name: this.get('speakers.name'),
      family: this.get('speakers.family'),
      surname: this.get('speakers.surname'),
  });
},
});
