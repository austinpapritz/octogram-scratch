import { decrementStars, getProfileById, incrementStars, upsertBio } from '../fetch-utils.js';

const avatarImg = document.querySelector('#avatar-image');
const usernameHeader = document.querySelector('.username-h2');
const profileDetail = document.querySelector('.profile-detail');
const starsDiv = document.querySelector('.stars-div');
const bioForm = document.querySelector('#bio-form');

const params = new URLSearchParams(location.search);
const id = params.get('id');

window.addEventListener('load', async () => {
    displayProfile();
});

async function displayProfile() {
    profileDetail.textContent = '';
    starsDiv.textContent = '';
    const profile = await getProfileById(id);

    usernameHeader.textContent = profile.data.username;
    avatarImg.src = profile.data.avatar_url;
    profileDetail.textContent = profile.data.bio;

    const profileStars = renderStars(profile.data);
    starsDiv.append(profileStars);
}

function renderStars({ stars, username, id }) {
    const p = document.createElement('p');
    const downButton = document.createElement('button');
    const upButton = document.createElement('button');

    const profileStars = document.createElement('div');

    profileStars.classList.add('profile-stars');
    profileStars.append(p, upButton, downButton);

    downButton.textContent = 'downvote user ⬇️';
    upButton.textContent = 'upvote user ⬆️';
    p.classList.add('profile-name');

    p.textContent = `${username} has ${stars} ⭐`;

    downButton.addEventListener('click', async () => {
        await decrementStars(id);
        await displayProfile();
    });

    upButton.addEventListener('click', async () => {
        await incrementStars(id);
        await displayProfile();
    });

    return profileStars;
}

bioForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(bioForm);
    const bio = formData.get('bio');
    await upsertBio(bio, id);
    bioForm.reset();
    await displayProfile();
});
