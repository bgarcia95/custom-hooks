import React from "react";
import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider
      value={{
        // hello: "World",
        // user: { id: 123, name: "Brayan Garcia", email: "brayan@email.com" },
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
