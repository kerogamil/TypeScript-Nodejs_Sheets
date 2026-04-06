document.getElementById('paragraph')?.addEventListener('mouseover',()=>{
    const emphasizedWords = document.querySelectorAll('.emphasized');
    emphasizedWords.forEach(word => {
        word.classList.add('havered');
    });
});
document.getElementById('paragraph')?.addEventListener('mouseout',()=>{
    const emphasizedWords = document.querySelectorAll('.emphasized');
    emphasizedWords.forEach(word => {
        word.classList.remove('havered');
    });
});