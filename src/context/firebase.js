// React Context is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
import { createContext } from "react";

export const FirebaseContext = createContext( null );