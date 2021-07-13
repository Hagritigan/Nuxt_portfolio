<template lang="pug">
  div.scroll_border_box
    vue-custom-scrollbar.scroll-area(:settings="settings" @ps-scroll-y="scrollHanle")
      div
        p.n_text
          |On September 25, 2006, the Red Wings named Yzerman team vice-president and alternate governor.
          |On January 2, 2007, the Red Wings retired Yzerman's jersey #19 before a game against the Anaheim Ducks. As an additional honour, the captain's "C" was added to the corner of his banner to forever commemorate him as "The Captain". The official retirement ceremony was hosted by Yzerman's long-time friend, former NHL goaltender and ESPN hockey analyst Darren Pang, and featured such Red Wing luminaries as Gordie Howe, Ted Lindsay, Alex Delvecchio and Scotty Bowman. For the ceremony, active Red Wings players wore Yzerman throwback jerseys representing the Red Wings, Team Canada (Canada won gold at the 2002 Salt Lake City Winter Olympic Games), the Campbell Conference All-Star Team and the Peterborough Petes. Former teammate Vladimir Konstantinov attended the ceremony, walking across the ice for the first time without a wheelchair since his last game in the 1997 playoffs.[
          |On January 2, 2007, Yzerman was presented the key to the city of Detroit by Mayor Kwame Kilpatrick at a luncheon prior to the jersey retirement ceremony. On January 13, 2007, Governor of Michigan Jennifer Granholm, another Canadian–American, visited Detroit and the Joe Louis Arena and proclaimed the day as "Steve Yzerman Day" in Michigan.
          |On January 11, 2008, when the Red Wings visited Ottawa to play the Senators, Yzerman was inducted into the Ottawa Sports Hall of Fame. Yzerman received another honour when he was inducted into the Michigan Sports Hall of Fame on February 11, 2008.
          |On June 23, 2009, it was announced that Yzerman would be inducted into the Hockey Hall of Fame. He was honoured during the November 6–9 induction weekend alongside his former Red Wings teammates Brett Hull and Luc Robitaille, as well as Brian Leetch.
          |Yzerman had expressed his desire to run a team while with the Red Wings front office since the latter part of his playing career, and had gained experience in running a team through his work with Hockey Canada, having assembled several rosters between 2007 and 2010 for Hockey Canada. However, after both general manager Ken Holland and assistant general manager Jim Nill received contract extensions, it became clear that the opportunity would not happen with the Red Wings. It was later reported by The Detroit News in 2016 that Red Wings owner Mike Ilitch attempted to promote Holland to make room for Yzerman to become the team's general manager, but Holland declined the promotion.
          |On April 19, 2019, the Red Wings announced that Yzerman had been hired as general manager of the team, while the existing general manager, Ken Holland, was promoted to a senior vice president role.
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