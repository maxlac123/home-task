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
  this.route('speakers');
  this.route('error', { path: '/:error'});
  this.route('404', { path: '*path'});
  this.route('books-create');
  this.route('edit-books', { path: '/:id/edit-books' });
});

export default Router;
