let lesInputs = document.getElementsByTagName('input')
let leBody = document.getElementsByTagName('body')[0]
let leH1Header = document.getElementById('nav').getElementsByTagName('h1')[0]
let leHeader = document.getElementById('nav')
let laNavBar = document.getElementById('nav').getElementsByTagName('a')
let leFooter = document.getElementsByTagName('footer')[0]
let leBgCatalog = document.getElementById('catalog').getElementsByTagName('img') // utilisation bgDark
let leH1Product = document.getElementById('product').getElementsByTagName('h1')[0]
let lesNomProduits = document.getElementById('product').getElementsByTagName('img') // rajouter le nextElement pour cibler les P
let leH1HotClothe = document.getElementById('hotClothes').getElementsByTagName('h1')[0]
let lesNomHotClothe = document.getElementById('hotClothes').getElementsByClassName('carousel-inner')[0].getElementsByTagName('img') // rajouter le nextElement pour cibler les P
let lesBorderInfo = document.getElementById('info').getElementsByClassName('col-sm-4')

// BOUTON NOIR
lesInputs[0].addEventListener('click',()=>{
    leBody.classList.toggle('bg-noir')
    leH1Header.classList.toggle('blanc')
    for(i=0;i<laNavBar.length;i++){
        laNavBar[i].classList.toggle('blanc')
    }
    for(i=0;i<leBgCatalog.length;i++){
        leBgCatalog[i].classList.toggle('modeDark')
    }
    leH1Product.classList.toggle('blanc')
    leH1HotClothe.classList.toggle('blanc')
    for(i=0;i<lesNomProduits.length;i++){
        lesNomProduits[i].nextElementSibling.classList.toggle('blanc')
    }
    for(i=0;i<lesNomHotClothe.length;i++){
        lesNomHotClothe[i].nextElementSibling.classList.toggle('blanc')
    }
    for(i=0;i<lesBorderInfo.length;i++){
        lesBorderInfo[i].classList.toggle('border-noir')
    }
    lesInputs[1].classList.toggle('modeDark')
    lesInputs[0].classList.toggle('bg-noir')
    console.log(laNavBar[1])
})
// BOUTON NOIR
lesInputs[1].addEventListener('click',()=>{
    leBody.classList.toggle('bg-noir')
    leH1Header.classList.toggle('blanc')
    for(i=0;i<laNavBar.length;i++){
        laNavBar[i].classList.toggle('blanc')
    }
    for(i=0;i<leBgCatalog.length;i++){
        leBgCatalog[i].classList.toggle('modeDark')
    }
    leH1Product.classList.toggle('blanc')
    leH1HotClothe.classList.toggle('blanc')
    for(i=0;i<lesNomProduits.length;i++){
        lesNomProduits[i].nextElementSibling.classList.toggle('blanc')
    }
    for(i=0;i<lesNomHotClothe.length;i++){
        lesNomHotClothe[i].nextElementSibling.classList.toggle('blanc')
    }
    for(i=0;i<lesBorderInfo.length;i++){
        lesBorderInfo[i].classList.toggle('border-noir')
    }
    lesInputs[1].classList.toggle('modeDark')
    lesInputs[0].classList.toggle('bg-noir')
    console.log(laNavBar[1])
})
// BOUTON CONNEXION
let leModal = document.getElementById('modal')
let titreConnect = document.getElementById('modal').getElementsByTagName('h1')[0]
let buttonConnect = document.getElementById('modal').getElementsByTagName('button')[0]
let buttonSub = document.getElementById('modal').getElementsByTagName('button')[1]
let lesH1 = document.getElementById('modal').getElementsByTagName('h1')
let connexion = document.getElementById('connexion')
let inscription = document.getElementById('inscription')



let CompteCreer = false

let afficheInscriptionNotDone =()=>{
    lesH1[0].classList.toggle('d-block')
    connexion.classList.toggle('d-block')
    inscription.classList.toggle('d-block')
}
let afficheInscriptionDone =()=>{
    connexion.classList.toggle('d-block')
    inscription.classList.toggle('d-block')
}
let successConnect =()=>{
    lesH1[1].classList.toggle('d-block')
    // let dispModal = leModal.classList.toggle('d-block')
}
let suppModal =()=>{
    leModal.classList.remove('d-block')
}

lesInputs[2].addEventListener('click',()=>{
    let dispModal = leModal.classList.toggle('d-block')
    connexion.classList.toggle('d-block')
    buttonConnect.addEventListener('click',()=>{
        if(CompteCreer==false){
            lesH1[0].classList.toggle('d-block')
            setTimeout(afficheInscriptionNotDone,5000)
            CompteCreer = true
        } else {
            successConnect()
            setTimeout(suppModal,1000)
        }
    })
    buttonSub.addEventListener('click',()=>{
        CompteCreer = true
        afficheInscriptionDone()
    })
})
document.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop>600){
        leHeader.classList.add('stickyElem')
        leH1Header.classList.add('logoDiff')
    } else{
        leHeader.classList.remove('stickyElem')
        leH1Header.classList.remove('logoDiff')
    }
})