import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPen,
    faChevronDown,
    faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function TransactionCard({ amount, balance }) {
    const [isOpen, setIsOpen] = useState(false);
    const [editInput, setEditInput] = useState(false);
    //to handle the display of input when clicking on pen icon
    const handleClick = (id) => () => {
        setEditInput((editInput) => ({
            ...editInput,
            [id]: !editInput[id],
        }));
    };
    return (
        <>
            <TransactionButton onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <FontAwesomeIcon icon={faChevronUp} size="lg" />
                ) : (
                    <FontAwesomeIcon icon={faChevronDown} size="lg" />
                )}
                <p className="transaction_date">June 20th,2020</p>
                <p className="transaction_description">Golden Sun Bakery</p>
                <p className="transaction_amount">{amount}</p>
                <p className="balance">{balance}</p>
            </TransactionButton>
            {isOpen && (
                <div className="transaction_info">
                    <TransactionEdit className="transaction_type">
                        TransactionType:Electronic
                    </TransactionEdit>
                    <TransactionEdit className="category">
                        category:
                        <FontAwesomeIcon
                            icon={faPen}
                            color="#fff"
                            fontSize="1rem"
                            style={{ marginLeft: 10 }}
                            onClick={handleClick("category")}
                        />
                        {editInput["category"] ? <input type="text" /> : ""}
                    </TransactionEdit>
                    <TransactionEdit className="notes">
                        Notes:
                        <FontAwesomeIcon
                            icon={faPen}
                            color="#fff"
                            fontSize="1rem"
                            style={{ marginLeft: 10 }}
                            onClick={handleClick("notes")}
                        />
                        {editInput["notes"] ? <input type="text" /> : ""}
                    </TransactionEdit>
                </div>
            )}
        </>
    );
}

/**
 * return Transaction Card Style
 */

const TransactionButton = styled.button`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const TransactionEdit = styled.p`
    color: #fff;
`;
