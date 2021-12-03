let id = document.location.search;

id = id.substring(1);

let header = document.querySelector('header');

let logo = document.createElement('div');
logo.className = 'logo';
header.appendChild(logo);


let imagem = document.createElement("img");
imagem.src = "https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png";
logo.appendChild(imagem);


let main = document.querySelector('main');

fetch(`https://prof-poke-api.herokuapp.com/api/pokemon/${id}`)
    .then(function(resultado) {
        resultado.json().then(function(data) {
            mostrarDados(data.url_icon, data.url_icon_2, data.name, data.atk, data.def, data.atks, data.defs);;

        });
    }).catch(function(error) {
        console.log("Error: ", error);
    });

function mostrarDados(url_icon, url_icon_2, name, atk, def, atks, defs) {
    let divNome = document.createElement('div');
    divNome.className = 'divNome';
    main.appendChild(divNome);


    let nome = document.createElement('p');
    nome.innerText = name;
    nome.className = 'nome';
    divNome.appendChild(nome);


    let divIcon = document.createElement('div');
    divIcon.className = 'divIcon';
    main.appendChild(divIcon);


    let icon = document.createElement('img')
    icon.src = url_icon;
    icon.style.width = '290px';

    icon.onerror = function() {
        icon.src = url_icon_2;
    }

    divIcon.appendChild(icon);

    let divPrincipal = document.createElement('div');
    divPrincipal.className = 'divPrincipal';
    main.appendChild(divPrincipal);


    let divNormal = document.createElement('div');
    divNormal.className = 'divNormal';
    divPrincipal.appendChild(divNormal);


    let ataque = document.createElement('p');
    ataque.innerText = 'Ataque: ' + atk;
    divNormal.appendChild(ataque);


    let defesa = document.createElement('p');
    defesa.innerText = 'Defesa: ' + def;
    divNormal.appendChild(defesa);



    let divEspecial = document.createElement('div');
    divEspecial.className = 'divEspecial';
    divPrincipal.appendChild(divEspecial);


    let ataqueEspecial = document.createElement('p');
    ataqueEspecial.innerText = 'Ataque especial: ' + atks;
    divEspecial.appendChild(ataqueEspecial);


    let defesaEspecial = document.createElement('p');
    defesaEspecial.innerText = 'Defesa especial: ' + defs;
    divEspecial.appendChild(defesaEspecial);
}