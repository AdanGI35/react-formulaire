import { useState } from 'react';

const UserBase = ({ onAddUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: UserBase.length + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    onAddUser(newUser);


    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Ajouter un utilisateur</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Prénom:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
    
        <label>
          Nom:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
     
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default UserBase;