<!--============== Footer ==============-->

<div class="footer">
  <div class="container">
    <div class="row footerlinks">
      <div class="col-sm-4 col-md-2">
        <p>Contact Us</p>
        <ul>
          <li><a href="mailto:{email}{info_value}{/email}" target="_blank">{email}{info_value}{/email}</a></li>
          <li><a href="mailto:{email}{info_value}{/email}" target="_blank">{tel}{info_value}{/tel}</a></li>
        </ul>
      </div>
      <div class="col-sm-4 col-md-2">
        <p>Social media</p>
        <ul>
          {social_media}
            <li><a href="{social_media_link}" target="_blank">Follow on {social_media_name}</a></li>
          {/social_media}
        </ul>
      </div>
      <div class="col-sm-4 col-md-2">
        <p>Links</p>
        <ul>
         {footer_nav}
            <li><a href="<?php echo base_url('{nav_links_url}');?>">{nav_links_name}</a></li>
          {/footer_nav}
          
        </ul>
      </div>
      <div class="col-sm-8 col-md-4">
        <p>LEGAL TERMS</p>
        <ul>
          <li><a href="#" data-toggle="modal" data-target="#terms_model">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="col-sm-4 col-md-2">
        <div class="pull-right"><img height="250" src="<?php echo base_url('asserts/images/logo.png');?>" alt="logo"></div>
      </div>
    </div>
  </div>
</div>

<div class="row copyright">
     <div class="col-sm-12 col-md-12 text-center">
      <p>Copyright &copy; 2019. Onlineforu LTD</p>
    </div>
  </div>

<!--==============BOOTSTRAP JS=================--> 









<!-- Modal -->
<div class="modal fade" id="terms_model" tabindex="-1" role="dialog" aria-labelledby="terms_model" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Terms and Privacy</h5>
        
      </div>
      <div class="modal-body">
        Text comming
      </div>
      
    </div>
  </div>
</div>


<!--Start of Tawk.to Script-->
<!-- <script type="text/javascript">
var $_Tawk_API={},$_Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/54b4d389f7d9f97ff805cbad/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();



</script> -->
<!--End of Tawk.to Script-->

<script src="<?php echo base_url('asserts/js/bootstrap.min.js');?>"></script>
</body>
</html>




{
    social_media: [
    {
    social_media_id: "1",
    social_media_link: "https://www.facebook.com/onlineforultd/",
    social_media_icon: "icon-facebook-logo1",
    social_media_name: "Facebook",
    social_media_active: "1"
    },
    {
    social_media_id: "2",
    social_media_link: "https://twitter.com/onlineforul",
    social_media_icon: "icon-instagram-logo1",
    social_media_name: "Twitter",
    social_media_active: "1"
    },
    {
    social_media_id: "3",
    social_media_link: "https://www.linkedin.com/in/mendelkahan/?originalSubdomain=uk",
    social_media_icon: "icon-linkedin-logo",
    social_media_name: "Linkedin",
    social_media_active: "1"
    }
    ],
    email: [
    {
    info_id: "1",
    info_name: "email",
    info_value: "mendy@onlineforu.co.uk"
    }
    ],
    tel: [
    {
    info_id: "2",
    info_name: "tel",
    info_value: "07503661320"
    }
    ],
    footer_nav: [
    {
    nav_links_id: "2",
    nav_links_name: "Home",
    nav_links_parent: null,
    nav_links_active: "1",
    nav_links_position: "1",
    nav_links_url: ""
    },
    {
    nav_links_id: "1",
    nav_links_name: "About ",
    nav_links_parent: null,
    nav_links_active: "1",
    nav_links_position: "2",
    nav_links_url: "about"
    },
    {
    nav_links_id: "3",
    nav_links_name: "Services",
    nav_links_parent: null,
    nav_links_active: "1",
    nav_links_position: "3",
    nav_links_url: "services"
    },
    {
    nav_links_id: "4",
    nav_links_name: "Contact Us",
    nav_links_parent: null,
    nav_links_active: "1",
    nav_links_position: "4",
    nav_links_url: "contact"
    }
    ]
    }