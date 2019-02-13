import axios from 'axios';

export default (email, password) => {
    axios.post("/user/login", {
        email: email,
        password: password
    })
        .then((res) => {
            console.log(res)
        })
}