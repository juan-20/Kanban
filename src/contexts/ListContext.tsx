import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { ListContextProviderProps } from "../types/types";

export const ListContext = createContext({})


export function ListContextProvider(props: ListContextProviderProps){
    let data= '';
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            const res = await axios.get('http://localhost:3000/api/list').then(response => {
              data = response.data.res;
              console.log(data)
            })
          } catch (error) {
            console.error('CANNOT LOAD API');
          }
          setLoading(false);
        }
    
        fetchData();
      }, []);
      return (
          <ListContext.Provider value={{ data, loading }}>
             {props.children}
          </ListContext.Provider>
      );
}