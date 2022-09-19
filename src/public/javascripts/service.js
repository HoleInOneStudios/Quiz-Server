if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./sw.js')
        .then(function () {
            //console.log('Service Worker Registered')
        })
        .catch(function (e) {
            //console.log("Error while registering service worker", e)
        })
} else {
    //alert("Sorry your browser does not support PWA - demo")
}