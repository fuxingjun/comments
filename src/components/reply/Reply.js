import React, { Component } from 'react';

export default class Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Jayden',
            content: ''
        };
        // this.handleClick = this.handleClick(this);
        //这样写，子组件的回复按钮点击事件会跑到父组件的回复上触发，很神奇
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let { data } = this.props;
        let time = '' + new Date().getHours() + ':' + new Date().getMinutes();
        let { name, content } = this.state;
        let avatar = require('images/1.png');
        if (!data.subComment) {
            data.subComment = [];
        }
        data.subComment.push({ time, name, content, avatar });
        
        this.props.handleReplyClick();//收起回复框
    }
    render() {
        return (
            <form className="ui reply form">
                <div className="ui header">
                    <input type="text" defaultValue="Jayden" onChange={ev => {
                        this.setState({
                            name: ev.target.value
                        });
                    }} />
                </div>
                <div className="field">
                    <textarea onChange={ev => {
                        this.setState({
                            content: ev.target.value
                        });
                    }}>
                    </textarea>
                </div>
                <div className="ui blue submit icon button" onClick={this.handleClick}>回复</div>
            </form>
        );
    }
}