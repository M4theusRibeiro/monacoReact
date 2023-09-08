export function executarSCript() {
  var conteudo = editor.getValue(); 
  conteudo = conteudo.replace("function exec() {", "");
  var alert = conteudo.replace("alert(", "");
  if(alert){
    console.innerHTML = "O uso de alert está bloqueado"
  }

  conteudo = conteudo.replace("}", "");
  console.log(conteudo)
  eval(conteudo);
}