import React from 'react';
import { Box, Card, CardContent } from '@material-ui/core';

function ShowUsers(props) {
  const { userData } = props;
  return (
    <div>
      {userData.map((user, index) => (
        <Box
          m={3}
          display="flex"
          alignItems="center"
          flexDirection="column"
          key={index}
        >
          <Card>
            <CardContent>
              <h3>
                {user.username} ({user.age} year(s) old)
              </h3>
            </CardContent>
          </Card>
        </Box>
      ))}
    </div>
  );
}
export default ShowUsers;
