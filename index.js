$(document).ready(function() {
    $('#copy-button').tooltip();

    $("#mail").click(() => {

        let copyTextArea = document.createElement("input");
        copyTextArea.value = 'opencraft.pl@gmail.com';
        document.body.appendChild(copyTextArea)

        copyTextArea.select();
        let success = document.execCommand("copy");

        if(success) {
            $('#copy-button').trigger('copied', ['Copied!']);
        }

        document.body.removeChild(copyTextArea);
    });

    $('#mail').bind('copied', function(event, message) {
        $(this).attr('title', message)
            .tooltip('fixTitle')
            .tooltip('show')
            .attr('title', "Copy to Clipboard")
            .tooltip('fixTitle');
    });
   
})
