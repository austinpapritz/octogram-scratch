import { uploadImage } from '../fetch-utils.js';

const usernameForm = document.querySelector('#profile-form');

usernameForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = new FormData(usernameForm);
    const profileObject = {
        username: username.get('username'),
        bio: username.get('bio'),
    };
    // const imageFile = usernameForm.get('avatar');
    // if (imageFile.size) {
    //     const imagePath = `${user.id}/${imageFile.name}`;
    //     const url = await uploadImage(imagePath, imageFile);
    //     profileObject.avatar_url = url;
    // }
});
