"use client";

import { createContext, useContext } from "react";
import { useSession } from "@/app/lib/auth-client";

const SessionContext = createContext({});

export function SessionProvider({ children }) {
  const session = useSession();

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}

export function useAuth() {
  return useContext(SessionContext);
}
