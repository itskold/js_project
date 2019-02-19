let lesInputs = document.getElementsByTagName('input')
let leBody = document.getElementsByTagName('body')[0]
let leH1Header = document.getElementById('nav').getElementsByTagName('h1')[0]
let leHeader = document.getElementById('nav')
let laNavBar = document.getElementById('nav').getElementsByTagName('a')
let leBanner = document.getElementById('banner')
let leFooter = document.getElementsByTagName('footer')[0]
let leBgCatalog = document.getElementById('catalog').getElementsByTagName('img') // utilisation bgDark
let leH1Product = document.getElementById('product').getElementsByTagName('h1')[0]
let lesNomProduits = document.getElementById('product').getElementsByClassName('zoom') // rajouter le nextElement pour cibler les P
let leH1HotClothe = document.getElementById('hotClothes').getElementsByTagName('h1')[0]
let lesNomHotClothe = document.getElementById('hotClothes').getElementsByClassName('carousel-inner')[0].getElementsByTagName('img') // rajouter le nextElement pour cibler les P
let lesBorderInfo = document.getElementById('info').getElementsByClassName('col-sm-4')

// BOUTON NOIR
lesInputs[5].addEventListener('click',()=>{
    
    leBody.classList.toggle('bg-noir')
    leHeader.classList.toggle('bg-white')
    leHeader.classList.toggle('bg-noir')
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
    lesInputs[6].classList.toggle('modeDark')
    lesInputs[5].classList.toggle('bg-noir')
    console.log(laNavBar[1])
})
// BOUTON BlANC
lesInputs[6].addEventListener('click',()=>{
    leBody.classList.toggle('bg-noir')
    leHeader.classList.toggle('bg-white')
    leHeader.classList.toggle('bg-noir')
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
    lesInputs[6].classList.toggle('modeDark')
    lesInputs[5].classList.toggle('bg-noir')
    console.log(laNavBar[1])
})
// BOUTON CONNEXION
let leModal = document.getElementById('modal')
let exitButton = document.getElementsByTagName('i')[0]
let contentModal = document.getElementsByClassName('content')[0]
let buttonConnect = document.getElementsByTagName('button')[0]
let buttonSub = document.getElementsByTagName('button')[1]
let lesH2 = document.getElementsByTagName('h2')
let lesP = document.getElementsByTagName('p')
let title = document.getElementsByTagName('h1')[0]
let profil = document.getElementsByTagName('i')[1]

let sub = false
let subValid = false

let retirerContent = ()=>{
    leModal.classList.add('d-none')
    leModal.classList.remove('d-flex')
}

lesInputs[7].addEventListener('click',()=>{
    leModal.classList.remove('d-none')
    leModal.classList.add('d-flex')
    contentModal.classList.remove('zoomOut')
    contentModal.classList.add('zoomIn')
    exitButton.addEventListener('click',()=>{
        contentModal.classList.remove('zoomIn')
        contentModal.classList.add('zoomOut')
        setTimeout(()=>{
            retirerContent()
        },450)
    })
    buttonConnect.addEventListener('click',()=>{
        if(lesInputs[3].value.length==0 && lesInputs[4].value.length==0){
            lesH2[0].classList.remove('d-none')
            lesH2[0].innerText = "Veuillez remplir les champs"
            lesH2[0].classList.add('text-warning')
            lesH2[0].classList.remove('text-danger')
        } else if(lesInputs[3].value.length>0 && lesInputs[4].value.length>0){
            lesH2[0].classList.remove('d-none')
            lesH2[0].innerText = "Compte inexistant!"
            lesH2[0].classList.add('text-danger')
            lesH2[0].classList.remove('text-warning')
        } else if(lesInputs[3].value.length==0){
            lesH2[0].classList.remove('d-none')
            lesH2[0].innerText = 'Login undefined!'
            lesH2[0].classList.add('text-danger')
            lesH2[0].classList.remove('text-warning')
        } else if(lesInputs[4].value.length==0){
            lesH2[0].classList.remove('d-none')
            lesH2[0].innerText = 'Password undefined!'
            lesH2[0].classList.add('text-danger')
            lesH2[0].classList.remove('text-warning')
        }

    })
    buttonSub.addEventListener('click',()=>{
        if (sub==false){lesInputs[2].classList.remove('d-none')
        title.innerText = "INSCRIPTION"
        lesP[0].classList.remove('d-none')
        lesInputs[0].classList.add('d-block')
        lesP[1].classList.remove('d-none')
        lesInputs[1].classList.add('d-block')
        lesP[2].classList.remove('d-none')
        lesInputs[2].classList.add('d-block')
        lesH2[0].classList.add('d-none')
        buttonConnect.classList.add('d-none')
        buttonSub.innerText ="INSCRIPTION & CONNEXION"
        buttonSub.classList.remove('btn-info')
        buttonSub.classList.add('btn-success')
        contentModal.classList.remove('zoomIn')
        contentModal.classList.add('zoomIn')
        sub = true
    }
    else if(sub==true){
        title.innerText = "CONNEXION"
        lesInputs[0].classList.add('d-none')
        lesInputs[0].classList.remove('d-block')
        lesP[0].classList.add('d-none')
        lesInputs[1].classList.add('d-none')
        lesInputs[1].classList.remove('d-block')
        lesP[1].classList.add('d-none')
        lesInputs[2].classList.add('d-none')
        lesInputs[2].classList.remove('d-block')
        lesP[2].classList.add('d-none')
        buttonSub.innerText ="CONNEXION"
        subValid = true
        lesInputs[7].value= `${lesInputs[1].value} ${lesInputs[0].value}`
        contentModal.classList.remove('zoomIn')
        contentModal.classList.add('zoomOut')
        setTimeout(()=>{
            retirerContent()
        },450)

    }
    
    })
})
document.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop>600){
        leHeader.classList.add('stickyElem')
        leH1Header.classList.add('d-none')
        leBanner.classList.add('bouf')
        leH1Header.classList.add('translate')
    } else{
        leHeader.classList.remove('stickyElem')
        leH1Header.classList.remove('d-none')
        leBanner.classList.remove('bouf')
    }
})