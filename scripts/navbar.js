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
          <h3 class="navbar-item is-white has-text-black"><b>Toolbox</b></h3>
      </div>
    </div>
  </nav>
  `
})

var landNav = new Vue({
  el: "#NavLand"
})
