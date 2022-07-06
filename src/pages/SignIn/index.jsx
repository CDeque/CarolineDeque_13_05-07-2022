//------ Imports------//

import styled from "styled-components";

export default function SignIn() {
    return (
        <Main className="bg-dark">
            <SignInSection className="sign-in-content">
                <SignInIcon className="fa fa-user-circle sign-in-icon"></SignInIcon>
                <h1>Sign in</h1>
                <form>
                    <InputWrapper className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </InputWrapper>
                    <InputWrapper className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </InputWrapper>
                    <InputRemember className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>

                        <SignInButton className="sign-in-button">
                            Sign In
                        </SignInButton>
                    </InputRemember>
                </form>
            </SignInSection>
        </Main>
    );
}

/**
 * Sign In Style
 */

const Main = styled.main`
    background-color: #12002b;
    flex: 1;
`;

const SignInSection = styled.section`
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
`;
const SignInIcon = styled.i`
    font-size: 5rem;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;

    &.input-wrapper label {
        font-weight: bold;
    }
    &.input-wrapper input {
        padding: 5px;
        font-size: 1.2rem;
    }
`;
const InputRemember = styled.div`
    display: flex;

    &.input-remember label {
        margin-left: 0.25rem;
    }
`;

const SignInButton = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
`;