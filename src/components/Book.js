function Book() {
  const author = "Casey Means MD";
  const title =
    "Good Energy: The Surprising Connection Between Metabolism and Limitless Health";
  return (
    <article className="book">
      <img
        src="../images/book1.jpg"
        alt="Good Energy: The Surprising Connection Between Metabolism and Limitless Health"
      />
      <h2>{title}</h2>
      <h4>{author}</h4>;
    </article>
  );
}
export default Book;
