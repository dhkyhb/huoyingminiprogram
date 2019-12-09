Component({
  pageLifetimes:{
    show(){
      if (typeof this.getTabBar == 'function' && this.getTabBar()){
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
  data: {
    list: [{
        id: "item1",
        name: "item1",
        iconPath: "",
      },
      {
        id: "item2",
        name: "item2",
        iconPath: "",
      },
      {
        id: "item3",
        name: "item3",
        iconPath: "",
      },
    ]
  },
})