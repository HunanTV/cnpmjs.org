# npm.hunantv.com: MGTV私有库

## Registry
- [Node.js](https://nodejs.org) version: <span id="node-version"></span>

<div class="ant-table">
<table class="downloads">
  <tbody>
    <tr>
      <td class="count" id="total-packages"></td><td><a href="/list/page/1">total packages</a></td>
      <td class="count" id="total-versions"></td><td>total package versions</td>
      <td class="count" id="total-deletes"></td><td>total delete packages</td>
    </tr>
    <tr>
      <td class="count"></td><td> downloads today</td>
      <td class="count"></td><td> downloads in this week</td>
      <td class="count"></td><td> downloads in this month</td>
    </tr>
    <tr>
      <td class="count"></td><td> downloads in the last day</td>
      <td class="count"></td><td> downloads in the last week</td>
      <td class="count"></td><td> downloads in the last month</td>
    </tr>
  </tbody>
</table>
</div>
<!--
<div class="sync" style="display:none;">
  <h3>Sync Status</h3>
  <p id="sync-model"></p>
  <p>Last sync time is <span id="last-sync-time"></span>. </p>
  <div class="ant-alert ant-alert-info syncing">
    <span class="anticon ant-alert-icon anticon-info-circle"></span>
    <span class="ant-alert-description">The sync worker is working in the backend now. </span>
  </div>
  <div class="ant-table">
  <table class="sync-status">
    <tbody>
      <tr>
        <td><span id="need-sync"></span> packages need to be sync</td>
        <td class="syncing"><span id="left-sync"></span> packages and dependencies waiting for sync</td>
        <td><span id="percent-sync"></span>% progress</td>
      </tr>
      <tr>
        <td><span id="success-sync"></span> packages and dependencies sync successed</td>
        <td><span id="fail-sync"></span> packages and dependencies sync failed</td>
        <td>last success: <span id="last-success-name"></span></td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
-->
<script src="/js/readme.js"></script>


## 使用

```
npm install -g mgtv
mgtv install  私有库
```

或者

```bash
npm install --registry=http://npm.hunantv.com 私有库名
```

### 发布私有库

首先注册一个用户

```
mgtv adduser
```

然后在包含`package.json`工作目录下运行

```
mgtv publish 
``` 

即可