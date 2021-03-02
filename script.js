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
