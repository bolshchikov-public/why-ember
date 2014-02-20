/**
 * @name
 * @fileOverview
 * @author sergey
 */

'use strict';

var App = {
      user: {}
    },
    firstNameInput = $('#firstName'),
    lastNameInput = $('#lastName'),
    fullNameInput = $('#fullName');

// set initial values
fullNameInput.val(App.user.firstName + ' ' + App.user.lastName);

// bind events
firstNameInput.on('keyup', function () {
  App.user.firstName = firstNameInput.val();
  fullNameInput.val(firstNameInput.val() + ' ' + lastNameInput.val());
});

lastNameInput.on('keyup', function () {
  App.user.lastName = lastNameInput.val();
  fullNameInput.val(firstNameInput.val() + ' ' + lastNameInput.val());
});

window.App = App;