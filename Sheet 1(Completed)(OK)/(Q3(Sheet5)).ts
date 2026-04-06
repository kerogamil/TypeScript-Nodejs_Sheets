function filterFiles(){
    const checkboxes = document.querySelectorAll('input[name="fileType"]:checked') as NodeListOf<HTMLInputElement>;
    const fileList = document.getElementById('fileList') as HTMLSelectElement;
    const selectedFileTypes = Array.from(checkboxes).map(checkbox => checkbox.value);
    for(let i=0;i<fileList.length;i++){
        const option = fileList.options[i];     
        const fileExtension = option.value.split('.').pop();
        option.style.display = selectedFileTypes.includes(fileExtension) ? 'none' : 'block';
    }
}