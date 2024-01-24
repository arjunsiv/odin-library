const myLibrary = [
    {
        Author:"Arjun",
        Title:"The book",
        "Number of pages" : 25,
        Read: "yes",
    }
    ,
    {
        Author:"Arjun",
        Title:"The book",
        "Number of pages" : 25,
        Read: "yes",
    }
    ,
    {
        Author:"Arjun",
        Title:"The book",
        "Number of pages" : 25,
        Read: "yes",
    }
];

function Book() {
  // the constructor...
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

function displayBooks(){
    // myLibrary.map()
    const container = document.querySelector(".container");
    myLibrary.forEach(element => {
        const card = document.createElement("div");
        card.classList.add("card");

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        card.appendChild(deleteButton);

        for(const key in element) {
            if(key === "Read") {
                const item = document.createElement("button");
                item.innerHTML=key + " : " + element[key];;
                card.appendChild(item);
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
