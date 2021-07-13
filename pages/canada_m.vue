<template lang="pug">
  div.scroll_border_box
    vue-custom-scrollbar.scroll-area(:settings="settings" @ps-scroll-y="scrollHanle")
      div
        p.n_text
          |the 2007 IIHF World Championship in Moscow (April 27 – May 13), where the team beat Finland 4–2 on May 13 to win the Championship.
          |On October 18, 2008, Yzerman was named executive director for the Canadian men's hockey team at the 2010 Winter Olympics. The Canadian team he put together went on to win the gold, the first gold won by a home team in ice hockey since the 1980 USA Olympic hockey team. Yzerman said he would consider coming back as head of the Canadian team in 2014. Yzerman went on saying, "I loved it, but it was very stressful. Given the chance to represent Canada and be the guy in charge, if somebody offered it to me, I didn't hesitate the first time, I wouldn't hesitate again."
          |In 2012, Yzerman was named executive director for the Canadian men's hockey team at the 2014 Winter Olympics. The Canadian team he put together went on to win their second straight gold medal for the first time since 1948 and 1952. They also became the first country to accomplish the feat since the Soviet Union/Unified Team won three consecutive gold medals in 1984, 1988, and 1992. Following Canada's 3–0 victory over Sweden in the gold medal game, Yzerman announced that he would not return as the executive director for Canada for the 2018 Winter Olympics.
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
  }

</script>

<style lang="sass">

</style>