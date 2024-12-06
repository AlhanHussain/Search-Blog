import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext(null)


const AppContextProvider = (props) => {

const [dummyData, setDummyData] = useState([])  



    const getData = async()=>{
      const response =await  axios.get('http://localhost:5000/api/get-data')
       if(response.data.data){
        setDummyData(response.data.data)
       }
    }  


     useEffect(()=>{
       getData() 
     },[dummyData])

  
  

     const value = {
      dummyData
     }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )

}


export default AppContextProvider