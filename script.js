const  myLibrary = [

];

function Book(author, title, pages, read) {
    this.Author = author;
    this.title = title;
    this["Number of pages"] = pages;
    this.Read = read;
  // the constructor...
}

Book.prototype.changeStatus = function(){
    this.Read = this.Read == "yes" ? "no" : "yes" ;
    UpdateView();

}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

function displayBooks(){
    // myLibrary.map()
    const container = document.querySelector(".container");
    myLibrary.forEach((element,i) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click",(event)=>{
            myLibrary.splice(i,1);
            UpdateView();
        })

        card.appendChild(deleteButton);

        for(const key in element) {

            if(key == "changeStatus"){
                continue;
            }
            
            if(key === "Read") {
                const item = document.createElement("button");
                item.innerHTML=key + " : " + element[key];;
                card.appendChild(item);
                item.addEventListener("click",(event)=>{
                    element.changeStatus();
                })
            }
            else{
                const item = document.createElement("p");
                item.innerHTML = key + " : " + element[key];
                card.appendChild(item);

            }
        }
        if (element["Read"] === "yes"){
            card.style.backgroundColor = "lightgreen"
        }
        container.appendChild(card);
        
    });
}
displayBooks();
const dialog = document.querySelector("dialog");
const newBook = document.querySelector(".newbook");
const submit = document.querySelector("#formSubmit")

newBook.addEventListener("click", () => {
    dialog.showModal();
})

submit.addEventListener("click" , (event)=> {
    event.preventDefault();
    const author = document.querySelector('input[name="author"]');
    const title = document.querySelector('input[name="title"]');
    const pages = document.querySelector('input[name="pages"]');
    const read = document.querySelector('input[name="read"]');
    const book = new Book(author.value,title.value,pages.value,read.value);
    addBookToLibrary(book);
    UpdateView();
    dialog.close();
})

function UpdateView(){
    const container = document.querySelector(".container");
    container.textContent = "";
    displayBooks();
}