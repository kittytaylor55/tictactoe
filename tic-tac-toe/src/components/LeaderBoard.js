import React, { useState } from 'react';
import {Table} from 'react-bootstrap';

const LeaderBoard = () => {

    return(
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Username</th>
      <th>Score</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>@mdo</td>
      <td>52</td>
    </tr>
    <tr>
      <td>2</td>
      <td>@fat</td>
      <td>36</td>
    </tr>
    <tr>
      <td>3</td>
      <td>@twitter</td>
      <td>25</td>
    </tr>
  </tbody>
</Table>
    )
}

export default LeaderBoard;