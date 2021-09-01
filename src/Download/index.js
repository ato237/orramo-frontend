import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import {
  DownloadContainer,
  DownloadWrapper,
  Form,
  DownloadInfo,
  NotifyButton,
  Image,
  Label,
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
    const person = { email };
    console.log(person);
    axios.post("http://localhost:8082/api/calculate/data", { email });
    setMessage("Your info has been Succesfully sent!")
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
            helperText="Please Select charge type"
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
               <h4>{message}</h4> 

          <NotifyButton type="submit" onClick={handleSubmit}>
            Notify Me!
          </NotifyButton>
        </Form>
        </DownloadWrapper>
    </DownloadContainer>
  );
};

export default Download;
