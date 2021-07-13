<template lang="pug">
  div.scroll_border_box
    vue-custom-scrollbar.scroll-area(:settings="settings" @ps-scroll-y="scrollHanle")
      div
        p.n_text
          |Not long after Ken Holland received his contract extension, Craig Leipold, owner of the Minnesota Wild, and Jeffrey Vinik, the then-new owner of the Tampa Bay Lightning, sought to hire Yzerman as general manager. After turning down the Minnesota job before the 2009–10 season concluded,  Yzerman accepted the Lightning job and was named the team's new vice-president and general manager on May 25, 2010. In the off-season, and early in his new reign, he re-signed Martin St. Louis, signed defenceman Pavel Kubina for his second tenure with the team, signed free agent goaltender Dan Ellis to a two-year contract, signed defenceman Brett Clark and brought in left-winger Simon Gagné in a trade that saw Matt Walker and a fourth-round pick in 2011 depart Tampa Bay. In the middle of the season, he also traded for goaltender Dwayne Roloson as the Lightning progressed to the Eastern Conference Finals just one year after the team had not even qualified for the 2010 playoffs. For his part, Yzerman was nominated for the NHL General Manager of the Year Award, losing out to Vancouver's Mike Gillis.
          |While the Lightning would miss the playoffs in each of the next two seasons, the team would reach the Stanley Cup Finals in 2015, where they were defeated by the Chicago Blackhawks. On June 24, 2015, Yzerman won the NHL General Manager of the Year Award, becoming the first Lightning general manager to receive the honour in team history. The team built by Yzerman set franchise records with 50 wins and 108 points during the regular season, and also led the league with 262 goals and 32 home wins.
          |In the 2017–18 season, the Lightning finished in first place in the Atlantic Division and made it to the Eastern Conference Finals before losing to the Washington Capitals. On September 11, 2018, with one year remaining on his contract, Yzerman announced that he would be resigning as the Lightning general manager, but would remain with the team as a senior advisor. Yzerman was succeeded by assistant general manager Julien BriseBois.
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