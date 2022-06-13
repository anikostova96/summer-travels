const host = 'http://localhost:3030';

async function getAll() {
    const res = await fetch(`${host}/data/trips?sortBy=_createdOn%20desc`);
    const result = await res.json();
    return result
}


export { getAll };