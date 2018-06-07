import React, { Component } from 'react';
import Comments from 'comments/Comments.js';

export default class CommentBox extends Component {
    render() {
        let data = this.props.data;
        let dateArr = [];
        data.forEach((value, index) => {
            if (dateArr.indexOf(value.date) < 0) {
                dateArr.push(value.date);
            }
        });//提取日期组成数组
        let arr = dateArr.map((value, index) => {
            return { "date": value, "data": [] }
        });
        data.forEach((value, index) => {
            arr.forEach((v, i) => {
                if (value.date === v.date) {
                    v.data.push(value);
                }
            });
        });//按日期排好数据

        var r_data = arr.map((value, index) => {
            return <div key = {index}>
                <h3 className = "ui dividing header">{value.date}</h3>
                <Comments data={value.data} />
            </div>
        });//按日期排成React元素
        
        return <div className = "ui text container">
            <h2 className="ui dividing header">Comments</h2>
            {r_data}
        </div>
    }
}