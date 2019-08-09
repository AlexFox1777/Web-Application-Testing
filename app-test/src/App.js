import React from 'react';
import Grid from "@material-ui/core/Grid";
import Board from "./ScoreBoardDisplay/Board";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    containerCard: {
        padding: theme.spacing(4),
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div>
            <Container>
                <Card className={classes.containerCard}>
                    <Grid container justify={"space-around"}>
                        <Grid item xs={5}><Board name={"At bat"}/></Grid>
                        <Grid item xs={5}><Board name={"Strong bears"}/></Grid>
                    </Grid>
                </Card>
            </Container>
        </div>
    );
}

export default App;
