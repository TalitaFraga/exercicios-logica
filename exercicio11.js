// 11) geralmente sites de notícias, blogs, etc têm o título da página em uma parte da URL. isso é importante caso o usuário queria identificar a notícia pela URL
//ou salvar nos favoritos. por exemplo, um artigo com o título "Apolo flagra Beto em cima de Tancinha no elevador" no G1 tem a URL 
//http://gshow.globo.com/novelas/haja-coracao/vem-por-ai/noticia/apolo-flagra-beto-em-cima-de-tancinha-no-elevador.ghtml.
// escreva uma função que receba o título de uma matéria e o transforme em uma parte da url.
// toUrl('Apolo flagra Beto em cima de Tancinha no elevador') => 'apolo-flagra-beto-em-cima-de-tancinha-no-elevador'
// toUrl('Casos de COVID aumentam') => 'casos-de-covid-aumentam'


const toUrl = (phrase) => {
    let words = phrase.split(" ")
    let algumaCoisa = words.join('-')
    let lower = algumaCoisa.toLowerCase()

    return lower
    
}
console.log(toUrl("Talita Daniele Lins Fraga"))

//OU


const toUrl = (phrase) =>  phrase.split(" ").join('-').toLowerCase()

console.log(toUrl("Talita Daniele Lins Fraga"))
