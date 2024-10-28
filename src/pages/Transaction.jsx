
import { useRef } from "react";
import TransactionDropdown from "../components/Transaction_dropdown";



function transactionPage() {


    return (
        <div className='transactionPage'>
            <section className="section-balance">
                <h1 className="balance-title">Argent Bank Checking (x8349)</h1>
                <h2 className="balance-amount">$2,082.79</h2>
                <p className="balance-description">Available Balance</p>
            </section>

            <section className="section-transactions">

                <div className="legend-transaction">
                    <p>DATE</p>
                    <p>DESCRIPTION</p>
                    <p>Amount</p>
                    <p>BALANCE</p>
                </div>

                <div className="gallery-transactions">
                    <TransactionDropdown date="June 20th, 2020" description="Golden Sun Bakery" amount="$5.00" balance="$2082.79" type ="Electronic" category="Food" notes=""></TransactionDropdown>
                </div>

            </section>

        </div>
    )
}
export default transactionPage