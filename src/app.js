import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../semantic/dist/semantic.css');

import CommentBox from 'commentBox/CommentBox.js';
let data = [
    { date: '今天', time: '11:20', name: 'Matt', content: '你好', avatar: require("images/matthew.png") },
    {
        date: '今天', time: '11:20', name: 'Jenny', content: '你好', avatar: require("images/molly.png"),
        subComment: [
            { time: '11:20', name: 'Sal', content: '你好', avatar: require("images/molly.png") },
            { time: '11:20', name: 'Jenny', content: '你好', avatar: require("images/1.png") },
            { time: '11:20', name: 'Elliot', content: '你好', avatar: require("images/elyse.png") },
            { time: '11:20', name: 'Molly', content: '你好', avatar: require("images/molly.png") }
        ]
    },
    { date: '今天', time: '11:20', name: 'Molly', content: '你好', avatar: require("images/molly.png") },
    { date: '今天', time: '11:20', name: 'Elliot', content: '你好', avatar: require("images/matthew.png") },
    { date: '昨天', time: '11:20', name: 'Sal', content: '你好', avatar: require("images/molly.png") },
    { date: '昨天', time: '11:20', name: 'Mike', content: '你好', avatar: require("images/matthew.png") },
    { date: '前天', time: '11:20', name: 'Sal', content: '你好', avatar: require("images/molly.png") },
    {
        date: '前天', time: '11:20', name: 'Hurley', content: '你好', avatar: require("images/matthew.png"),
        subComment: [
            {
                time: '11:20', name: 'Sal', content: '你好', avatar: require("images/molly.png"),
                subComment: [
                    {
                        time: '11:20', name: 'Sal', content: '你好', avatar: require("images/molly.png"),
                        subComment: [
                            { time: '11:20', name: 'Molly', content: '你好', avatar: require("images/molly.png") }
                        ]
                    },
                    { time: '11:20', name: 'Jenny', content: '你好', avatar: require("images/elyse.png") },
                    { time: '11:20', name: 'Elliot', content: '你好', avatar: require("images/elyse.png") },
                    { time: '11:20', name: 'Molly', content: '你好', avatar: require("images/molly.png") }
                ]
            }
        ]
    },
    { date: '前天', time: '11:20', name: 'Ben', content: '你好', avatar: require("images/matthew.png") },
    { date: '前天', time: '11:20', name: 'Jane', content: '你好', avatar: require("images/molly.png") }
];

ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('root')
);

