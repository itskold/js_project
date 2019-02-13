let lesInputs = document.getElementsByTagName('input')
let leBody = document.getElementsByTagName('body')[0]
let leH1Header = document.getElementById('nav').getElementsByTagName('h1')[0]
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
