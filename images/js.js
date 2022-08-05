function createElem(data) {
    var div = document.createElement('div');
    div.id = 'img';
    var h1 = document.createElement('h1');
    h1.innerHTML = data.name;
    var img = document.createElement('img');
    img.src = data.path;
    img.alt = data.path;
    img.id = 'effort';
    div.onclick = zoom(img);
    div.appendChild(h1);
    div.appendChild(img);
    document.getElementById('images').appendChild(div);
}
const REPO = 'https://raw.githubusercontent.com/yodaheYT/images/main/';
async function getFiles() {
    for (let i = 0; i < 2; i++) {
        const respond = await fetch((REPO + (i+1) + "/Stat.json")).catch(error => {
            console.log(error);
        });
        const data = await respond.json();
        console.log(data.name, data.path);
        createElem(data);
    }
}
getFiles();
function zoom(img) {
    const src = img.src.split(REPO)[1];
    const url = new URL(`yodaheyt.github.io/images/template.html?u=${src.split("/")[0]}`);
    let params = new URLSearchParams(url.search.slice(1))
    for (let p of params) {
        console.log(p);
    }
    params.get('img') === "search string"
    
    const { searchParams } = new URL(location.href);
    searchParams.toString() // => 'a=&b=123'
    searchParams.has('a') // => true
    searchParams.has('fake') // => false
    searchParams.get('b')
}