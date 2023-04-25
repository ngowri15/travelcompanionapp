
import axios from "axios";

const ReadAllBook_URL="http://localhost:8585/ReadAllBooks"
class ReadAllBooks{
    
    readAllBooks(){

        return axios.get(ReadAllBook_URL);
    }


}

export default new ReadAllBooks()