
// Add class to element => https://www.sitepoint.com/add-remove-css-class-vanilla-js/
export function addNewClass (elements, myClass) {
    // if there are no elements, we're done
    if (!elements) { return; }
    // if we have a selector, get the chosen elements
    if (typeof(elements) === 'string') {
        elements = document.querySelectorAll(elements);
    }
    // if we have a single DOM element, make it an array to simplify behavior
    else if (elements.tagName) { elements=[elements]; }
    // add class to all chosen elements
    for (var i=0; i<elements.length; i++) {
        // if class is not already found
        if ( (' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {
        // add class
        elements[i].className += ' ' + myClass;
        }
    }
}

// Remove class from element => https://www.sitepoint.com/add-remove-css-class-vanilla-js/
export function removeClass (elements, myClass) {
    // if there are no elements, we're done
    if (!elements) { return; }

    // if we have a selector, get the chosen elements
    if (typeof(elements) === 'string') {
        elements = document.querySelectorAll(elements);
    }
    // if we have a single DOM element, make it an array to simplify behavior
    else if (elements.tagName) { elements=[elements]; }
    // create pattern to find class name
    var reg = new RegExp('(^| )'+myClass+'($| )','g');
    // remove class from all chosen elements
    for (var i=0; i<elements.length; i++) {
        elements[i].className = elements[i].className.replace(reg,' ');
    }
}

export function throttle(fn, delay) {
  // last为上一次触发回调的时间, timer是定时器
  let last = 0, timer = null
  // 将throttle处理结果当作函数返回
  
  return function () { 
    // 保留调用时的this上下文
    let context = this
    // 保留调用时传入的参数
    let args = arguments
    // 记录本次触发回调的时间
    let now = +new Date()
    
    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
    if (now - last < delay) {
    // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
       clearTimeout(timer)
       timer = setTimeout(function () {
          last = now
          fn.apply(context, args)
        }, delay)
    } else {
        // 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应
        last = now
        fn.apply(context, args)
    }
  }
}