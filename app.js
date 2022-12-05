/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getProfiles } from './fetch-utils.js';

/* Get DOM Elements */
const profileList = document.querySelector('#profile-list');
/* State */

/* Events */
window.addEventListener('load', async () => {
    await getProfiles();
});
/* Display Functions */
