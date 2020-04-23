(() => {
    let oBtn = document.createElement('button');
    oBtn.innerText = '下载图片'
    oBtn.className = 'download-btn';
    oBtn.onclick = () => {
        let lis = document.querySelector('.slide').querySelectorAll('li');
        let selected;
        lis.forEach(li => { if (!li.style.display) { selected = li } })
        let url = selected.querySelector('span').style.backgroundImage
        if (url) {
            url = url.substr(5, url.length - 7)
            var x = new XMLHttpRequest();
            x.open("GET", url, true);
            x.responseType = 'blob';
            x.onload = function (e) {
                var url = window.URL.createObjectURL(x.response)
                var a = document.createElement('a');
                a.href = url
                a.download = ''
                a.click()
            }
            x.send();
        }
    }
    document.querySelector('.operation-block').appendChild(oBtn);
})()