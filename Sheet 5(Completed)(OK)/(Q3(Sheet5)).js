function filterFiles() {
    var checkboxes = document.querySelectorAll('input[name="fileType"]:checked');
    var fileList = document.getElementById('fileList');
    var selectedFileTypes = Array.from(checkboxes).map(function (checkbox) { return checkbox.value; });
    for (var i = 0; i < fileList.length; i++) {
        var option = fileList.options[i];
        var fileExtension = option.value.split('.').pop();
        option.style.display = selectedFileTypes.includes(fileExtension) ? 'none' : 'block';
    }
}
