import "./Content.css";
import React from 'react';
import GetAllJourneys from "../../services/GetAllJourneys";

class AllJourneys extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      journeys: []

    }
  }

  componentDidMount() {
    GetAllJourneys.getJourneys().then((response) => {
      this.setState({ journeys: response.data })
    });
  }

   render() {

    return ( <div>
          <h2 className="header-journeys">List of all Journeys</h2>
          <table className="table-journeys">
            <thead>
              <tr>
                <td>From</td>
                <td>To</td>
                <td>Date</td>
              </tr>
            </thead>
            <tbody>
              {
                this.state.journeys.map(
                  journeys =>
                    <tr key={journeys.id}>
                      <td>{journeys.journeyFrom}</td>
                      <td>{journeys.journeyTo}</td>
                      <td>{journeys.journeyDate}</td>
                    </tr>
                )
                
              }
            </tbody>
          </table>
        </div>
    );
}
}

export default AllJourneys