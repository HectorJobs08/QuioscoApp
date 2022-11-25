import { useState, useEffect, createContext } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
// Queries
import { getCategories } from 'queries/categories.query';

export const QuioscoContext = createContext(null);

export default function QuioscoProvider({ children }) {
  const [categories, setCategories] = useState([]);

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  });

  useEffect(() => {
    
    console.log("data", data);
    console.log("error", error);
    console.log("isLoading", isLoading);
    console.log("endpoint", process.env.BACKEND_ENDPOINT);


  }, [data, error, isLoading]);

  return (
    <QuioscoContext.Provider
      value={{}}
    >
      {children}
    </QuioscoContext.Provider>
  )

}