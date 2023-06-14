<template>
    <div>
      <div>
        <figure class="carousel">
          <div class="overlay">Travel Tales and Trails</div>
          <img class="myslide w-screen object-cover object-center image-margin" src="@/static/1.jpg">
          <img class="myslide w-screen object-cover object-center image-margin" src="@/static/2.jpg">
          <img class="myslide w-screen object-cover object-center image-margin" src="@/static/3.jpg">
          <img class="myslide w-screen object-cover object-center image-margin" src="@/static/1.jpg">
        </figure>
      </div>
    </div>
  </template>
  
  <script>
export default {
  mounted() {
    let myIndex = 0;
    carousel();

    function carousel() {
      const x = document.getElementsByClassName("myslide");
      if (x.length === 0) return; // Exit if no elements with the 'myslide' class

      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }

      myIndex++;
      if (myIndex > x.length) {
        myIndex = 1;
      }

      // Set the current image to fully opaque
      x[myIndex - 1].style.opacity = "1";
      x[myIndex - 1].style.display = "block";

      // Apply fade effect to transition between images
      let opacity = 0;
      const fadeInterval = setInterval(function () {
        opacity += 0.02;
        x[myIndex - 1].style.opacity = opacity;

        if (opacity >= 2) {
          clearInterval(fadeInterval);
        }
      }, 50);

      setTimeout(function () {
        // Hide the current image after the fade effect completes
        x[myIndex - 1].style.display = "none";

        // Reset the opacity for the next image
        x[myIndex].style.opacity = "0";
        x[myIndex].style.display = "block";

        // Apply fade effect to transition between images
        let nextOpacity = 0;
        const nextFadeInterval = setInterval(function () {
          nextOpacity += 0.02;
          x[myIndex].style.opacity = nextOpacity;

          if (nextOpacity >= 2) {
            clearInterval(nextFadeInterval);
          }
        }, 50);

        myIndex++;
        if (myIndex > x.length) {
          myIndex = 1;
        }

        setTimeout(carousel, 3000);
      }, 3000);
    }
  },
};
</script>

  
  <style>
  .carousel {
    position: relative;
    height: 693px;
    width: 100%;
  }
  
  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px #000;
    z-index: 1;
  }
  
  .myslide {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  </style>