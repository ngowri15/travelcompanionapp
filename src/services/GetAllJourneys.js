import axios from 'axios'

const LIST_JOURNEYS_URL="http://54.159.112.90:8080/journeyApi/journey";
class GetAllJourneys{
    getJourneys(){
        return axios.get(LIST_JOURNEYS_URL);
    }
}

export default new GetAllJourneys();