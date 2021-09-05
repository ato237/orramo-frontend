import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import {
  DownloadContainer,
  DownloadWrapper,
  Form,
  NotifyButton,
  Image,
  ContentH1,
} from "./DownloadElement";
import img from "../Images/mobile.svg";
import axios from "axios";

const Download = () => {
 
  const [phone, setPhone] = useState(true);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(" https://orramo-backend2.herokuapp.com/api/calculate/data", {
      email,
    },{headers: {'Access-Control-Allow-Origin': 'https://www.orramo.com/'}});
    setMessage("Your info has been Succesfully sent!");
  };
  return (
    <DownloadContainer>
      <DownloadWrapper>
        <Image src={img} />

        <Form>
          <ContentH1>Get Notified on release!</ContentH1>
          <TextField
            onChange={() => setPhone(!phone)}
            id="outlined-select-currency-native"
            select
            SelectProps={{
              native: true,
            }}
            helperText="Please Select Info Type"
            variant="outlined"
          >
            <option>Phone Number</option>
            <option>Email Address</option>
          </TextField>
          <TextField
            style={phone ? { display: "none" } : { display: "block" }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="outlined-basic"
            label="example@gmail.com"
            variant="outlined"
            helperText="Enter email"
          />
          <TextField
            style={!phone ? { display: "none" } : { display: "block" }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="outlined-basic"
            label="6xxx-xxx-xxx"
            variant="outlined"
            helperText="Enter phone number"
          />
          <h4>{message}</h4>{" "}
          <button
            style={{ background: "transparent", border: "none" }}
            onClick={handleSubmit}
          >
            {" "}
            <NotifyButton to="/download/thank-you">Notify Me! </NotifyButton>
          </button>
        </Form>
      </DownloadWrapper>
    </DownloadContainer>
  );
};

export default Download;
