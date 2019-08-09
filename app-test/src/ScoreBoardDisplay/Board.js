import React from 'react';
import Display from "../Display/Display";
import Dashboard from "../Dashboard/Dashboard";
import Typography from "@material-ui/core/Typography";

class Board extends React.Component{
    state = {
        teamName: this.props.name,
        strike: 0,
        ball: 0,
        foul: 0,
        hit: 0
    };

    handleChangeStrike = () => {
        if(this.state.strike === 3){
            this.setState({strike: 0});
        }else this.setState({strike: ++this.state.strike});
    };

    handleChangeBall = () => {
        if(this.state.ball === 4){
            this.setState({ball: 0});
        }else this.setState({ball: ++this.state.ball});
    };

    handleChangeFoul = () => {
        if(this.state.strike === 0){
            this.setState({strike: 1});
        } else if (this.state.strike === 1) {
            this.setState({strike: 2});
        } else if (this.state.strike === 2){
            this.setState({strike: 2});
        }else this.setState({strike: this.state.strike * 2});
    };

    handleChangeHit = () =>{
        this.setState({hit: ++this.state.hit});
        this.setState({strike: 0});
        this.setState({ball: 0});
    };

    render() {
        return (
            <div>
                <Typography>{this.state.teamName}</Typography>
                <Display strike={this.state.strike} ball={this.state.ball} />
                <Dashboard strike={this.handleChangeStrike}
                           ball={this.handleChangeBall}
                           foul={this.handleChangeFoul}
                           hit={this.handleChangeHit}
                />
            </div>
        )
    }
}

export default Board;
