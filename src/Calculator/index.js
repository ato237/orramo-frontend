import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
	FormControl,
	FormHelperText,
	InputLabel,
	Input,
	FormLabel,
    Button
} from "@material-ui/core";
import { CalculatorContainer } from "./CalculatorElements";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
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

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	head: {
		backgroundColor: "#14213D",
	},
    button:{
        color: "#000",
        backgroundColor:"#fca311",
    },
    input:{

    },
    panel:{
        padding: "5px",
    }
}));

const Calculator = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<CalculatorContainer>
				<div className={classes.root}>
					<AppBar position="static">
						<Tabs
							centered
							value={value}
							onChange={handleChange} 
							className={classes.head}
							aria-label="simple tabs example">
							<Tab label="ORANGE MONEY" {...a11yProps(0)} />
							<Tab label="MTN MoMo" {...a11yProps(1)} />
						</Tabs>
					</AppBar>
					<TabPanel value={value} index={0}>
						<FormControl>
							<InputLabel htmFor="my-input">Enter Amount</InputLabel>
							<Input className={classes.panel} id="my-input" aria-describedby="my-helper-text" />
							<FormHelperText id="my-helper-text">Orange Money</FormHelperText>
							<Button className ={classes.button} variant="contained" >
								Calculate
							</Button>
						</FormControl>
					</TabPanel>
					<TabPanel value={value} index={1}>
						Item Two
					</TabPanel>
					<TabPanel value={value} index={2}>
						Item Three
					</TabPanel>
				</div>
			</CalculatorContainer>
		</>
	);
};

export default Calculator;
