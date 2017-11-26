var read = require('read-file-utf8')
var loki = require('lokijs');
var login = new loki('login.json');
var arquivo = read(__dirname + '/login.json');
window.Vue = require('vue');
login.loadJSON(arquivo);
// ----------------------------------------------------------------
var tbl_cadastro = login.getCollection('tbl_cadastro');
console.log("Usuarios: " + login.getCollection("tbl_cadastro").count());
//-----------------------------------------------------------------
// new Vue({
//   el: 'body', // Definindo um elemento
//   data: {
//     cadastro: []
//   },
//   ready: function() {
//     this.cadastro = tbl_cadastro.data;
//   },
//   // Acções do meu projeto
//   methods: {
//     fazerLogin: function() {
//       vNome = $("#vNome").val();
//       vSenha = $("#vSenha").val();
//       //result = tbl_cadastro.find({'nome': { '$eq' : vNome }} && {'senha': { '$eq' : vSenha }});
//       if (tbl_cadastro.find({'nome': { '$eq' : vNome }}) == false) {
//         alert('Usuario '+ vNome +' digitado está incorreto');
//       } else if (tbl_cadastro.find({'senha': { '$eq' : vSenha }}) == false) {
//           alert('Senha digitada está incorreta');
//       }else{
//           console.log('Nome: ' + vNome);
//           console.log('Senha: ' + vSenha);
//           console.log('Tudo ok');
//         }
//     }
//
//   }
// })
