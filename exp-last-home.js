function updateDateTime() {
    const now = new Date();
    document.getElementById('currentDate').textContent = 
        `当前时间: ${now.toLocaleString()}`;
}

function adjustVideoSize() {
    const video = document.getElementById('video-background');
    const windowRatio = window.innerWidth / window.innerHeight;
    const videoRatio = video.videoWidth / video.videoHeight;

    if (windowRatio > videoRatio) {
        video.style.width = '100%';
        video.style.height = 'auto';
    } else {
        video.style.width = 'auto';
        video.style.height = '100%';
    }
}

window.addEventListener('load', adjustVideoSize);
window.addEventListener('resize', adjustVideoSize);

document.addEventListener("DOMContentLoaded", function() {
    updateDateTime(); 
    setInterval(updateDateTime, 1000); 
    const transitionElement = document.createElement('div');
    transitionElement.className = 'page-transition';
    document.body.appendChild(transitionElement);
    const button = document.querySelector('.button');
    button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        });
    button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });    
});

