import axios from 'axios'
import { useState, createContext, useContext} from "react";


export const DataContext = createContext(null);

export const DataProvider = ({children})=>{
    const [data, setData] = useState()

    const fetchAllProducts = async () => {
  try {
    const categories = [ "laptops", "smartphones", "tablets", "mobile-accessories"];

    const responses = await Promise.all(
      categories.map((cat) =>
        axios.get(`https://dummyjson.com/products/category/${cat}`)
      )
    );

    // sabhi categories ke products ko ek array me merge karo
    const productData = responses.flatMap((res) => res.data.products);
    setData(productData);
  } catch (error) {
    console.log(error);
  }
};

 const getUniqueCategory = (data, property) =>{
        let newVal = data?.map((curElem) =>{
            return curElem[property]
        })
        newVal = ["All",...new Set(newVal)]  // for unique property
        return newVal
    }

    const categoryOnlyData = getUniqueCategory(data, "category")
    const brandOnlyData = getUniqueCategory(data, "brand")

    return <DataContext.Provider value={{data, setData,fetchAllProducts,categoryOnlyData,brandOnlyData}} >
        {children}

    </DataContext.Provider>
}

export const getData = ()=> useContext(DataContext)

