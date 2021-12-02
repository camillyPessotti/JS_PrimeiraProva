let pokemon = document.location.search;

pokemon = pokemon.substring(1);

// fetch(`https://fake-github.herokuapp.com/api/search/${user}/repos`)
//     .then(function(resultado) {
//         resultado.json().then(function(repos) {
//             repos.forEach(ddfunction(e) {
//                 mostrarRepos(e.name, e.svn_url);
//             });
//         });
//     }).catch(function(error) {
//         console.log("Error: ", error);
//     });

let header = document.querySelector('header');

let logo = document.createElement('div');
logo.className = 'logo';
header.appendChild(logo);


let imagem = document.createElement("img");
imagem.src = "https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png";
logo.appendChild(imagem);


let main = document.querySelector('main');