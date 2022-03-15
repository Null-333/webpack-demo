import '../css/img.css';

function packImg() {
    const div = document.createElement('div');
    div.className = 'imgBox';
    document.body.appendChild(div);
}
window.onload = function() {
    packImg();
}