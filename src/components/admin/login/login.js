// document.getElementById('adminLoginForm').addEventListener('submit', async (e) => {
//     e.preventDefault();
    
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const errorAlert = document.getElementById('errorAlert');
    
//     try {
//         const response = await fetch('/api/admin/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email, password })
//         });
        
//         if (response.ok) {
//             const data = await response.json();
//             // Store token or session data
//             localStorage.setItem('adminToken', data.token);
//             // Redirect to admin dashboard
//             window.location.href = '/admin/dashboard';
//         } else {
//             errorAlert.style.display = 'block';
//             setTimeout(() => {
//                 errorAlert.style.display = 'none';
//             }, 3000);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         errorAlert.textContent = 'Erro ao conectar ao servidor. Tente novamente.';
//         errorAlert.style.display = 'block';
//     }
// });

// // Toggle password visibility
// document.querySelector('.bx-lock-alt').addEventListener('click', function() {
//     const passwordInput = document.getElementById('password');
//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         this.classList.remove('bx-lock-alt');
//         this.classList.add('bx-lock-open-alt');
//     } else {
//         passwordInput.type = 'password';
//         this.classList.remove('bx-lock-open-alt');
//         this.classList.add('bx-lock-alt');
//     }
// });

document.getElementById('adminLoginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email == "teste@gmail.com" && password == 123) {
      window.location.href = "/src/components/admin/dashboard/dashboard.html";
    } else {
      alert("Credenciais inválidas");
    }
});
