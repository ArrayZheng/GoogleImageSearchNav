<template>
  <div class="content">
    <transition name="img-fade">
      <img v-if="defaultCenter" src="./../assets/logo.png">
    </transition>
    <div class="search" :class="animateSearch">
      <div class="search-and-button" :class="animateSearchAndButton">
        <input v-model.trim="keyword" :class="searchInputToTopNav"/>
        <div class="search-button"  @click="search" >
          <div :class="animateSearchButtom">search</div>
        </div>
      </div>

      <div class="top-nav-virtual" :class="animateTopNav">
        <transition name="bounce">
            <span v-if="!defaultCenter" key="left">left</span>
        </transition>
        <transition name="bounce">
          <span v-if="!defaultCenter" key="left">right</span>
        </transition>
      </div>
      <div class="ripple" :class="animateRipple"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test-animation',
  computed: {
    animateRipple () {
      return this.defaultCenter ? '' : 'animate-ripple'
    },
    animateSearch () {
      return this.defaultCenter ? 'center' : 'top'
    },
    animateTopNav () {
      return this.defaultCenter ? '' : 'top-nav'
    },
    animateSearchAndButton () {
      return this.defaultCenter ? '' : 'inner-nav'
    },
    animateSearchButtom () {
      return {
        'click-search-word': !this.defaultCenterButton
      }
    },
    searchInputToTopNav () {
      return {
        'input-to-top-nav': !this.defaultCenter
      }
    }
  },
  data () {
    return {
      defaultCenterButton: true,
      defaultCenter: true,
      keyword: ''
    }
  },
  methods: {
    search () {
      let that = this
      if (this.keyword) {
        this.defaultCenter = false
        this.defaultCenterButton = false
      } else {
        this.defaultCenter = true
        this.defaultCenterButton = true
      }
      setTimeout(function () {
        that.defaultCenterButton = true
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/scss">
  @keyframes topNavStretch {
    0% {
      height: 40px;
      left:25%;
      width: 10%;
      background-color: rgba(58,136,248,0);
    }
    50% {
      height: 80px;
      left:20%;
      width: 100%;
      background-color: rgba(58,136,248,0);
    }
    100% {
      height: 80px;
      left:0;
      width: 100%;
      background-color: rgb(58,136,248);
    }
  }
  @keyframes fadeOutTop {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1; }
    40% {
      transform: translate3d(0, 0, 0);
      opacity: 0.4;
    }
    60% {
      transform: translate3d(0, 0, 0);
      opacity: 0.2;
    }
    100% {
      -webkit-transform: translate3d(0, -300px, 0);
      transform: translate3d(0, -300px, 0);
      opacity: 0;
    }
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes fold {
    0% {
      -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1); }
    30% {
      -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
      animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
      -webkit-transform: scale3d(1, 0.4, 1);
      transform: scale3d(1, 0.4, 1); }
    60% {
      opacity: 1;
      -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
      animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
      -webkit-transform: scale3d(0.4, 0.4, 1);
      transform: scale3d(0.4, 0.4, 1); }
    100% {
      opacity: 0;
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
      animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
      -webkit-transform: scale3d(0.2, 0.2, 0.2);
      transform: scale3d(0.2, 0.2, 0.2); } }
  .img-fade-enter-active {
    animation: fadeOutTop .5s reverse;
  }
  .img-fade-leave-active {
    animation: fadeOutTop .5s ;
  }
  @keyframes popInBottom {
    0% {
      -webkit-transform: translate3d(0, 200px, 0) scale3d(0.1, 0.1, 0.1);
      transform: translate3d(0, 0, 0) scale3d(0, 0, 0);
      opacity: 0; }
    20% {
      -webkit-transform: translate3d(0, 200px, 0) scale3d(0.1, 0.1, 0.1);
      transform: translate3d(0, 0, 0) scale3d(0, 0, 0);
      opacity: 0; }
    40% {
      -webkit-transform: translate3d(0, 200px, 0) scale3d(0.1, 0.1, 0.1);
      transform: translate3d(0, 0, 0) scale3d(0.1, 0.1, 0.1);
      opacity: 0; }
    60% {
      -webkit-transform: translate3d(0, 200px, 0) scale3d(0.1, 0.1, 0.1);
      transform: translate3d(0, 0, 0) scale3d(0.1, 0.1, 0.1);
      opacity: 0; }
    70% {
      -webkit-transform: translate3d(0, 200px, 0) scale3d(0.1, 0.1, 0.1);
      transform: translate3d(0, 50px, 0) scale3d(0.1, 0.1, 0.1);
      opacity: 1; }
    70% {
      opacity: 1;
      -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
      animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
      -webkit-transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1.2);
      transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1.2); }
    80% {
      -webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
      transform: translate3d(0, 0, 0) scale3d(0.8, 0.8, 0.8); }
    90% {
      -webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
      -webkit-transform: translate3d(0, 0, 0) scale3d(1.43, 1.43, 1.43);
      transform: translate3d(0, 0, 0) scale3d(1.23, 1.23, 1.23); }
    100% {
      -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
      transform: translate3d(0, 0, 0) scale3d(1, 1, 1); }
  }
  .bounce-enter-active {
    animation: popInBottom 1.35s;
  }
  .bounce-leave-active {
    animation: popInBottom 1.35s reverse;
  }
  @keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    20% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    40% {
      -webkit-transform: scale3d(1, 0.9, 0.9);
      transform: scale3d(1, 1, 1);
    }

    60% {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }

    80% {
      transform: scale3d(1, 1, 1);
    }

    to {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes ripple {
    100% {
      transform: scale(40,4);
      background-color: rgb(58,136,248);
    }
  }
  .animate-ripple{
    animation: ripple 0.5s linear;
    animation-delay: 0.5s;
  }
  .content{
    height: 100%;
    width: 100%;
    img{
      top:20%;
      position: relative;
    }
    .search{
      margin: auto;
      position: absolute;
      top: 50%;
      transform: translate(0,-50%);
      display: flex;
      justify-content: center;
      overflow: hidden;
      align-items: center;
      transition: all 0.5s;
      transition-delay:0.25s;
      .ripple {
        background-color: rgba(0, 0, 0, 1);
        border-radius: 30%;
        height: 80px;
        width: 80px;
        top:0;
        left:calc(70% - 40px);
        position: absolute;
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      .search-and-button{
        width: 50%;
        display: flex;
        justify-content: center;
        z-index: 2;
        input{
          width: 80%;
          height: 36px;
          font-size: 30px;
          line-height: 36px;
          border: 1px solid #666;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          padding-left: 5px;
          background-color: transparent;
          &:focus{
            border: 1px solid rgb(58, 136, 248);
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            outline-style: none;
          }
          transition: all 0.55s;
          transition-delay:0.25s;
        }
        .input-to-top-nav{
          border: 0;
          color: white;
        }
        .search-button{
          height: 40px;
          width: 20%;
          line-height: 36px;
          text-align: center;
          font-size: 20px;
          cursor: pointer;
          color: #fff;
          /*background-color: rgb(58,136,248);*/
          background-color:transparent;
        }
        .click-search-word{
          animation: bounceIn 0.15s;
        }
      }
    }
    .center{
      width: 100%;
    }
    .top{
      width: 100%;
      top: 0;
      height: 80px;
      transform: translate(0,0);
    }
    .top-nav-virtual{
      position: absolute;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      left:65%;
      width: 10%;
      overflow: hidden;
      background-color: rgba(58,136,248,1);
      transition: all 0.5s;
      transition-delay:0.5s;
      color:#fff;
      span:first-child{
        margin-left: 20px;
      }
      span:nth-child(2){
        margin-right: 20px;
      }
    }
    .top-nav{
      /*height: 80px;
      left:0;
      width: 100%;
      background-color: rgb(58,136,248);*/
      animation: topNavStretch 0.5s;
      animation-delay: 0.5s;
      animation-fill-mode:forwards;
    }
  }
</style>
