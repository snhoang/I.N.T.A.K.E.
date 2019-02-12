import axios from 'axios';

export default (email, password) => {
    axios.post("the post route for login", {
        email: email,
        password: password
    })
        .then((res) => {
            console.log(res)
        })
}