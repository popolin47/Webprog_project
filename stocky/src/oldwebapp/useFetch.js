import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data,setData]= useState(null);
    const [isPending, setIsPending] = useState(true); //loading message
    const [error,setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(()=>{
            fetch(url, { signal: abortCont.signal})
            .then(res => {
                //console.log(res)
                if(!res.ok){
                    throw Error('could not fetch the data'); // it will catch down here
                }
                return res.json()
            })
            .then(data=> {
                //console.log(data);
                
                setIsPending(false); // when have data it will not show loading...
                setData(data);
                setError(null);
            })
            .catch(err=> { //to catch
                if(err.name === 'AbortError'){
                    console.log('fetch aborted') //handle when change web page
                }else{
                      setIsPending(false);
                setError(err.message); //handle network error
                }
              
            })
            
            },1000);
       return () => abortCont.abort();
    },[url])
    return {data , isPending, error};
}
 
export default useFetch;