let mangas = [
    {id: "manga-01", title: "Vinland Saga Vol.01", price: 62.000, category: "historico", image:  "../images/mangas/vinlandSaga01.jpg", stock: 12, description: "Thorfinn, un joven vikingo, busca venganza contra el asesino de su padre en la época de los vikingos."},
    {id: "manga-02", title: "Fire Force Vol.26", price: 50.000, category: "accion", image:  "../images/mangas/fireForce26.jpg", stock: 16, description: "En un mundo donde las personas se convierten en llamas vivientes, los Fire Force luchan para salvar almas y descubrir la verdad detrás de la combustión humana espontánea."},
    {id: "manga-03", title: "Death Note Vol.05", price: 50.000, category: "drama", image:  "../images/mangas/deathNote.jpg", stock: 10, description: "Después de una semana encerrado, Light está listo para renunciar a su Death Note. Liberado de sus acciones pasadas, cree que es inocente. Pero L está decidido a mantenerlo bajo llave, y una nueva ola de crímenes de Kira llega a Japón."},
    {id: "manga-04", title: "Black Butler Vol.12", price: 48.000, category: "fantasia", image:  "../images/mangas/blackButler12.jpg", stock: 18, description: "Ciel Phantomhive, junto a su mayordomo demonio Sebastian, resuelve misterios y enfrenta amenazas sobrenaturales."},
    {id: "manga-05", title: "Akame ga Kill Vol.01", price: 55.800, category: "manga", image:  "../images/mangas/akameGaKill01.jpg", stock: 10, description: "Tatsumi viaja a la capital en busca de fortuna, pero tras caer en manos de villanos, el Night Raid le rescata. Decide unirse a ellos para luchar contra la injusticia"},
    {id: "manga-06", title: "One Piece Vol.01", price: 50.000, category: "aventura", image:  "../images/mangas/onePiece01.jpg", stock: 10, description: 'La historia de Monkey D. Luffy, quien, después de comer la fruta del diablo Gum-Gum, obtiene el poder de estirarse como goma. Jurando ser el rey de los piratas, Luffy busca el legendario "One Piece".'},
    {id: "manga-07", title: "One Punch Man Vol.01", price: 100.000, category: "accion", image: "../images/mangas/onePuchMan1.webp", stock: 10, description: "Aventura llena de acción con un héroe capaz de derrotar a sus enemigos de un solo golpe." },
    {id: "manga-08", title: "Demon Slayer Vol.01", price: 70.000, category: "fantasia", image:  "../images/mangas/demon.jpg", stock: 10, description: "En la era Taisho, Tanjiro Kamado busca venganza contra un demonio que masacró a su familia y transformó a su hermana en un demonio. Inicia un peligroso viaje para salvarla."},
    {id: "manga-09", title: "Bleach Vol.01", price: 50.000, category: "accion", image: "../images/mangas/bleach01.jpg", stock: 10, description: "Descubre un mundo donde Ichigo Kurosaki, con habilidades de un Shinigami, protege a los vivos de los espíritus malignos." },
    {id: "manga-10", title: "Sword Art Online Vol.01", price: 55.000, category: "fantasia", image:  "../images/mangas/swordArtOnline01.jpg", stock: 14, description: "Jugadores quedan atrapados en un juego de realidad virtual, Sword Art Online, y deben luchar por su libertad."},
    {id: "manga-11", title: "Bungou Stray Dogs Vol.01", price: 50.000, category: "drama", image: "../images/mangas/bungouStrayDogs.jpg", stock: 10, description: "Sumérgete en un drama emocionante con Bungou Stray Dogs, donde los personajes enfrentan desafíos y misterios." },
    {id: "manga-12", title: "Dragon Ball Vol.01", price: 50.000, category: "manga", image: "../images/mangas/dragonBall01.jpg", stock: 10, description: "Revive las aventuras épicas de Goku y sus amigos mientras enfrentan desafíos intergalácticos y poderosos enemigos." },
    {id: "manga-13", title: "Haikyuu!! Vol.01", price: 42.000, category: "deportes", image:  "../images/mangas/haikyuu!!01.jpg", stock: 15, description: "Hinata Shoyo persigue su sueño de convertirse en el mejor jugador de voleibol a pesar de su baja estatura."},
    {id: "manga-14", title: "The Promised Neverland Vol.02", price: 60.000, category: "suspenso", image:  "../images/mangas/thePromised02.jpg", stock: 12, description: "Emma, Norman y Ray descubren oscuros secretos sobre el orfanato en el que crecieron y luchan por sobrevivir."},
    {id: "manga-15", title: "Dragon Ball Z Vol.01", price: 58.000, category: "accion", image:  "../images/mangas/dragonBallZ01.jpg", stock: 20, description: "Goku y sus amigos enfrentan desafíos aún mayores, incluyendo poderosos enemigos extraterrestres y amenazas intergalácticas."},
    {id: "manga-16", title: "Yu Yu Hakusho Vol.01", price: 52.000, category: "accion", image:  "../images/mangas/yuYuHakusho01.jpg", stock: 16, description: "Yusuke Urameshi, un delincuente juvenil, se convierte en un detective espiritual que protege el mundo de lo paranormal."},
    {id: "manga-17", title: "Jujutsu Kaisen Vol.03", price: 34.900, category: "suspenso", image:  "../images/mangas/jujutsuKaisen1.webp", stock: 10, description: "Las tensiones aumentan antes del Evento de Buena Voluntad entre los campus de Jujutsu High. Estudiantes se enfrentan a crímenes misteriosos y alteraciones corporales por un espíritu maldito."},
    {id: "manga-18", title: "Akuma no Riddle Vol.05", price: 30.000, category: "fantasia", image: "./images/mangas/akumaNoRiddle.webp", stock: 10, description: "Sumérgete en un mundo de fantasía con Akuma no Riddle, donde los personajes se enfrentan a desafíos sobrenaturales." },
    {id: "manga-19", title: "Naruto N.01", price: 55.000, category: "aventura", image:  "../images/mangas/naruto01.jpg", stock: 15, description: "Naruto Uzumaki, un joven ninja con el sueño de convertirse en el Hokage. Acompaña a Naruto en su viaje lleno de acción y determinación."},
    {id: "manga-20", title: "Fullmetal Alchemist Vol.01", price: 60.000, category: "fantasia", image:  "../images/mangas/fullmetalAlchemist01.jpg", stock: 12, description: "Los hermanos Edward y Alphonse Elric buscan la Piedra Filosofal para restaurar sus cuerpos después de un intento fallido de resucitar a su madre."},
    {id: "manga-21", title: "My Hero Academia Vol.01", price: 45.000, category: "accion", image:  "../images/mangas/myHeroAcademia01.jpg", stock: 18, description: "En un mundo donde la mayoría tiene superpoderes, Izuku Midoriya sueña con convertirse en un héroe, a pesar de no tener poder."},
    {id: "manga-22", title: "Tokyo Ghoul Vol.01", price: 65.000, category: "suspenso", image:  "../images/mangas/tokyoGhoul01.jpg", stock: 10, description: "Kaneki, atacado por un ghoul, se convierte en mitad ghoul y debe aprender a vivir en un mundo donde humanos y ghouls coexisten."},
    {id: "manga-23", title: "Hunter x Hunter Vol.01", price: 58.000, category: "aventura", image:  "../images/mangas/hunterXHunter01.jpg", stock: 14, description: "Gon Freecss busca a su padre convirtiéndose en un cazador y enfrentándose a desafíos en un mundo lleno de criaturas y secretos."},
    {id: "manga-24", title: "One Piece Vol.02", price: 50.000, category: "aventura", image:  "../images/mangas/onePiece02.jpg", stock: 20, description: "Continúa la aventura de Monkey D. Luffy en busca del tesoro One Piece junto a su tripulación."},
    {id: "manga-25", title: "Demon Slayer Vol.02", price: 72.000, category: "fantasia", image:  "../images/mangas/demonSlayer02.jpg", stock: 15, description: "Tanjiro Kamado enfrenta nuevos desafíos mientras busca una cura para su hermana Nezuko y lucha contra demonios."},
    {id: "manga-26", title: "Bleach Vol.02", price: 55.000, category: "accion", image:  "../images/mangas/bleach02.jpg", stock: 17, description: "Ichigo Kurosaki, con habilidades de un Shinigami, protege a los vivos de espíritus malignos y los guía al más allá."},
    {id: "manga-27", title: "Attack on Titan Vol.01", price: 68.000, category: "accion", image:  "../images/mangas/attackOnTitan01.jpg", stock: 13, description: "La humanidad lucha por sobrevivir contra los titanes devoradores de humanos que amenazan el último refugio de la humanidad."},
    {id: "manga-28", title: "Fairy Tail Vol.01", price: 48.000, category: "aventura", image:  "../images/mangas/fairyTail01.jpg", stock: 16, description: "Natsu Dragneel y su gremio de magos, Fairy Tail, enfrentan misiones emocionantes y desafíos mágicos."},
    {id: "manga-29", title: "Noragami Vol.01", price: 50.000, category: "fantasia", image:  "../images/mangas/noragami01.jpg", stock: 14, description: "Yato, un dios menor, busca ganar seguidores y convertirse en un dios reconocido mientras enfrenta criaturas espirituales."},
    {id: "manga-30", title: "Black Clover Vol.01", price: 53.000, category: "fantasia", image:  "../images/mangas/blackClover01.jpg", stock: 18, description: "Asta, un joven sin poderes mágicos en un mundo lleno de magia, busca convertirse en el Rey Mago."},
    
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
const bag = document.getElementById("bag");
const btnClear = document.createElement("button");
const btnAsc = document.getElementById("btnAsc");
const btnDes = document.getElementById("btnDes");

countProducts.textContent = itemsBag.length;

//variables
let imgSelected = " ";
let idProduct = 0;

//Ejecutar despues de que cargue el DOM
window.addEventListener("load", () => {
    mangas = JSON.parse(localStorage.getItem("mangas")) || mangas;
    mangas.forEach(manga => manga.stock = parseInt(manga.stock, 10) || 0);
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
containerShoppingBag.addEventListener("click", openCloseBag);
btnAsc.addEventListener("click", () => filterPrice(true));
btnDes.addEventListener("click", () => filterPrice(false));

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
    localStorage.setItem("mangas", JSON.stringify(mangas));
    renderCards();
    close()
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

    const btnEdit = document.createElement("button");
    btnEdit.setAttribute("id", `edit-${id}`);
    btnEdit.classList.add("btnEdit");
    btnEdit.textContent = "Editar";
    btnEdit.addEventListener("click", () => editCard(manga));

    containerImg.appendChild(imgCard);

    card.appendChild(containerImg);
    card.appendChild(nameCard);
    card.appendChild(priceCard);
    card.appendChild(cantidad)
    card.appendChild(btnCard);
    card.appendChild(containerDescriptionCard);
    card.appendChild(descriptionCard);
    card.appendChild(btnEdit);


    containerCards.appendChild(card);
}

//mostrar y cerrar descripcion
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

//editar las card
function editCard(manga) {
    showModal();

    newProduct.value = manga.title;
    newPrice.value = manga.price;
    newCategory.value = manga.category;
    newStock.value = manga.stock;
    newDescription.value = manga.description;
    // newImage.imgSelected = manga.image;

    btnNewProduct.textContent = "Guardar Cambios";
    btnNewProduct.removeEventListener("click", createNewProduct);
    btnNewProduct.addEventListener("click", () => saveChanges(manga.id));
}

//mostrar las card editadas
function saveChanges(mangaId) {
    const editManga = mangas.find(m => m.id === mangaId);

    editManga.title = newProduct.value;
    editManga.price = newPrice.value;
    editManga.category = newCategory.value;
    editManga.stock = newStock.value;
    editManga.description = newDescription.value;
    editManga.image = imgSelected;
    localStorage.setItem("mangas", JSON.stringify(mangas));

    renderCards()

    close();
}


function filterPrice(boolean) {
    mangas.sort((a, b) => {
        const precioA = parseFloat(a.price);
        const precioB = parseFloat(b.price);

        if (boolean) {
            return precioA - precioB;
        } else {
            return precioB - precioA;
        }
    });

    renderCards();
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
        localStorage.setItem("itemsBag", JSON.stringify(itemsBag));
        localStorage.setItem("mangas", JSON.stringify(mangas));

    }
    listProducts()
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

        btnClear.textContent = "Vaciar bolsa";
        btnClear.classList.add("btnClear");
        btnClear.addEventListener("click", () => clearBag());

        productContainer.appendChild(img);
        productContainer.appendChild(title);
        productContainer.appendChild(price);

        containerAmount.appendChild(decrementAmount);
        containerAmount.appendChild(amountProduct);
        containerAmount.appendChild(incrementAmount);

        productContainer.appendChild(containerAmount);

        modalProducts.appendChild(productContainer);
        modalProducts.classList.add("modalProducts");
    });
    contentBag.textContent = "";
    contentBag.appendChild(modalProducts);
    contentBag.appendChild(btnClear);
    
}

//abrir bolsa
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

//cerrar bolsa
function clearBag() {
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
    localStorage.setItem("itemsBag", JSON.stringify(itemsBag));
    localStorage.setItem("mangas", JSON.stringify(mangas));
}

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

        } 
        updateStock(mangaId, event);

        console.log(mangas);
        countProducts.textContent = itemsBag.length;
        listProducts();
        localStorage.setItem("itemsBag", JSON.stringify(itemsBag));
        localStorage.setItem("mangas", JSON.stringify(mangas)); 
    }else{
        alert("El producto se encuentra agotado");
    }
}

//actualizar el stock
function updateStock(mangaId, amount) {
    const indexMangas = mangas.findIndex(m => m.id === mangaId);

    if (indexMangas !== -1  && mangas[indexMangas].stock !== undefined && amount !== undefined) {
        mangas[indexMangas].stock -= amount;
    }
    localStorage.setItem("itemsBag", JSON.stringify(itemsBag));
    localStorage.setItem("mangas", JSON.stringify(mangas));
    renderCards()
}