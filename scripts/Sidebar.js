function SidebarToggle(Close){
  // Function to close and open the sidebar
  console.log("TOGGLE");
  menuList = document.getElementById("Menulist");
  menuBar = document.getElementById("Menubar");
  navMenu = document.getElementById("navMenu");

  if(!Close){
    hidden = menuList.classList.contains('is-hidden');
    if (!hidden){
      Close = true;
    }
    else{
      menuList.classList.remove('is-hidden');
      navMenu.classList.remove('is-hidden');

      menuBar.classList.remove('overlay-menu');
      menuBar.classList.add('is-one-fifth');
    }
  }

  if(Close){
    menuList.classList.add('is-hidden');
    navMenu.classList.add('is-hidden');

    menuBar.classList.add('overlay-menu');
    menuBar.classList.remove('is-one-fifth');
  }

}

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

var tools = new Vue({
  el: '#Menulist',
  data: {
    toolList: [
      {id: 0, link: 'https://rsbg.maptm.nl', image: 'Images/rsbgimg.png', name: 'RSBG', text: 'De RSBG'},
      {id: 1, link: 'https://www.nu.nl', image: 'Images/nulogo.jpg', name: 'NU.NL', text: 'Dit is Nu.nl'},
      {id: 2, link: 'https://www.maptm.nl', image: 'Images/maptm.png', name: 'MAPTM hoofdsite', text: 'Hier vind je de MAPTM site'},
      {id: 3, link: 'https://services.maptm.nl/insight', image: 'Images/insight.png', name: 'services.maptm/insight', text: 'Services of Maptm'}
    ]
  }
})
