document.addEventListener('DOMContentLoaded', function () {
    const userName = localStorage.getItem('userName');
    const headerLink = document.querySelector('.header-right a');
    if (headerLink) {
        if (userName) {
            headerLink.textContent = 'User Profile';
            headerLink.href = 'profile_page.html';
        } else {
            headerLink.textContent = 'Sign Up';
            headerLink.href = 'log_in.html';
        }
    }
});
