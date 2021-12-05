$(document).ready(function() {
    $('#mail').tooltip()
    $('#mail').click(async function(e) {
        e.preventDefault()
        var text = $(this).attr('data-copy')
        var el = $(this)
        var elOriginalText = el.attr('data-original-title')
        await navigator.clipboard.writeText(text)
        el.attr('data-original-title', 'Skopiowane!').tooltip('show')
        el.attr('data-original-title', elOriginalText)
    })
})
