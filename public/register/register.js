const form = document.getElementById('myForm');
form.addEventListener('submit', async function (event) {
  event.preventDefault(); // Oprire comportamentul implicit al formularului (trimiterea sincronă)

  // Colectează datele din formular
  const formData = {
    firstName: form.elements.firstName.value,
    lastName: form.elements.lastName.value,
    email: form.elements.email.value,
    phone: form.elements.phone.value,
    imgURL: form.elements.imgURL.value,
    password: form.elements.password.value
  };

  // Realizează cererea fetch către server
  try {
    const response = await fetch('/poster/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json(); // Parsează răspunsul JSON de la server
    console.log('Data de la server:', data);

    // Afisează un mesaj de succes sau gestionează răspunsul serverului așa cum dorești
    form.style.display = 'none';
    document.getElementById('success').style.display = 'block';
    setTimeout(() => {
      const redirectURL = `../profil/profil.html?email=${formData.email}`;
      window.location.href = redirectURL;
    }, 2000);
  } catch (error) {
    console.error('Eroare la comunicarea cu serverul:', error);
  }
});
