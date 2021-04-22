setInterval(() => {
    document.getElementById("time").innerHTML = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
}, 100)
