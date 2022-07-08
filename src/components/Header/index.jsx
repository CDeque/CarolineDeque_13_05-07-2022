//------imports------
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/argentBankLogo.png";

/**
 *
 * @returns Header component
 */

export default function Header() {
    return (
        <MainNav className="main-nav">
            <StyledLink to={"/"} className="main-nav-logo">
                <MainLogo
                    src={Logo}
                    alt="argent bank logo"
                    className="main-nav-logo-image"
                />

                <H1 className="sr-only">Argent Bank</H1>
            </StyledLink>
            <div>
                <SignInLink to={"/login"} className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </SignInLink>
            </div>
        </MainNav>
    );
}

/**
 * Header Style
 */

const MainNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
`;

const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #2c3e50;
`;
const MainLogo = styled.img`
    max-width: 100%;
    width: 200px;
`;
const H1 = styled.h1`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
`;

const SignInLink = styled(NavLink)`
    text-decoration: none;
    margin-right: 0.5rem;
    font-weight: bold;
    color: #2c3e50;
    &:hover {
        text-decoration: underline;
    }
`;
