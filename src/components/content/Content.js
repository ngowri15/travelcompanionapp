import "./Content.css";
import React,{useState} from 'react';
import AllJourneys from "./AllJourneys"

function Content() {

  const [fromCountry, setFromCountry] = useState('');
  const [toCountry, setToCountry] = useState('');
  const [journeyDate, setJourneyDate] = useState('');

  const handleFromCountry = (event) => {
    setFromCountry(event.target.value);
  }
  const handleToCountry = (event) => {
    setToCountry(event.target.value);
  }
  const handleJourneyDate = (event) => {
    setJourneyDate(event.target.value);
  }

  const filterJourneys = (event) => {
    event.preventDefault();
    console.log(fromCountry);
    console.log(toCountry);
    console.log(journeyDate);
  }

  return (
    <div className="content">
        
        <form onSubmit={filterJourneys}>
        <div className="content-filter">
          <label className="label-journeys">Filter your Journey </label>
          <select value={fromCountry} onChange={handleFromCountry}>
            <option value="">From Country</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="France">France</option>
            <option value="USA">USA</option>
            <option value="Italy">Italy</option>
          </select>
          <select value={toCountry} onChange={handleToCountry}>
            <option value="">To Country</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="France">France</option>
            <option value="USA">USA</option>
            <option value="Italy">Italy</option>
          </select>
          <input type="date" value={journeyDate} onChange={handleJourneyDate}  />
          <button type="submit">Submit</button>
          </div>
          </form>
          
          <button type="submit">List All Journeys</button>
        <h2 className="header-journeys">Filtered Journeys</h2>
      <AllJourneys />
    </div>
  );
}

export default Content