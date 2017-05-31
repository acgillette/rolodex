import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactData = [ {
  name: "A name",
  phone_num: "3057778888",
  email: "email@email.com"
}, {
  name: "Bo",
  phone_num: "2223334444",
  email: "bo@bo.com"
}];

var contactList = new Rolodex(contactData);

var renderList = function(contactList) {
  $('#contact-cards').empty();
  contactList.each(function(contact) {
    render(contact);
  });
};

var render = function(contact) {
  var templateText = $('#tmpl-contact-card').html();

  var templateObject = _.template(templateText);

  var compiledHTML = $(templateObject(contact.toJSON()));

  $('#contact-cards').append(compiledHTML);

};

$(document).ready(function() {
  renderList(contactList);
});
