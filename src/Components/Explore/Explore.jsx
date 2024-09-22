
import './Explore.css';
import { menu_list } from '../../images/food_list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Explore = ({ category, setCategory }) => {

    const scrollList = (direction) => {
        const container = document.querySelector('.explore-list');
        const scrollAmount = 400;
        if (direction === 'next') {
            container.scrollLeft += scrollAmount;
        } else {
            container.scrollLeft -= scrollAmount;
        }
    };

    return (
        <div className='explore' id='explore-menu'>
            <h2>OUR MENU</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your eating experience, one delicious meal at a time.</p>

            <div className="explore-list" >
                {
                    menu_list.map((item, index) => {
                        return (
                            <div className="each-item" onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} >
                                <div className={category === item.menu_name ? "active" : ""}>
                                    <img src={item.menu_image} alt='' />
                                    <p>{item.menu_name.toUpperCase()} <br />
                                        <span className="span-container">
                                            <span>Order now</span>
                                            <span><FontAwesomeIcon icon={faArrowRightLong} /></span>
                                        </span>
                                    </p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <button className="prev-btn" onClick={() => scrollList('prev')} ><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className="next-btn" onClick={() => scrollList('next')} ><FontAwesomeIcon icon={faChevronRight} /></button>

        </div>
    );
}

export default Explore;