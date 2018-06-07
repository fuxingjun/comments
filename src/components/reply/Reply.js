import React, { Component } from 'react';

export default class Reply extends Component {
    render() {
        return (
            <form className="ui reply form">
                <div className = "ui header">
                    <input type="text" />
                </div>
                <div className="field">
                    <textarea></textarea>
                </div>
                <div className="ui blue labeled submit icon button">
                    <i className="icon edit"></i> 回复
                </div>
            </form>
        );
    }
}