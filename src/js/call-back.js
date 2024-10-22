document.querySelector('.your-order-orderform-block-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var overlay = document.getElementById('overlay-message-call-back');
    overlay.classList.add('hidden-call-back');

    var form = event.target;
    form.reset();

    setTimeout(function() {
        overlay.classList.remove('hidden-call-back');
    }, 2600);
});