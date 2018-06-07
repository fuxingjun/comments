import React, { Component } from 'react';
import Comments from 'comments/Comments.js';
import Reply from 'reply/Reply.js';

import PropTypes from 'prop-types';

export default class Comment extends Component {
    constructor() {
        super();
        this.state = {
            reply: false
        };

        this.handleReplyClick = this.handleReplyClick.bind(this);
    }
    handleReplyClick() {
        this.setState(prevState => ({
            reply: !prevState.reply
        }));
    }
    render() {
        let { date, time, name, content, avatar, subComment } = this.props;
        return <div className="comment">
            <a className="avatar">
                <img src={avatar} />
            </a>
            <div className="content">
                <a className="author">{name}</a>
                <div className="metadata">
                    <span className="date">{time}</span>
                </div>
                <div className="text">{content}</div>
                <div className="actions">
                    <a className="reply" onClick={this.handleReplyClick}>回复</a>
                </div>
            </div>
            {this.state.reply ? <Reply /> : ''}
            {subComment ? <Comments data={subComment} /> : null}
        </div>
    }
}

Comment.propTypes = {
    time: PropTypes.string.isRequired,
    name: PropTypes.oneOf(['Matt', 'Jenny', 'Sal', 'Elliot', 'Molly', 'Mike', 'Hurley', 'Ben', 'Jane']),
    content: PropTypes.string.isRequired
};