const host = 'http://localhost:3030';

async function getAll() {
    const res = await fetch(`${host}/data/trips?sortBy=_createdOn%20desc`);
    const result = await res.json();
    return result
}

async function createTrip(data, token) {
    const res = await fetch(`${host}/data/trips`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });
    const result = await res.json();
    return result
}

async function myTripss(userId) {
    const res = await fetch(`${host}/data/trips?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    const result = await res.json();
    return result
}


export { getAll, createTrip, myTripss };