import axios from "axios";

// const YOUR_APP_ID = process.env.REACT_APP_API_ID;
// const YOUR_APP_KEY = process.env.REACT_APP_API_KEY;
const YOUR_APP_ID = "86f91669";
const YOUR_APP_KEY = "a032a994f715b1e7f238719b6636480b";
console.log(process.env)
const link = `https://api.edamam.com/api/nutrition-data?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&ingr=1%20large%20apple`;

export default () => {
    axios.get(link, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }).then((res) => console.log(res.data))
}