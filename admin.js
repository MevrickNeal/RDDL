function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === 'lianmollik@gmail.com' && password === 'lian123') {
        localStorage.setItem('rddlAdmin', 'true');
        window.location.href = 'cms.html';
    } else {
        document.getElementById('error-msg').innerText = 'Invalid credentials!';
    }
}
