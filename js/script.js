document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const successBox = document.getElementById('form-success');
            if (successBox) {
                successBox.classList.remove('hidden');
                contactForm.reset();
                setTimeout(() => {
                    successBox.classList.add('hidden');
                }, 5000);
            }
        });
    }
});