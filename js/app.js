const mangas = [
    {id: "manga-01", title: "Jujutsu Kaisen N.01", price: 34.900, category: "fantasia", image:  "../images/mangas/jujutsuKaisen1.webp"},
    {id: "manga-03", title: "Death Note N.05", price: 50.000, category: "drama", image:  "../images/mangas/deathNote.jpg"},
    {id: "manga-04", title: "One Piece N.01", price: 80.000, category: "manga", image:  "../images/mangas/onePiece01.jpg"},
    {id: "manga-05", title: "Akuma no Riddle N.05", price: 30.000, category: "fantasia", image:  "../images/mangas/akumaNoRiddle.webp"},
    {id: "manga-05", title: "Akame ga Kill", price: 55.800, category: "manga", image:  "../images/mangas/akameGaKill01.jpg"},
    {id: "manga-06", title: "Death Note N.05", price: 50.000, category: "drama", image:  "../images/mangas/deathNote.jpg"},
    {id: "manga-07", title: "One Punch Man N.1", price: 100.000, category: "accion", image:  "../images/mangas/onePuchMan1.webp"},
    {id: "manga-08", title: "Kimetsu no Yaiba", price: 70.000, category: "manga", image:  "../images/mangas/demon.jpg"},
    {id: "manga-08", title: "Death Note N.05", price: 50.000, category: "manga", image:  "../images/mangas/deathNote.jpg"},
    {id: "manga-08", title: "Death Note N.05", price: 50.000, category: "drama", image:  "../images/mangas/deathNote.jpg"},
    {id: "manga-08", title: "Death Note N.05", price: 50.000, category: "manga", image:  "../images/mangas/deathNote.jpg"},
    {id: "manga-08", title: "Death Note N.05", price: 50.000, category: "manga", image:  "../images/mangas/deathNote.jpg"},
    {id: "manga-08", title: "Death Note N.05", price: 50.000, category: "manga", image:  "../images/mangas/deathNote.jpg"},
    {id: "manga-08", title: "Death Note N.05", price: 50.000, category: "manga", image:  "../images/mangas/deathNote.jpg"},
    {id: "manga-08", title: "Death Note N.05", price: 50.000, category: "manga", image:  "../images/mangas/deathNote.jpg"},
    {id: "manga-01", title: "Jujutsu Kaisen N.03", price: 34.900, category: "suspenso", image:  "../images/mangas/05223_272x272.avif"}
];

//constantes
const containerCards = document.getElementById("ContainerCards");
const selectProducts = document.getElementById("selectProduct");
const btnCreate = document.getElementById("btnCreate");
const modal = document.querySelector(".modal");
const closeModal = document.getElementById("closeModal");
const newProduct = document.getElementById("newProduct")
const newPrice = document.getElementById("newPrice");
const newCategory = document.getElementById("selectCategory");
const newImage = document.getElementById("newImage");
const btnNewProduct = document.getElementById("btnNewProduct");
const seekerMangas = document.getElementById("seekerMangas");
const containerShoppingBag = document.getElementById("containerShoppingBag");
const countProducts = document.getElementById("countProducts");
const containerBag = document.getElementById("containerBag");

//variables
let imgSelected = " ";
let idProduct = 0;

//Ejecutar despues de que cargue el DOM
window.addEventListener("load", () => {
    renderCards();
    counter();
});

//eventos
selectProducts.addEventListener("change", renderCards);
btnCreate.addEventListener("click", showModal);
btnNewProduct.addEventListener("click", createNewProduct);
newImage.addEventListener("change", importImg);
closeModal.addEventListener("click", close);
seekerMangas.addEventListener("input",  seeker);


//funciones

//abrir el modal para crear un nuevo producto
function showModal() {
    modal.style.display = "flex";
}

//cerrar el modal para crear un nuevo producto
function close() {
    modal.style.display = "none";
}

//importar la imagen del nuevo producto
function importImg(event) {
    const currentImg = event.target.files[0];
    const objetURL= URL.createObjectURL(currentImg);
    imgSelected = objetURL;
}

//crear un nuevo producto
function createNewProduct() {
    idProduct++; 
    const titleProduct = newProduct.value;
    const priceProduct = newPrice.value;
    const categoryProduct = newCategory.value;
    const id = idProduct;
    const newManga = {id: id, title: titleProduct, price: priceProduct, category: categoryProduct, image: imgSelected}
    mangas.push(newManga);
    renderCards();
    modal.style.display = "none";
}

//creacion de las card
function createCards(manga) {
    const {title, image, id, price} = manga;

    const card = document.createElement('div');
    card.classList.add("cardProduct");

    const containerImg = document.createElement('div')
    containerImg.classList.add("containerImages");

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src", image);
    imgCard.setAttribute("alt", `${id}-${title}`);
    imgCard.classList.add('imgProduct');


    const nameCard = document.createElement("p");
    nameCard.textContent = title;
    nameCard.classList.add("nameProduct");

    const priceCard = document.createElement("p");
    priceCard.classList.add("priceProduct");
    priceCard.textContent = price;

    const btnCard = document.createElement("button");
    btnCard.setAttribute("id", id);
    btnCard.classList.add("btnCard");
    btnCard.textContent = "Agregar al carrito";

    
    containerImg.appendChild(imgCard);

    card.appendChild(containerImg);
    card.appendChild(nameCard);
    card.appendChild(priceCard);
    card.appendChild(btnCard);

    containerCards.appendChild(card);
}


//filtro por categorias de los productos
function renderCards() {
    containerCards.innerHTML = "";
    const selectedCategory = selectProducts.value;
   
    mangas.forEach(manga => {
        if (selectedCategory === "todas" || manga.category === selectedCategory) {
            createCards(manga);
        } 
    });
}

//filtro por nombre de los productos
function seeker() {
    const searchTerm = this.value.toLowerCase();
    document.querySelectorAll(".cardProduct").forEach(card => {
        const title = card.querySelector(".nameProduct").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.classList.remove("filtro");
        } else {
            card.classList.add("filtro");
        }
    });
}

//aumentar contador de la bolsa
function countBag() {
    
}



















