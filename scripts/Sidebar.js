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
});

Vue.component("side-bar");

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
});

var menuNav = new Vue({
  el: "#NavBar"
});

var toolMenu = new Vue({
  el: '#Menulist'
});

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
