import React from 'react';

class Message extends React.Component {
    render() {
        var {message}=this.props;
        return (
            <div className="message">
                <div className="container">
                    <label className="label label-success">{message}</label>
                </div>
            </div>
        );
    }

}

export default Message;
