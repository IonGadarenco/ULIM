import User from '../models/user.js';

export const registerUser = async (req, res) => {
  const userReq = req.body;
  const user = new User(userReq);
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).json({ error: 'Eroare la inserarea datelor în baza de date' });
  }
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verifică dacă există un utilizator cu email-ul furnizat în cerere
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ error: 'Utilizatorul nu a fost găsit' });
    }

    // Verifică dacă parola furnizată corespunde celei din baza de date
    const passwordMatch = await User.findOne({ password });

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Parolă incorectă' });
    }

    // Utilizatorul a fost găsit și parola corespunde, trimite un răspuns
    res.json({ message: 'Autentificare reușită', user: existingUser });
  } catch (error) {
    console.error('Eroare la autentificare:', error);
    res.status(500).json({ error: 'Eroare la autentificare' });
  }
};

export const getUser = async (req, res) => {
  const {email} = req.body;
  try {
    const allUsers = await User.find();
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ error: 'Utilizatorul nu a fost găsit' });
    }
    res.json({existingUser: existingUser, allUsers: allUsers});
  } catch (error) {
    console.error('Eroare la autentificare:', error);
    res.status(500).json({ error: 'Eroare la autentificare' });
  }
};

