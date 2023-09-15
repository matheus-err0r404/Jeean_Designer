function escrevendoLetra(){
    function ativaLetra(elemento, delay) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, delay + 75 * i);
        });
    }
    
    const titulo1 = document.querySelector('.digitando1');
    const titulo2 = document.querySelector('.digitando2');
    
    ativaLetra(titulo1, 0);
    ativaLetra(titulo2,titulo2.innerHTML.length * 75 + 100);
    // usei esse comando para dar o efeito de 'Digitando...' ao texto.//

}

escrevendoLetra(); // Usa-se essa linha para chamar a função que está a cima. //



function menuMobol(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')
    
    
    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-xmark');
        navMenu.classList.toggle('ativado');
    }) // cód para a parte das tres barras virar um x. //
}

menuMobol();


//Parte dos botoes das imagens dos projetos!//

const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects_models ul li');
const buttonALL = document.querySelector('.projects_models .all');

listaALL.forEach((item)=>{
    item.classList.add('ativo');
})


function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    });
    buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach((event,index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index);
    })
})


function showLista(lista, buttom = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    });


    if(buttom == 'design'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
    }
    if(buttom == 'graphic'){
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
    }

    if(buttom == 'website'){
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }

    if(buttom == 'all'){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
            showLista(listaALL);
        }
        if(currentButton.classList.contains('design')){
            showLista(listaALL, "design");
        }
        if(currentButton.classList.contains('graphic')){
            showLista(listaALL, "graphic");
        }
        if(currentButton.classList.contains('website')){
            showLista(listaALL, "website");
        }
        if(currentButton.classList.contains('all')){
            showLista(listaALL, "all");
        }
    });
});

 



//PARTE PARA DEIXAR O EFEITO DE TRANSIÇÃO DE PAGINA MAIS SUAVE//

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });

    function scrollToSection(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll(".scroll-link");
    const externalLinks = document.querySelectorAll(".external-link");

    scrollLinks.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });

    externalLinks.forEach(link => {
        link.addEventListener("click", openInNewTab);
    });

    function scrollToSection(event) {
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }
    }

    function openInNewTab(event) {
        const targetUrl = this.getAttribute("href");

        if (targetUrl) {
            event.preventDefault();
            window.open(targetUrl, "_blank");
        }
    }
});


//PARTE DO FEEDBACK DIGITADO//

const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");

btn.onclick = ()=>{
  widget.style.display = "none";
  post.style.display = "block";
  editBtn.onclick = ()=>{
    widget.style.display = "block";
    post.style.display = "none";
  }
  return false;
}



