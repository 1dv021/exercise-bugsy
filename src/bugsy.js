/**
 * Bugsy module.
 *
 * @module src/bugsy
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const mostWanted = require('./mostWanted')

/**
 * Returns the first gangster whoes full name matching the initials.
 *
 * @param {string} initials The initials of the full name to be found.
 * @returns {string} The first full name found matching the initials.
 */
function getGangster (initials) {
  // TODO: Fix the bug(s) in this function to get the tests to pass.
  let names = mostWanted.getNames()
  let theSuspect
  let name
  let initialsOfTheName

  do {
    name = names.next().value
    initialsOfTheName = mostWanted.getInitials(name)
    if (initials === initialsOfTheName) {
      theSuspect = name
    }
  } while (name)

  return theSuspect
}

exports.getGangster = getGangster
