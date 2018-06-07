import React, { Component } from 'react';
import Comment from 'comment/Comment.js';

export default class Comments extends Component {
    render() {
        let data = this.props.data;
        let arr = data.map((value, index) => {
            return <Comment key={index} {...value}/>;
        });
        return <div className="ui comments threaded">
            {arr}
        </div>
    }
}