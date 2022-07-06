//------ Imports ------//

import styled from "styled-components";

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
            <AccountSection className="account">
                <AccountWrapper className="account-content-wrapper">
                    <AccountTitle className="account title">Data</AccountTitle>
                    <AccountAmount className="account-amount">
                        amount
                    </AccountAmount>
                    <AccountDescription className="account-amount-description">
                        Description
                    </AccountDescription>
                </AccountWrapper>
                <AccountWrapper className="account-content-wrapper cta">
                    <TransactionButton className="transaction-button">
                        view transactions
                    </TransactionButton>
                </AccountWrapper>
            </AccountSection>
            <AccountSection className="account">
                <AccountWrapper className="account-content-wrapper">
                    <AccountTitle className="account title">Data</AccountTitle>
                    <AccountAmount className="account-amount">
                        amount
                    </AccountAmount>
                    <AccountDescription className="account-amount-description">
                        Description
                    </AccountDescription>
                </AccountWrapper>
                <AccountWrapper className="account-content-wrapper cta">
                    <TransactionButton className="transaction-button">
                        view transactions
                    </TransactionButton>
                </AccountWrapper>
            </AccountSection>
            <AccountSection className="account">
                <AccountWrapper className="account-content-wrapper">
                    <AccountTitle className="account title">Data</AccountTitle>
                    <AccountAmount className="account-amount">
                        amount
                    </AccountAmount>
                    <AccountDescription className="account-amount-description">
                        Description
                    </AccountDescription>
                </AccountWrapper>
                <AccountWrapper className="account-content-wrapper cta">
                    <TransactionButton className="transaction-button">
                        view transactions
                    </TransactionButton>
                </AccountWrapper>
            </AccountSection>
        </Main>
    );
}

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

const AccountSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;
    @media (min-width: 720px) {
      .account {
        flex-direction: row;
      }
`;

const AccountAmount = styled.p`
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
`;

const AccountDescription = styled.p`
    margin: 0;
`;
const AccountTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
`;
const AccountWrapper = styled.div`
    width: 100%;
    flex: 1;

    @media (min-width: 720px) {
        &.account-content-wrapper.cta {
            flex: 0;
        }
    }
`;

const TransactionButton = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    @media (min-width: 720px) {
        width: 200px;
    }
`;
