function easy(element) {
  return document.querySelector(element);
}
var dados,// recebe os dados da api
  imag, x,
  nome;

var img = easy('#img'); // imagem 
var pokename = easy('#name');// input do nome
var Id = easy('.id');
var pnome = easy('.pokename')
var tipo = easy('.tipo');
var hab = easy('.habilidades')
var searchbut = easy('.button')
var altura = easy('.altura')
var peso = easy('.peso')
var conteiner = easy('.conteiner')

function pegarAPI(url, name) {
  fetch(url + name)
    .then(response => response.json())
    .then(data => {
      dados = data;
    })
    .catch(err => console.log(err))
}
function iniciapp(nome) {
  pegarAPI('https://pokeapi.co/api/v2/pokemon/', nome)


  setTimeout(function () {
    atribui();
  }, 500);
}

function atribui() {
  pnome.innerHTML = `${dados.name}`
  Id.innerHTML = `Nº:${dados.id}`;
  img.src = dados.sprites.front_default;
  tipo.innerHTML = `TIPO: ${dados.types.map(item => ' ' + item.type.name.toString())} `; // PENDENCIA .MAP
  hab.innerHTML = dados.moves.map(item => ' ' + item.move.name.toString())
  var weight = dados.weight * 0.1;
  var height = dados.height * 0.1;
  peso.innerHTML = `PESO:${parseFloat(weight.toFixed(2))}kg`
  altura.innerHTML = `ALTURA: ${parseFloat(height.toFixed(2))}m`

}
