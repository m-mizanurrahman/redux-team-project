/*  
💥 Title : OtherFoods
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 28/ May/ 2021 
*/


/*  🔥 React Dependencies 🔥 */
import CardOtherFood from './CardOtherFood'
import style from './OtherFood.module.css'

const OtherFoods = () => {
    return (
        <>
            <section className={style.otherFoodsWrapper}>
                <h4>Our Other Foods</h4>

                <div className={style.cardWrapper}>
                    <CardOtherFood/>
                    <CardOtherFood/>
                    <CardOtherFood/>
                </div>
            </section>

        </>
    );
};

export default OtherFoods