let header = document.querySelector('header');

let logo = document.createElement('div');
logo.className = 'logo';
header.appendChild(logo);


let imagem = document.createElement("img");
imagem.src = "https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png";
logo.appendChild(imagem);


let main = document.querySelector('main');

let principal = document.createElement('div');
principal.className = 'principal';
main.appendChild(principal);


let inputFiltro = document.createElement('div');
inputFiltro.className = 'inputFiltro';
principal.appendChild(inputFiltro);


let input = document.createElement('input');
input.placeholder = 'Buscar pokémon';
inputFiltro.appendChild(input);


let buttonFiltro = document.createElement('div');
buttonFiltro.className = 'buttonFiltro';
principal.appendChild(buttonFiltro);


let button = document.createElement('button');
button.innerText = 'Buscar';
buttonFiltro.appendChild(button);

let divLista = document.createElement('div');
main.appendChild(divLista);

let lista = document.createElement('ul');
divLista.appendChild(lista);

fetch('https://prof-poke-api.herokuapp.com/api/pokedex/')
    .then(function(resultado) {
        resultado.json().then(function(data) {
            data.forEach(function(e) {
                mostrarDados(e.url_icon, e.name, e.id);
            });
        });
    }).catch(function(error) {
        console.log("Error: ", error);
    });

function mostrarDados(url_icon, name, id) {
    let icon = document.createElement('img');
    icon.url = url_icon;
    icon.className = 'icon';

    let linha = document.createElement('li');
    linha.innerText = icon + " -------- " + name;
    lista.appendChild(linha);

    let buttonId = document.createElement('button');
    buttonId.className = "buttonId"
    buttonId.innerText = "Clique aqui"

    buttonId.onclick = function() {
        location.href = `./pokemonPage/pokemon.html?${id}/`;
    }

    linha.appendChild(buttonId);

    icon.onerror = function() {
        icon.src = icon.url_icon_2;
    }
};

// filter(function(e){
//     if(e.startwith(input.value){
//     return e
//     }
// })