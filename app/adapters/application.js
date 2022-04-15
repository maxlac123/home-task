import DS from 'ember-data';
import ENV from 'task2/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.backendURL,

  init() {
    this._super(...arguments);
    this.set('headers', {
      'Content-Type': 'application/json'
    });
  },

  buildURL(modelName, id, snapshot, requerstType, query) {
    let url = this._super(...arguments);
    if (modelName === 'book' && requerstType === 'findRecord' && id){
      url += '?_embed=speakers';
    }
    if (modelName === 'speaker' && requerstType === 'findRecord' && id){
      url += '?_embed=reviews';
    }

    return url;
  }
});
