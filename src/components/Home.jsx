import '../styles/home.scss'
import Mandir from '../assets/temple_main.png'
import Donation from '../assets/donation.jpg'
import Location from '../assets/location.png'
import { Link } from 'react-router-dom'
import NewsUpdates from './NewsUpdates'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-main">
        <img src={Mandir} alt="" />
        <div className="moving-text-container">
          <p className="moving-text">डोहकेश्वर धाम</p>
        </div>
      </div>

      <div className='alert-band'>
        <div>
          <div className="donation-img">
            <img src={Donation} alt="" />
          </div>
          <Link className="blink" to="/donation">दान | Donation</Link>
        </div>
        <div>
          <div className="donation-img">
            <img src={Location} alt="" />
          </div>
          <a href="https://maps.app.goo.gl/r3hxExgQHktp5zceA" target="_blank" rel="noopener noreferrer">जगह | Location</a>
        </div>
      </div>

      <NewsUpdates/>

      <div className="major-attraction">
        <h2>प्रमुख आकर्षण | Major Attraction</h2>
        <ul>
          <li>डोहकेश्वर महादेव मंदिर | Dohakeshwar Mahadev Mandir</li>
          <li>डोहकेश्वर महावीर मंदिर | Dohakeshwar Mahaveer Mandir</li>
          <li>लखदाता पीर बाबा मंदिर | Lakhadaata Peer Baba Mandir</li>
          <li>श्री नैना देवी मंदिर | Shri Naina Devi Mandir</li>
          <li>गणेश मंदिर | Ganesh Mandir</li>
          <li>बाबा बालक नाथ मंदिर | Baba Baalak Naath Mandir</li>
          <li>मनसा देवी माता मंदिर | Mansa Devi Maata Mandir</li>
          <li>महावीर हनुमान दर्शनीय (कपि स्थल) | Mahaavir Hanumaan Darshniy (Kapi Sthal)</li>
          <li>नवग्रह मंदिर | Navagrah Mandir</li>
          <li>शनिदेव मंदिर | Shani Dev Mandir</li>
          <li>अखंड धूणा-हवनकुंड | Akhand Dhuna-Havankund</li>
          <li>ज्योति स्थल | Jyoti Sthal</li>
          <li>मनोकामना स्तंभ | Manokaamana Stambh</li>
          <li>तुलादान स्थल | Tuldaan Sthal</li>
          <li>सत्संग कक्ष | Satsang Kaksh</li>
          <li>पंचवटी | Panchvati</li>
          <li>दिव्य पर्वत | Divy Parvat</li>
        </ul>
      </div>

      <div className="home-subMain">
        <div className="temple-overview">
          <h2>मंदिर सिंहावलोकन | Temple Overview</h2>
          <div className="parah">
            <div className="card">
              <p>डोहकेश्वर धाम देवभूमि हिमाचल प्रदेश के जिला बिलासपुर में गोबिंदसागर जलाशय के तट पर स्थित एक हिंदू मंदिर है। अपनी 54 फीट ऊंची हनुमान जी की मूर्ति के लिए प्रतिष्ठित है जो देवभूमि की पहाड़ियों की अद्भुत प्राकृतिक सुंदरता के बीच खड़ी है। यह मंदिर भक्ति के प्रतीक के रूप में खड़ा है क्योंकि इसके उद्घाटन (मूर्ति स्थापना और प्राण प्रतिष्ठा) के लिए देश भर के चौवन तीर्थों से आशीर्वाद लाया जा रहा है। मंदिर की विरासत में निहित आध्यात्मिक और सांस्कृतिक समृद्धि का अनुभव करने के लिए देश भर से भक्त और आगंतुक 15 फरवरी 2024 को एकत्र होंगे।</p>
            </div>
            <div className="card">
              <p>Dohakeshwar Dham is a Hindu temple located on the banks of the Gobindsagar reservoir in district Bilaspur of devbhoomi Himachal Pradesh.  Revered for its 54 feet high Hanuman ji statue that stands high in that astounding natural beauty of the hills of devbhoomi. The temple stands as a symbol of devotion as blessings from fifty four pilgrimage around the country are being brought for its inauguration(Murti sthapna and pran pratishtha). Devotees and visitors from around the nation will gather on 15th February 2024 to experience the spiritual and cultural richness embedded in the temple&rsquo;s heritage.</p>
            </div>
          </div>
        </div>
        <div className="temple-overview">
          <h2>स्थान विवरण | About the location</h2>
          <div className="parah">
            <div className="card">
              <p>डोहक हिमाचल प्रदेश के बिलासपुर जिले की झंडुत्ता तहसील में एक छोटा सा गाँव है और गोबिंद सागर झील के तट पर स्थित है। जब भाखड़ा नांगल बांध बनाया गया तो पुराना दोहक गांव जलाशय के पानी में डूब गया। बड़ी संख्या में निवासी गांव से बाहर चले गए और बाकी ने जल निकाय के एफआरएल (पूर्ण जलाशय स्तर) से ऊपर के किनारों पर अपना जीवन फिर से शुरू किया। संसाधनों की कमी थी और सुदूर और कठिन स्थान होने के कारण इस संरचना को जीवंत बनाने में लगभग 50 साल लग गए। यह गांव नैना देवी, बाबा बालक नाथ और कई अन्य देवी-देवताओं जैसे तीर्थस्थलों के नजदीक स्थित है।</p>
            </div>
            <div className="card">
              <p>Dohak is a small village in tehsil Jhandutta of district Bilaspur,Himachal Pradesh and is situated on the banks of the Gobind Sagar lake. The old Dohak village got submerged under the water of the reservoir when the Bhakra Nangal Dam was built. A large number of the residents moved out of the village and the rest rebuild their lives on the banks above the FRL( Full reservoir level) of the water body. There was a lack of resources and being a remote and a difficult location and it took around 50 years to bring this structure to life. This village is located in a close vicinity to pilgrimages like Naina Devi, Baba Balak Nath and many other deities.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home