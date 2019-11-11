<template>
  <div>
    <div class="index-top">
      <div class="index-name">CRACKER</div>
      <img class="index-oval" src="@/assets/images/oval.png"/>
    </div>
    <div class="sort-container">
      <div class="sort-con active" v-for="item in sorts" :key="item.bookType">
        <div class="sort-cont">{{item.title}}</div>
        <div class="sort-badge"></div>
      </div>
    </div>
    <div class="index-con">
      <div class="index-scene" v-for="item in books" :key="item.bookType">
        <div class="index-sceneCon">
          <div class="index-sceneNames">
            <div class="index-sceneName">{{item.bookName}}</div>
            <img class="index-sceneTotal" src="@/assets/images/total.png" v-if="item.fullLevelQuantity >= item.total"/>
          </div>
          <div class="index-sceneCount" v-if="item.fullLevelQuantity >= item.total">{{item.total}}个单词</div>
          <div class="index-sceneCount" v-else>{{item.fullLevelQuantity}}/{{item.total}}个单词</div>
          <div class="index-sceneProgressBox">
            <div class="index-sceneProgress" :style="{width: item.percent}"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Mock from 'mockjs'
  // import { homeBookTypeApi } from '@/api'

  export default {
    name: 'home',
    data () {
      return {
        sorts: [],
        books: []
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        const sorts = Mock.mock({
          'list|5': [{
            'bookType|+1': 1,
            'title|1': ['名词', '动词', '形容词', '副词']
          }]
        })
        this.sorts = sorts.list
        const books = Mock.mock({
          'list|4': [{
            'bookId|+1': 1,
            'bookName|1': '@cname',
            'total': 100,
            'fullLevelQuantity|1': [60, 80, 100],
            'percent': '40%',
            'lockStatus|1': ['locked', 'unlocked']
          }]
        })
        this.books = books.list
      }
    }
  }
</script>
