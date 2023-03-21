# -*- codingL: utf-8 -*-
"""
@Time: 2022/11/24 16:47
@AUTH: 张鹏辉
@File: app.py
@IDE: PyCharm
"""
import sqlite3
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    # ctrl+r 调出替换查询功能
    return render_template('index.html')


@app.route('/index')
def home():
    return index()


@app.route('/movie')
def movie():
    datalist = []
    # 连接数据库
    con = sqlite3.connect('movie.db')
    # 定义游标
    cur = con.cursor()
    # 查询表
    sql = 'select * from movie'
    # 执行sql语句
    data = cur.execute(sql)
    for item in data:
        datalist.append(item)
    cur.close()
    con.close()
    return render_template('movie.html', movies=datalist)


@app.route('/score')
def score():
    # 评分列表
    scorelist = []
    # 评分数集
    numberlist = []
    # 连接数据库
    con = sqlite3.connect('movie.db')
    # 定义游标
    cur = con.cursor()
    # 查询表
    sql = 'select score, count(score) from movie group by score'
    # 执行sql语句
    data = cur.execute(sql)
    for item in data:
        scorelist.append(item[0])
        numberlist.append(item[1])
    cur.close()
    con.close()
    return render_template('score.html', score=scorelist, number=numberlist)


@app.route('/comment')
def comment():
    return render_template('comment.html')


@app.route('/team')
def team():
    return render_template('team.html')


if __name__ == '__main__':
    # debug模式开启
    app.run(debug=True)
