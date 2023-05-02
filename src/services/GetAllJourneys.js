import axios from 'axios'

const LIST_JOURNEYS_URL="http://localhost:8080/journeyApi/GetAllJourneys";
class GetAllJourneys{
    getJourneys(){
        return axios.get(LIST_JOURNEYS_URL);
    }
}

export default new GetAllJourneys();