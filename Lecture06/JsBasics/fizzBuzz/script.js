window.onload = function () {

    let num = document.getElementById('number')
    let btn = document.getElementById('btn')
    let list = document.getElementById('list')

    btn.onclick = function() {
        let start = new Date().getTime();

        let val = parseInt(num.value);
        // let listcontent = '';

        for(let i=1;i<=val;i++){
            let print = '';
    
            if(i%3 == 0){
                print += 'fizz';
            }
            if(i%5 == 0){
                print += 'buzz';
            }
            if(print == "") {
                print += i;
            }
            // listcontent += `<li>${print}</li>`;
            // listcontent += '<li>' + print + '</li>';

            let item = document.createElement('li');
            item.innerText = print;
            list.appendChild(item);
        }
        // list.innerHTML = listcontent;

        let end = new Date().getTime();
        console.log(end - start)
    }
    
}