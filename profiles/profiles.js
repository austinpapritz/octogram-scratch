import { getProfileById } from '../fetch-utils.js';

const avatarImg = document.querySelector('#avatar-image');
const usernameHeader = document.querySelector('.username-h2');
const profileDetail = document.querySelector('.profile-detail');
const params = new URLSearchParams(location.search);
const id = params.get('id');

window.addEventListener('load', async () => {
    displayProfile();
});

async function displayProfile() {
    profileDetail.textContent = '';
    const profile = await getProfileById(id);

    usernameHeader.textContent = profile.data.username;
    avatarImg.src = profile.data.avatar_url;
    profileDetail.textContent = profile.data.bio;
}
