import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Re-rendered  :(");

  return <small>{value}</small>;
});
