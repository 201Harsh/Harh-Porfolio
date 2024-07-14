console.log('Script Testing 2')
document.addEventListener('scroll', function () {
    var top = document.getElementById('topper')
    top.style.display = 'flex';
    if (window.scrollY === 0) {
        top.style.display = 'none';
    }
    top.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

