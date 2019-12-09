Component({
  data: {
    selected: 1,
    color: "#7A7E83",
    selectedColor: "#13227a",
    list: [{
      pagePath: "/pages/tabbar/index",
      text: "首页",
      iconPath: "/images/shouye-HL.png",
      selectedIconPath: "/images/shouye.png"
    },
    {
      pagePath: "/pages/tabbar/aboutme",
      text: "关于",
      iconPath: "/images/guanyuwo-HL.png",
      selectedIconPath: "/images/guanyuwo.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e){
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})