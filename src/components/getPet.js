export const getPet = (pet_id, setPet, callback) => {
    let hs = new Headers();
    hs.append('Content-Type', 'application/json')
    const requestOptions = {
        method: 'GET',
        headers: hs
    };
    fetch(`https://pets.сделай.site/api/pets/${pet_id}`, requestOptions)
        .then(response => {
            return response.json();
        }).then(result => {
        setPet(result)
        if (typeof callback == 'function') callback(result);
    }).catch(error => console.log('error', error));
}

