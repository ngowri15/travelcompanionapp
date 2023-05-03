import "./Content.css";
import React, { useState } from 'react';
import AllJourneys from "./AllJourneys"
import Content1 from "./Content.png"
import { TextField, Box } from "@mui/material";
import { View, Button } from "react-native-web";

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

  async function filterJouneys(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
    };
    if (!!data.image) await Storage.put(data.name, image);

    event.target.reset();
  }

  return (

    <div className="content">
      <br /><br />
      <img alt=""
        src={Content1}
        width="1000"
        height="350"
      />
      <br /><br /><br /><br />

      <form onSubmit={filterJourneys}>
        <div className="search">

        </div>

        <div className="content-filter">
          <label className="label-journeys">Filter your Journey </label>&nbsp;&nbsp;&nbsp;
          <select value={fromCountry} onChange={handleFromCountry}>
            <option value="">From Country</option>
            <option value="Heathrow">Heathrow</option>
            <option value="Manali">Manali</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="France">France</option>
            <option value="USA">USA</option>
            <option value="Italy">Italy</option>
          </select>&nbsp;&nbsp;&nbsp;
          <select value={toCountry} onChange={handleToCountry}>
            <option value="">To Country</option>
            <option value="Heathrow">Heathrow</option>
            <option value="Manali">Manali</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="France">France</option>
            <option value="USA">USA</option>
            <option value="Italy">Italy</option>
          </select>&nbsp;&nbsp;&nbsp;
          <input type="date" value={journeyDate} onChange={handleJourneyDate} />&nbsp;&nbsp;&nbsp;
          <button type="submit" className="filter-submit">Submit</button>
        </div>
      </form>

      <AllJourneys />
    </div>
  );
}

export default Content