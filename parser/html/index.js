var page = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="./static/vue.min.js"></script>
  <script src="./static/wxUI.js"></script>
  <script src="./dist/wx-parser.js"></script>
  <style id="style-editor">
  .flex-wrp{
    margin-top: 60rpx;
    display:flex;
  }
  .flex-item{
    width: 200rpx;
    height: 300rpx;
    font-size: 26rpx;
  }
  .flex-item-V{
    margin: 0 auto;
    width: 300rpx;
    height: 200rpx;
  }

  .demo-text-1{
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: #1AAD19;
    color: #FFFFFF;
    font-size: 36rpx;
  }
  .demo-text-1:before{
    content: 'A';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .demo-text-2{
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: #2782D7;
    color: #FFFFFF;
    font-size: 36rpx;
  }
  .demo-text-2:before{
    content: 'B';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .demo-text-3{
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: #F1F1F1;
    color: #353535;
    font-size: 36rpx;
  }
  .demo-text-3:before{
    content: 'C';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .weui-cell.weui-check__label {
    display: flex
  }

  button{
    margin-top: 30rpx;
    margin-bottom: 30rpx;
  }
  .button-sp-area{
    margin: 0 auto;
    width: 60%;
  }
  .mini-btn{
    margin-right: 10rpx;
  }

  </style>
</head>

<body>
  <div id="app">
  
  <view class="page-body">
  <view class="btn-area" id="buttonContainer">
    <button type="primary">页面主操作 Normal</button>
    <button type="primary" loading="true">页面主操作 Loading</button>
    <button type="primary" disabled="true">页面主操作 Disabled</button>

    <button type="default">页面次要操作 Normal</button>
    <button type="default" disabled="true">页面次要操作 Disabled</button>

    <button type="warn">警告类操作 Normal</button>
    <button type="warn" disabled="true">警告类操作 Disabled</button>

    <view class="button-sp-area">
      <button type="primary" plain="true">按钮</button>
      <button type="primary" disabled="true" plain="true">不可点击的按钮</button>

      <button type="default" plain="true">按钮</button>
      <button type="default" disabled="true" plain="true">按钮</button>

      <button class="mini-btn" type="primary" size="mini">按钮</button>
      <button class="mini-btn" type="default" size="mini">按钮</button>
      <button class="mini-btn" type="warn" size="mini">按钮</button>
    </view>
  </view>
</view>
  </div>
  <script>
  console.log(WxUI,Vue)
  Page({
    onShareAppMessage() {
      return {
        title: 'checkbox',
        path: 'page/component/pages/checkbox/checkbox'
      }
    },
  
    data: {
      items: [
        {value: 'USA', name: '美国'},
        {value: 'CHN', name: '中国', checked: 'true'},
        {value: 'BRA', name: '巴西'},
        {value: 'JPN', name: '日本'},
        {value: 'ENG', name: '英国'},
        {value: 'FRA', name: '法国'}
      ]
    },
  
    checkboxChange(e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  
      const items = this.data.items
      const values = e.detail.value
      for (let i = 0, lenI = items.length; i < lenI; ++i) {
        items[i].checked = false
  
        for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (items[i].value === values[j]) {
            items[i].checked = true
            break
          }
        }
      }
  
      this.setData({
        items
      })
    }
  })
  </script>
</body>

</html>
`