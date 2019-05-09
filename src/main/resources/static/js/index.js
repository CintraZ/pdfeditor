
$(document).ready(function () {
    let input = document.querySelector('#file');
    input.addEventListener('change', function(evt) {
        let files = evt.target.files;
        if(!files || files.length === 0) {
            return;
        }
        let file = files[0];
        let fileName = file.name;
        let formData = new FormData();
        formData.append('file', file);
        formData.append('type', 'pdf');
        $.ajax({
            url:'/uploadpdffile',
            type: 'POST',
            cache: false,
            data: formData,
            processData: false,
            contentType: false
        }).done(function(res){
            // get filestream
            window.location.href = "/PDFjs/web/viewer.html?file=" + encodeURIComponent("/convertLocal?fileName=" + fileName);

        }).fail(function(res){});

    });

});