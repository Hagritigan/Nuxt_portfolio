<template lang="pug">
  div.scroll_border_box
    vue-custom-scrollbar.scroll-area(:settings="settings" @ps-scroll-y="scrollHanle")
      div
        p.n_text
          |In 1997, Yzerman put to rest all doubts of his ability to lead a team to a championship as Detroit won its first Stanley Cup in 42 years after sweeping the Philadelphia Flyers. The following year, Detroit repeated the feat, sweeping the Washington Capitals and winning their second consecutive Cup title. Yzerman earned the Conn Smythe Trophy as playoff MVP. He handed the Cup first to the wheelchair-bound Vladimir Konstantinov, who had been severely injured in a car accident just six days after the Cup victory in 1997.
          |On November 26, 1999, Yzerman became the 11th player in NHL history to score 600 goals. In 2000, he made the NHL All-Star First Team and won the Frank J. Selke Trophy as the league's top defensive forward.
          |In 2001–02, Yzerman re-aggravated a knee injury, forcing him to miss 30 regular season games, though nonetheless still finished sixth in team scoring. Yzerman's knee greatly pained him during the 2002 playoffs, but this did not stop him from leading the Red Wings from an early 2–0 deficit in their opening round series to defeat the Vancouver Canucks and St. Louis Blues en route to Detroit's fifth playoff series with Colorado, and the third time the two teams had battled to decide the Western Conference Championship.Detroit defeated Colorado in a seven-game series and moved on to the Stanley Cup Finals, where they defeated the Carolina Hurricanes to win their tenth Stanley Cup championship in their history. Rather than raising the Stanley Cup first, Yzerman passed the Cup to head coach Scotty Bowman, who announced his retirement following the game.
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