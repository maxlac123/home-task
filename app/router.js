import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', { path: '/books' }, function() {
    this.route('detail', { path: '/:id' });
  });
  this.route('error', { path: '/:error'});
  this.route('404', { path: '*path'});
  this.route('books-create');
  this.route('edit-books', { path: '/:id/edit-books' });
  this.route('speakers', { path: '/speakers' });
  this.route('speakers-create');
  this.route('speakers-edit', { path: '/:id/speakers-edit' });
});

export default Router;
