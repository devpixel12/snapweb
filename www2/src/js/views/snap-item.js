// snap item view
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var template = require('../templates/snap-item.hbs');

module.exports = Marionette.ItemView.extend({
  className: 'bask__snap',
  template: function(model) {
    return template(model);
  },
  ui: {
    icon: '.bask__snap-icon',
    name: '.bask__snap-name'
  },
  events: {
    'mouseover @ui.icon': 'hoverIcon',
    'mouseover @ui.name': 'hoverName'
  },
  hoverIcon: function(e) {
    console.log(this.model.get('name'));
  }
});
