import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

export default function ContainedButtons() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button variant="contained">
        <PeopleOutlineIcon></PeopleOutlineIcon>
      </Button>
    </div>
  )
}
