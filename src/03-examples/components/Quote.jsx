import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

export const Quote = ({ quote, author }) => {
  const quoteRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = quoteRef.current.getBoundingClientRect();
    setBoxSize((prevState) => ({ ...prevState, width, height }));
  }, []);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={quoteRef} className="mb-3">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
