import { useState } from 'react'

const LoginForm = (props) => {
    const [state, setState] = useState({
        submitted : false,
        email : "",
        password : "",
    });

    const handleEmailChange = (event) => {
        setState({
            submitted: false,
            email : event.target.value
        });
    };

    const handlePasswordChange = (event) => {
        setState({
            submitted: false,
            password : event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setState({
            submitted: true,
            email : event.target.email.value,
            password : event.target.password.value
        });
    };

    return (
        <>
            {
                state.submitted === false && (
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" name="email" id="email" onChange={handleEmailChange} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="password">
                                Mot de passe
                            </label>
                            <input type="password" name="password" id="password" onChange={handlePasswordChange}/>
                        </fieldset>
                        <button type="submit">Connexion</button>
                    </form>
                )
            }
            {
                state.submitted === true && (
                    <p>Vous êtes déjà connecté</p>
                )
            }
        </>
    );
};

export default LoginForm;