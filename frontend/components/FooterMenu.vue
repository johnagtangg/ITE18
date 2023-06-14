<template>
<footer>
    <div class="footer-container">
      <div class="footer-left">
        <h3>About Us</h3>
        <p>Welcome to Travel Tales and Trails, where we are dedicated to sharing extraordinary travel experiences and 
            captivating stories from around the world. From hidden gems to iconic landmarks, our team of passionate 
            adventurers brings you on a journey of exploration and discovery, uncovering the most awe-inspiring tales 
            and hidden trails. Immerse yourself in vibrant cultures, breathtaking landscapes, and delicious cuisines as we 
            ignite your wanderlust and inspire your next adventure. Join us as we navigate the globe, one unforgettable tale 
            at a time, and let Travel Tales and Trails be your trusted companion in the pursuit of extraordinary travel experiences.</p>
      </div>
      <div class="footer-middle">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/user/loggedin">Home</a></li>
          <li><a href="#">Time Zone</a></li>
          <li><a href="#">Bucket List</a></li>
          <!--<li><a href="#">Recipe</a></li>-->
        </ul>
      </div>
      <div class="footer-right">
        <h3>Contact Us</h3>
        <p>KM7 Ampayon, Butuan City</p>
        <p>johnray.subrastas@carsu.edu.ph</p>
        <p>09505035232</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2023 John Ray Cute. All rights reserved.</p>
    </div>
  </footer>
</template>

<style>
/* Footer Styles */
footer {
  background-color: #1F2937;
  padding: 5px;
  padding-left: 50px;
  padding-right: 50px;
  color: #fff;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-top: 50px;
}

.footer-left,
.footer-middle,
.footer-right {
  width: 30%;
}

.footer-middle{
    padding-left: 150px;
}

.footer-left p{
    text-align: justify;
}

.footer-right{
    padding-left: 100px;
}

h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  margin-bottom: 5px;
}

ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-bottom {
  border-top: 1px solid #ffffff;
  padding-top: 10px;
  font-size: 12px;
  padding-bottom: 0px;
}

/* Font Awesome Icons - Update the link to your Font Awesome CSS file */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");


</style>