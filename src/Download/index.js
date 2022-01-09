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
import { db } from "../config";
import { addDoc, collection } from "firebase/firestore/lite";

const Download = () => {
  const [number, setNumber] = useState("");
  const [phone, setPhone] = useState(true);
  const [email, setEmail] = useState("");
  const contactCollectionRef = collection(db, "contact");

  const handleSubmit = async () => {
    await addDoc(contactCollectionRef, { email: email, number: number });
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
            id="outlined-basic"
            label="example@gmail.com"
            variant="outlined"
            helperText="Enter email"
          />
          <TextField
            style={!phone ? { display: "none" } : { display: "block" }}
            onChange={(e) => setNumber(e.target.value)}
            id="outlined-basic"
            label="6xxx-xxx-xxx"
            variant="outlined"
            helperText="Enter phone number"
          />
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
