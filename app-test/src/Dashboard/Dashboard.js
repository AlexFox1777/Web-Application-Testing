import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {

    },
    card: {
        textAlign: 'center',
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Dashboard(props) {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Card className={classes.card}>
                <Button onClick={props.strike} variant="contained" color="primary" className={classes.button}>Strike</Button>
                <Button onClick={props.ball} variant="contained" color="primary" className={classes.button}>Ball</Button>
                <Button onClick={props.foul} variant="contained" color="primary" className={classes.button}>Foul</Button>
                <Button onClick={props.hit} variant="contained" color="primary" className={classes.button}>Hit</Button>
            </Card>
        </div>
    );
}