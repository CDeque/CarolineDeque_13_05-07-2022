//------imports------

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/feature/authSlice";

/**
 *
 * @returns Header component
 */

export default function Header() {
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
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

            {!auth._id ? (
                <div>
                    <LogLink to={"/login"} className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </LogLink>
                </div>
            ) : (
                <div>
                    <LogLink to={"/profile"} className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {user.firstName}
                    </LogLink>
                    <LogLink
                        onClick={() => {
                            dispatch(logOut(null));
                        }}
                        to={"/"}
                        className="main-nav-item"
                    >
                        <i
                            className="fa fa-sign-out"
                            style={{ paddingLeft: "5px" }}
                        ></i>
                        Sign Out
                    </LogLink>
                </div>
            )}
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

const LogLink = styled(NavLink)`
    text-decoration: none;
    margin-right: 0.5rem;
    font-weight: bold;
    color: #2c3e50;
    &:hover {
        text-decoration: underline;
    }
`;
