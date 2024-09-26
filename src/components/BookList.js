import Book from "./Book";

function BookList() {
  const firstBook = {
    author: "Casey Means MD",
    title:
      "Good Energy: The Surprising Connection Between Metabolism and Limitless Health",
    img: "../images/book1.jpg",
  };
  const secondBook = {
    author: "Rick Riordan",
    title:
      "Percy Jackson and the Olympians: Wrath of the Triple Goddess (Percy Jackson & the Olympians)",
    img: "../images/book2.jpg",
  };
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
}
export default BookList;
