function redirhome() {
    var meta = document.createElement('meta');
    meta.httpEquiv = 'refresh';
    meta.content = '0; url="../home"';

    document.getElementById('DVAR12').appendChild(meta);
}
function redirInfo() {
    var meta = document.createElement('meta');
    meta.httpEquiv = 'refresh';
    meta.content = '0; url="../info"';

    document.getElementById('DVAR12').appendChild(meta);
}
function redirVid() {
    var meta = document.createElement('meta');
    meta.httpEquiv = 'refresh';
    meta.content = '0; url="../video"';

    document.getElementById('DVAR12').appendChild(meta);
}
function redirFiles() {
    var meta = document.createElement('meta');
    meta.httpEquiv = 'refresh';
    meta.content = '0; url="../downloads"';

    document.getElementById('DVAR12').appendChild(meta);
}