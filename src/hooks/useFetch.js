import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  })

  const getFetch = async () => {

    setState((prevState) => ({ ...prevState, isLoading: true }));

    const resp = await fetch(url);
    const data = await resp.json();

    setState(prevState => ({
      ...prevState,
      data,
      isLoading: false,
      hasError: null
    }))
  }

  useEffect(() => {
    getFetch();
  }, [url]);

  return {...state, getFetch};
}
