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

    }
}

export const authService = new Auth();