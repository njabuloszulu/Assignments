const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        subNewMessage: function (message) {
            dispatch(addMessage(message));
        }
    }
}