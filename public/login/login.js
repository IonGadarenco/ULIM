const form = document.getElementById('myForm');
form.addEventListener('submit', async function (event) {
  event.preventDefault(); // Oprire comportamentul implicit al formularului (trimiterea sincronă)

  // Colectează datele din formular
  const formData = {
    email: form.elements.email.value,
    password: form.elements.password.value
  };

  // Realizează cererea fetch către server
  try {
    const response = await fetch('/poster/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json(); // Parsează răspunsul JSON de la server
      console.log('Data de la server:', data);
      if (data.message === "Autentificare reușită") { 
        // Afisează un mesaj de succes sau gestionează răspunsul serverului așa cum dorești
        form.style.display = 'none';
        document.getElementById('success').style.display = 'block';
        setTimeout(() => {
          const redirectURL = `../profil/profil.html?email=${formData.email}`;
          window.location.href = redirectURL;
        }, 2000);
      } else {
        document.location.reload();
      }

  } catch (error) {
    console.error('Eroare la comunicarea cu serverul:', error);
  }
});
