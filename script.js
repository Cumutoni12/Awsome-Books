// if(localStorage.getItem("listOfBooks")===null){
// localStorage.setItem("listOfBooks",JSON.stringify([]))
// }
// const booksInLs=JSON.parse(localStorage.getItem("listOfBooks"))

// retrieving data from loocal storage
const booksInLs=JSON.parse(localStorage.getItem("listOfBooks")) ||[]
function updatingLocalStorage (){
    localStorage.setItem("listOfBooks",JSON.stringify(booksInLs))
}
// a function for showing books 
function showBooks=(){
    const bookList=document.querySelector(".bookList")
    let books=""
    booksInLs.forEach((book,index)=>{
        books+=`
        <ul>
        <li> ${book.title}</li>
         <li>${book.author} </li>
        </ul>

        <button onClick="removeBook(${index})"> Remove </button>
        <hr> 

        `
    })
    bookList.innerHTML=books
}
// function for adding a book 
function addBook(bookTitle,bookAuthor){
 const book={
    title:bookTitle,
    author:bookAuthor

 }
 // pushing a book in array (booksInLs)
 booksInLs.push(book)
 alert("a book is stored in local storage")
 updatingLocalStorage()
 showBooks()
}

// function for removing the book 

function removeBook(i){
booksInLs.splice(i,1)
updatingLocalStorage()
showBooks()
}

const form=document.querySelector(".form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const title=document.querySelector("#title").value
    const author=document.querySelector("#author").value
    addBook(title,author)
})
window.onload=showBooks()
