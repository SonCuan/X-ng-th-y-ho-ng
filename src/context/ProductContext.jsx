import { createContext, useEffect, useReducer } from "react";
import api from "../axios";
import productReducer from "../reducer/productReducer";


export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [state , dispatch] = useReducer(productReducer,{
        products: []
    });
    
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/products");
        dispatch({ type: "SET_PRODUCTS", payload: data});
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

    return <ProductContext.Provider value={{state, dispatch}}>{children}</ProductContext.Provider>;
};

export default ProductContextProvider;