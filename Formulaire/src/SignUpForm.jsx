import {useState} from 'react'
const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    setFormValues({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <>
      <p>Last user:</p>
      {formValues.firstName && formValues.lastName && (
        <article>
          <p>{formValues.firstName}</p>
          <p>{formValues.lastName}</p>
        </article>
      )}

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="firstName">Votre prénom</label>
          <input type="text" name="firstName" id="firstName" onChange={handleChange}value={formValues.firstName}/>
        </fieldset>
        <fieldset>
          <label htmlFor="lastName">Votre nom</label>
          <input type="text"name="lastName" id="lastName"onChange={handleChange} value={formValues.lastName}/>
        </fieldset>
        <fieldset>
          <label htmlFor="email">Votre email</label>
          <input type="email" name="email" id="email" onChange={handleChange} value={formValues.email}/>
        </fieldset>
        <fieldset>
          <label htmlFor="password">Votre mot de passe</label>
          <input type="password" name="password" id="password" onChange={handleChange}value={formValues.password}/>
        </fieldset>
        <fieldset>
          <label htmlFor="confirmPassword">Confirmer votre mot de passe</label>
          <input type="password" name="confirmPassword" id="confirmPassword"onChange={handleChange} value={formValues.confirmPassword} />
        </fieldset>
        {formValues.password === formValues.confirmPassword &&
        formValues.password !== '' ? (
          <button type="submit">Inscription</button>
        ) : null}
        <button type="reset">Reset</button>
      </form>
    </>
  );
};

export default SignUpForm;