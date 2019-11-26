var toolList = [
  {id: 0, link: 'https://tv.maptm.nl/', image: 'Images/trafficviewer.png', name: 'https://tv.maptm.nl/', text: 'MAPtm traffic viewer'},
  {id: 1, link: 'https://timviewer-demo.maptm.nl', image: 'Images/TIMviewer.png', name: 'https://timviewer-demo.maptm.nl', text: 'TIMviewer'},
  // {id: 2, link: 'https://timapp-demo.maptm.nl', image: 'Images/TIMapp.png', name: 'https://timapp-demo.maptm.nl', text: 'TIMapp'},
  {id: 3, link: 'https://services.maptm.nl/UtrechtHB/', image: 'Images/UtrechtHB.png', name: 'https://services.maptm.nl/UtrechtHB/', text: 'Utrecht HB tool'},
  {id: 4, link: 'https://comol5.maptm.nl/modules/login/login.html', image: 'Images/comol5.jpg', name: 'https://comol5.maptm.nl/modules/login/login.html', text: 'COMOL5'},
  {id: 5, link: 'http://mapinsight-kiemenspeurder-demo.s3-website.eu-central-1.amazonaws.com/', image: 'Images/Kiemenspeurder.png', name: 'http://mapinsight-kiemenspeurder-demo.s3-website.eu-central-1.amazonaws.com/', text: 'Kiemenspeurder'},
  {id: 6, link: 'https://demo.maptm.nl/AIS-Explorer/', image: 'Images/AISexplorer.png', name: 'https://demo.maptm.nl/AIS-Explorer/', text: 'AIS explorer'},
  {id: 7, link: 'https://services.maptm.nl/BM-AMS/', image: 'Images/BM-amsterdam.png', name: 'https://services.maptm.nl/BM-AMS/', text: 'Bereikbaarheidsmeter Amsterdam'},
  {id: 8, link: 'https://socrates.antwerp.maptm.nl/index.html', image: 'Images/STSAntwerpen.png', name: 'https://socrates.antwerp.maptm.nl/index.html', text: 'Socrates Antwerpen'},
  {id: 9, link: 'https://socrates.amsterdam.maptm.nl/', image: 'Images/Socrates-amsterdam.png', name: 'https://socrates.amsterdam.maptm.nl/', text: 'Socrates Amsterdam'},
  {id: 10, link: 'https://socialtrafficmanagement.nl/koningsdag/', image: 'Images/P-Fiets-live.png', name: 'https://socialtrafficmanagement.nl/koningsdag/', text: 'P-Fiets Live'}
];

Vue.component('tool-frame',{
  props: ['tool'],
  template:`
    <li>
      <a v-bind:href="tool.link" target="toolframe" onclick="SidebarToggle(true)">
        <div class="add-border box" >
          <figure class="image is-16by9">
            <img v-bind:src="tool.image" v-bind:alt="tool.name"></img>
          </figure>
          <button class="button has-text-centered has-text-weight-semibold is-fullwidth is-radiusless"> {{ tool.text }} </button>
        </div>
      </a>
    </li>
    `
})

Vue.component('landing-frame',{
  props: ['tool'],
  template:`
    <div class="column is-one-quarter is-centered">
      <a v-bind:href="tool.link" target="toolframe" onclick="LandingToggle(true)">
        <div class="add-border box" >
          <figure class="image is-16by9">
            <img v-bind:src="tool.image" v-bind:alt="tool.name"></img>
          </figure>
          <button class="button has-text-centered has-text-weight-semibold is-fullwidth is-radiusless"> {{ tool.text }} </button>
        </div>
      </a>
    </div>
    `
})

Vue.component("nav-bar", {
  template: `
  <nav class="navbar has-bg-custom-grey" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <button name="BurgerButton" class="button is-medium has-bg-custom-grey is-text light-padding is-hidden" onclick="SidebarToggle(false)">
        <span class=""><i class="fas fa-bars"></i></span>
      </button>
      <a class="navbar-item is-white light-padding" href="">
        <img src="Images/logo_map.svg">
      </a>
    </div>
    <div name="navMenu" class="navbar-menu">
      <div class="navbar-start">
          <h3 class="navbar-item is-white has-text-black"><b>Tooling</b></h3>
      </div>
    </div>
  </nav>
  `
})

var menuNav = new Vue({
  el: "#NavBar"
})

var landNav = new Vue({
  el: "#NavLand"
})

var tools = new Vue({
  el: '#LandingList',
  data: {toolList}
})

var toolMenu = new Vue({
  el: '#Menulist',
  data: {toolList}
})

function SidebarToggle(Close){
  // Function to close and open the sidebar
  menuList = document.getElementById("Menulist");
  menuBar = document.getElementById("Menubar");

  if(!Close){
    hidden = menuList.classList.contains('is-hidden');
    if (!hidden){
      Close = true;
    }
    else{
      menuList.classList.remove('is-hidden');
      // navMenu.classList.remove('is-hidden');

      menuBar.classList.remove('overlay-menu');
      menuBar.classList.add('is-one-fifth', 'fullheight');
    }
  }

  if(Close){
    menuList.classList.add('is-hidden');
    // navMenu.classList.add('is-hidden');

    menuBar.classList.add('overlay-menu');
    menuBar.classList.remove('is-one-fifth', 'fullheight');
  }

}

function LandingToggle(Open){
  // Function to close the top navbar and activate the sidebar instead
  menuList = document.getElementById("Menulist");
  menuBar = document.getElementById("Menubar");
  navLand = document.getElementById("NavLand");
  landingPage = document.getElementById("LandingPage");
  navMenu = document.getElementsByName("navMenu");
  buttons = document.getElementsByName("BurgerButton");
  toolFrame = document.getElementById("IframeColumn");

  if (open){
    menuBar.classList.remove("is-hidden");
    navLand.classList.add("is-hidden");
    toolFrame.classList.remove("is-hidden");
    landingPage.classList.add("is-hidden");
    navMenu.forEach(function(obj){
      obj.classList.add("is-hidden");
          })
    buttons.forEach(function(obj){
      obj.classList.remove("is-hidden");
          })
    SidebarToggle(true);
  }
}
