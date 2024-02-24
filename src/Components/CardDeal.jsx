import {card} from "../assets";
import styles,{layout} from "../style";
import Button from "./Button";

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better Card deal <br className="sm:block hidden"/> in few easy 
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Discover the ideal credit card offer with just a few simple steps 
          tailored to your preferences and financial needs, ensuring you get 
          the best deal available.
        </p>

        <Button styles={`mt-10`}/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] h-[100%]"/>
      </div>
    </section>
);

export default CardDeal;