<template lang="pug">
  vue-custom-scrollbar.scroll-area(:settings="settings" @ps-scroll-y="scrollHanle")
    div.scroll_box
      div.n_text#reg_stat
        p.mid_text
          div.container_stats
            div.row
              div.col-sm-1 Season
              div.col-sm-2 Team
              div.col-sm League
              div.col-sm GP
              div.col-sm G
              div.col-sm A
              div.col-sm Pts
              div.col-sm PIM
            div.row
              div.col-sm-1 1980–81
              div.col-sm-2 Nepean Raiders
              div.col-sm CJHL
              div.col-sm 50
              div.col-sm 38
              div.col-sm 54
              div.col-sm 92
              div.col-sm 44
            div.row
              div.col-sm-1 1981–82
              div.col-sm-2 Peterborough Petes
              div.col-sm OHL
              div.col-sm 58
              div.col-sm 21
              div.col-sm 43
              div.col-sm 64
              div.col-sm 65
            div.row
              div.col-sm-1 1982–83
              div.col-sm-2 Peterborough Petes
              div.col-sm OHL
              div.col-sm 56
              div.col-sm 42
              div.col-sm 49
              div.col-sm 91
              div.col-sm 65
            div.row
              div.col-sm-1 1983–84
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 80
              div.col-sm 39
              div.col-sm 48
              div.col-sm 87
              div.col-sm 33
            div.row
              div.col-sm-1 1984–85
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 80
              div.col-sm 30
              div.col-sm 59
              div.col-sm 89
              div.col-sm 58
            div.row
              div.col-sm-1 1985–86
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 51
              div.col-sm 14
              div.col-sm 28
              div.col-sm 42
              div.col-sm 16
            div.row
              div.col-sm-1 1986–87
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 80
              div.col-sm 31
              div.col-sm 59
              div.col-sm 90
              div.col-sm 43
            div.row
              div.col-sm-1 1987–88
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 64
              div.col-sm 50
              div.col-sm 52
              div.col-sm 102
              div.col-sm 44
            div.row
              div.col-sm-1 1988–89
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 80
              div.col-sm 65
              div.col-sm 90
              div.col-sm 155
              div.col-sm 61
            div.row
              div.col-sm-1 1989–90
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 79
              div.col-sm 62
              div.col-sm 65
              div.col-sm 127
              div.col-sm 79
            div.row
              div.col-sm-1 1990–91
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 80
              div.col-sm 51
              div.col-sm 57
              div.col-sm 108
              div.col-sm 34
            div.row
              div.col-sm-1 1991–92
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 79
              div.col-sm 45
              div.col-sm 58
              div.col-sm 103
              div.col-sm 64
            div.row
              div.col-sm-1 1992–93
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 84
              div.col-sm 58
              div.col-sm 79
              div.col-sm 137
              div.col-sm  44
            div.row
              div.col-sm-1 1993–94
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 58
              div.col-sm 24
              div.col-sm 58
              div.col-sm 82
              div.col-sm 36
            div.row
              div.col-sm-1 1994–95
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 47
              div.col-sm 12
              div.col-sm 26
              div.col-sm 38
              div.col-sm 40
            div.row
              div.col-sm-1 1995–96
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 80
              div.col-sm 36
              div.col-sm 59
              div.col-sm 95
              div.col-sm 64
            div.row
              div.col-sm-1 1991–92
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 81
              div.col-sm 55
              div.col-sm 63
              div.col-sm 85
              div.col-sm 78
            div.row
              div.col-sm-1 1997–98
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 75
              div.col-sm 24
              div.col-sm 45
              div.col-sm 69
              div.col-sm 46
            div.row
              div.col-sm-1 1998–99
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 80
              div.col-sm 29
              div.col-sm 45
              div.col-sm 74
              div.col-sm 42
            div.row
              div.col-sm-1 1999–2000
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 78
              div.col-sm 35
              div.col-sm 44
              div.col-sm 79
              div.col-sm 34
            div.row
              div.col-sm-1 2000–01
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 54
              div.col-sm 18
              div.col-sm 34
              div.col-sm 52
              div.col-sm 18
            div.row
              div.col-sm-1 2001–02
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 52
              div.col-sm 13
              div.col-sm 35
              div.col-sm 48
              div.col-sm 18
            div.row
              div.col-sm-1 2002–03
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 16
              div.col-sm 2
              div.col-sm 6
              div.col-sm 8
              div.col-sm 8
            div.row
              div.col-sm-1 2003–04
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 75
              div.col-sm 18
              div.col-sm 33
              div.col-sm 51
              div.col-sm 46
            div.row
              div.col-sm-1 2005–06
              div.col-sm-2 Detroit Red Wings
              div.col-sm NHL
              div.col-sm 61
              div.col-sm 14
              div.col-sm 20
              div.col-sm 34
              div.col-sm 18
              
          
        
      
    
  </vue-custom-scrollbar>
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