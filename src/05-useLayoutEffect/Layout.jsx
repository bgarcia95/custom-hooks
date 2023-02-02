import { LoadingQuote, Quote } from "../03-examples/components";
import { useFetch } from "../hooks";

export const Layout = () => {
  const { data, isLoading, hasError, getFetch } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes"
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote isLoading={isLoading} />
      ) : (
        <Quote author={author} quote={quote} />
      )}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={getFetch}
      >
        Next quote
      </button>
    </>
  );
};
