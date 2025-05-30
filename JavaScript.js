﻿document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('authModal');
    const closeBtn = modal.querySelector('.close-btn');
    const togglePwd = modal.querySelector('.toggle-password');
    const pwdField = modal.querySelector('#password');

    // Открыть
    loginBtn.addEventListener('click', () => {
        modal.classList.add('show');
    });

    // Закрыть по крестику
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Закрыть при клике вне модального окна
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Показ/скрытие пароля
    togglePwd.addEventListener('click', () => {
        const type = pwdField.getAttribute('type') === 'password' ? 'text' : 'password';
        pwdField.setAttribute('type', type);
    });
});
