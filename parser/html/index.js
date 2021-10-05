var page = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="./static/wxUI.css" rel="stylesheet">
  <script src="./static/vue.min.js"></script>
  <script src="./static/wx.js"></script>
  <script src="./static/wxUI.js"></script>
  <script src="./dist/wx-parser.js"></script>
  <style id="style-editor">
  /**index.wxss**/
page {
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}


.table {
  border: 0px solid darkgray;
 }
 .tr {
  display: flex;
  width: 100%;
  justify-content: center;
  height: 3rem;
  align-items: center;
 }
 .td {
  width:25%;
  justify-content: center;
  text-align: center;
 }
 .bg-w{
  background: snow;
 }
 .bg-g{
  background: #E6F3F9;
 }
 .th {
  width: 25%;
  justify-content: center;
  background: #3366FF;
  color: #fff;
  display: flex;
  height: 3rem;
  align-items: center;
 }
 .control {
   padding-top: 40rpx;
   width: 100%;
 }
 .button{
   margin: 20rpx;
 }
  </style>
</head>

<body>
  <div id="app">
  
  </div>
  <script>
  const htmlTemplate = \`
  <view class="table">
    <view class="tr">
      <view class="th">描述</view>
      <view class="th">进度</view>
      <view class="th">是否完成</view>
      <view class="th">标签</view>
    </view>
    <block wx:for="{{databack}}">
    <view class='tr' style="background: {{item.style.color}};">
      <view class="td">{{item.description}}</view>
      <view class="td">{{item.progress}}%</view>
      <view class="td">{{item.done}}</view>
      <view class="td">{{item.tags}}</view>
    </view>
    </block>
  </view>
  <view class="control">
    <button type='primary' class="button" bindtap='refreshTable' style="width: 80%">查看全部数据</button>
    <button type='primary' class="button" bindtap='searchTable1' style="width: 80%">查询未完成项目</button>
    <button type='primary' class="button" bindtap='searchTable2' style="width: 80%">查询进度大于 20%的条目</button>
    <button type='primary' class="button" bindtap='searchTable3' style="width: 80%">查询背景颜色为红色的条目</button>
    <button type='primary' class="button" bindtap='searchTable4' style="width: 80%">查询第一个 tag 为 BUPT 的条目</button>
    <button type='primary' class="button" bindtap='modifyTable' style="width: 80%">将 todo1 改为已完成</button>
    <button type='primary' class="button" bindtap='deleteTable' style="width: 80%">删除进度为 30%的条目</button>
    <button type='primary' class="button" bindtap='insertTable' style="width: 80%">增加一个条目</button>
  </view>
</view>\`
  const db=wx.cloud.database();
  Page({
    data: {
      databack:''//用来存储显示的表格
    },
  
  
    onLoad: function() {//将预设的数据信息存入数据库
      console.log(123)
      db.collection('test').where({}).count({
        success:res=>{
          if(res.total==0){
            wx.redirectTo({
              url: '/pages/createCollection/index',
            })
          }
          else{
            this.refreshTable()
          }
        },
        fail:err=>{
          console.error(err)
          wx.redirectTo({
            url: '/pages/createCollection/index',
          })
          console.log('请前往云开发控制面板建立 test 集合')
        }
      })
    },
    refreshTable:function(){
      db.collection('test').where({}).get({//利用空条件获取数据库内全部信息
        success:res=>{
          this.setData({
            databack:res.data
          })
        },
        fail: err=>{
          console.error(err)
        }
      })
    },
    searchTable1:function(){
      db.collection('test').where({
        done:false//精确匹配查询
      }).get({
        success:res=>{//查询成功执行的函数
          console.log(res.data)
          this.setData({
            databack:res.data
          })
        },
        fail:err=>{//失败返回的报错信息
          console.error(err)
        }
      })
    },
    searchTable2:function(){
      var _ = db.command;
      db.collection('test').where({
        progress:_.gt(20)//数据库命令中的查询指令，条件查询
      }).get({
        success:res=>{
          console.log(res.data)
          this.setData({
            databack:res.data
          })
        },
        fail:err=>{
          console.error(err)
        }
      })
    },
    searchTable3:function(){
      db.collection('test').where({
        'style.color':'red'//对内嵌文档的查询
      }).get({
        success:res=>{
          console.log(res.data)
          this.setData({
            databack:res.data
          })
        },
        fail:err=>{
          console.error(err)
        }
      })
    },
    searchTable4:function(){
      db.collection('test').where({
        'tags.0':'BUPT'//对内嵌数组的查询
      }).get({
        success:res=>{
          console.log(res.data)
          this.setData({
            databack:res.data
          })
        },
        fail:err=>{
          console.error(err)
        }
      })
    },
    modifyTable:function(){
      //var that=this;
      db.collection('test').where({
        'description':'567'//先查找对应的记录的_id
      }).get({
        success:res=>{
          console.log(res.data)
          var _id=res.data[0]._id
          db.collection('test').doc(_id).update({//根据_id 去对指定文档做出修改，前端限制只能这样修改，后续介绍云函数后，可在云端批量修改
            data:{//要修改的信息
              done:true
            },
            success:res=>{
              console.log(res)
              this.refreshTable();
            },
            fail:err=>{
              console.error(err)
            }
          })
        },
        fail:err=>{
          console.error(err)
        }
      })
    },
    deleteTable:function(){
      db.collection('test').where({
        progress: 20,
        done: false
      }).get({
        success:res=>{
          var _id=res.data[0]._id
          console.log(123)
          db.collection('test').doc(_id).remove({//原因同上，前端只能操作一条记录。注意，如果是从控制面板建立的记录可以直接删除吗？参考权限设置
            success:function(res){
              console.log(res,this)
              this.refreshTable();
            },
            fail:err=>{
              console.error(err)
            }
          })
        },
        fail:err=>{
          console.error(err)
        }
      })
    },
    insertTable:function(){
      console.log('123', this.refreshTable)
      db.collection('test').add({//添加数据接口
        data:{//要添加的数据
          description:'绿色的',
          progress:20,
          done:false,
          style:{
            color:'green'
          },
          tags:['BUPT','SICE']
        },
        success: res=>{
          console.log(res)
          this.refreshTable();
        },
        fail:err=>{
          console.error(err)
        }
      })
    },
  })
  </script>
</body>

</html>
`;
