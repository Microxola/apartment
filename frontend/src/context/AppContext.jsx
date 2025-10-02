import { createContext, useContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-hot-toast";
import {useNavigate} from 'react-router-dom'
import axios from "axios"
import { jwtDecode } from 'jwt-decode';


const AppContext = createContext();

export const AppProvider = ({children}) => {
    const currency = "#";
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [products, setProduct] = useState([])
    const [token, setToken] = useState("");
    const [rooms, setRooms] = useState([]);
    const [userEmail, setUserEmail] = useState(null);  
    

    // const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    // fetching all the products
    // const fetchAllProducts = async () => {
    //     try {
    //         const response = await axios.get(backendUrl+'/api/product/list')

    //         if(response.data.success){
    //             setProduct(response.data.products)
    //         }else{
    //             toast.error(response.data.message)
    //         }
    //     } catch (error) {
    //             console.log(error);
    //             toast.error(error.message)
    //     }
    // }
    // useEffect(()=>{
    //     fetchAllProducts();
    // }, []);
    useEffect(()=>{
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token')); 
        }
    }, [])

    //  useEffect(() => {
    //     const storedToken = localStorage.getItem('token');
    //     if (storedToken) {
    //       try {
    //         const decoded = jwtDecode(storedToken); // ✅ Use named function
    //         setUserEmail(decoded.email);
    //         console.log('user email is', decoded.email);
    //         console.log('email is', userEmail);
            
            
    //       } catch (err) {
    //         console.error('Invalid token:', err);
    //       }
    //     }
    //   }, [token]);

      const fetchRoom = async () => {
        try {
            const {data} = await axios.get(backendUrl+'/api/rooms', {headers: {token}});
            if(data.success){
                setRooms(data.rooms)   
                console.log(data);
                
            }else{ 
                toast.error(data.message);
            }
        } catch (error) {
         console.log(error);
            toast.error(error.message)
        }  
    }
     useEffect(() => {
            fetchRoom();
            
    }, []);


useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserEmail(decoded.email);   
        // console.log(' user id is', decoded.id);
        // console.log(' user email is', decoded.email);
      } catch (err) {
        console.error('Invalid token:', err);
        setUserEmail(null);
      }
    } else {
      setUserEmail(null);
    }
  }, [token]);

    const value = {
        products,
        currency,
        delivery_fee,
        search, setSearch, showSearch, setShowSearch, 
        navigate,
        backendUrl, token, setToken, rooms, userEmail
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider> 
    )
}
export const useAppContext = () => useContext(AppContext);