import Book from "./Book";

function BookList() {
    const author = "Casey Means MD";
    const title =
      "Good Energy: The Surprising Connection Between Metabolism and Limitless Health";
    const img = "../images/book1.jpg";
    return (
      <section className="booklist">
        <Book title={title} author={author} img={img} />
        <Book title={title} author={author} img={img} />
      </section>
    );
}
export default BookList;
