const cargarAPI = document.querySelector('#cargarAPI');

cargarAPI.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(res => {
            return res.json()
        }).then(rest => mostraHTML(rest))

}

function mostraHTML(datos) {
    const contenido = document.querySelector('.contenido');

    let html = '';
    datos.forEach(perfil => {
        const { author, post_url } = perfil;

        html += `
        <p>Autor: ${author}</p>
        <a href="${post_url} " target="_blank">Ver Imagen</a>
        `
    });
    //const {}
    contenido.innerHTML = html
}