let header = document.querySelector('header');

const pokemonNomes = [];

function criarLogo() {
    let logo = document.createElement('div');
    logo.className = 'logo';
    header.appendChild(logo);


    let imagem = document.createElement("img");
    imagem.src = "https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png";
    logo.appendChild(imagem);
};

criarLogo();

let main = document.querySelector('main');

function campoFiltro() {
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


    let buttonF = document.createElement('button');
    buttonF.innerText = 'Buscar';
    buttonFiltro.appendChild(buttonF);


    buttonF.onclick = function filtro() {
        let ul = document.getElementById("listaId");
        let li = ul.getElementsByTagName('li');

        for (let i = 0; i < li.length; i++) {
            let txtValue = pokemonNomes[i].name.toUpperCase();
            if (txtValue.toUpperCase().indexOf(input.value.toLocaleUpperCase()) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            };
        };
    };
};

campoFiltro();

function criarLista() {
    let divLista = document.createElement('div');
    divLista.className = 'divLista';
    main.appendChild(divLista);


    let lista = document.createElement('ul');
    lista.id = 'listaId';
    divLista.appendChild(lista);


    fetch('https://prof-poke-api.herokuapp.com/api/pokedex/')
        .then(function(resultado) {
            resultado.json().then(function(data) {
                data.forEach(function(e) {
                    mostrarDados(e.url_icon, e.url_icon_2, e.name, e.id);
                    pokemonNomes.push({ name: e.name });
                });
            });
        }).catch(function(error) {
            console.log("Error: ", error);
        });

    function mostrarDados(url_icon, url_icon_2, name, id) {
        let icon = document.createElement('img');
        icon.src = url_icon;
        icon.className = 'icon';
        icon.style.width = '50px';
        icon.style.height = '50px';

        icon.onerror = function() {
            icon.src = url_icon_2;
        };

        let linha = document.createElement('li');

        let divPokemon = document.createElement('div');
        divPokemon.className = 'divPokemon';

        divPokemon.appendChild(icon);

        let nome = document.createElement('p');
        nome.innerText = name;

        divPokemon.appendChild(nome);

        linha.appendChild(divPokemon);

        lista.appendChild(linha);

        let buttonId = document.createElement('button');
        buttonId.className = "buttonId";
        buttonId.innerText = "Clique aqui";

        buttonId.onclick = function() {
            location.href = `./pokemonPage/pokemon.html?${id}/`;
        };

        linha.appendChild(buttonId);
    };
};

criarLista();