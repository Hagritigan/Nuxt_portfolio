<template lang="pug">
  div
    div.page_container
      div.page_back
        div.page_content
          div.emblem_box
            div.number_box 19
            div.logo_box
              a(href="https://www.nhl.com/redwings" target="_blank")
                img.logo_img(:src="logoUrl")
          div.information_box
            div.text_box
              nuxt
            div
            div.menu_box
              menu_component
</template>

<script>
  import menu_component from "../components/menu_component";

  export default {
    data() {
      return {
        logoUrl: '/images/logo.png'
      }
    },

    components : {
      menu_component,
    },
  }





</script>


<style lang="sass">
  $font: "NHL_Edge_Detroit", sans-serif
  $t_color: white

  .page_container
    height: 100%
    width: 100%

  .page_back
    width: 100%
    height: 100%
    margin: auto
    max-width: 1840px
    max-height: 1000px
    padding: 40px
    background: linear-gradient(180deg, #0C0A08 0%, rgba(12, 10, 8, 0) 100%), url("/images/background.jpg")
    background-position: center

  .page_content
    display: flex
    flex-direction: column
    width: 100%
    height: 100%
    border: 1px solid #FFFFFF
    backdrop-filter: blur(10px)

  .emblem_box
    display: flex
    flex-direction: row
    justify-content: space-between
    height: 200px

  .number_box
    height: 100%
    font-family: $font
    color: $t_color
    font-size: 170px

  .logo_box
    height: 100%

  .information_box
    height: 800px
    display: flex
    flex-direction: row
    justify-content: space-between

  .text_box
    height: 100%
    width: 75%
    overflow: hidden

  .menu_box
    height: 100%
    width: 25%

  .logo_img
    height: 200px


  @media screen and (max-width: 1200px)
    .information_box
      flex-direction: column-reverse
      justify-content: flex-end

    .menu_box
      width: 100%
      height: 70%

    .text_box
      width: 100%

    .page_back
      padding: 10px

    .logo_img
      height: 170px

    .logo_box
      height: 100%

    .number_box
      font-size: 140px

    .emblem_box
      height: 100%



  @media screen and (max-width: 1024px)
    .information_box
      flex-direction: column-reverse
      justify-content: flex-end

    .menu_box
      width: 100%
      height: 75%

    .text_box
      width: 100%

    .page_back
      padding: 10px

    .logo_img
      height: 150px

    .logo_box
      height: 100%

    .number_box
      font-size: 120px

    .emblem_box
      height: 100%

  @media screen and (max-width: 768px)
    .information_box
      flex-direction: column-reverse
      justify-content: flex-end

    .menu_box
      width: 100%
      height: 45%

    .text_box
      width: 100%

    .page_back
      padding: 8px

    .logo_img
      height: 130px

    .logo_box
      height: 100%

    .number_box
      font-size: 100px

    .emblem_box
      height: 100%

  @media screen and (max-width: 540px)
    .information_box
      flex-direction: column-reverse
      justify-content: flex-end

    .menu_box
      width: 100%
      height: 40%

    .text_box
      width: 100%

    .page_back
      padding: 6px

    .logo_img
      height: 100px

    .logo_box
      height: 100%

    .number_box
      font-size: 80px

    .emblem_box
      height: 100%

  @media screen and (max-width: 320px)
    .information_box
      flex-direction: column-reverse
      justify-content: flex-end

    .menu_box
      width: 100%
      height: 35%

    .text_box
      width: 100%

    .page_back
      padding: 4px

    .logo_img
      height: 80px

    .logo_box
      height: 100%

    .number_box
      font-size: 60px

    .emblem_box
      height: 100%

</style>
