let debounce = (fn) => {
    // fn 业务函数
    let timer
    return function () {
        clearTimeout(timer) //把前面开启的全部清掉
        timer = setTimeout(()=>{
            fn()
        }, 2000)
    }
}

export default debounce