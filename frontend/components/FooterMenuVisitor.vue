<template>
    <footer>
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
      border-top: 1px solid #1F2937;
      padding-top: 10px;
      font-size: 12px;
      padding-bottom: 0px;
    }
    
    /* Font Awesome Icons - Update the link to your Font Awesome CSS file */
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
    
    
    </style>