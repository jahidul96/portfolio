import './myproject.css'
import ecomerce from '../assets/eco.png'
import social from '../assets/social.png'
import nft from '../assets/nft.png'
import gang from '../assets/gang.png'
import uni from '../assets/uni.png'
import tr from '../assets/tr.jpg'
import travel from '../assets/travel.jpg'
import fullm from '../assets/fullm.jpg'
import food from '../assets/food.PNG'

export default function MyProject() {
    return (
        <div className='myprojects'>
            <div className='allBtnContainer'>
                <h2>Some Project's..</h2>
            </div>

            <div>
                <div className='projectImgRootFlex'>
                    <img className='projectImg' src={ecomerce} />
                    <img className='projectImg' src={social} />
                    <img className='projectImg' src={nft} />
                    <img className='projectImg' src={gang} />
                    <img className='projectImg' src={uni} />
                    <img className='projectImg' src={tr} />
                    <img className='projectImg' src={travel} />
                    <img className='projectImg' src={food} />
                    <img className='projectImg' src={fullm} />
                </div>
            </div>
        </div>
    )
}
