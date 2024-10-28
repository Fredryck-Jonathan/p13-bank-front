function TransactionItem(props) {

    return (
        <div className='TransactionItem'>

            <div className="transaction-item-infos">
                <h3 className="transaction-item-title">{props.title}</h3>
                <p className="transaction-item-amount">{props.amount}</p>
                <p className="transaction-item-description">{props.description}</p>
            </div>

            <button className="button-view-transactions">View transactions</button>

        </div>
    )
}
export default TransactionItem