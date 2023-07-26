function exibeMedias(listaEstudantes){
  let notaMedia;
  
  for(let estudante of listaEstudantes){
    notaMedia = (estudante.primeiraNota + estudante.segundaNota) / 2.0;

    alert(`A média do(a) aluno(a) ${estudante.nome} é: ${notaMedia.toFixed(2)}
    \n${notaMedia >= 7.0 ? `Parabéns, ${estudante.nome}! Você foi aprovado(a) no concurso!` : `Não foi dessa vez, ${estudante.nome}! Tente novamente!`}`);
  } 
}

let nome, primeiraNota, segundaNota, resposta;
const listaEstudantes= [];

do{
  nome = prompt('Digite o nome do aluno(a)');
  primeiraNota = Number(prompt('Digite a primeira nota'));
  segundaNota = Number(prompt('Digite a segunda nota'));

  listaEstudantes.push({nome, primeiraNota, segundaNota});
  resposta = confirm('Deseja continuar?');
} while(resposta)

exibeMedias(listaEstudantes);