//NAV FUNC
function nav(URL) {
    console.log("TEST");
    open(URL);
}
//URLS
const DISCORDURL = "https://discord.gg/6AHapJkhR6";
const GITHUBURL = "https://github.com/yodaheYT";
const YOUTUBEURL = "https://www.youtube.com/channel/UCQdizMDaBihL8nOzI3v4I0Q";
const TWITCHURL = "https://www.twitch.tv/yodaheyt";
//ELEMS
const DISCORDELEM = document.getElementsByClassName("Discord")[0];
const GITHUBELEM = document.getElementsByClassName("GitHub")[0];
const YOUTUBEELEM = document.getElementsByClassName("YouTube")[0];
const TWITCHELEM = document.getElementsByClassName("Twitch")[0];
//MAIN CODE
DISCORDELEM.addEventListener('click', () => {nav(DISCORDURL)});
GITHUBELEM.addEventListener('click', () => {nav(GITHUBURL)});
YOUTUBEELEM.addEventListener('click', () => {nav(YOUTUBEURL)});
TWITCHELEM.addEventListener('click', () => {nav(TWITCHURL)});
//ELEMSB
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.remove('show');
            entry.target.classList.add('hidden');
        }
    })
})
const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => observer.observe(el));