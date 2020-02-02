import React from "react";
import SingleUserTable from "./SingleUserTable";
import SimpleTable from "./SimpleTable";
import Grid from "@material-ui/core/Grid";

export default function SingleUser(props) {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={6}
      >
        <Grid item>
          <h3>User</h3>
          <SingleUserTable {...props} />
        </Grid>
        <Grid item>
          <h3>{props.location.state.applicationName}</h3>
          <SimpleTable {...props} />
        </Grid>
      </Grid>
    </div>
  );
}
