const host = 'http://localhost:3030';

async function login(data) {
    const res = await fetch(`${host}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await res.json();
    return result;
}

async function register(data) {
    const res = await fetch(`${host}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await res.json();
    return result;
}

async function logout() {
    const res = await fetch(`${host}/users/logout`);
    return res;
}


export {login, logout, register};