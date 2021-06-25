
var isFirefox = navigator.userAgent.indexOf('Firefox') !== -1 || navigator.userAgent.indexOf('Gecko/') !== -1;
let countPassword=0;
let countUsername=0;

//content_scripts——>background发送消息
chrome.runtime.sendMessage({type:'getAccount'},function(response) {
    // init(response.data);
    setPasswordFunc(response.data);
    setUsernameFunc(response.data);
});

// 初始赋值
function init({username,password}){
    
    let passwordIndex=0;
    if(document.querySelector('input[type=password]')){
        document.querySelectorAll('input').forEach((item,index)=>{
            
            if(item.type=='password'){

                passwordIndex=index;

                setValueForElement(item);
                item.value=password;
                setValueForElementByEvent(item);

                
            }
        })
        document.querySelectorAll('input').forEach((item,index)=>{
            if(index<passwordIndex){
                if(item.type === 'text' || item.type === 'email' || item.type === 'tel') {
                    setValueForElement(item);
                    item.value=username;
                    setValueForElementByEvent(item);
                }
            }
        });
        setTimeout(()=>{
            count++;
            init({username,password})
        },1000)

    }else{
        if(count<20){
            setTimeout(()=>{
                count++;
                init({username,password})
            },1000)
        }
    }
    
}

function setPasswordFunc({username,password}){
    if(document.querySelector('input[type=password]')){
        document.querySelectorAll('input').forEach((item,index)=>{
            if(item.type=='password'){
                setValueForElement(item);
                item.value=password;
                setValueForElementByEvent(item);
            }
        })
    }else{
        if(countPassword<20){
            setTimeout(()=>{
                countPassword++;
                setPasswordFunc({username,password})
            },1000)
        }
    }
}

function setUsernameFunc({username,password}){

    let usernameEle=null;
    let passwordIndex=0;
    document.querySelectorAll('input').forEach((item,index)=>{
            
        if(item.type=='password'){

            passwordIndex=index;
            
        }
    })
    document.querySelectorAll('input').forEach((item,index)=>{
        if(index<passwordIndex){
            if(item.type === 'text' || item.type === 'email' || item.type === 'tel') {
                usernameEle=item;
                
            }
        }
    });

    if(usernameEle){
        setValueForElement(usernameEle);
        usernameEle.value=username;
        setValueForElementByEvent(usernameEle);
    }else{
        if(countUsername<20){
            setTimeout(()=>{
                countUsername++;
                setUsernameFunc({username,password})
            },1000)
        }
    }
}

// set value of the given element
function setValueForElement(el) {
    var valueToSet = el.value;
    // clickElement(el);
    // doFocusElement(el, false);
    el.dispatchEvent(normalizeEvent(el, 'keydown'));
    el.dispatchEvent(normalizeEvent(el, 'keypress'));
    el.dispatchEvent(normalizeEvent(el, 'keyup'));
    el.value !== valueToSet && (el.value = valueToSet);
}

// set value of the given element by using events
function setValueForElementByEvent(el) {
    var valueToSet = el.value,
        ev1 = el.ownerDocument.createEvent('HTMLEvents'),
        ev2 = el.ownerDocument.createEvent('HTMLEvents');

    el.dispatchEvent(normalizeEvent(el, 'keydown'));
    el.dispatchEvent(normalizeEvent(el, 'keypress'));
    el.dispatchEvent(normalizeEvent(el, 'keyup'));
    ev2.initEvent('input', true, true);
    el.dispatchEvent(ev2);
    ev1.initEvent('change', true, true);
    el.dispatchEvent(ev1);
    el.blur();
    el.value !== valueToSet && (el.value = valueToSet);
}

// normalize the event since firefox handles events differently than others
function normalizeEvent(el, eventName) {
    var ev;
    if (isFirefox) {
        ev = document.createEvent('KeyboardEvent');
        ev.initKeyEvent(eventName, true, false, null, false, false, false, false, 0, 0);
    }
    else {
        ev = el.ownerDocument.createEvent('Events');
        ev.initEvent(eventName, true, false);
        ev.charCode = 0;
        ev.keyCode = 0;
        ev.which = 0;
        ev.srcElement = el;
        ev.target = el;
    }

    return ev;
}
