// Script de pagina index.html
// Responsavel pela conexão com o Banco de Dados
// E algumas ações comportamentais


// Definindo variaveis para conexão
var read = require('read-file-utf8')
var loki = require('lokijs');
var db = new loki('db.json');
var data = read(__dirname + '/db.json');
window.Vue = require('vue');
db.loadJSON(data);

// Criando tabela (Collection)
var tbl_musicas = db.getCollection('tbl_musicas');
console.log(db);
new Vue({
  el: '#body',
  data: {
    tbl_musicas: [],
    mode: '',
    cadastro: {
      musica: '',
      artista: '',
      vocalista: '',
      vocalista2:'',
      tom: '',
      slide: ''
    },
    //openModal: false,
    //openModalExclusao: false
  },
  ready: function(){
    this.tbl_musicas = tbl_musicas.data;
    console.log(this.tbl_musicas);
  },
  methods: {
    editaCadastro: function(cadastro) {
      this.mode = 'editaMusica';
      //this.openModal = true;
      this.cadastro = cadastro;
    },
    novoCadastro: function () {
      this.mode = 'novaMusica';
      //this.openModal = true;
      this.cadastro = {
        musica: '',
        artista: '',
        vocalista: '',
        vocalista2:'',
        tom: '',
        slide: ''
      };
      // Capturar input file
      // $('#slide').change(function() {
      //   var arq = this.files[0];
      //   console.log(arq.path);
      // });
    },
    insereOuAlteraMusica: function(){
      if (typeof this.cadastro.$loki != 'undefined') {
        tbl_musicas.update(this.cadastro);
      }else {
        tbl_musicas.insert(this.cadastro);
      }
      db.save();
      this.openModal = false;
    },
    excluiMusica: function() {
      this.openModalExclusao = true;
      //tbl_musicas.findAndRemove({'musica': { '$eq' : x }});
      //db.save();
    },
    excluir: function() {
      var excluir = $("#exclua").val();
      console.log(excluir);
      if (excluir == "") {
        alert('Digite um registro para excuir!')
      }else {
        tbl_musicas.findAndRemove({'musica': { '$eq' : excluir }});
        this.openModalExclusao = false;
        db.save();
      }
    },
    pesquisaMusica : function(pesquisa) {
      pesquisa = $("#pesquisa").val();
      result = tbl_musicas.find({'musica': { '$contains' : pesquisa }});
      this.tbl_musicas = result;
      //console.log(this.tbl_musicas);
        //console.log(result);
      //alert('Botão em Manutenção');
    },
    abreArquivo: function () {
      slide = $("#slide").val();
      arquivo = tbl_musicas.find({'slide': { '$eq' : slide }});
      console.log(this.tbl_musicas);

    }
  }

})
