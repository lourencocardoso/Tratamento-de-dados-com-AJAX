
const btnExecuter = document.getElementById('btn');


function nomesLoad(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
             let text = this.responseText;
             let newArray = text.split(' ')
             for(let i = 0; i < newArray.length; i++){
                let table = document.getElementById('table');
                let tr = document.createElement('tr');
                table.appendChild(tr);
                 tr.innerHTML += `<td>${newArray[i]}</td>`
             }
        }
    };
    xhttp.open("GET", "ajax_nomes.txt", true);
    xhttp.send();
}



nomesLoad();