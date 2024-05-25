document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll("[copyToClipboard]").forEach(el => {
        el.addEventListener('click', function() {
            const text = this.getAttribute('copyToClipboard');

            navigator.clipboard.writeText(text).then(function() {
                console.log('Text copied to clipboard');
                Swal.fire('Success', 'Copied to clipboard', 'success');
            }).catch(function(err) {
                console.error('Error copying text to clipboard', err);
            });
        });
    });
});