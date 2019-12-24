const https = require('../../libs/https.js')

Component({
  lifetimes: {
    created: function() {

    },
    attached: function() {

    },
    detached: function() {

    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar == 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }

      this.initData()
    }
  },
  data: {
    data: {
      detail: ""
    },
    swiper: {
      item: [{
          type: 'slide',
          thumbnail: '../../images/hy-swiper-1.jpg',
          title: '界面展示'
        },
        {
          type: 'slide',
          thumbnail: '../../images/hy-swiper-2.jpg',
          title: '角色介绍'
        },
        {
          type: 'slide',
          thumbnail: '../../images/hy-swiper-3.jpg',
          title: '火影忍者ol手游宣传图'
        },
        {
          type: 'slide',
          thumbnail: '../../images/hy-swiper-4.jpg',
          title: '地图展示'
        },
        {
          type: 'slide',
          thumbnail: '../../images/hy-swiper-5.jpg',
          title: '全新火影的你来战'
        }
      ]
    },
    index_list: [{
        id: 1,
        iconpath: "../../images/shouye-HL.png",
        name: "demo1"
      },
      {
        id: 2,
        iconpath: "../../images/shouye-HL.png",
        name: "demo2"
      },
      {
        id: 3,
        iconpath: "../../images/shouye-HL.png",
        name: "demo3"
      },
      {
        id: 4,
        iconpath: "../../images/shouye-HL.png",
        name: "demo4"
      }
    ]
  },
  methods: {
    initData: function() {
      console.log('init log')
      let mDateTime = Date.parse(new Date("2018-11-01")).toString().substr(0, 10)
      console.log(mDateTime)
      let params = {
        key: https.FunKey,
        time: mDateTime,
        sort: 'asc'
      }
      https.TestApi(params)
        .then(res => {
            console.log(res.result.data)
            res.result.data.forEach(element => {
              element.detail = "Y总媒体"
              element.commentsall = 88
            })
            res.result.data[0].iconurl = '../../images/sasiki_fire.gif'
            res.result.data[1].iconurl = '../../images/naruto_skill.gif'
            res.result.data[2].iconurl = '../../images/character_skill.gif'
            this.setData({
              data: res.result.data
            })
          },
          error => console.log(error))
        .catch(e => console.log(e))
    },
    navtoArticle(event) {
      console.log(event)
      
    }
  }
})