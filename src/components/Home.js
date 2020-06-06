import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';


class Home extends Component {
    render() {
        return (
            <div className="container p-5">
                <div class="card">
                    <div class="card-body">
                        <h2 class="text-primary">Tik Tac Toe</h2>
                        <img className="home-img" src="https://www.kindpng.com/picc/m/69-690722_ios-tic-tac-toe-with-an-unbeatable-ai.png" /><br />
                        <Link to='/Select' type="submit" class="btn btn-outline-primary "><h6>Continue <ListItemIcon>
                            <SendIcon fontSize="small" />
                        </ListItemIcon></h6></Link>
                        <p class="card-text"><small class="text-muted">continue to select your mode</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
