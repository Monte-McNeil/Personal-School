
function validateThenAdd() {
    var newWord = document.forms["theForm"]["word"].value
    var newNumber = document.forms["theForm"]["number"].value

    if (newWord == " ") {
        alert("Enter a word to check")
        return false
    }

    else if 
        ((newNumber != 1) && (newNumber != 2)) {
            alert("Enter a 1 or 2")
        document.forms["theForm"]["newNumber"].value = ""
        return false
    }
    else {
        if(newNumber == 1) {
            var table = document.getElementById("list1")
            (table.insertRow(table.rows.length)).innerHTML = newWord
        }
            else {
            var table = document.getElementById("list2")
            (table.insertRow(table.rows.length)).innerHTML = newWord
            }

            document.forms["theForm"]["newWord"].value = ""
            document.forms["theForm"]["newNumber"].value = ""
        }
}

function clearList1() {
    var table1 = document.getElementById("list1")
    table1.innerHTML = " ";
}

function clearList2() {
    var table2 = document.getElementById("list2")
    table2.innerHTML = " ";
}