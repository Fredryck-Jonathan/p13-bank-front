function FeatureItem(props) {

    return (
        <div className='FeatureItem'>

            <img className="feature-item-icon" alt="" src={require(`../assets/${props.img}`)}></img>

            <h3 className="feature-item-title">{props.title}</h3>

            <p className="feature-item-text">{props.text}</p>

        </div>
    )
}
export default FeatureItem