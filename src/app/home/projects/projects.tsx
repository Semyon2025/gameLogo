import './styles.css';
import gameProject1 from '../../../images/Rectangle 15.png';
import gameProject2 from '../../../images/Rectangle 16.png';
import gameProject3 from '../../../images/Rectangle 17.png';
import gameProject4 from '../../../images/Rectangle 18.png';
import gameProject5 from '../../../images/Rectangle 19.png';
import gameProject6 from '../../../images/Rectangle 20.png';
export default function Projects() {
    return (  

<div className='Projects'>
    <h3>
    Our Recent Projects
    </h3>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    </p>
<div className='images'>
<img src={gameProject1} alt='' />
<img src={gameProject2} alt='' />
<img src={gameProject3} alt='' />
</div>
<div className='images'>
<img src={gameProject5} alt='' />
<img src={gameProject4} alt='' />
<img src={gameProject6} alt='' />
</div>
<a href='#' className='seeAll'>See all</a>
</div>

    );
}