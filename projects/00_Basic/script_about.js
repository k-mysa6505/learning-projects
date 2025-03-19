/* JavaScript演習 動的な自己紹介ページ */
//  ダークモード・ライトモード切り替え
let currentMode = 'light';
const modeButton = document.createElement('button');
modeButton.id = 'mode';
modeButton.textContent = 'Switch to dark mode'
modeButton.style.padding = '10px';
modeButton.style.margin = '20px';
modeButton.style.backgroundColor = '#4caf50';
modeButton.style.color = 'white';
modeButton.style.border = 'none';
modeButton.style.borderRadius = '4px';
document.body.prepend(modeButton);

modeButton.addEventListener('click', function() {
    const button = document.getElementById('mode');
    const body = document.getElementsByTagName('body')[0];
    const header = document.getElementsByTagName('header')[0];
    const footer = document.getElementsByTagName('footer')[0];
    const profile = document.getElementsByClassName('profile')[0];
    const skills = document.getElementsByClassName('skills')[0];
    const interests = document.getElementsByClassName('interests')[0];
    const h2_elem = document.getElementsByTagName('h2');
    if (currentMode === 'light') {
        currentMode = 'dark';
        button.textContent = 'Switch to light mode';
        body.style.backgroundColor = '#372121';
        header.style.backgroundColor = '#72bdbc';
        for (const child of header.children) {
            child.style.color = '#222';
        }
        profile.style.backgroundColor = '#333';
        for (const child of profile.children) {
            child.style.color = '#fff';
        }
        skills.style.color = '#fff';
        interests.style.color = '#fff';
        for (const elem of h2_elem) {
            elem.style.color = '#fff';
        }
        footer.style.backgroundColor = '#333';
        for (const child of footer.children) {
            child.style.color = '#ccc';
        }
    } else {
        currentMode = 'light';
        button.textContent = 'Switch to dark mode';
        body.style.backgroundColor = '#72bdbc';
        header.style.backgroundColor = '#372121';
        for (const child of header.children) {
            child.style.color = '#fff';
        }
        profile.style.backgroundColor = '#f4f4f4';
        for (const child of profile.children) {
            child.style.color = '#333';
        }
        skills.style.color = '#333';
        interests.style.color = '#333';
        for (const elem of h2_elem) {
            elem.style.color = '#333';
        }
        footer.style.backgroundColor = '#ccc';
        for (const child of footer.children) {
            child.style.color = '#333';
        }
    }
});


//  プログレスバーのアニメーション
function animateProgressBar() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = '0%';
        bar.style.transition = 'width 2s';
        setTimeout(() => {
            bar.style.width = value + '%';
        }, 100);
    });
}
document.addEventListener('DOMContentLoaded', animateProgressBar);

//  プロフィール写真の拡大
const icon = document.getElementsByClassName('icon')[0];
const lightbox = document.getElementsByClassName('lightbox')[0];
const lightboxImg = document.getElementsByClassName('lightbox-icon');
icon.addEventListener('click', function() {
    lightbox.classList.add('active');
});
lightbox.addEventListener('click', function(event) {
    if (event.target !== lightboxImg) {
        lightbox.classList.remove('active');
    }
});