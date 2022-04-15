import DS from 'ember-data';

export default DS.JSONSerializer.extend({
   normalize(model, hash) {
     hash = this._super(...arguments);
    //  let hashCopy = Object.assign({}, hash);
    //  hashCopy.attributes = {};
    //  hashCopy.attributes.book = hashCopy.book;
    //  hashCopy.attributes.author = hashCopy.author;
    //  hashCopy.attributes.page = hashCopy.page;
    //  hashCopy.attributes.tags = hashCopy.tags;
    //  delete hashCopy.book;
    //  delete hashCopy.author;
    //  delete hashCopy.page;
    //  delete hashCopy.tags;
    //  hash = {
    //    data: hashCopy
    //  };
     return hash;
    },

  //   searialize(snapshot, options) {
  //     let json =  this._super(...arguments);
  //     json.type = snapshot.modelName;
  //     return json;
  //   }
});
