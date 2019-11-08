<template>
  <div>
    <div class="scene-dots">
      <div class="scene-dot"></div>
      <div class="scene-dot"></div>
    </div>
    <div class="scene-box">
      <div class="scene-con">
        <div class="scene-back"></div>
        <div class="scene-cont" v-drag>
          <div class="scene-yes">美味的</div>
          <div class="scene-no">一个随机错误释义</div>
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
    name: 'word'
  }
</script>
