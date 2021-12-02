let pokemon = document.location.search;

pokemon = pokemon.substring(1);

let header = document.querySelector('header');

let logo = document.createElement('div');
logo.className = 'logo';
header.appendChild(logo);


let imagem = document.createElement("img");
imagem.src = "https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png";
logo.appendChild(imagem);


let main = document.querySelector('main');

fetch(`https://prof-poke-api.herokuapp.com/api/pokemon/${id}/`)
    .then(function(resultado) {
        resultado.json().then(function(infos) {
            infos.forEach(function(e) {
                mostrarInfos(e.url_icon, e.url_icon_2, e.name.e.atk, e.def, e.atks, e.defs);
            });
        });
    }).catch(function(error) {
        console.log("Error: ", error);
    });

function mostrarDados(url_icon, url_icon_2, name, atk, def, atks, defs) {
    let icon = document.createElement('img')
    icon.src = url_icon;
}