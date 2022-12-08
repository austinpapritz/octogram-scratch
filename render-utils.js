export function renderProfiles(profile) {
    const linkA = document.createElement('a');
    const imgEl = document.createElement('img');
    const usernameP = document.createElement('p');

    linkA.classList.add('card');
    linkA.href = `../profiles/?id=${profile.id}`;

    imgEl.classList.add('avatar-home');
    imgEl.src = profile.avatar_url;
    imgEl.alt = 'avatar';

    usernameP.textContent = `${profile.username}`;
    usernameP.classList.add('username-home');

    linkA.append(imgEl, usernameP);
    return linkA;
}

export function renderMessages(messages) {
    const ul = document.createElement('ul');

    ul.classList.add('messages');

    for (let i = 0; i < messages.length; i++) {
        // for (let i = profile.messages.length - 1; i > -1; i--)
        //console.log('i', profile.messages[i]);
        const li = document.createElement('p');
        li.classList.add('message');

        const div = document.createElement('div');
        div.classList.add('message-info');

        const senderSpan = document.createElement('span');
        senderSpan.classList.add('from');
        senderSpan.textContent = messages[i].sender;

        const dateSpan = document.createElement('span');
        dateSpan.classList.add('created-date');
        dateSpan.textContent = new Date(messages[i].created_at).toLocaleString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        });

        const text = document.createElement('p');
        text.classList.add('text');
        text.textContent = messages[i].text;

        div.append(senderSpan, dateSpan);

        li.append(div, text);

        ul.append(li);
    }

    return ul;
}
