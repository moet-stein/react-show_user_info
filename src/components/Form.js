import React, { useState, useEffect } from 'react';
import ShowUsers from './ShowUsers.js';
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
    console.log(username, age);
  }, [username, age]);

  return (
    <React.Fragment>
      <Grid container>
        <Grid item sm={12}>
          <Box>
            <FormControl>
              <InputLabel htmlFor="my-input">Username</InputLabel>
              <Input id="username" onChange={changeName} required />
            </FormControl>
          </Box>
        </Grid>
        <Grid item sm={12}>
          <FormControl>
            <InputLabel htmlFor="my-input">Age(Years)</InputLabel>
            <Input id="my-input" onChange={changeAge} required />
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
      <ShowUsers userData={userData} />
    </React.Fragment>
  );
}
export default Form;
