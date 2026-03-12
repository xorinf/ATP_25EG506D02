class Book {
  title;
  author;
  pages;
  isAvailable = true;

  constructor(title, author, pages) {
    ((this.title = title), (this.author = author), (this.pages = pages));
  }
  borrow() {
    this.isAvailable = false;
    console.log(`${this.title} is borrowed!`);
  }
  returnBook() {
    this.isAvailable = true;
    console.log(`${this.title} is now available!`);
    this.ne = ""
  }
  getInfo() {
    if (this.isAvailable){
        this.ne = "BOOK AVAILABLE"
    }else{
        this.ne = "NOT AVAILABLE"
    }
    return `${this.title} by ${this.author} (${this.pages} pages) [${this.ne}]`;
  }
  isLongBook() {
    return this.pages > 300;
  }
}

books = []

book1 = new Book("Haunting Adeline", "H D Carlton", 630);
book2 = new Book("This Is Awful", "Burger Guy", 240);
book3 = new Book("Cupid", "Walt", 320);
book4 = new Book("Power Painting", "Hitler", 2170);
book5 = new Book("GPU Cake", "Jensung Huang", 400);

books.push(book1, book2, book3, book4, book5)

let showAllBooks = () => {
    for (i of books){
    console.log(i.getInfo())
}
console.log("\n")
}
// Q1
showAllBooks()
// Q2
book1.borrow()
book4.borrow()
showAllBooks()