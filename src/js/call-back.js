document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.your-order-orderform-block-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            var overlay = document.getElementById('overlay-message-call-back');
            overlay.classList.add('hidden-call-back');

            var form = event.target;
            form.reset();

            setTimeout(function() {
                overlay.classList.remove('hidden-call-back');
            }, 2600);
        });
    } else {
        console.error('Form with class ".your-order-orderform-block-form" not found.');
    }
});
