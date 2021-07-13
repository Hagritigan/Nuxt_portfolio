<template lang="pug">
  div.scroll_border_box
    vue-custom-scrollbar.scroll-area(:settings="settings")
      div
        p.n_text
          |Yzerman was born in Cranbrook, British Columbia. As a youth, he played in the 1977 Quebec International Pee-Wee Hockey Tournament with a minor ice hockey team from Nepean, Ontario. He attended Bell High School and played for his hometown Nepean Raiders Junior A hockey team. After one season with the Raiders, the Peterborough Petes of the Ontario Hockey League (OHL) drafted him, and he played centre for the Petes from 1981 to 1983.
          |The 1983 NHL Entry Draft was the first for Mike and Marian Ilitch, who had purchased the Detroit Red Wings in the summer of 1982. Jim Devellano, the Red Wings' general manager at the time, wanted to draft Pat LaFontaine, who had grown up outside Detroit and played his junior hockey in the area. However, when the New York Islanders selected LaFontaine third overall, Devellano "settled" on Yzerman, drafting him fourth.
          |The Red Wings were prepared to send Yzerman back to Peterborough for one more year, but "after one (training camp) season, you knew he was a tremendous hockey player", said Ken Holland, the former Red Wings general manager who was then a minor league goaltender for the Wings during Yzerman's rookie training camp. Yzerman tallied 39 goals and 87 points in his rookie season and finished second in Calder Memorial Trophy voting. That season, Yzerman also became the first 18-year-old to play in an NHL All-Star Game (18 years, 267 days) since the current format was adopted in 1969. This stood as an NHL record for 27 years until Jeff Skinner broke it by eight days.
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

