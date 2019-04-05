import axios from 'axios'

class Auth {
    constructor(){
        const token=localStorage.getItem('token')
        if(token){
        axios.defaults.headers.common['Authorization']=`Bearer ${token}`      
        }
    }
    async login(credentials){
        try{
        const response = await axios.post('http://localhost:8000/api/auth/login',
            credentials
        )
        //postaviti token u local storage
        //post token na Autorization header
        const token=response.data.access_token
        localStorage.setItem('token',token)
        axios.defaults.headers.common['Authorization']=`Bearer ${token}`
        //kako se zove i sta mu je vrijednost
    } catch(error){
        console.log(error);
        
    }

    }

    isAuthenticated(){
        //metoda koja provj da li je ulogovan
        return !!localStorage.getItem('token')
        //ako ga nema u local st, nije ulogovan
    }
    logout(){
        localStorage.removeItem('token')
        axios.post('http://localhost:8000/api/auth/logout')
    }
}

export const authService = new Auth();