import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalize(model, hash) {
    return this._super(...arguments);
  },

  keyForRelationship(key, typeClass, method){
    if (typeClass === 'belongsTo') {
      return `${key}Id`;
    }

    return this._super(...arguments);
  },

  extractRelationship(relationshipModelName, relationshipHash) {
    let hash = relationshipHash.id ? relationshipHash.id : relationshipHash;
    return this._super.call(this, relationshipModelName, hash);
  }
});
