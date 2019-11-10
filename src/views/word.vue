<template>
  <div>
    <div class="scene-dots">
      <div class="scene-dot"></div>
      <div class="scene-dot"></div>
      <div class="scene-dot"></div>
      <div class="scene-dot"></div>
      <div class="scene-dot"></div>
      <div class="scene-dot"></div>
      <div class="scene-dot"></div>
      <div class="scene-dot"></div>
      <div class="scene-dot"></div>
      <div class="scene-dot"></div>
      <div class="scene-dot"></div>
      <div class="scene-dot"></div>
    </div>
    <div class="scene-box">
      <div class="scene-con">
        <div class="scene-back" ref="back"></div>
        <div class="scene-cont" ref="cont" @touchstart.prevent="touchStart" @touchmove.prevent="touchMove"
             @touchend="touchEnd">
          <div class="scene-yes" v-if="isShow && direct ==='left'">美味的</div>
          <div class="scene-no" v-if="isShow && direct ==='right'">一个随机错误释义</div>
          <div class="scene-word">delicious</div>
          <div class="scene-en">[dɪ'lɪʃəs]</div>
        </div>
      </div>
    </div>
    <div class="scene-squares">
      <div class="scene-square active"></div>
      <div class="scene-square"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'word',
    data () {
      return {
        touch: {},
        percent: undefined,
        direct: undefined,
        random: 0,
        isShow: false
      }
    },
    methods: {
      touchStart (e) {
        const touch = e.touches[0]
        this.touch.startX = touch.pageX
        this.touch.startY = touch.pageY
      },
      touchMove (e) {
        const touch = e.touches[0]
        const deltaX = touch.pageX - this.touch.startX
        this.isShow = true
        this.direct = deltaX > 0 ? 'right' : 'left'
        this.percent = Math.abs(deltaX / window.innerWidth)
        this.$refs.cont.style['transform'] = `translate3d(${deltaX}px,0,0)`
        this.$refs.cont.style['transitionDuration'] = 10
      },
      touchEnd () {
        this.isShow = false
        if (this.percent < 0.3) {
          this.$refs.cont.style['transform'] = `translate3d(0,0,0)`
          this.$refs.cont.style['transitionDuration'] = 10
        } else {
          // 设置旋转
          let random = this.random === 0 ? 1 : 0
          const deg = random * 360
          this.random = this.random === 0 ? 1 : 0
          this.$refs.cont.style['transform'] = `translate3d(-1000px,0,0)`
          this.$refs.back.style['transform'] = `rotateY(${deg}deg)`
          this.$refs.cont.style['transitionDuration'] = 10
          this.$refs.back.style['transitionDuration'] = 10
          setTimeout(() => {
            this.$refs.cont.style['transform'] = `translate3d(0,0,0)`
            this.$refs.cont.style['transitionDuration'] = 10
          }, 500)
        }
      }
    }
  }
</script>
