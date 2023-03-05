export const getUser = (token, setUser, callback) => {
    let hs = new Headers();
    hs.append('Content-Type', 'application/json')
    hs.append('Authorization', `Bearer ${token}`)
    const requestOptions = {
        method: 'GET',
        headers: hs
    };
    fetch('https://pets.сделай.site/public/api/users', requestOptions)
        .then(response => {
            return response.json();
        }).then(result => {
        setUser(result)
        if (typeof callback == 'function') callback(result);
    }).catch(error => console.log('error', error));
}