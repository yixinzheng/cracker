<template>
  <div>
    <div class="index-top">
      <div class="index-name">CRACKER</div>
      <img class="index-oval" src="@/assets/images/oval.png"/>
    </div>
    <div class="sort-container">
      <div class="sort-con active">
        <div class="sort-cont">名词</div>
        <div class="sort-badge"></div>
      </div>
      <div class="sort-con">
        <div class="sort-cont">动词</div>
        <div class="sort-badge"></div>
      </div>
      <div class="sort-con">
        <div class="sort-cont">形容词</div>
        <div class="sort-badge"></div>
      </div>
      <div class="sort-con">
        <div class="sort-cont">副词</div>
        <div class="sort-badge"></div>
      </div>
      <div class="sort-con">
        <div class="sort-cont">名词/动词</div>
        <div class="sort-badge"></div>
      </div>
      <div class="sort-con">
        <div class="sort-cont">副词</div>
        <div class="sort-badge"></div>
      </div>
      <div class="sort-con">
        <div class="sort-cont">名词/动词</div>
        <div class="sort-badge"></div>
      </div>
    </div>
    <div class="index-con">
      <div class="index-scene">
        <div class="index-sceneCon">
          <div class="index-sceneNames">
            <div class="index-sceneName">场景名称</div>
            <img class="index-sceneTotal" src="@/assets/images/total.png"/>
          </div>
          <div class="index-sceneCount">104个单词</div>
          <div class="index-sceneProgressBox">
            <div class="index-sceneProgress" style="width: 30%;"></div>
          </div>
        </div>
      </div>
      <div class="index-scene">
        <div class="index-sceneCon">
          <div class="index-sceneNames">
            <div class="index-sceneName">场景名称</div>
            <img class="index-sceneTotal" src="@/assets/images/total.png"/>
          </div>
          <div class="index-sceneCount">104个单词</div>
          <div class="index-sceneProgressBox">
            <div class="index-sceneProgress" style="width: 30%;"></div>
          </div>
        </div>
      </div>
      <div class="index-scene">
        <div class="index-sceneCon">
          <div class="index-sceneNames">
            <div class="index-sceneName">场景名称</div>
            <img class="index-sceneTotal" src="@/assets/images/total.png"/>
          </div>
          <div class="index-sceneCount">104个单词</div>
          <div class="index-sceneProgressBox">
            <div class="index-sceneProgress" style="width: 30%;"></div>
          </div>
        </div>
      </div>
      <div class="index-scene">
        <div class="index-sceneCon">
          <div class="index-sceneNames">
            <div class="index-sceneName">场景名称</div>
            <img class="index-sceneTotal" src="@/assets/images/total.png"/>
          </div>
          <div class="index-sceneCount">104个单词</div>
          <div class="index-sceneProgressBox">
            <div class="index-sceneProgress" style="width: 30%;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    directives: {
      drag: {
        // 指令的定义
        inserted (el) {
          el.onmousedown = function (e) {
            e.stopPropagation()
            let disx = e.pageX - el.offsetLeft
            // let disy = e.pageY - el.offsetTop
            document.onmousemove = function (e) {
              e.preventDefault()
              el.style.left = e.pageX - disx + 'px'
            }
            document.onmouseup = function () {
              const left = parseInt(el.style.left)
              console.log(left)
              if (left < -200) {
                this.direct = 1
              }
              if (left > -200 && left < 0) {
                this.direct = 2
              }
              if (left > 0 && left < 200) {
                this.direct = 3
              }
              if (left > 200) {
                this.direct = 4
              }
              document.onmousemove = document.onmouseup = null
              el.style.left = 0
            }
          }
        }
      }
    }
  }
</script>
