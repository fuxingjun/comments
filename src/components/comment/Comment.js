import React, { Component } from 'react';
import Comments from 'comments/Comments.js';
import Reply from 'reply/Reply.js';

import PropTypes from 'prop-types';

export default class Comment extends Component {
    constructor() {
        super();
        this.handleReplyClick = this.handleReplyClick.bind(this);
    }
    handleReplyClick() {
        let comp = this.context.replyComp === this ? null : this;//如果有回复框的组件就是当前组件，变成null
        this.context.replyClick(comp);//修改CommentBox的state，设置有回复框的组件
    }
    render() {
        let { date, time, name, content, avatar, subComment, data } = this.props;
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
            {this.context.replyComp === this ? 
                <Reply data={data} handleReplyClick = {this.handleReplyClick}/> : 
            ''}
            {subComment ? <Comments data={subComment} /> : null}
        </div>
    }
}

Comment.propTypes = {
    time: PropTypes.string.isRequired,
    name: PropTypes.string,
    content: PropTypes.string.isRequired
};
Comment.contextTypes = {
    replyClick: PropTypes.func,
    replyComp: PropTypes.object
};