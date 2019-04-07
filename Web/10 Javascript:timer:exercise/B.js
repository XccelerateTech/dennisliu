
const drippingTap = setInterval(()=>{
    console.log('drop')
}, 1000);

drippingTap;

const turnOffTap = setTimeout(()=>{
    clearInterval(drippingTap)
}, (Math.random() * 2000) + 7000);

turnOffTap;