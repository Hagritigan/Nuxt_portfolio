<template lang="pug">
  vue-custom-scrollbar.scroll-area(:settings="settings" @ps-scroll-y="scrollHanle")
    div.scroll_box
      div.n_text#reg_stat
        p.mid_text
          div.container_stats
            div.row
              div.col-sm Year
              div.col-sm-1 Team
              div.col-sm-1 Event
              div.col-sm-1 Result
              div.col-sm GP
              div.col-sm G
              div.col-sm A
              div.col-sm Pts
              div.col-sm PIM
            div.row
              div.col-sm  1983
              div.col-sm-1 Canada
              div.col-sm-1 WJC
              div.col-sm-1 Bronze
              div.col-sm 7
              div.col-sm 2
              div.col-sm 3
              div.col-sm 5
              div.col-sm 2
            div.row
              div.col-sm 1984
              div.col-sm-1 Canada
              div.col-sm-1 CC
              div.col-sm-1 Gold
              div.col-sm 4
              div.col-sm 0
              div.col-sm 0
              div.col-sm 0
              div.col-sm 0
            div.row
              div.col-sm 1985
              div.col-sm-1 Canada
              div.col-sm-1 WC
              div.col-sm-1 Silver
              div.col-sm 10
              div.col-sm 3
              div.col-sm 4
              div.col-sm 7
              div.col-sm 6
            div.row
              div.col-sm 1989
              div.col-sm-1 Canada
              div.col-sm-1 WC
              div.col-sm-1 Silver
              div.col-sm 8
              div.col-sm 5
              div.col-sm 7
              div.col-sm 12
              div.col-sm 2
            div.row
              div.col-sm 1990
              div.col-sm-1 Canada
              div.col-sm-1 WC
              div.col-sm-1 4th
              div.col-sm 10
              div.col-sm 9
              div.col-sm 10
              div.col-sm 19
              div.col-sm 8
            div.row
              div.col-sm 1996
              div.col-sm-1 Canada
              div.col-sm-1 WCH
              div.col-sm-1 Silver
              div.col-sm 6
              div.col-sm 2
              div.col-sm 1
              div.col-sm 3
              div.col-sm 0
            div.row
              div.col-sm 1998
              div.col-sm-1 Canada
              div.col-sm-1 OG
              div.col-sm-1 4th
              div.col-sm 6
              div.col-sm 1
              div.col-sm 1
              div.col-sm 2
              div.col-sm 10
            div.row
              div.col-sm 2002
              div.col-sm-1 Canada
              div.col-sm-1 OG
              div.col-sm-1 Gold
              div.col-sm 6
              div.col-sm 2
              div.col-sm 4
              div.col-sm 6
              div.col-sm 2
            div.row
              div.col-sm
              div.col-sm-1 Junior totals
              div.col-sm-1
              div.col-sm-1
              div.col-sm 7
              div.col-sm 2
              div.col-sm 3
              div.col-sm 5
              div.col-sm 2
            div.row
              div.col-sm
              div.col-sm-1 Senior totals
              div.col-sm-1
              div.col-sm-1
              div.col-sm 50
              div.col-sm 22
              div.col-sm 27
              div.col-sm 49
              div.col-sm 28
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