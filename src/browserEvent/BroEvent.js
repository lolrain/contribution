new window.VConsole()

const ua = window.navigator.userAgent.toLowerCase()
console.log('ua', ua)

let broEnv = ua.indexOf('chrome') !== -1 ? 'chrome浏览器' : ua.indexOf('safari') !== -1 ? 'safari浏览器' : '非主流浏览器'
console.log('浏览器', broEnv)

let mobEnv = ua.indexOf('android') !== -1 ? 'android环境' : ua.indexOf('iphone') !== -1 ? 'iphone环境' : '其他环境'
console.log('手机', mobEnv)

// window.addEventListener('DOMContentLoaded', () => console.log('DOMContentLoaded'))
export default function broEvent(dom) {

    // window.onload = function() {
    //     console.log('onload')
    // }

    window.addEventListener('load', () => {
        console.log('load')
    })

    window.addEventListener('popstate', () => {
        console.log('popstate')
    })
 
    window.addEventListener('pageshow', e => {
        // 页面显示 chrome 1 只在初始化时候触发，从子页面返回只触发一次
        if (e.persisted) {
            console.log('缓存 pageshow')
            let history = window.history;
            history.replaceState(history.state, window.location.href);
        }
        console.log('pageshow')
    })

    window.addEventListener('beforeunload', () => {
        // 页面离开 chrome 1
        console.log('beforeunload')
    })

    // IOS13.7 safari 不支持
    // safari/605.1.15 不支持
    window.addEventListener('pagehide', () => {
        // 页面离开 chrome 2
        console.log('pagehide')
    })

    // chrome 支持，safari不支持
    window.addEventListener('visibilitychange', () => {
        let temp = document.visibilityState
        
        if (temp === 'hidden') {
            // 页面离开 chrome 3
            console.log('页面隐藏')
        } else if (temp === 'visible') {
            console.log('页面出现')
        }
    })

    window.addEventListener('unload', () => {
        // 页面离开 chrome 1
        console.log('unload')
    })

    window.addEventListener('', () => console.log(''))
} 
