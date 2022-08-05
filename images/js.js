function createElem(data) {
    let div = document.createElement('div');
    div.id = 'img';
    let h1 = document.createElement('h1');
    h1.innerHTML = data.name;
    let img = document.createElement('img');
    img.src = data.path;
    img.alt = data.name;
    img.id = 'effort';
    div.addEventListener('mousedown', () => {
        zoom(img);
    }, {passive: true});
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
    console.log('test');
    let src = img.src.split(REPO)[1];
    console.log(src.split('/')[0])
    let meta = document.createElement('meta');
    meta.httpEquiv = 'refresh';
    meta.content = `0; url='./template.html?img=${src.split('/')[0]}&name=${img.alt}'`;
    document.getElementById('DVAR12').appendChild(meta);
}