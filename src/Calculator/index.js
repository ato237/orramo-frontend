import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TextField, Button } from "@material-ui/core";
import { CalculatorContainer } from "./CalculatorElements";
import Axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const withDrawalType = [
  {
    value: "withdraw",
    label: "Withdrawal",
  },
  {
    value: "send",
    label: "Sending",
  },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
// eslint-disable-next-line
const theme = createTheme({
  breakpoints: {
    values: {
      ss: 350,
      xs: 500,
      sm: 600,

      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "10px 10px 10px 5px rgba(0,0,0,0.1) !important",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up("lg")]: {},
    zIndex: 99,
  },
  head: {
    backgroundColor: "#14213D",
  },
  input: {},
  panel: {
    padding: "5px",
  },
  gap: {
    display: "flex",
    padding: "30px",
  },
  spaceBetween: {
    paddingLeft: "5px",
  },

  text: {
    marginLeft: "30px",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      // eslint-disable-line no-useless-computed-key
      margin: 0,
      width: "520px",
    },
    [theme.breakpoints.down("xs")]: {
      // eslint-disable-line no-useless-computed-key
      margin: 0,
      width: "250px",
    },
    [theme.breakpoints.down("ss")]: {
      // eslint-disable-line no-useless-computed-key
      margin: 0,
      width: "250px",
    },
  },
  form: {
    display: "flex",
    justifyContent: "center",
    padding: "20px !important",
    [theme.breakpoints.down("sm")]: {
      // eslint-disable-line no-useless-computed-key
      padding: "0px !important",
      display: "grid",
      justifyContent: "flex-start",
    },
  },
  button: {
    background: "#fca311",
    marginLeft: "30px",
    fontWeight: 600,

    width: 200,
    height: 50,
    "&:hover": {
      background: "orange",
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      // eslint-disable-line no-useless-computed-key
      margin: 0,
      padding: 0,
    },
  },

  charge: {
    paddingLeft: "25px",
    color: "#5C667B",
    fontSize: "30px",

    [theme.breakpoints.down("xs")]: {
      // eslint-disable-line no-useless-computed-key
      padding: "0px",
      fontSize: "25px",
    },
  },
  total: {
    color: "#CD75B4",
    paddingLeft: "25px",
    fontSize: "20px",

    [theme.breakpoints.down("xs")]: {
      // eslint-disable-line no-useless-computed-key
      padding: "0px ",
      fontSize: "15px",
    },
  },
  load: {
    
  },
}));

const Calculator = () => {
  const [loading, isLoading] = useState(true);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [values, setValues] = useState(1000);
  const [status, setStatus] = useState("withdraw");
  const [statusmtn, setStatusMtn] = useState("withdraw");

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    isLoading(false);
    e.preventDefault();
    Axios.post(
      ` https://orramo-backend2.herokuapp.com/api/calculate/orange/${values}/${status}`,
      {}
    ).then((response) => {
      isLoading(true);
      console.log(response);
      setData(response.data);
    });
  };
  const handleMtnSubmit = (e) => {
    isLoading(false);

    e.preventDefault();
    Axios.post(
      ` https://orramo-backend2.herokuapp.com/api/calculate/mtn/${values}/${statusmtn}`,
      {}
    ).then((response) => {
      isLoading(true);
      console.log(response);
      setData(response.data);
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleStatus = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
    console.log(status);
  };
  const handleMtnStatus = (e) => {
    e.preventDefault();
    setStatusMtn(e.target.value);
    console.log(status);
  };

  const handleSetValue = (e) => {
    setValues(e.target.value);
    console.log(values);
    e.preventDefault();
  };
  return (
    <>
      <CalculatorContainer>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#fca311",
                },
              }}
              centered
              value={value}
              onChange={handleChange}
              className={classes.head}
              aria-label="simple tabs example"
            >
              <Tab
                onClick={handleSubmit}
                label="ORANGE MONEY"
                {...a11yProps(0)}
              />
              <Tab
                onClick={handleMtnSubmit}
                label="MTN MoMo"
                {...a11yProps(1)}
              />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <form className={classes.form}>
              <TextField
                onChange={handleSetValue}
                value={values}
                className={classes.text}
                id="outlined-basic"
                label="XAF"
                variant="outlined"
                helperText="Orange Money"
              />
              <TextField
                onClick={handleSubmit}
                value={status}
                className={classes.text}
                onChange={handleStatus}
                id="outlined-select-currency-native"
                select
                SelectProps={{
                  native: true,
                }}
                helperText="Please Select charge type"
                variant="outlined"
              >
                {withDrawalType.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>

              <Button
                onClick={handleSubmit}
                className={classes.button}
                variant="contained"
                type="submit"
              >
                {!loading ? (
                  <CircularProgress
                    className={classes.load}
                  />
                ) : (
                  <p>Calculate</p>
                )}
              </Button>
            </form>
            {data.map((datum) => (
              <h1 key={1}>
                {status !== "withdraw" ? (
                  <h1 className={classes.charge}>
                    Sending Charges : {datum.orangeCharge} Fcfa
                  </h1>
                ) : (
                  <h1 className={classes.charge}>
                    Withdrawal charges : {datum.orangeCharge} Fcfa
                  </h1>
                )}
              </h1>
            ))}

            {data.map((datum) => (
              <h3 className={classes.total} key={2}>
                {status !== "send" ? (
                  <h3>Total Amount to have : {datum.orangeTotal} Fcfa</h3>
                ) : (
                  <h3>Amount to be deduced : {datum.orangeTotal} Fcfa</h3>
                )}
              </h3>
            ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <form className={classes.form}>
              <TextField
                onChange={handleSetValue}
                value={values}
                className={classes.text}
                id="outlined-basic"
                label="XAF"
                variant="outlined"
                helperText="Mtn Momo"
              />
              <TextField
                className={classes.text}
                value={statusmtn}
                onClick={handleMtnSubmit}
                onChange={handleMtnStatus}
                id="outlined-select-currency-native"
                select
                SelectProps={{
                  native: true,
                }}
                helperText="Please Select charge type"
                variant="outlined"
              >
                {withDrawalType.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>

              <Button
                onClick={handleMtnSubmit}
                className={classes.button}
                variant="contained"
                type="submit"
              >
                {!loading ? (
                  <CircularProgress
                    className={classes.load}
                  />
                ) : (
                  <p>Calculate</p>
                )}
              </Button>
            </form>

            {data.map((datum) => (
              <h1 key={1}>
                {statusmtn === "send" ? (
                  <h1 className={classes.charge}>
                    Sending Charges : {datum.mtnCharge} Fcfa
                  </h1>
                ) : (
                  <h1 className={classes.charge}>
                    Withdrawal charges : {datum.mtnCharge} Fcfa
                  </h1>
                )}
              </h1>
            ))}
            {data.map((datum) => (
              <h3 className={classes.total} key={2}>
                {statusmtn !== "send" ? (
                  <h3>Total Amount to have : {datum.mtnTotal} Fcfa</h3>
                ) : (
                  <h3>Amount to be deduced : {datum.mtnTotal} Fcfa</h3>
                )}
              </h3>
            ))}
          </TabPanel>
        </div>
      </CalculatorContainer>
    </>
  );
};

export default Calculator;
