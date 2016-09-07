/**
 * Module for searching for a gangster.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let MostWanted = require('./MostWanted');

/**
 * Returns the first gangster whoes full name matching the initials.
 *
 * @param {String} initials The initials of the full name to be found.
 * @returns {String} The first full name found matching the initials.
 */
let getGangster = function(initials) {

  // TODO: Fix the bug(s) in this function to get the tests to pass.

  let names = MostWanted.getNames();
  let theSuspect;
  let name;
  let initialsOfTheName;

  do {
    name = names.next().value;
    initialsOfTheName = MostWanted.getInitials(name);
    if (initials === initialsOfTheName) {
      theSuspect = name;
    }
  } while (name);

  return theSuspect;
};

module.exports.getGangster = getGangster;
