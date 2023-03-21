# -*- codingL: utf-8 -*-
"""
@Time: 2022/11/17 18:59
@AUTH: 张鹏辉
@File: data_spider.py
@IDE: PyCharm
"""
import re
import sqlite3
import urllib.request
import xlwt
from bs4 import BeautifulSoup


def main():
    # 网页链接
    url = 'https://www.mee.gov.cn/hjzl/sthjzk/hjzywr/'
    # 爬取网页数据表一
    datalist1 = getData1(url)
    # 爬取网页数据表二
    datalist2 = getData2(url)
    # 数据路径
    savepath = './中华人民共和国生态环境部.xls'
    # dbpath = 'noise.db'
    # 保存数据xls
    setData(datalist1, datalist2, savepath)
    # 保存数据db
    # setDataDb(datalist1, datalist2, dbpath)


# 创建正则表达式对象，表示规则(字符串模式)
# 中国噪声污染防治报告日期
findNoiseDate = re.compile(r'<span class="date">(.*)</span>')
# 中国噪声污染防治报告详情链接
findNoiseLink = re.compile(r'<a href="./(.*?)" target="_blank" title="">.*</a>')
# 中国噪声污染防治报告标题
findNoiseTitle = re.compile(r'<a href=".*" target="_blank" title="">(.*)</a>')
# 其他相关部门链接
findOthersLink = re.compile(r'<a href="(.*?)" target="_blank">.*</a>')
# 其他相关部门名称
findOthersName = re.compile(r'<a href=".*?" target="_blank">(.*)</a>')


# 爬取网页数据表一
def getData1(url):
    datalist = []
    for i in range(0, 1):  # 调用两次页面信息(技术有限这里只调用一次)
        # # url的地址添加，获取第二页的信息
        # if i == 1:
        #     url = url + 'index_1.shtml'
        html = oneUrl(url)  # 保存获取到的页面信息源码
        soup = BeautifulSoup(html, 'html.parser')  # 逐一解析数据通过html.parser
        # 查找符合要求的字符串，形成列表
        for item in soup.find_all('div', class_='mobile_list'):
            print(item)
            data = []
            item = str(item)
            # re库用来查找正则表达式查找指定的字符串
            # 中国噪声污染防治报告日期
            date = re.findall(findNoiseDate, item)
            data.append(date)  # 添加日期
            # 中国噪声污染防治报告详情链接
            link = re.findall(findNoiseLink, item)
            data.append(link)  # 添加链接
            # 中国噪声污染防治报告标题
            title = re.findall(findNoiseTitle, item)
            data.append(title)  # 添加标题
            datalist.append(data)
    print('----------表一----------')
    print(datalist)
    return datalist


# 爬取网页数据表二
def getData2(url):
    datalist = []
    # 调用两次页面信息
    for i in range(0, 1):
        # 保存获取到的页面信息源码
        html = oneUrl(url)
        # 逐一解析数据
        soup = BeautifulSoup(html, 'html.parser')
        # 查找符合要求的字符串，形成列表
        print('----------查找符合要求的字符串，形成列表----------')
        # 查找所有不带class的li标签
        for item in soup.find_all('div', class_='footerTopUl'):
            print(item)
            data = []
            item = str(item)
            # re库用来查找正则表达式查找指定的字符串
            # 其他相关部门链接
            othersLink = re.findall(findOthersLink, item)
            data.append(othersLink)  # 添加相关部门链接
            # 其他相关部门名称
            otherName = re.findall(findOthersName, item)
            data.append(otherName)  # 添加相关部门名称
            # 把处理好的信息放入datalist中
            datalist.append(data)
    print('----------表二----------')
    print(datalist)
    return datalist


# 保存数据（xls）
def setData(datalist1, datalist2, savepath):
    workbook = xlwt.Workbook(encoding='utf-8', style_compression=0)
    # cell_overwrite_ok是否覆盖之前的内容
    worksheet1 = workbook.add_sheet('中国噪声污染防治报告', cell_overwrite_ok=True)
    worksheet2 = workbook.add_sheet('生态环境部门', cell_overwrite_ok=True)
    col1 = ('日期', '链接', '标题')
    col2 = ('链接', '部门')
    # 中国噪声污染防治报告数据存储
    for item in range(0, 3):
        worksheet1.write(0, item, col1[item])  # 存储列名到worksheet1表
    for item in range(0, 1):
        data1 = datalist1[item]
        for i in range(0, 3):
            data2 = data1[i]
            for j in range(0, 15):
                worksheet1.write(j + 1, i, data2[j])  # 存储数据(行, 列, 数据)
    # 生态环境部门数据存储
    for item in range(0, 2):
        worksheet2.write(0, item, col2[item])  # 存储列名到worksheet2表
    for item in range(0, 1):
        data1 = datalist2[item]
        for i in range(0, 2):
            data2 = data1[i]
            for j in range(0, 157):
                worksheet2.write(j + 1, i, data2[j])  # 存储数据(行, 列, 数据)
    workbook.save(savepath)  # 保存数据至Excel


# 保存数据（db）
def setDataDb(datalist1, datalist2, dbpath):
    # 创建表
    if dbpath == 0:
        init_db(dbpath)
    con = sqlite3.connect(dbpath)  # 连接表
    cur = con.cursor()  # 获取游标
    for data in datalist1:
        for index in range(len(data)):
            data[index] = '"' + str(data[index]) + '"'
        sql = '''insert into noise ( date, link, title ) values ( %s )''' % ','.join(data)
        print(sql)  # 打印数据库数据记录
        cur.execute(sql)  # 执行数据库语句命令
        con.commit()   # 提交数据库操作
    for data in datalist2:
        for index in range(len(data)):
            data[index] = '"' + str(data[index]) + '"'
        sql = '''insert into department ( link, name ) values ( %s )''' % ','.join(data)
        print(sql)  # 打印数据库数据记录
        cur.execute(sql)  # 执行数据库语句命令
        con.commit()  # 提交数据库操作
    # 查询数据
    sql1 = 'select * from noise'
    sql2 = 'select * from department'
    # 执行数据库语句命令
    cur.execute(sql1)
    for row in cur:
        print(row)
    cur.execute(sql2)
    for row in cur:
        print(row)
    cur.close()  # 关闭游标
    con.close()  # 关闭数据库


# 得到一个指定的URL网页内容
def oneUrl(url):
    header = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                      'Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.70 '
    }
    request = urllib.request.Request(url=url, headers=header)
    html = ''
    try:
        response = urllib.request.urlopen(request)
        html = response.read().decode('utf-8')
        print('----------输出爬取的网页----------')
        # print(html)
    except urllib.error.URLError as e:
        if hasattr(e, 'code'):
            print(e.code)
        if hasattr(e, 'reason'):
            print(e.reason)
    return html


def init_db(dbpath):
    # 创建数据表
    sql = '''
        create table noise
        (
            id integer primary key autoincrement,
            date text,
            link text,
            title varchar
        )
        create table department
        (
            id integer primary key autoincrement,
            link text,
            name varchar
        )
    '''
    conn = sqlite3.connect(dbpath)
    cur = conn.cursor()  # 获取游标
    # execute() 是一个预定义的函数，用于执行 SQLite 的任何查询
    cur.execute(sql)
    conn.commit()  # 提交数据库操作
    cur.close()  # 关闭游标
    conn.close()  # 关闭数据库


# 当程序执行时
if __name__ == '__main__':
    # 调用函数
    main()
    print('数据爬取成功')
