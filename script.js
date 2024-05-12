async function fetchConfig(id) {
    return fetch(`https://nwa.dewsverse.space/api/w?id=${id}`, {
        mode: "cors"
    })
        .then((response) => response.json())
        .then((data) => { return data })
        .catch((error) => console.error("Error:", error));
}
