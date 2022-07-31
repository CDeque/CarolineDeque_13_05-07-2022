//------ Imports------//
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

export default function BalanceCard(data) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/transactions");
    };
    return (
        <AccountSection className="account">
            <AccountWrapper className="account-content-wrapper">
                <AccountTitle className="account title">
                    {data.title}
                </AccountTitle>
                <AccountAmount className="account-amount">
                    {data.amount}
                </AccountAmount>
                <AccountDescription className="account-amount-description">
                    {data.description}
                </AccountDescription>
            </AccountWrapper>
            <AccountWrapper className="account-content-wrapper cta">
                <TransactionButton
                    className="transaction-button"
                    onClick={handleClick}
                >
                    view transactions
                </TransactionButton>
            </AccountWrapper>
        </AccountSection>
    );
}
BalanceCard.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
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
