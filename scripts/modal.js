Vue.component('video-modal',{
  template: `
  <div class="modal" v-bind:class="{'is-active': name == current}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"> {{title}} </p>
        <button @click="close" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body is-16by9">
        <iframe frameborder="0" height="315px" width="560px" v-bind:src="link" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
    </div>

  </div>`,
  props: ['title', 'link'],
  data: function(){
    return {
      name: this.title + "Video",
      current: currentModal
    }
  },
  created: function(){
    videoList.$on('change-modal', this.update);
  },
  methods: {
    update: function(){
      this.current = currentModal;
    },
    close: function(){
      currentModal = null;
      videoList.change();
    }
  }
})

Vue.component('info-modal',{
  template: `
  <div class="modal" v-bind:class="{'is-active': name == current}">
    <div class="modal-background" @click="close"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"> {{title}} </p>
        <button @click="close" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <p class="">Gemaakt door: {{author}}</p>
        <p class="">Gemaakt met: {{taal}}</p>
        <p class=""> {{usage}} </p>
      </section>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>`,
  props: {
    title: null,
    author: null,
    taal: null,
    usage: null
  },
  data: function(){
    return {
      name: this.title + "Info",
      current: currentModal
    }
  },
  created: function(){
    infoList.$on('change-modal', this.update);
  },
  methods: {
    update: function(){
      this.current = currentModal;
    },
    close: function(){
      currentModal = null;
      infoList.change();
    }
  }
})

// Keep track of loaded modals and videoModals
var currentModal = null;
var loadedModals = [];
var videoModals = [];
var infoModals = [];

// Instance the vue dynamic lists for both videos and tool info
var videoList = new Vue({
  el: '#videoList',
  data: {videoModals, current: currentModal},
  methods:{
    change: function(){
      this.current = currentModal;
      this.$emit("change-modal");
    }
  }
});

var infoList = new Vue({
  el: '#infoList',
  data: {infoModals, current: currentModal},
  methods:{
    change: function(){
      this.current = currentModal;
      this.$emit("change-modal");
    }
  }
});

// Function that activates when we click a video button
function openVideo(title, link){
  var vidString = title + "Video";
  if(!loadedModals.includes(vidString)){
    loadedModals.push(vidString);

    var modal = {
      title: title,
      link: link
    };

    videoModals.push(modal);
  };

  currentModal = vidString;
  videoList.change();
}

// Function that activates when we click an info button
function openInfo(title, info){
  var infoString = title + "Info";
  if(!loadedModals.includes(infoString)){
    loadedModals.push(infoString);

    var modal = {
      title: title,
      author: info['author'],
      taal: info['taal'],
      usage: info['usage']
    };

    console.log(modal);
    infoModals.push(modal);
  };

  currentModal = infoString;
  infoList.change();
}
