

function transactionDropdown(props) {

    const toggleDropdown = (e) => {
        e.preventDefault();
        const transactionDropdown = e.currentTarget.closest('.transactionDropdown');

        console.log(transactionDropdown);

        transactionDropdown.classList.toggle('active')

    }




    return (
        <div className='transactionDropdown'>

            <div className="trigger-part" onClick={(e) => {toggleDropdown(e)}}>
                <ion-icon name="chevron-down-outline"></ion-icon>
                <p className="transaction-date">{props.date}</p>
                <p className="transaction-description">{props.description}</p>
                <p className="transaction-amount">{props.amount}</p>
                <p className="transaction-balance">{props.balance}</p>

            </div>

            <div className="menu-part">

                <p className="transaction-type">Transaction Type: {props.type}</p>
                <div className="transaction-category-div">
                    <p className="transaction-category">Category: {props.category}</p>
                    <button className="transaction-edit-category"><ion-icon name="pencil"></ion-icon></button>
                </div>
                <div className="transaction-notes-div">
                    <p className="transaction-notes">Notes: {props.notes}</p>
                    <button className="transaction-edit-notes"><ion-icon name="pencil"></ion-icon></button>
                </div>

            </div>
            

        </div>
    )
}
export default transactionDropdown