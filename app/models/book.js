import DS from 'ember-data';

export default DS.Model.extend({
  book: DS.attr('string'),
  author: DS.attr('string'),
  page: DS.attr('number'),
  tags: DS.attr('string'),

  speaker: DS.hasMany('speaker')
});
