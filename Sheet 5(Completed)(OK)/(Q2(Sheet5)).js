var _a, _b;
(_a = document.getElementById('paragraph')) === null || _a === void 0 ? void 0 : _a.addEventListener('mouseover', function () {
    var emphasizedWords = document.querySelectorAll('.emphasized');
    emphasizedWords.forEach(function (word) {
        word.classList.add('havered');
    });
});
(_b = document.getElementById('paragraph')) === null || _b === void 0 ? void 0 : _b.addEventListener('mouseout', function () {
    var emphasizedWords = document.querySelectorAll('.emphasized');
    emphasizedWords.forEach(function (word) {
        word.classList.remove('havered');
    });
});
