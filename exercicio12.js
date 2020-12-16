//12) Faça uma função que receba um objeto que explica a quantidade de cada
// animal (vaca, coruja, porco) e retorne o total de patas. Uma vaca e um porco
// têm 4 patas. 1 coruja tem 2 patas.
// getLegsAmount ({vaca: 1, coruja: 2, porco: 2})
// getlagsAmount ({vaca: 8, coruja: 3, porco: 12})

const getLegsAmount = (obj) => {
    let a = obj.vaca * 4 + obj.coruja * 2 + obj.porco * 4
    return a 

}
console.log(getLegsAmount({vaca: 1, coruja: 2, porco: 2}))