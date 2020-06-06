import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';

class Select extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            selectedOption: null
        }
    }
    onValueChange = (event) => {
        this.setState({
            selectedOption: event.target.value
        });
    }
    formSubmit = (event) => {
        event.preventDefault();
        console.log("Hi")
        console.log(this.state.selectedOption)
        let xSelected = false
        if (this.state.selectedOption === 'x') {
            xSelected = true
        }
        console.log(xSelected)
        this.props.option_data(xSelected)
        this.props.history.push('/Game')
    }

    render() {
        console.log(this.state);

        return (
            <div className="container p-5 col-8">
                <h4>Pick your side</h4>
                <form onSubmit={this.formSubmit}>
                    <div class="card-deck mt-5">
                        <div class="card ">
                            <div class="card-body">
                                <img className="select-img" src="https://www.festivalclaca.cat/imgfv/b/197-1973958_free-download-x-brush-png-transparent.png" /><br />
                                <Radio
                                    value="x" checked={this.state.selectedOption === "x"} onChange={this.onValueChange} 
                                />
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <img className="select-img" src="https://us.123rf.com/450wm/kchung/kchung1711/kchung171100061/89454692-3d-%C3%BCbertragen-rotes-alphabet-o-retro-fettes-design-der-schrift-3d.jpg?ver=6" /><br />
                                <Radio
                                    value="o" checked={this.state.selectedOption === "o"} onChange={this.onValueChange} 
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-outline-primary mt-3">Continue</button>
                    <p class="card-text"><small class="text-muted">continue to play</small></p>
                </form>
            </div>
        )
    }
}

export default Select
