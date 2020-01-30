Vue.component('landing-frame',{
  template:`
    <div class="column is-one-quarter is-centered">
        <div class="add-border box is-relative" >
          <a v-bind:href="tool.link" target="toolframe" onclick="LandingToggle(true)">
            <figure class="image is-16by9">
              <img v-bind:src="tool.image" v-bind:alt="tool.name"></img>
            </figure>
          </a>
          <div class="field has-addons">
            <p class="control" v-if="tool.video">
              <button class="videobutton button is-transparent" @click.stop="openVideo"><i class="fab fa-youtube"></i></button>
            </p>
            <p class="control is-expanded">
              <a v-bind:href="tool.link" target="toolframe" onclick="LandingToggle(true)">
                <button class="is-fullwidth button has-text-centered has-text-weight-semibold is-radiusless is-paddingless"> {{ tool.text }} </button>
              </a>
            </p>
            <p class="control" v-if="tool.info">
              <button class="infobutton button is-transparent" @click.stop="openInfo"><i class="fas fa-info"></i></button>
            </p>
          </div>
        </div>

    </div>
    `,
    props: ['tool'],
    methods:{
      openVideo: function(){
        console.log("Hello Hello Hello");
        openVideo(this.tool.text, this.tool.video);
      },
      openInfo: function(){
        openInfo(this.tool.text, this.tool.info);
      }
    }
});

var tools = new Vue({
  data: {toolList},
  el: '#LandingList'
});
