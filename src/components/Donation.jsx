import '../styles/donation.scss'
import QR from '../assets/qr.png'

const Donation = () => {
    return (
        <div className='donation'>
            <div>
                <img src={QR} alt="" />
            </div>
        </div>
    )
}

export default Donation