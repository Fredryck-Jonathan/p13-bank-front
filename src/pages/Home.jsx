
import { useDispatch } from "react-redux";
import FeatureItem from "../components/Features_item"
import { postUserProfile } from "../actions/user.action";

function Home() {


    return (
        <div className='home'>
            <section className="heroSection">
                <div className="heroContent">
                    <h2 className="subtitles">No fees.</h2>
                    <p className="subtitles"> No minimum deposit.</p>
                    <p className="subtitles">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </div>
            </section>

            <section className="featureItemsSection">
                <FeatureItem
                    img='icon-chat.png'
                    title='You are our #1 priority'
                    text='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'>
                </FeatureItem>

                <FeatureItem
                    img='icon-money.png'
                    title='More savings means higher rates'
                    text='The more you save with us, the higher your interest rate will be!'>
                </FeatureItem>

                <FeatureItem
                    img='icon-security.png'
                    title='You are our #1 priority'
                    text='We use top of the line encryption to make sure your data and money is always safe.'>
                </FeatureItem>

            </section>

        </div>
    )
}
export default Home