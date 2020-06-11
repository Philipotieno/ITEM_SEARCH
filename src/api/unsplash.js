import axios from 'axios';

 export default axios.create({
     baseURL: 'https://api.unsplash.com',
     headers: {
        Authorization: "Client-ID raK0g30jWbYXk-Il4OX2bLAnffDVA6DuIQpzTf1ytNw",
      },
 });