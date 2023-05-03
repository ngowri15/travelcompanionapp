import "./Content.css";
import React,{useState} from 'react';
import AllJourneys from "./AllJourneys"
import Content1 from "./Content.png"
import { TextField, Box } from "@mui/material";



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

  const useStyles = makeStyles({
    root: {
      '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
        borderColor: '#6b6b6b',
      },
      '& .MuiOutlinedInput-input': {
        padding: '10px',
      },
    },
  });
  
  function MyTextField() {
    const classes = useStyles();

  return (
    <div className="content">
        <img alt=""
          src={Content1}
          width="1200"
          height="500"
        />
        <form onSubmit={filterJourneys}>
          <div className="search">
        <Box width={170}>
        <TextField label="Flyring From" fullWidth />
        <TextField
      label="My Text Field"
      variant="outlined"
      className={classes.root}
    />
      </Box>
      </div>
        
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