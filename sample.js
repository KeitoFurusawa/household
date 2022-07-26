let total_amt = 0;
const yaer = document.getElementById("year");
const month = document.getElementById("month");
const date = document.getElementById("date");
const d_amt = document.getElementById("total");
d_amt.textContent = total_amt;




function setM() {
    let yaer = document.getElementById("year");
    let month = document.getElementById("month");
    let date = document.getElementById("date");
    let mm = month.value;
    let yyyy = yaer.value;
    console.log(mm, yyyy)
    while(date.firstChild){
        date.removeChild(date.firstChild);
    }
    let newOp = document.createElement("option");
    date.appendChild(newOp);
    newOp.value = "";
    newOp.innerHTML = "-";
    if (mm == 4 || mm == 6 || mm == 9 || mm == 11) {
        for (let i = 1; i < 31; i++) {
            newOp = document.createElement("option");
            date.appendChild(newOp);
            newOp.value = i;
            newOp.innerHTML = i;
        }
    }
    else if (mm == 2) {
        if (yyyy % 4 == 0) {
            if ((yyyy % 100 == 0) && (yyyy % 400 != 0)) {
                for (let i = 1; i < 29; i++) {
                    newOp = document.createElement("option");
                    date.appendChild(newOp);
                    newOp.value = i;
                    newOp.innerHTML = i;
                }
            } else {
                for (let i = 1; i < 30; i++) {
                    newOp = document.createElement("option");
                    date.appendChild(newOp);
                    newOp.value = i;
                    newOp.innerHTML = i;
                }
            }
        } else {
            for (let i = 1; i < 29; i++) {
                newOp = document.createElement("option");
                date.appendChild(newOp);
                newOp.value = i;
                newOp.innerHTML = i;
            }
        }
        
    }
    else {
        for (let i = 1; i < 32; i++) {
            newOp = document.createElement("option");
            date.appendChild(newOp);
            newOp.value = i;
            newOp.innerHTML = i;
        }
    }
}

month.addEventListener('change', () => setM());

yaer.addEventListener('change', () => setM());
   
window.addEventListener('beforeunload', function(e) {
    e.returnValue = '保存忘れはありませんか？';
}, false);

const seq_num = [...Array(1000).keys()];
function addTable() {
    let index = seq_num.shift();
    let rd_exp = document.getElementById("expenditure");
    let yaer = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let date = document.getElementById("date").value;
    let amount = document.getElementById("amount").value;
    amount = parseInt(amount);
    let subject = document.getElementById("subject").value;
    let table = document.getElementsByTagName("table");

    let newTb = document.createElement("tr");
    newTb.id=index;
    let newIdx = document.createElement("td");
    let newDate = document.createElement("td");
    let newSbj = document.createElement("td");
    let newAmt = document.createElement("td");
    table[0].appendChild(newTb);
    newTb.appendChild(newIdx);
    newTb.appendChild(newDate);
    newTb.appendChild(newSbj);
    newTb.appendChild(newAmt);
    newIdx.textContent = index;
    newDate.textContent = `${yaer}/${month}/${date}`;
    newSbj.textContent = subject;
    if (rd_exp.checked) {
        amount = -amount;
    }
    newAmt.textContent = amount;
    total_amt += amount;
    d_amt.textContent = total_amt;
}

function delTable() {
    let delId = document.getElementById("delseq").value;
    let delelm = document.getElementById(delId);
    val = -parseInt(delelm.children[3].textContent);
    total_amt += val;
    d_amt.textContent = total_amt;
    delelm.remove();
}
