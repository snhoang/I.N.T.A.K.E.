import axios from 'axios';

export default (name, email, password) => {
    axios.post("/user/signup", {
        name: name,
        email: email,
        password: password
    })
        .then((res) => {
            console.log(res)
        })
}