<template lang="pug">
  vue-custom-scrollbar.scroll-area(:settings="settings" @ps-scroll-y="scrollHanle")
    div.scroll_box
      div.n_text#reg_stat
        p.mid_text
          div.container_stats
            div.row
              div.col-sm-1 Season
              div.col-sm-2 Team
              div.col-sm Lge
              div.col-sm GP
              div.col-sm G
              div.col-sm A
              div.col-sm Pts
              div.col-sm PIM
            div.row
              div.col-sm-1 1980–81
              div.col-sm-2 Nepean Raiders
              div.col-sm CJHL
              div.col-sm -
              div.col-sm -
              div.col-sm -
              div.col-sm -
              div.col-sm -
            div.row
              div.col-sm-1 1981–82
              div.col-sm-2 Peterborough Petes
              div.col-sm OHL
              div.col-sm 6
              div.col-sm 0
              div.col-sm 1
              div.col-sm 1
              div.col-sm 16
            div.row
              div.col-sm-1 1982–83
              div.col-sm-2 Peterborough Petes
              div.col-sm OHL
              div.col-sm 4
              div.col-sm 1
              div.col-sm 4
              div.col-sm 5
              div.col-sm 0
            div.row
              div.col-sm-1 1983–84
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 4
              div.col-sm 3
              div.col-sm 3
              div.col-sm 6
              div.col-sm 0
            div.row
              div.col-sm-1 1984–85
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 3
              div.col-sm 2
              div.col-sm 1
              div.col-sm 3
              div.col-sm 2
            div.row
              div.col-sm-1 1985–86
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm -
              div.col-sm -
              div.col-sm -
              div.col-sm -
              div.col-sm -
            div.row
              div.col-sm-1 1986–87
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 16
              div.col-sm 5
              div.col-sm 13
              div.col-sm 18
              div.col-sm 8
            div.row
              div.col-sm-1 1987–88
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 3
              div.col-sm 1
              div.col-sm 3
              div.col-sm 4
              div.col-sm 6
            div.row
              div.col-sm-1 1988–89
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 6
              div.col-sm 5
              div.col-sm 5
              div.col-sm 10
              div.col-sm 2
            div.row
              div.col-sm-1 1989–90
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm -
              div.col-sm -
              div.col-sm -
              div.col-sm -
              div.col-sm -
            div.row
              div.col-sm-1 1990–91
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 7
              div.col-sm 3
              div.col-sm 3
              div.col-sm 6
              div.col-sm 4
            div.row
              div.col-sm-1 1991–92
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 11
              div.col-sm 3
              div.col-sm 5
              div.col-sm 8
              div.col-sm 12
            div.row
              div.col-sm-1 1992–93
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 7
              div.col-sm 4
              div.col-sm 3
              div.col-sm 7
              div.col-sm 4
            div.row
              div.col-sm-1 1993–94
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 3
              div.col-sm 1
              div.col-sm 3
              div.col-sm 4
              div.col-sm 0
            div.row
              div.col-sm-1 1994–95
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm  15
              div.col-sm 4
              div.col-sm 8
              div.col-sm 12
              div.col-sm 0
            div.row
              div.col-sm-1 1995–96
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 18
              div.col-sm 8
              div.col-sm 12
              div.col-sm 20
              div.col-sm 4
            div.row
              div.col-sm-1 1996–97
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 20
              div.col-sm 7
              div.col-sm 6
              div.col-sm 13
              div.col-sm 4
            div.row
              div.col-sm-1 1997–98
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 22
              div.col-sm 6
              div.col-sm 18
              div.col-sm 24
              div.col-sm 22
            div.row
              div.col-sm-1 1998–99
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 10
              div.col-sm 9
              div.col-sm 4
              div.col-sm 13
              div.col-sm 0
            div.row
              div.col-sm-1 1999–2000
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 8
              div.col-sm 0
              div.col-sm 4
              div.col-sm 4
              div.col-sm 0
            div.row
              div.col-sm-1 2000–01
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 1
              div.col-sm 0
              div.col-sm 0
              div.col-sm 0
              div.col-sm 0
            div.row
              div.col-sm-1 2001–02
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 23
              div.col-sm 6
              div.col-sm 17
              div.col-sm 23
              div.col-sm 10
            div.row
              div.col-sm-1 2002–03
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 4
              div.col-sm 0
              div.col-sm 1
              div.col-sm 1
              div.col-sm 2
            div.row
              div.col-sm-1 2003–04
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 11
              div.col-sm 3
              div.col-sm 2
              div.col-sm 5
              div.col-sm 0
            div.row
              div.col-sm-1 2005–06
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 4
              div.col-sm 0
              div.col-sm 4
              div.col-sm 4
              div.col-sm 4
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