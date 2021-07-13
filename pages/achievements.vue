<template lang="pug">
  div.scroll_border_box
    vue-custom-scrollbar.scroll-area(:settings="settings" @ps-scroll-y="scrollHanle")
      div
        p.n_text
          |•	NHL All-Star Game Roster – 1984 (first 18-year old to be selected to the roster), 1988, 1989, 1990, 1991, 1992, 1993, 1997, 1999, 2000;
          br
          |•	NHL First Team All-Star – 2000;
          br
          |•	Seventh in NHL history in points, tenth in goals and ninth in assists;
          br
          |•	First in Red Wings history in assists; second in points and goals; fourth in games played; second all-time in seasons and seventh all-time in games played with only one NHL franchise;
          br
          |•	Longest-serving captain for a team in league history (19 seasons, 1,303 games);
          br
          |•	Number (19) retired with Canadian Men's National Team; (#19 later worn at the 2010 Vancouver Olympics by Joe Thornton)
          br
          |•	Named vice-president of Detroit Red Wings – 2006;
          br
          |•	Detroit Red Wings #19 retired on January 2, 2007;
          br
          |•	Named general manager of Team Canada – 2008;
          br
          |•	Was ranked sixth in The Hockey News "The Top 60 Since 1967 – The Best Players of the Post Expansion Era";
          br
          |•	Inducted into Ottawa Sports Hall of Fame – January 11, 2008;
          br
          |•	Inducted into the Michigan Sports Hall of Fame – February 11, 2008;
          br
          |•	Inducted into Canada's Sports Hall of Fame – 2008;
          br
          |•	Inducted into the Hockey Hall of Fame – 2009;
          br
          |•	Named general manager and vice-president of the Tampa Bay Lightning – May 2010;
          br
          |•	Inducted into the IIHF Hall of Fame – 2014;
          br
          |•	Named to the Order of Hockey in Canada by Hockey Canada – 2014;
          br
          |•	Named on the 100 Greatest NHL Players list for the NHL's Centennial Anniversary – 2017;
          br
          |•	Named general manager and executive vice-president of the Detroit Red Wings – April 2019
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