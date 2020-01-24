window.onload = function () {

    let num = document.getElementById('num');
    let print = document.getElementById('print');
    let list = document.getElementById('list');

    print.onclick = function () {
        let n = parseInt(num.value);
        
        let start = new Date().getTime();

        // let listHTML = "";
        // for(let i=1; i<=n; i++) {
        //     // list.innerHTML += '<li>' + i + '</li>';
        //     listHTML += '<li>' + i + '</li>';
        // }
        // list.innerHTML = listHTML;


        for(let i=1; i<=n; i++) {
            
            let item = document.createElement('li');
            item.innerText = i;
            list.appendChild(item);
        }
        
        let end = new Date().getTime();
        console.log(end - start);
    }
}