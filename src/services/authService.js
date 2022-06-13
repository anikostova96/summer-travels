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

async function logout(token) {
    const res = await fetch(`${host}/users/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    });
    return res;
}


export {login, logout, register};