const url = window.location.href;
const titleelem = document.getElementById("name");
const imgelem = document.getElementById("imgs");

const REPO = 'https://raw.githubusercontent.com/yodaheYT/images/main/';
async function getFile() {
    const respond = await fetch((REPO + ((url.split('?img=').pop()).split('&')[0]) + "/Stat.json")).catch(error => {
        console.log(error);
    });
    const data = await respond.json();
    titleelem.innerText = data.name;
    imgelem.src = data.path;
}
getFile();