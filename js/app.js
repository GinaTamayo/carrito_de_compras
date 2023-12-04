let mangas = [
    {id: "manga-03", title: "Death Note N.05", price: 50.000, category: "drama", image:  "../images/mangas/deathNote.jpg", stock: 10, description: "Después de una semana encerrado sin nadie más que Ryuk como compañía, Light está listo para renunciar a su Death Note y todos sus recuerdos. Liberado de sus acciones pasadas, Light está convencido de que es inocente. Pero L está dispuesto a mantener a Light bajo llave para siempre, especialmente porque los asesinatos cesaron una vez que Light fue encarcelado. Entonces, una nueva ola de crímenes de Kira llega a Japón."},
    {id: "manga-05", title: "Akame ga Kill", price: 55.800, category: "manga", image:  "../images/mangas/akameGaKill01.jpg", stock: 10, description: "Tatsumi viaja a la capital en busca de fortuna, pero tras caer en manos de unos villanos, un grupo de asesinos, el Night Raid, le rescata. Y es entonces cuando decide que podría estar bien unirse a ellos para luchar contra la injusticia"},
    {id: "manga-06", title: "One Piece N.01", price: 50.000, category: "aventura", image:  "../images/mangas/onePiece01.jpg", stock: 10, description: 'Cuando era niño, Monkey D. Luffy se inspiró para convertirse en pirata escuchando los cuentos del bucanero "Red-Haired" Shanks. Pero su vida cambió cuando Luffy comió accidentalmente la fruta del diablo Gum-Gum y obtuvo el poder de estirarse como goma... ¡a costa de no poder volver a nadar nunca más! Años más tarde, todavía jurando convertirse en el rey de los piratas, Luffy emprende su aventura... un hombre solo en un bote de remos, en busca del legendario "One Piece", del que se dice que es el tesoro más grande del mundo.'},
    {id: "manga-07", title: "One Punch Man N.01", price: 100.000, category: "accion", image:  "../images/mangas/onePuchMan1.webp", stock: 10, description: "descripcion"},
    {id: "manga-08", title: "Kimetsu no Yaiba Vol.01", price: 70.000, category: "manga", image:  "../images/mangas/demon.jpg", stock: 10, description: "En el Japón de la era Taisho, el bondadoso Tanjiro Kamado se gana la vida vendiendo carbón. Pero su pacífica vida se hace añicos cuando un demonio masacra a toda su familia. Su hermana pequeña Nezuko es la única superviviente, ¡pero ella misma se ha transformado en un demonio! Tanjiro emprende un peligroso viaje para encontrar una manera de devolver a su hermana a la normalidad y destruir al demonio que arruinó su vida."},
    {id: "manga-09", title: "Bleach N.01", price: 50.000, category: "manga", image:  "../images/mangas/bleach01.jpg", stock: 10, description: "descripcion"},
    {id: "manga-11", title: "Bungou Stray Dogs N.01", price: 50.000, category: "drama", image:  "../images/mangas/bungouStrayDogs.jpg", stock: 10, description: "descripcion"},
    {id: "manga-12", title: "Dragon Ball N.01", price: 50.000, category: "manga", image:  "../images/mangas/dragonBall01.jpg", stock: 10, description: "descripcion"},
    {id: "manga-13", title: "Death Note N.05", price: 50.000, category: "manga", image:  "../images/mangas/deathNote.jpg", stock: 10, description: ""},
    {id: "manga-14", title: "Death Note N.05", price: 50.000, category: "manga", image:  "../images/mangas/deathNote.jpg", stock: 10, description: "descripcion"},
    {id: "manga-15", title: "Death Note N.05", price: 50.000, category: "manga", image:  "../images/mangas/deathNote.jpg", stock: 10, description: "descripcion"},
    {id: "manga-16", title: "Death Note N.05", price: 50.000, category: "manga", image:  "../images/mangas/deathNote.jpg", stock: 10, description: "descripcion"},
    {id: "manga-17", title: "Jujutsu Kaisen N.03", price: 34.900, category: "suspenso", image:  "../images/mangas/jujutsuKaisen1.webp", stock: 10, description: "Las tensiones aumentan a medida que se acerca el Evento de Buena Voluntad entre los campus de Jujutsu High en Tokio y Kioto. Pero antes de que la competencia pueda comenzar, un par de estudiantes de Kioto se enfrentan a Fushiguro y Kugisaki. Mientras tanto, el entrenamiento de Yuji se ve interrumpido por un misterioso crimen que involucra grotescas alteraciones corporales causadas por un espíritu maldito"},
    {id: "manga-18", title: "Akuma no Riddle N.05", price: 30.000, category: "fantasia", image:  "../images/mangas/akumaNoRiddle.webp", stock: 10, description: "descripcion"},
];

//constantes
const containerCards = document.getElementById("ContainerCards");
const selectProducts = document.getElementById("selectProduct");
const btnCreate = document.getElementById("btnCreate");
const modal = document.querySelector(".modal");
const closeModal = document.getElementById("closeModal");
const newProduct = document.getElementById("newProduct");
const newPrice = document.getElementById("newPrice");
const newCategory = document.getElementById("selectCategory");
const newStock = document.getElementById("newStock");
const newDescription = document.getElementById("newDescription");
const newImage = document.getElementById("newImage");
const btnNewProduct = document.getElementById("btnNewProduct");
const seekerMangas = document.getElementById("seekerMangas");
const containerShoppingBag = document.getElementById("containerShoppingBag");
const countProducts = document.getElementById("countProducts");
const containerBag = document.getElementById("containerBag");
const contentBag = document.getElementById("contentBag");
const modalProducts = document.createElement("div");
const itemsBag = JSON.parse(localStorage.getItem("itemsBag")) || [];
const bag = document.getElementById("bag")

//variables
let imgSelected = " ";
let idProduct = 0;

//Ejecutar despues de que cargue el DOM
window.addEventListener("load", () => {
    // mangas = JSON.parse(localStorage.getItem("mangas")) || [];
    //mangas.forEach(manga => manga.stock = parseInt(manga.stock, 10) || 0);
    renderCards();
});

//eventos
selectProducts.addEventListener("change", renderCards);
btnCreate.addEventListener("click", showModal);
btnNewProduct.addEventListener("click", createNewProduct);
newImage.addEventListener("change", importImg);
closeModal.addEventListener("click", close);
seekerMangas.addEventListener("input",  seeker);
containerBag.addEventListener("click", listProducts);
containerShoppingBag.addEventListener("click", openCloseBag)

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
    const stockProduct = newStock.value;
    const descriptionProduct = newDescription.value;
    const id = idProduct;
    const newManga = {id: id, title: titleProduct, price: priceProduct, category: categoryProduct, image: imgSelected, stock: stockProduct, description: descriptionProduct}
    mangas.push(newManga);
    // localStorage.setItem("mangas", JSON.stringify(mangas));
    renderCards();
    modal.style.display = "none";
}

//creacion de las card
function createCards(manga) {
    const {title, image, id, price, stock, description} = manga;

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
    
    const cantidad = document.createElement(`p`)
    cantidad.textContent = stock;

    const containerDescriptionCard = document.createElement("img");
    containerDescriptionCard.setAttribute("src", "./images/icons/boton-de-informacion.png");
    containerDescriptionCard.classList.add("containerDescriptionCard");


    const descriptionCard = document.createElement("p");
    descriptionCard.textContent = description;
    descriptionCard.classList.add("descriptionCard");
    descriptionCard.style.display = "none";

    containerDescriptionCard.addEventListener("click", () => descriptionManga(descriptionCard));

    const btnCard = document.createElement("button");
    btnCard.setAttribute("id", id);
    btnCard.classList.add("btnCard");
    btnCard.textContent = "Agregar a la bolsa";
    btnCard.addEventListener("click", () => countBag(manga));

    containerImg.appendChild(imgCard);

    card.appendChild(containerImg);
    card.appendChild(nameCard);
    card.appendChild(priceCard);
    card.appendChild(cantidad)
    card.appendChild(btnCard);
    card.appendChild(containerDescriptionCard);
    card.appendChild(descriptionCard);

    containerCards.appendChild(card);
}

function descriptionManga(descriptionCard) {

   const card = descriptionCard.parentElement;

    if (descriptionCard.style.display === "flex") {
        descriptionCard.style.display = "none";
    } else {
        descriptionCard.style.display = "flex";
    }

    document.querySelectorAll(".cardProduct").forEach(otherCard => {
        const otherDescriptionCard = otherCard.querySelector(".descriptionCard");
        if (otherDescriptionCard && otherCard !== card) {
            otherDescriptionCard.style.display = "none";
        }
    });
}

//filtro por categorias de los productos
function renderCards() {
    containerCards.textContent = "";
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
function countBag(manga) {
    const mangaId = manga.id;
    let mangaI;
    for (const m of mangas) {
        if (m.id === mangaId) {
            mangaI = m;
            break;
        }
    }
    if (mangaI && mangaI.stock > 0) {
        mangaI.amountProduct = (mangaI.amountProduct || 0) + 1
        if (!itemsBag.includes(mangaI)) {
            itemsBag.push(mangaI);
        } 
        countProducts.textContent = itemsBag.length;
        updateStock(mangaId, 1);
        renderCards()
        // localStorage.setItem("itemsBag", JSON.stringify(itemsBag));
        // localStorage.setItem("mangas", JSON.stringify(mangas));

    }
}

//mostrar la lista de productos agregados en la bolsa
function listProducts() {
    modalProducts.textContent = "";
    
    itemsBag.forEach(manga => {
        const productContainer = document.createElement("div");
        productContainer.classList.add("productContainer");

        const img = document.createElement("img");
        img.setAttribute("src", manga.image);
        img.classList.add("imgP");

        const title = document.createElement("p");
        title.textContent = manga.title;

        const price = document.createElement("p");
        price.textContent = `precio: ${manga.price}`;

        const containerAmount = document.createElement("div");
        containerAmount.classList.add("containerAmount");

        const amountProduct = document.createElement("span");
        amountProduct.textContent = manga.amountProduct;

        const incrementAmount = document.createElement("button");
        incrementAmount.textContent= "+";
        incrementAmount.addEventListener("click", () => alterAmount(manga, 1));
        
        const decrementAmount = document.createElement("button");
        decrementAmount.textContent = "-";
        decrementAmount.addEventListener("click", () => alterAmount(manga, -1));

        // const btnClear = document.createElement("button");
        // btnClear.textContent = "Vaciar bolsa";
        // btnClear.classList.add("btnClear");
        // btnClear.addEventListener("click", () => clearBag);

        productContainer.appendChild(img);
        productContainer.appendChild(title);
        productContainer.appendChild(price);

        containerAmount.appendChild(decrementAmount);
        containerAmount.appendChild(amountProduct);
        containerAmount.appendChild(incrementAmount);

        productContainer.appendChild(containerAmount);

        modalProducts.appendChild(productContainer);
        // modalProducts.appendChild(btnClear);
        modalProducts.classList.add("modalProducts");
    });
    contentBag.textContent = "";
    contentBag.appendChild(modalProducts);

    
}

function openCloseBag(){
    if (itemsBag.length > 0 && contentBag.style.display !== "flex") {
        contentBag.style.display = "flex";
        modalProducts.style.display = "flex";  
    } else if (itemsBag.length === 0 && contentBag.style.display == "flex" ) {
        contentBag.style.display = "none";
        modalProducts.style.display = "none";  
    }else if (contentBag.style.display == "flex"){
        contentBag.style.display = "none";
        modalProducts.style.display = "none";
    }
}

/*function clearBag() {
    itemsBag.forEach(manga => {
        const mangaId = manga.id;
        const indexMangas = mangas.findIndex(m => m.id === mangaId);

        if (indexMangas !== -1 && mangas[indexMangas].stock !== undefined) {
            mangas[indexMangas].stock += manga.amountProduct;
        }
    });

    itemsBag.length = 0;
    countProducts.textContent = 0;
    listProducts();
    renderCards();
    // localStorage.setItem("itemsNag", JSON.stringify(itemsBag));
    // localStorage.setItem("mangas", JSON.stringify(mangas));

}*/

//aumentar y disminuir la cantidad de un producto en la bolsa;
function alterAmount(manga, event) {
    const mangaId = manga.id;
    const mangaI = itemsBag.find(item => item.id === mangaId);

    if (mangaI.stock >0) {
        mangaI.amountProduct = (mangaI.amountProduct || 1) + event;    

        if (mangaI.amountProduct < 1) {
            const index = itemsBag.indexOf(mangaI);

            if (index !== -1) {
                itemsBag.splice(index, 1);

            }
            // manga.stock += event;

        } //else {
                // manga.stock -= event;
                // updateStock(mangaId, -1);
        // }
        updateStock(mangaId, event);

        console.log(mangas);
        countProducts.textContent = itemsBag.length;
        listProducts();
        // localStorage.setItem("itemsBag", JSON.stringify(itemsBag));
        // localStorage.setItem("mangas", JSON.stringify(mangas)); 
    }else{
        alert("no")
    }
}

//actualizar el stock
function updateStock(mangaId, amount) {
    const indexMangas = mangas.findIndex(m => m.id === mangaId);
    // let cant = mangas[indexMangas].stock

    if (indexMangas !== -1  && mangas[indexMangas].stock !== undefined && amount !== undefined) {
        mangas[indexMangas].stock -= amount;
    }
    // mangas[indexMangas].stock = cant-1;
    renderCards()
}

