# 背景

进度条倒计时动画，当前页面不被杀死的前提下，进入子页面再次返回，进度条进度需扣减子页面的停留时间

# 解决思路

当浏览器返回时候，重新 render 进度条倒计时动画组件

# 浏览器事件触发顺序

按照事件触发顺序，浏览器开始到结束

> load -> pageshow -> beforeunload -> pagehide -> visibilitychange(hidden) -> unload

## PC 端

chrome，firefox 进入子页面后是被杀死的；safari 没有被杀死，safari 支持 pageshow 事件，不支持 visibilitychange 事件

```javascript
window.addEventListener("pageshow", () => {
  //根据字段persisted判断是否读取缓存，重新render进度条倒计时组件
});
```

## Android 端

华为 mate20 自带的浏览器，pageshow 只在页面初次渲染触发，支持 visibilitychange

```javascript
window.addEventListener("visibilitychange", () => {
  //自定义字段判断是否didMount，在页面visible时，重新render进度条倒计时组件
});
```

## IOS 端

* 模拟器 IOS13.7，IPhone11，Iphone 端存在 pageshow 只触发一次[Bug](https://bugs.webkit.org/show_bug.cgi?id=156356)
* 通过 replaceState 改变历史记录触发 popstate 事件，下次用户点击浏览器前进后退按钮都会触发 popstate 事件

```javascript
window.addEventListener("pageshow", (e) => {
  if (e.persisted) {
    // 触发popstate事件，风险更新了history.state（没有改变值，重新覆盖一遍）
    let history = window.history;
    history.replaceState(history.state, window.location.href);
  }
});
window.addEventListener("popstate", () => {
  //重新render进度条倒计时组件
});
```
