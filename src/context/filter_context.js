import { createContext, useContext, useEffect, useReducer } from "react";
import filterReducer from "../reducer/filterReducer";
import { useProductContext } from "./productcontex";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products:[],
  grid_view: true,
};

export const FilterContextProvider = ({children}) => {

  const {products} = useProductContext();
  // console.log(products);

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set the grid view 
  const setGridView = ()=>{
    return dispatch({type:"SET_GRIDVIEW"})
  }
  // to set the list view 
  const setListView = ()=>{
    return dispatch({type:"SET_LISTVIEW"})
  }

  useEffect(() =>{
     dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

   return (
   <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
    {children}
   </FilterContext.Provider>
   );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
} 