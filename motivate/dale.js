var text  = ["Todo esforço tem a sua recompensa.", "A determinação de hoje é o sucesso de amanhã.", "A persistência é o caminho do êxito.", "O sucesso é uma consequência e não um objetivo.", "O segredo do sucesso é a constância do propósito.", "A confiança em si mesmo é o primeiro segredo do sucesso.", "O sucesso é uma viagem, não um ponto de destino.", "A disciplina é a parte mais importante do sucesso.", "Faça o que é certo, não o que é fácil.", "Para realizar coisas grandes, comece pequeno.", "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", "O único lugar onde o sucesso vem antes do trabalho é no dicionário.", "Simpatia para ganhar dinheiro: acorde cedo, tome banho e vá trabalhar.", "Se você quer ter algo que nunca teve, faça algo que nunca fez.", "Há quem invente desculpas para desistir. Eu invento desculpas para continuar.", "A distância entre sonhar e realizar é a vontade de chegar lá.", "O sacrifício é o intervalo entre o seu objetivo e a sua glória.", "Você tem medo de tentar ou de não conseguir?", "Se não puder fazer tudo, faça tudo que puder.", "Vá! E se der medo, vá com medo mesmo.", "Seja seu foco. Faça as coisas por você, não pelos outros.", "Lutar sempre, vencer às vezes, desistir nunca!", "Os homens de poucas palavras são os melhores.", "Se um homem não descobriu nada pelo qual morreria, não está pronto para viver.", "Não desperdice mais nenhum tempo discutindo sobre como um homem bom deveria ser. Seja um.", "Aquele que conheceu apenas a sua mulher, e a amou, sabe mais de mulheres do que aquele que conheceu mil.", "A paciência é uma virtude. E eu estou aprendendo a tê-la. É uma lição difícil.", "Se algo é importante o suficiente, você deve tentar. Mesmo se o resultado provável for o fracasso.", "Começar um negócio não é para todo mundo. O primeiro conselho que eu posso dar é: tenha um limite maior à dor.", "As pessoas deveriam ir atrás do que as faz feliz. Isso as fará ainda mais felizes do que qualquer outra coisa.", "Tudo bem ter seus ovos em apenas uma cesta, contanto que você controle o que acontece com essa cesta.", "Não crio empresas para criar empresas, mas para fazer as coisas.", "Na verdade, não li nenhum livro sobre gerenciamento de tempo.", "Algumas pessoas não gostam de mudanças, mas você precisa abraçar a mudança se a alternativa for um desastre.", "Não me diga o que você gosta, me diga do que você não gosta."]

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
shuffle(text)

console.log(text)

var x = text.length

sessionStorage.setItem("clickcountad", x) //7

var cc = 0

function clickCounter() {

    if (!localStorage.clickcount) {
        sessionStorage.setItem('clickcount', cc)
    }

    if (sessionStorage.clickcount >= x) {

        sessionStorage.setItem('clickcount', 0)

        cc = 0
        
        console.log("entro")
    }

    document.getElementById("colocartext").innerHTML = text[sessionStorage.clickcount]

    cc += 1;

    sessionStorage.setItem("clickcount", cc)

}
