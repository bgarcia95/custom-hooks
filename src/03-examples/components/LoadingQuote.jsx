import React from "react";

export const LoadingQuote = ({ isLoading }) => {
  return (
    isLoading && <div className="alert alert-info text-center">Loading...</div>
  );
};
