//------ Imports ------//

import styled from "styled-components";
import BalanceCard from "../../components/BalanceCard";
import { userAccountData } from "../../data/data";

/**
 *
 * @returns profile page
 */
export default function User() {
    return (
        <Main className="main bg-dark">
            <Header className="header">
                <h1>
                    Welcome back <br />
                    Tony Jarvis
                </h1>
                <EditButton className="edit-button">Edit Name</EditButton>
            </Header>
            <H2 className="sr-only">Accounts</H2>
            {userAccountData.map((data, index) => (
                <BalanceCard
                    key={index}
                    title={data.title}
                    amount={data.amount}
                    description={data.description}
                />
            ))}
        </Main>
    );
}

/**
 * page style
 */
const Main = styled.main`
    background-color: #12002b;
    flex: 1;
`;

const Header = styled.div`
    color: #fff;
    margin-bottom: 2rem;
`;
const EditButton = styled.button`
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
`;
const H2 = styled.h2`
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
