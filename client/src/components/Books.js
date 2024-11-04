import { useQuery } from "@apollo/client";

import { GET_BOOKS } from "../graphQL/queries";

const Books = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  const books = data?.books || [];
  return (
    <div>
      <h1>Books</h1>
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h4>{book.title}</h4>
            <p>Pages: {book.pages}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
