var toolList = [
  {id: 0, link: 'https://tv.maptm.nl/', image: 'Images/trafficviewer.png', name: 'https://tv.maptm.nl/', text: 'MAPtm traffic viewer'},
  {id: 1, link: 'https://timviewer-demo.maptm.nl', image: 'Images/TIMviewer.png', name: 'https://timviewer-demo.maptm.nl', text: 'TIMviewer'},
  // {id: 2, link: 'https://timapp-demo.maptm.nl', image: 'Images/TIMapp.png', name: 'https://timapp-demo.maptm.nl', text: 'TIMapp'},
  {id: 3, link: 'https://services.maptm.nl/UtrechtHB/', image: 'Images/UtrechtHB.png', name: 'https://services.maptm.nl/UtrechtHB/', text: 'Utrecht HB tool'},
  {id: 4, link: 'https://comol5.maptm.nl/modules/login/login.html', image: 'Images/comol5.png', name: 'https://comol5.maptm.nl/modules/login/login.html', text: 'COMOL5'},
  {id: 5, link: 'http://mapinsight-kiemenspeurder-demo.s3-website.eu-central-1.amazonaws.com/', image: 'Images/Kiemenspeurder.png', name: 'http://mapinsight-kiemenspeurder-demo.s3-website.eu-central-1.amazonaws.com/', text: 'Kiemenspeurder'},
  {id: 6, link: 'https://demo.maptm.nl/AIS-Explorer/', image: 'Images/AISexplorer.png', name: 'https://demo.maptm.nl/AIS-Explorer/', text: 'AIS explorer'},
  {id: 7, link: 'https://bmams.maptm.nl/', image: 'Images/BM-amsterdam.png', name: 'https://bmams.maptm.nl/', text: 'Bereikbaarheidsmeter Amsterdam'},
  {id: 8, link: 'https://socrates.antwerp.maptm.nl/index.html', image: 'Images/STSAntwerpen.png', name: 'https://socrates.antwerp.maptm.nl/index.html', text: 'Socrates Antwerpen'},
  {id: 9, link: 'https://socrates.amsterdam.maptm.nl/', image: 'Images/Socrates-amsterdam.png', name: 'https://socrates.amsterdam.maptm.nl/', text: 'Socrates Amsterdam'},
  {id: 10, link: 'https://socialtrafficmanagement.nl/koningsdag/', image: 'Images/P-Fiets-live.png', name: 'https://socialtrafficmanagement.nl/koningsdag/', text: 'P-Fiets Live'}
];

Vue.component('tool-frame',{
  template:`
    <li>
      <a v-bind:href="tool.link" target="toolframe" onclick="SidebarToggle(true)">
        <div class="add-border box" >
          <figure class="image is-16by9">
            <img v-bind:src="tool.image" v-bind:alt="tool.name"></img>
          </figure>
          <button class="button has-text-centered has-text-weight-semibold is-fullwidth is-radiusless is-paddingless"> {{ tool.text }} </button>
        </div>
      </a>
    </li>
    `,
    props: ['tool']
})

Vue.component('landing-frame',{
  template:`
    <div class="column is-one-quarter is-centered">
      <a v-bind:href="tool.link" target="toolframe" onclick="LandingToggle(true)">
        <div class="add-border box is-relative" >
          <figure class="image is-16by9">
            <img v-bind:src="tool.image" v-bind:alt="tool.name"></img>
          </figure>
          <div class="field has-addons">
            <p class="control">
              <button class="videobutton button is-transparent"><i class="fab fa-youtube"></i></button>
            </p>
            <p class="control is-expanded">
              <button class="is-fullwidth button has-text-centered has-text-weight-semibold is-radiusless is-paddingless"> {{ tool.text }} </button>
            </p>
            <p class="control">
              <button class="infobutton button is-transparent"><i class="fas fa-info"></i></button>
            </p>
          </div>
        </div>
      </a>
    </div>
    `,
    props: ['tool']
})

Vue.component("nav-bar", {
  template: `
  <nav class="navbar has-bg-custom-grey" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <button name="BurgerButton" class="button is-medium has-bg-custom-grey is-text light-padding is-hidden" onclick="SidebarToggle(false)">
        <span class=""><i class="fas fa-bars"></i></span>
      </button>
      <a name="MapLogo" class="navbar-item is-white light-padding" href="">
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

Vue.component("side-bar")

var sideBar = new Vue({
  el: '#Side',
  template: `
  <div id="Menubar" class="column is-hidden is-one-fifth add-border" @mouseover="open" @mouseleave="close">
    <aside class="menu" style="height: inherit, width: inherit">
      <div>
        <div id="NavBar">
          <nav-bar></nav-bar>
        </div>
        <div id="Menulist" class="menu-content scrollbar-warning">
          <ul class="menu-list">
            <tool-frame v-for="tool in toolList" v-bind:tool="tool" v-bind:key="tool.id"></tool-frame>
          </ul>
        </div>
      </div>
    </aside>
  </div>
  `,
  methods:{
    open: function(){
      SidebarToggle(false);
    },
    close: function(){
      SidebarToggle(true);
    }
  },
  data: {toolList}
})

var menuNav = new Vue({
  el: "#NavBar"
})

var landNav = new Vue({
  el: "#NavLand"
})

var tools = new Vue({
  data: {toolList},
  el: '#LandingList'
})

var toolMenu = new Vue({
  el: '#Menulist'
})



function SidebarToggle(Close){
  // Function to close and open the sidebar
  menuList = document.getElementById("Menulist");
  menuBar = document.getElementById("Menubar");
  mapLogo = document.getElementsByName("MapLogo");

  if(!Close){
    menuList.classList.remove('is-hidden');
    menuBar.classList.remove('is-collapsed', 'has-bg-custom-grey');
    menuBar.classList.add('is-one-fifth');
    mapLogo.forEach(function(obj){
      obj.classList.remove("is-hidden");
    });
  }
  else if(Close){
    menuList.classList.add('is-hidden');
    menuBar.classList.add('is-collapsed', 'has-bg-custom-grey');
    menuBar.classList.remove('is-one-fifth');
    mapLogo.forEach(function(obj){
      obj.classList.add("is-hidden");
    });
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
