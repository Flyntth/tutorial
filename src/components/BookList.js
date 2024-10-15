import Book from "./Book";

function BookList() {

  const books = [
    {
      author: "Casey Means MD",
      title:
        "Good Energy: The Surprising Connection Between Metabolism and Limitless Health",
      img: "../images/book1.jpg",
      id: 1,
    },
    {
      author: "Rick Riordan",
      title:
        "Percy Jackson and the Olympians: Wrath of the Triple Goddess (Percy Jackson & the Olympians)",
      img: "../images/book2.jpg",
      id: 2,
    },
  ];
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}
export default BookList;
