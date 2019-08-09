import React from "react";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    card: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    display: {
        width: '40%',
        height: '70px',
        margin: theme.spacing(1),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

export default function Display(props) {
    const classes = useStyles();
    return(
        <div>
            <Card className={classes.card}>
                <Paper className={classes.display}>
                    {props.strike + props.ball}
                </Paper>

            </Card>
        </div>
    );
}