<template lang="pug">
    div.scroll_border_box
      vue-custom-scrollbar.scroll-area(:settings="settings" @ps-scroll-y="scrollHanle")
        div
          p.n_text
            |During the offseason, Yzerman underwent a knee realignment surgery known as an osteotomy. He missed the first 61 games of the 2002–03 season, but returned on February 24, 2003, at home against the Los Angeles Kings. After the season, Yzerman won the Bill Masterton Memorial Trophy for perseverance.
            |On May 1, 2004, Yzerman was hit in the eye by a deflected slapshot by the Calgary Flames defenceman Rhett Warrener in a playoff game, breaking his orbital bone and scratching his cornea. Yzerman underwent eye surgery following the incident, and was sidelined for the remainder of the 2004 playoffs. The eye injury also forced Yzerman to miss the 2004 World Cup of Hockey. Joe Thornton (then of the Boston Bruins) and Joe Sakic (Colorado), who each wore the number 19 for their respective NHL clubs and who were now eligible to wear it for team Canada due to Yzerman's enforced absence, both refused the number out of respect for their injured countryman. Yzerman returned in the 2005–06 season, following the 2004–05 NHL lockout, wearing a visor.
            |On August 2, 2005, Yzerman signed a one-year deal with the Red Wings; this was his last contract signed as a player. On March 31, 2006, he scored his 691st NHL career goal, passing Mario Lemieux for eighth place all-time. Yzerman's humility was evident in an interview prior to his achievement when he was quoted saying, "I don't really know the significance. If anything, it shows how good [Lemieux] is; he played almost five years less than I did. He scored his final NHL goal, the 692nd of his career, on April 3, 2006, in a game against the Calgary Flames. Yzerman played his last professional hockey game on May 1, 2006, a loss to the Edmonton Oilers in Game 6 of the first round of the 2006 playoffs and knocking Detroit out of the playoffs.
            |On July 3, 2006, Yzerman announced his retirement from the NHL. Shortly afterwards, Sports Illustrated published a special commemorative edition dedicated to Yzerman entitled "Yzerman: A Salute to Stevie Y.
            |Yzerman holds the NHL record as the longest-serving captain of a single team – he spent 19 seasons and 1,303 games wearing the "C". In addition to being eighth all-time in NHL regular-season goals and sixth in overall scoring, Yzerman finished his career seventh all-time in regular season assists and eighth in all-time playoff scoring.  He also ranks second in nearly every significant offensive category in Red Wings history behind Gordie Howe, save for assists – Yzerman has 1,063 assists to Howe's 1,020. Only Howe (1,687 games), Nicklas Lidström (1,564 games) and Alex Delvecchio (1,550 games) played more games as a Red Wing than Yzerman's 1,514.
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