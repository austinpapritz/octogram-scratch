import { getProfileById } from '../fetch-utils.js';

window.addEventListener('load', async () => {
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const profileInfo = await getProfileById(id);
});
