var homelink = document.getElementById('homelink')

var mainTitle = document.getElementById('mainTitle');
var mainTitle2 = document.getElementById('mainTitle2');
var htmlText = document.getElementById('htmlText');
var cssText = document.getElementById('cssText');
var bootstrapText = document.getElementById('bootstrapText');
var javaScriptText = document.getElementById('javaScriptText');
var reactText = document.getElementById('reactText');
var nodejsText = document.getElementById('nodejsText');
var myqlText = document.getElementById('myqlText');
var subTitle = document.getElementById('subTitle');
var projectPage = document.getElementById('projectPage');

// ScrollSpy
var ScrollSpy = document.querySelectorAll(".ScrollSpy");
var ScrollSpys = {};

ScrollSpy.forEach((e) => {
    ScrollSpys[e.id] = e.offsetTop
})

window.addEventListener('scroll', function () {
    
    // 取捲軸上緣的位置值或 body 上緣的位置值
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // 判斷每一個元素的位置，當捲軸捲到時
    // 移除 classname 是 active 的，並在目前位置的相對 A 連結加上 active 的 classname
    for (var i in ScrollSpys) {
        if (ScrollSpys[i] <= scrollPosition + 200) {
            document.querySelector('.active').classList.remove('active');
            document.querySelector('a[href*=' + i + ']').classList.add('class', 'active');
        }
    }

    var value = window.scrollY;

    if (screen.availWidth >= 1600) {
        mainTitle.style.left = 55 + value * 0.04 + '%';
        mainTitle2.style.left = 55 + value * 0.05 + '%';
        subTitle.style.left = 52.5 + value * 0.03 + '%';

        htmlText.style.left = 22.5 - value * 0.05 + '%';
        cssText.style.left = 22.5 - value * 0.06 + '%';
        bootstrapText.style.left = 22.5 - value * 0.07 + '%';
        javaScriptText.style.left = 22.5 - value * 0.08 + '%';
        reactText.style.left = 22.5 - value * 0.09 + '%';
        nodejsText.style.left = 22.5 - value * 0.10 + '%';
        myqlText.style.left = 22.5 - value * 0.11 + '%';
    } else if (screen.availWidth >= 1440) {
        mainTitle.style.left = 55 + value * 0.04 + '%';
        mainTitle2.style.left = 55 + value * 0.05 + '%';
        subTitle.style.left = 52.5 + value * 0.03 + '%';

        htmlText.style.left = 19 - value * 0.06 + '%';
        cssText.style.left = 19 - value * 0.07 + '%';
        bootstrapText.style.left = 19 - value * 0.08 + '%';
        javaScriptText.style.left = 19 - value * 0.09 + '%';
        reactText.style.left = 19 - value * 0.10 + '%';
        nodejsText.style.left = 19 - value * 0.11 + '%';
        myqlText.style.left = 19 - value * 0.12 + '%';
    } else if (screen.availWidth >= 1200) {
        mainTitle.style.left = 55 + value * 0.04 + '%';
        mainTitle2.style.left = 55 + value * 0.05 + '%';
        subTitle.style.left = 52.5 + value * 0.03 + '%';

        htmlText.style.left = 17 - value * 0.06 + '%';
        cssText.style.left = 17 - value * 0.07 + '%';
        bootstrapText.style.left = 17 - value * 0.08 + '%';
        javaScriptText.style.left = 17 - value * 0.09 + '%';
        reactText.style.left = 17 - value * 0.10 + '%';
        nodejsText.style.left = 17 - value * 0.11 + '%';
        myqlText.style.left = 17 - value * 0.12 + '%';
    } else if (screen.availWidth >= 992) {
        mainTitle.style.left = 52.5 + value * 0.04 + '%';
        mainTitle2.style.left = 52.5 + value * 0.05 + '%';
        subTitle.style.left = 48 + value * 0.03 + '%';

        htmlText.style.left = 8 - value * 0.06 + '%';
        cssText.style.left = 8 - value * 0.07 + '%';
        bootstrapText.style.left = 8 - value * 0.08 + '%';
        javaScriptText.style.left = 8 - value * 0.09 + '%';
        reactText.style.left = 8 - value * 0.10 + '%';
        nodejsText.style.left = 8 - value * 0.11 + '%';
        myqlText.style.left = 8 - value * 0.12 + '%';
    } else if (screen.availWidth >= 768) {
        mainTitle.style.left = 52.5 + value * 0.04 + '%';
        mainTitle2.style.left = 52.5 + value * 0.05 + '%';
        subTitle.style.left = 40 + value * 0.03 + '%';

        htmlText.style.left = 8 - value * 0.07 + '%';
        cssText.style.left = 8 - value * 0.08 + '%';
        bootstrapText.style.left = 8 - value * 0.09 + '%';
        javaScriptText.style.left = 8 - value * 0.10 + '%';
        reactText.style.left = 8 - value * 0.11 + '%';
        nodejsText.style.left = 8 - value * 0.12 + '%';
        myqlText.style.left = 8 - value * 0.13 + '%';
    } else if (screen.availWidth >= 576) {
        mainTitle.style.left = 48 + value * 0.04 + '%';
        mainTitle2.style.left = 48 + value * 0.05 + '%';
        subTitle.style.left = 53 + value * 0.03 + '%';

        htmlText.style.left = 1 - value * 0.07 + '%';
        cssText.style.left = 1 - value * 0.08 + '%';
        bootstrapText.style.left = 1 - value * 0.09 + '%';
        javaScriptText.style.left = 1 - value * 0.10 + '%';
        reactText.style.left = 1 - value * 0.11 + '%';
        nodejsText.style.left = 1 - value * 0.12 + '%';
        myqlText.style.left = 1 - value * 0.13 + '%';
    }
})

window.addEventListener('resize', function (e) {
    var value = window.scrollY;

    if (screen.availWidth >= 1600) {
        mainTitle.style.left = 55 + value * 0.04 + '%';
        mainTitle2.style.left = 55 + value * 0.05 + '%';
        subTitle.style.left = 52.5 + value * 0.03 + '%';

        htmlText.style.left = 22.5 - value * 0.05 + '%';
        cssText.style.left = 22.5 - value * 0.06 + '%';
        bootstrapText.style.left = 22.5 - value * 0.07 + '%';
        javaScriptText.style.left = 22.5 - value * 0.08 + '%';
        reactText.style.left = 22.5 - value * 0.09 + '%';
        nodejsText.style.left = 22.5 - value * 0.10 + '%';
        myqlText.style.left = 22.5 - value * 0.11 + '%';
    } else if (screen.availWidth >= 1440) { // 1440 - 1600
        mainTitle.style.left = 55 + value * 0.04 + '%';
        mainTitle2.style.left = 55 + value * 0.05 + '%';
        subTitle.style.left = 52.5 + value * 0.03 + '%';

        htmlText.style.left = 19 - value * 0.06 + '%';
        cssText.style.left = 19 - value * 0.07 + '%';
        bootstrapText.style.left = 19 - value * 0.08 + '%';
        javaScriptText.style.left = 19 - value * 0.09 + '%';
        reactText.style.left = 19 - value * 0.10 + '%';
        nodejsText.style.left = 19 - value * 0.11 + '%';
        myqlText.style.left = 19 - value * 0.12 + '%';
    } else if (screen.availWidth >= 1200) { // 1200 - 1440 
        mainTitle.style.left = 55 + value * 0.04 + '%';
        mainTitle2.style.left = 55 + value * 0.05 + '%';
        subTitle.style.left = 52.5 + value * 0.03 + '%';

        htmlText.style.left = 17 - value * 0.06 + '%';
        cssText.style.left = 17 - value * 0.07 + '%';
        bootstrapText.style.left = 17 - value * 0.08 + '%';
        javaScriptText.style.left = 17 - value * 0.09 + '%';
        reactText.style.left = 17 - value * 0.10 + '%';
        nodejsText.style.left = 17 - value * 0.11 + '%';
        myqlText.style.left = 17 - value * 0.12 + '%';
    } else if (screen.availWidth >= 992) { // 992 - 1200
        mainTitle.style.left = 52.5 + value * 0.04 + '%';
        mainTitle2.style.left = 52.5 + value * 0.05 + '%';
        subTitle.style.left = 48 + value * 0.03 + '%';

        htmlText.style.left = 8 - value * 0.06 + '%';
        cssText.style.left = 8 - value * 0.07 + '%';
        bootstrapText.style.left = 8 - value * 0.08 + '%';
        javaScriptText.style.left = 8 - value * 0.09 + '%';
        reactText.style.left = 8 - value * 0.10 + '%';
        nodejsText.style.left = 8 - value * 0.11 + '%';
        myqlText.style.left = 8 - value * 0.12 + '%';
    } else if (screen.availWidth >= 768) { // 768 - 992 
        mainTitle.style.left = 52.5 + value * 0.04 + '%';
        mainTitle2.style.left = 52.5 + value * 0.05 + '%';
        subTitle.style.left = 40 + value * 0.03 + '%';

        htmlText.style.left = 8 - value * 0.07 + '%';
        cssText.style.left = 8 - value * 0.08 + '%';
        bootstrapText.style.left = 8 - value * 0.09 + '%';
        javaScriptText.style.left = 8 - value * 0.10 + '%';
        reactText.style.left = 8 - value * 0.11 + '%';
        nodejsText.style.left = 8 - value * 0.12 + '%';
        myqlText.style.left = 8 - value * 0.13 + '%';
    } else if (screen.availWidth >= 576) {  // 576 - 768
        mainTitle.style.left = 48 + value * 0.04 + '%';
        mainTitle2.style.left = 48 + value * 0.05 + '%';
        subTitle.style.left = 53 + value * 0.03 + '%';

        htmlText.style.left = 1 - value * 0.07 + '%';
        cssText.style.left = 1 - value * 0.08 + '%';
        bootstrapText.style.left = 1 - value * 0.09 + '%';
        javaScriptText.style.left = 1 - value * 0.10 + '%';
        reactText.style.left = 1 - value * 0.11 + '%';
        nodejsText.style.left = 1 - value * 0.12 + '%';
        myqlText.style.left = 1 - value * 0.13 + '%';
    }
})


document.getElementById('toggleMenu').addEventListener('click', function () {
    document.getElementById('nav').classList.toggle('hideMenu')
})


// 取消滾輪、手指滑動: stackoverflow gblazex's answer
// function preventDefault(e) {
//     e.preventDefault();
// }

// var supportsPassive = false;
// try {
//     window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
//         get: function () { supportsPassive = true; }
//     }));
// } catch (e) { }

// var wheelOpt = supportsPassive ? { passive: false } : false;
// var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
// window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
// window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile

