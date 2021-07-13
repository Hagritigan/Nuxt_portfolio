<template lang="pug">
  div.scroll_border_box
    vue-custom-scrollbar.scroll-area(:settings="settings" @ps-scroll-y="scrollHanle")
      div
        p.n_text
          |Following the departure of Red Wings captain Danny Gare during the 1985–86 season, Red Wings head coach Jacques Demers named Yzerman captain of the team on October 7, 1986, making him the youngest captain in the team's history. Demers said he "wanted a guy with the Red Wings crest tattooed on his chest". During the next season, Yzerman scored his then-career high 50th goal against the Buffalo Sabres on March 1, 1988. However, during the same game, Yzerman suffered a knee injury which caused him to miss the rest of the regular season. Despite his absence, the Red Wings would win their first division title in 23 years.
          |During the 1988–89 season, Yzerman recorded 155 points (65 goals and 90 assists), finishing third in regular season scoring behind Mario Lemieux and Wayne Gretzky. He won the Lester B. Pearson Award, the MVP as voted by the National Hockey League Players' Association, and was a finalist for the Hart Memorial Trophy, the MVP as voted by the NHL writers.
          |When Scotty Bowman took over as head coach in 1993, Yzerman initially chafed under Bowman's stern coaching style. Bowman, for his part, felt that Yzerman was not concentrating enough on defence; Bowman had long expected his forwards to be good back-checkers as well. Relations between the two became so strained that at one point, the Red Wings seriously considered trading him to the Ottawa Senators. However, Yzerman gradually became a better defender and is now considered one of the best two-way forwards in the history of the game.
          |In 1995, Yzerman led Detroit to its first appearance in the Stanley Cup Finals since 1966, but the Red Wings were swept by the New Jersey Devils. The next season saw Detroit finished with an NHL-record 62 regular season wins and were heavily favoured to win the Stanley Cup. Yzerman scored perhaps the most memorable goal of his career in the 1996 playoffs, stealing the puck from Wayne Gretzky and beating St. Louis Blues goaltender Jon Casey with a slap shot from the blue line to win the Western Conference Semifinals in double overtime of Game 7. However, the Red Wings fell short of their ultimate goal, losing in six games to the Colorado Avalanche in the Western Conference Finals.
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