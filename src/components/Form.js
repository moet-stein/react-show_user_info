import React, { useState, useEffect } from 'react';
import Users from './Users.js';
import {
  FormControl,
  InputLabel,
  Input,
  Grid,
  Box,
  Button,
} from '@material-ui/core';

function Form() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState([]);
  const [age, setAge] = useState(0);

  const changeName = (event) => {
    setUsername(event.target.value);
  };
  const changeAge = (event) => {
    setAge(event.target.value);
  };

  const saveData = () => {
    setUserData(userData.concat([{ username, age }]));
  };

  useEffect(() => {
    console.log(username, age, userData);
  }, [username, age]);

  return (
    <React.Fragment>
      <Grid container m>
        <Grid item sm={12}>
          <Box>
            <FormControl>
              <InputLabel htmlFor="my-input">Username</InputLabel>
              <Input id="username" onChange={changeName} />
            </FormControl>
          </Box>
        </Grid>
        <Grid item sm={12}>
          <FormControl>
            <InputLabel htmlFor="my-input">Age(Years)</InputLabel>
            <Input id="my-input" onChange={changeAge} />
          </FormControl>
        </Grid>
        <Grid item sm={12}>
          <Box m={1}>
            <Button
              m={1}
              variant="contained"
              color="primary"
              onClick={saveData}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Users userData={userData} />
    </React.Fragment>
  );
}
export default Form;
