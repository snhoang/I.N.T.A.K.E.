import axios from 'axios';

export default (name, email, password) => {
    axios.post("the post route for login", {
        name: name,
        email: email,
        password: password
    })
        .then((res) => {
            console.log(res)
        })
}