<template lang="pug">
  div.scroll_border_box
    vue-custom-scrollbar.scroll-area(:settings="settings" @ps-scroll-y="scrollHanle")
      div
        p.n_text
          |•	Lester B. Pearson Award – 1989;
          br
          |•	Conn Smythe Trophy – 1998;
          br
          |•	Frank J. Selke Trophy – 2000;
          br
          |•	Stanley Cup champion (as player) – 1997, 1998, 2002;
          br
          |•	Stanley Cup champion (as executive) – 2008;
          br
          |•	Bill Masterton Memorial Trophy – 2003;
          br
          |•	Lester Patrick Trophy – 2006;
          br
          |•	NHL General Manager of the Year Award – 2015;
</template>

<script>
  import vueCustomScrollbar from 'vue-custom-scrollbar'
  import "vue-custom-scrollbar/dist/vueScrollbar.css"
  export default {
    components: {
      vueCustomScrollbar
    },
    data() {
      return {
        settings: {
          suppressScrollY: false,
          suppressScrollX: false,
          wheelPropagation: false
        }
      }
    },
    methods: {
      scrollHanle(evt) {
        console.log(evt)
      }
    }
  }

</script>

<style lang="sass">

</style>