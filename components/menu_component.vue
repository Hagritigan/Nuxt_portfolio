<template>
  <div>
     <div class="menu">
      <ul class="menu_elem">
        <li class="wrap_menu" v-for="item in menu">
          <a href="#" data-toggle="wrap_menu" @click="activate(item)">{{ item.title }}<i :class="{'icon-arrow': true, 'open' : item.active && item === currentActive, 'close' : !item.active }" ></i></a>
            <div v-if="item.active && item === currentActive" class="subitem_box">
              <ul class="drop-menu" v-for="subitem in item.subtitle" >
                <li class="elem-menu">
                  <nuxt-link :to="subitem.to" > {{ subitem.name }} </nuxt-link>
                </li>
              </ul>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menu: {},
        currentActive: {},
      }
    },
    methods: {
      async getMenu() {
        const data = await this.$axios
          .get("/data/menu.json")
        this.menu = data.data.menu
      },
      activate(item) {
        item.active = !item.active
        if (item.active) {
          this.currentActive = item
        }
      },
    },
    created() {
      this.getMenu()
    },
    watch : {
      menu(value) {
        for (let i=0; i < value.length; i++) {
          if (this.menu[i].subtitle.filter(x=>x.to===this.$route.path)[0]) {
            this.menu[i].active=true
            this.currentActive=this.menu[i]
          }
        }
      }
    }
  }





</script>

<style lang="sass">

  $red : #CE1126
  $font: "NHL_Edge_Detroit", sans-serif


  .menu
    font-family: $font
    width: 100%
    margin: 50px auto



  *, *:before, *:after
    -webkit-border-sizing: border-box
    -moz-border-sizing: border-box
    border-sizing: border-box


  .elem-menu a
    font-size: 30px
    display: block
    max-height: 9999px
    color: red
    -moz-transform: scaleY(1)
    -ms-transform: scaleY(1)
    -webkit-transform: scaleY(1)
    transform: scaleY(1)
    animation: showAnimation 0.5s ease-in-out
    -moz-animation: showAnimation 0.5s ease-in-out
    -webkit-animation: showAnimation 0.5s ease-in-out
    -moz-transition: max-height 1s ease-in-out
    -o-transition: max-height 1s ease-in-out
    -webkit-transition: max-height 1s ease-in-out
    transition: max-height 1s ease-in-out

  .menu > ul
    list-style: none
    padding: 0
    margin: 0 0 20px 0



  .wrap_menu a
    text-decoration: none
    font-size: 40px

  .wrap_menu [data-toggle="wrap_menu"]
    position: relative
    display: block
    color: white
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3)
    padding: 10px

  .wrap_menu [data-toggle="wrap_menu"]:hover
    color: $red


  .wrap_menu .icon-arrow
    position: absolute
    display: block
    font-size: 0.7em
    color: #fff
    top: 14px
    right: 10px


  .wrap_menu .icon-arrow:hover
    color: $red

  .wrap_menu .icon-arrow.open
    -moz-transform: rotate(-180deg)
    -ms-transform: rotate(-180deg)
    -webkit-transform: rotate(-180deg)
    transform: rotate(-180deg)
    -moz-transition: -moz-transform 0.6s
    -o-transition: -o-transform 0.6s
    -webkit-transition: -webkit-transform 0.6s
    transition: transform 0.6s
    text-shadow: 1px 1px #cda0a4

  .wrap_menu .icon-arrow.close
    -moz-transform: rotate(0deg)
    -ms-transform: rotate(0deg)
    -webkit-transform: rotate(0deg)
    transform: rotate(0deg)
    -moz-transition: -moz-transform 0.6s
    -o-transition: -o-transform 0.6s
    -webkit-transition: -webkit-transform 0.6s
    transition: transform 0.6s

  .wrap_menu .icon-arrow:before
    content: '\25BC'

  .wrap_menu .dropdown-menu
    max-height: 0
    overflow: hidden
    padding: 0
    margin: 0

  .drop-menu
    color: white
    font-family: $font


  .wrap_menu .drop-menu li
    padding: 0
    list-style: none

  .wrap_menu .drop-menu
    display: block
    color: $red
    padding: 10px 10px


  .wrap_menu .show, .drop .hide
    -moz-transform-origin: 50% 0%
    -ms-transform-origin: 50% 0%
    -webkit-transform-origin: 50% 0%
    transform-origin: 50% 0%

  .wrap_menu .show
    display: block
    max-height: 9999px
    -moz-transform: scaleY(1)
    -ms-transform: scaleY(1)
    -webkit-transform: scaleY(1)
    transform: scaleY(1)
    animation: showAnimation 0.5s ease-in-out
    -moz-animation: showAnimation 0.5s ease-in-out
    -webkit-animation: showAnimation 0.5s ease-in-out
    -moz-transition: max-height 1s ease-in-out
    -o-transition: max-height 1s ease-in-out
    -webkit-transition: max-height 1s ease-in-out
    transition: max-height 1s ease-in-out


  .wrap_menu .hide
    max-height: 0
    -moz-transform: scaleY(0)
    -ms-transform: scaleY(0)
    -webkit-transform: scaleY(0)
    transform: scaleY(0)
    animation: hideAnimation 0.4s ease-out
    -moz-animation: hideAnimation 0.4s ease-out
    -webkit-animation: hideAnimation 0.4s ease-out
    -moz-transition: max-height 0.6s ease-out
    -o-transition: max-height 0.6s ease-out
    -webkit-transition: max-height 0.6s ease-out
    transition: max-height 0.6s ease-out

  a.nuxt-link-active
    text-shadow: 1px 1px #cda0a4


  @keyframes showAnimation
    0%
      -moz-transform: scaleY(0.1)
      -ms-transform: scaleY(0.1)
      -webkit-transform: scaleY(0.1)
      transform: scaleY(0.1)

    40%
      -moz-transform: scaleY(1.04)
      -ms-transform: scaleY(1.04)
      -webkit-transform: scaleY(1.04)
      transform: scaleY(1.04)

    60%
      -moz-transform: scaleY(0.98)
      -ms-transform: scaleY(0.98)
      -webkit-transform: scaleY(0.98)
      transform: scaleY(0.98)

    80%
      -moz-transform: scaleY(1.04)
      -ms-transform: scaleY(1.04)
      -webkit-transform: scaleY(1.04)
      transform: scaleY(1.04)

    100%
      -moz-transform: scaleY(0.98)
      -ms-transform: scaleY(0.98)
      -webkit-transform: scaleY(0.98)
      transform: scaleY(0.98)

    80%
      -moz-transform: scaleY(1.02)
      -ms-transform: scaleY(1.02)
      -webkit-transform: scaleY(1.02)
      transform: scaleY(1.02)

    100%
      -moz-transform: scaleY(1)
      -ms-transform: scaleY(1)
      -webkit-transform: scaleY(1)
      transform: scaleY(1)


  @-moz-keyframes showAnimation
    0%
      -moz-transform: scaleY(0.1)
      -ms-transform: scaleY(0.1)
      -webkit-transform: scaleY(0.1)
      transform: scaleY(0.1)

    40%
      -moz-transform: scaleY(1.04)
      -ms-transform: scaleY(1.04)
      -webkit-transform: scaleY(1.04)
      transform: scaleY(1.04)

    60%
      -moz-transform: scaleY(0.98)
      -ms-transform: scaleY(0.98)
      -webkit-transform: scaleY(0.98)
      transform: scaleY(0.98)

    80%
      -moz-transform: scaleY(1.04)
      -ms-transform: scaleY(1.04)
      -webkit-transform: scaleY(1.04)
      transform: scaleY(1.04)

    100%
      -moz-transform: scaleY(0.98)
      -ms-transform: scaleY(0.98)
      -webkit-transform: scaleY(0.98)
      transform: scaleY(0.98)

    80%
      -moz-transform: scaleY(1.02)
      -ms-transform: scaleY(1.02)
      -webkit-transform: scaleY(1.02)
      transform: scaleY(1.02)

    100%
      -moz-transform: scaleY(1)
      -ms-transform: scaleY(1)
      -webkit-transform: scaleY(1)
      transform: scaleY(1)


  @-webkit-keyframes showAnimation
    0%
      -moz-transform: scaleY(0.1)
      -ms-transform: scaleY(0.1)
      -webkit-transform: scaleY(0.1)
      transform: scaleY(0.1)

    40%
      -moz-transform: scaleY(1.04)
      -ms-transform: scaleY(1.04)
      -webkit-transform: scaleY(1.04)
      transform: scaleY(1.04)

    60%
      -moz-transform: scaleY(0.98)
      -ms-transform: scaleY(0.98)
      -webkit-transform: scaleY(0.98)
      transform: scaleY(0.98)

    80%
      -moz-transform: scaleY(1.04)
      -ms-transform: scaleY(1.04)
      -webkit-transform: scaleY(1.04)
      transform: scaleY(1.04)

    100%
      -moz-transform: scaleY(0.98)
      -ms-transform: scaleY(0.98)
      -webkit-transform: scaleY(0.98)
      transform: scaleY(0.98)

    80%
      -moz-transform: scaleY(1.02)
      -ms-transform: scaleY(1.02)
      -webkit-transform: scaleY(1.02)
      transform: scaleY(1.02)

    100%
      -moz-transform: scaleY(1)
      -ms-transform: scaleY(1)
      -webkit-transform: scaleY(1)
      transform: scaleY(1)


  @keyframes hideAnimation
    0%
      -moz-transform: scaleY(1)
      -ms-transform: scaleY(1)
      -webkit-transform: scaleY(1)
      transform: scaleY(1)

    60%
      -moz-transform: scaleY(0.98)
      -ms-transform: scaleY(0.98)
      -webkit-transform: scaleY(0.98)
      transform: scaleY(0.98)

    80%
      -moz-transform: scaleY(1.02)
      -ms-transform: scaleY(1.02)
      -webkit-transform: scaleY(1.02)
      transform: scaleY(1.02)

    100%
      -moz-transform: scaleY(0)
      -ms-transform: scaleY(0)
      -webkit-transform: scaleY(0)
      transform: scaleY(0)


  @-moz-keyframes hideAnimation
    0%
      -moz-transform: scaleY(1)
      -ms-transform: scaleY(1)
      -webkit-transform: scaleY(1)
      transform: scaleY(1)

    60%
      -moz-transform: scaleY(0.98)
      -ms-transform: scaleY(0.98)
      -webkit-transform: scaleY(0.98)
      transform: scaleY(0.98)

    80%
      -moz-transform: scaleY(1.02)
      -ms-transform: scaleY(1.02)
      -webkit-transform: scaleY(1.02)
      transform: scaleY(1.02)

    100%
      -moz-transform: scaleY(0)
      -ms-transform: scaleY(0)
      -webkit-transform: scaleY(0)
      transform: scaleY(0)


  @-webkit-keyframes hideAnimation
    0%
      -moz-transform: scaleY(1)
      -ms-transform: scaleY(1)
      -webkit-transform: scaleY(1)
      transform: scaleY(1)

    60%
      -moz-transform: scaleY(0.98)
      -ms-transform: scaleY(0.98)
      -webkit-transform: scaleY(0.98)
      transform: scaleY(0.98)

    80%
      -moz-transform: scaleY(1.02)
      -ms-transform: scaleY(1.02)
      -webkit-transform: scaleY(1.02)
      transform: scaleY(1.02)

    100%
      -moz-transform: scaleY(0)
      -ms-transform: scaleY(0)
      -webkit-transform: scaleY(0)
      transform: scaleY(0)


  @media screen and (max-width: 1200px)
    .menu
      margin: 0
      display: flex
      flex-wrap: wrap
      justify-content: center

    .elem-menu a
      font-size: 25px

    .menu_elem
      display: flex
      flex-direction: row

    .text_box
      width: 100%

    .menu_box
      width: 100%
      max-height: 220px

    .subitem_box
      position: absolute
      display: flex
      flex-direction: column

    .wrap_menu .icon-arrow
      right: - 10px

    .wrap_menu a
      font-size: 30px



  @media screen and (max-width: 1024px)
    .menu
      margin: 0
      display: flex
      flex-wrap: wrap
      justify-content: center

    .elem-menu a
      font-size: 20px

    .menu_elem
      display: flex
      flex-direction: row

    .text_box
      width: 100%

    .menu_box
      width: 100%
      max-height: 200px

    .wrap_menu .icon-arrow
      right: - 10px

    .wrap_menu a
      font-size: 25px

  @media screen and (max-width: 768px)
    .menu
      margin: 0
      display: flex
      flex-wrap: wrap
      justify-content: center

    .elem-menu a
      font-size: 18px

    .menu_elem
      display: flex
      flex-direction: row

    .text_box
      width: 100%

    .menu_box
      width: 100%
      max-height: 190px

    .wrap_menu .icon-arrow
      right: - 8px

    .wrap_menu a
      font-size: 20px

  @media screen and (max-width: 540px)
    .menu
      margin: 0
      display: flex
      flex-wrap: wrap
      justify-content: center

    .elem-menu a
      font-size: 12px

    .menu_elem
      display: flex
      flex-direction: row

    .text_box
      width: 100%

    .menu_box
      width: 100%
      max-height: 164px

    .wrap_menu .icon-arrow
      right: - 8px
      top: 12px

    .wrap_menu a
      font-size: 14px

  @media screen and (max-width: 320px)
    .menu
      margin: 0
      display: flex
      flex-wrap: wrap
      justify-content: center

    .elem-menu a
      font-size: 6px

    .menu_elem
      display: flex
      flex-direction: row

    .text_box
      width: 100%

    .menu_box
      width: 100%
      max-height: 140px

    .wrap_menu .icon-arrow
      right: 2px
      top: 10px

    .wrap_menu a
      font-size: 8px



</style>