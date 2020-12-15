import axios from 'axios';


export default axios.create({
    baseURL:'https://api.spacexdata.com/v3/launches?limit=100',
    params:{
        part:'snippet',
        maxresult:'5'
    }
});
