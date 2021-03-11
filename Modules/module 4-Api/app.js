const url = 'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1';
const json_text = document.getElementById('list1')
const para_text = document.getElementById('list2')

function api() {
    fetch(url)
    .then(res => res.json())
    .then((out) => {
        return (json_text.insertRow(json_text.rows.length)).innerHTML = out;
    })
}

