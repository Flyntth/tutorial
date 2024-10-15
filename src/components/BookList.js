import Book from "./Book";

function BookList() {

  const books = [
    {
      author: "Casey Means MD",
      title:
        "Good Energy: The Surprising Connection Between Metabolism and Limitless Health",
      img: "../images/book1.jpg",
    },
    {
      author: "Rick Riordan",
      title:
        "Percy Jackson and the Olympians: Wrath of the Triple Goddess (Percy Jackson & the Olympians)",
      img: "../images/book2.jpg",
    },
  ];
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book title={book.title} author={book.author} img={book.img} />;
      })}
    </section>
  );
}
export default BookList;
