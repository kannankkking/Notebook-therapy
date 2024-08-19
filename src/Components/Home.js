import React from 'react'
import styles from "../css/Home.module.css"
import { IoMdSearch } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
const hero = new URL("../images/hero.jpg", import.meta.url);
const set1 = new URL("../images/section_1_1.jpg", import.meta.url);
const set2 = new URL("../images/section_1_2.jpg", import.meta.url);
const set3 = new URL("../images/section_1_3.jpg", import.meta.url);
const set4 = new URL("../images/section_1_4.jpg", import.meta.url);
const set5 = new URL("../images/section_1_5.jpg", import.meta.url);
const set6 = new URL("../images/section_1_6.jpg", import.meta.url);
const set7 = new URL("../images/section_1_7.jpg", import.meta.url);
const set8 = new URL("../images/section_1_8.jpg", import.meta.url);
const set9 = new URL("../images/section_1_9.jpg", import.meta.url);
const set10 = new URL("../images/section_1_10.jpg", import.meta.url);
const set11 = new URL("../images/section_1_11.jpg", import.meta.url);
const set12 = new URL("../images/section_1_12.jpg", import.meta.url);
const set13 = new URL("../images/section_1_13.jpg", import.meta.url);
const set14 = new URL("../images/section_1_14.jpg", import.meta.url);
const set15 = new URL("../images/section_1_15.jpg", import.meta.url);
const set16 = new URL("../images/section_1_16.jpg", import.meta.url);
// section3
const notebook = new URL("../images/section3_1.jpg", import.meta.url);
const stamps = new URL("../images/section3_2.jpg", import.meta.url);
const washi = new URL("../images/section3_3.jpg", import.meta.url);
const bullet = new URL("../images/section3_4.jpg", import.meta.url);
const stickers = new URL("../images/section3_5.jpg", import.meta.url);
const pencil  = new URL("../images/section3_6.jpg", import.meta.url);
const bags = new URL("../images/section3_7.jpg", import.meta.url);
const pens = new URL("../images/section3_8.jpg", import.meta.url);
const bundles = new URL("../images/section3_9.jpg", import.meta.url);
const accessories = new URL("../images/section3_10.jpg", import.meta.url);

const aug = new URL("../images/august.jpeg", import.meta.url);
// section5
const set4_1 = new URL("../images/section5_1.jpeg", import.meta.url);
const set4_2 = new URL("../images/section5_2.jpeg", import.meta.url);
const set4_3 = new URL("../images/section5_3.jpeg", import.meta.url);
const set4_4 = new URL("../images/section5_4.jpeg", import.meta.url);
const set4_5 = new URL("../images/section5_5.jpeg", import.meta.url);
const set4_6 = new URL("../images/section5_6.jpeg", import.meta.url);
const set4_7 = new URL("../images/section5_7.jpeg", import.meta.url);
const set4_8 = new URL("../images/section5_8.jpeg", import.meta.url);
const set4_9 = new URL("../images/section5_9.jpeg", import.meta.url);
const set4_10 = new URL("../images/section5_10.jpeg", import.meta.url);
const set4_11 = new URL("../images/section5_11.jpeg", import.meta.url);
const set4_12 = new URL("../images/section5_12.jpeg", import.meta.url);

const post = new URL("../images/blog post.jpeg", import.meta.url);
const Home = () => {
  return (
     <div className={styles.Header}>
<div className={styles.navbar}>
  <div className={styles.navbar__s1}>
  <i class="fa-solid fa-bars"></i>
  </div>
<div className={styles.navbar__search}>
<IoMdSearch />


  <div className={styles.navbar__s1_input}>
    <input type='search' placeholder='Search'/>
  </div>
  </div>
  <div className={styles.navbar__s2}>
    <h2>notebook 🌙 therapy</h2>
  </div>
  <div className={styles.navbar__s3}>
  <i class="fa-solid fa-cart-shopping"></i>
  <div className={styles.cart}>
  <p>You did not purchase anything yet</p>
  </div>
  </div>
</div>

{/* Hero */}
<div className={styles.hero}>
  <img src={hero}/>
 <a href='#'> <button >Shop Now</button></a>
</div>


{/* section1 */}
<div className={styles.section1}>
  <h3>NEW COLLECTION</h3>
  <h1>Panda Friends Collection 🐼</h1>
  <p>Celebrate the playful spriit of pandas with our Tsuki <span>panda Friends collection. </span>Perfect for those who find delight in every paw print and playful moment</p>
  <p>15% off when you buy 2+ Panda Friends items 🐼</p>
</div>

{/* section2 */}
<div className={styles.section2}>
  <div className={styles.set1}>
  <a href='/section2_1'>  <img src={set1}/></a>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>

  <div className={styles.set1}>
   <a href='/section2_2'> <img src={set2}/></a>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>

  <div className={styles.set1}>
   <a href='/section2_3'> <img src={set3}/></a>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>

  <div className={styles.set1}>
  <a href='/section2_4'> <img src={set4}/></a>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>

  <div className={styles.set1}>
  <a href='/section2_5'> <img src={set5}/></a>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>

  <div className={styles.set1}>
  <a href='/section2_6'> <img src={set6}/></a>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>

  <div className={styles.set1}>
    <img src={set7}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>

  <div className={styles.set1}>
    <img src={set8}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>

  <div className={styles.set1}>
    <img src={set9}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>

  <div className={styles.set1}>
    <img src={set10}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>
  <div className={styles.set1}>
    <img src={set11}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>

  <div className={styles.set1}>
    <img src={set12}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>

  <div className={styles.set1}>
    <img src={set13}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>

  <div className={styles.set1}>
    <img src={set14}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>

  <div className={styles.set1}>
    <img src={set15}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>

  <div className={styles.set1}>
    <img src={set16}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <span>$39.98</span>
  </div>
</div>


<button className={styles.buton}>View More</button>

{/* section3 */}
<div className={styles.section3}>
  <div className={styles.set2}>
    <img src={bullet}/>
    <p>NOTEBOOKS</p>
  </div>

  <div className={styles.set2}>
    <img src={washi}/>
    <p>STAMPS</p>
  </div>

  <div className={styles.set2}>
    <img src={stamps}/>
    <p>WASHI TAPE</p>
  </div>

  <div className={styles.set2}>
    <img src={notebook}/>
    <p>BULLET</p>
  </div>

  <div className={styles.set2}>
    <img src={stickers}/>
    <p>ACCESSORIES</p>
  </div>

  <div className={styles.set2}>
    <img src={pencil}/>
    <p>BAGS</p>
  </div>

  <div className={styles.set2}>
    <img src={bags}/>
    <p>PENS</p>
  </div>

  <div className={styles.set2}>
    <img src={pens}/>
    <p>STICKERS</p>
  </div>

  <div className={styles.set2}>
    <img src={bundles}/>
    <p>PENCIL</p>
  </div>

  <div className={styles.set2}>
    <img src={accessories}/>
    <p>BUNDLES</p>
  </div>
</div>

{/* section4 */}
<div className={styles.section4}>
  <div className={styles.set3}>

  </div>
</div>

<div className={styles.august}>
  <img src={aug}/>
</div>


{/* section5 */}

<div className={styles.section5}>
<div className={styles.set4}>
    <img src={set4_1}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <del>$1,450.64</del>   <span>$39.98</span>
  </div>

  <div className={styles.set4}>
    <img src={set4_2}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <del>$1,350.64</del> <span>$39.98</span>
  </div>

  <div className={styles.set4}>
    <img src={set4_3}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <del>$2,250.64</del> <span>$39.98</span>
  </div>

  <div className={styles.set4}>
    <img src={set4_4}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <del>$2,150.64</del> <span>$39.98</span>
  </div>

  <div className={styles.set4}>
    <img src={set4_5}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <del>$2,950.64</del>  <span>$39.98</span>
  </div>

  <div className={styles.set4}>
    <img src={set4_6}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <del>$2,500.64</del>  <span>$39.98</span>
  </div>

  <div className={styles.set4}>
    <img src={set4_7}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <del>$2,650.64</del> <span>$39.98</span>
  </div>

  <div className={styles.set4}>
    <img src={set4_8}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <del>$3,350.64</del>  <span>$39.98</span>
  </div>

  <div className={styles.set4}>
    <img src={set4_9}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <del>$2,50.64</del>  <span>$39.98</span>
  </div>

  <div className={styles.set4}>
    <img src={set4_10}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <del>$2,550.64</del> <span>$39.98</span>
  </div>

  <div className={styles.set4}>
    <img src={set4_11}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
   <del>$2,350.64</del> <span>$39.98</span>
  </div>

  <div className={styles.set4}>
    <img src={set4_12}/>
    <p>Tsuki Midsummer Nights Dream Washi Tape set</p>
    <del>$2,300.64</del> <span>$39.98</span>
  </div>
</div>

{/* blog post */}
<div className={styles.post}>
  <img src={post}/>
  <p>Free Botanical-Themed Weekly Planner Printable 🌿   Free botanical-themed weekly planner printable! 🌿✨ Setup your daily bullet journal spreads hassle-free with our relaxing Daily Planner printable. Feel free to print and stick in...</p>
</div>




<div className={styles.footer}>
<div className={styles.icons}>
<a href="https://www.facebook.com/"><FaFacebookF className={styles.icons}/></a>
<a href="https://www.instagram.com/"><FaInstagram className={styles.icons}/></a>
<a href="https://x.com/?lang=en&mx=2"><FaTwitter className={styles.icons}/></a>
</div>
<div className={styles.footer_s1}>
<h4>Info</h4>
<p>Blog</p>
<p>About us</p>
<p>Sustainablity</p>
<p>Shipping&Returns</p>
<p>Contact us</p>
</div>

<div className={styles.footer_s2}>
<h4>Shop</h4>
<p>New Additions</p>
<p>Top Selling</p>
<p>Bags</p>
<p>Pens</p>
<p>Pencil Cases</p>
<p>Washi Tape</p>
<p>Gift Cards</p>
<p>More +</p>
</div>
<div className={styles.mail}>
  <h3>Join for special Updates & Discounts</h3>
  <input type='mail'placeholder='Enter your email address'/>
  <button>Submit</button>
</div>

</div>

</div> 
  )
}

export default Home
