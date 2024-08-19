import React from 'react'
import styles from "../css/Section2_1.module.css"
import { IoMdSearch } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
const one = new URL("../images/section2_5_3.jpeg", import.meta.url);
const two = new URL("../images/section2_5_2.jpeg", import.meta.url);
const three = new URL("../images/section2_5_1.jpeg", import.meta.url);
const four = new URL("../images/section2_5_4.jpeg", import.meta.url);
const five = new URL("../images/section2_5_5.jpeg", import.meta.url);
const six = new URL("../images/section2_5_6.jpeg", import.meta.url);
const seven = new URL("../images/section2_5_7.jpeg", import.meta.url);
const eight = new URL("../images/section2_5_8.jpeg", import.meta.url);

const Section2_5 = () => {
  return (
    <div className> 
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
<div className={styles.section1}>
  <img src={one}/>
  <p>Tsuki ‘Midsummer Night’s Dream’ Washi Tape Set ☾</p>

<span>₹ 3,356.00 INR</span>
<button>Add to Cart</button>

</div>
<div className={styles.description}>
  <h3>Description</h3>
  <p>Introducing the Tsuki Bullet Journal Stencil Set by Notebook Therapy  ☾ </p>

<p>Designed exclusively by our team, this ultimate bullet journal tool is perfect for planning, doodling + tracking in your bujo! Each sheet is filled with a mix of grid trackers, circle trackers + more, with each essential stencil doubling as a ruler. Use the free cute stickers for the full aesthetic + 
    watch your bullet journal spreads bloom to life!</p>

<p>Set of 7 x washi tapes, including: 1 x 30mm PET washi tape, 1 x 30mm gold foil washi tape, 1 x 30mm CMYK tape, 1x sticker roll, 1x vintage ticket-shaped washi tape, 2x 15mm CMYK washi tape - add new patterns + textures!
5-meter length
3 x free stickers sheets included - perfect for scrapbooking + getting that summer witch aesthetic!
Eco-friendly glossy gold foil decorated magnetic box - store on your desk or shelf!
Made with FSC® certified materials</p>

</div>
<div className={styles.section2}>
  <img src={two}/>
  <img src={three}/>
  <img src={four}/>
  <img src={five}/>
  <img src={six}/>
  <img src={seven}/>
  <img src={eight}/>
 
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
  <input type='mail'placeholder='Enter your email address'/><button>Submit</button>
</div>

</div>

</div> 
  )
}

  

export default Section2_5;
