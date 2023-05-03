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
            <thead className="thead">
              <tr className="tr">
              &nbsp;&nbsp;&nbsp;<td>From</td>&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;<td>To</td>&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;<td>Date</td>&nbsp;&nbsp;&nbsp;
              </tr>
            </thead>
            <tbody>
              {
                this.state.journeys.map(
                  journeys =>
                    <tr key={journeys.id}>
                       &nbsp;&nbsp;&nbsp;<td>{journeys.journeyFrom}</td> &nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;<td>{journeys.journeyTo}</td> &nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;<td>{journeys.journeyDate}</td> &nbsp;&nbsp;&nbsp;
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