class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
    }

    handleChannge(event) {
        this.setState({
            input: event.target.value
        })
    };

    submitMessage() {
        let newMessages = [...this.state.messages, this.state.input]
        this.setState({
            messages: newMessages,
            inpu: ''
        })
    };

    render(){
        return(
            <div>

                <h2>Type in a new Message:</h2>

                <input onChange={this.handleChannge.bind(this)} value={this.state.input}></input>
                <button onClick={this.submitMessage.bind(this)}>submit</button>
                <ul>
                    {this.state.messages.map((msg) =><li>{msg}</li>)}
                </ul>

            </div>
        )
    }

}