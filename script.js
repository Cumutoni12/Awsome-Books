// if(localStorage.getItem("listOfBooks")===null){
// localStorage.setItem("listOfBooks",JSON.stringify([]))
// }
// const booksInLs=JSON.parse(localStorage.getItem("listOfBooks"))

// retrieving data from loocal storage
const booksInLs=JSON.parse(localStorage.getItem("listOfBooks")) ||[]
function updatingLocalStorage (){
    localStorage.setItem("listOfBooks",JSON.stringify(booksInLs))
}
function showBooks=(){
    const bookList=document.querySelector(".bookList")
    let books=""
    booksInLs.forEach((book,index)=>{
        books+=`
        <ul>
        <li> ${book.title}</li>
         <li>${book.author} </li>
        </ul>

        <button> Remove </button>
        <hr> 

        `
    })
    bookList.innerHTML=books
}

function addBook(bookTitle,bookAuthor){
 const book={
    title:bookTitle,
    author:bookAuthor

 }
 booksInLs.push(book)
 updatingLocalStorage()
 showBooks()
}
