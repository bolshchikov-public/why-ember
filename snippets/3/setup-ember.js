/**
 * @name
 * @fileOverview
 * @author sergey
 */
'use strict';
var App = Ember.Application.create({
  user: Ember.Object.createWithMixins({
    fullName: function () {
      return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')
  })
});
App.addObserver('user.firstName', App, function () {
  console.log('first name has changed to: ' + this.get('user.firstName'));
});
