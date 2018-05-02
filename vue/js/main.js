var app0 = new Vue({
  el: '#app-0',
  data: {
    name: "A",
    age:'18',
    sex:'男',
  }
});

var app1 = new Vue({
  el: '#app-1',
  data: {
    // foodList: ['葱','姜','蒜'],
    foodList: [
      {
        name: '葱',
        price: '10',
        discount: .8,
      },
      {
        name: '姜',
        price: '20',
        discount: .5,
      },
      {
        name: '蒜',
        price: '30',
      }
    ],
  }
});

var app2 = new Vue ({
  el: "#app-2",
  data: {
    url: 'http://baidu.com',
    img: 'https://dummyimage.com/100x100/ffcc00/ffffff',
    klass: 'btn btn-defualt',
    isActive: true,
  }
});

var app3 = new Vue ({
  el: '#app-3',
  methods: {
    onClick: function() {
      console.log('被点到了嘤嘤嘤！');
    },
    onEnter: function() {
      console.log('mouse enter');
    },
    onOut: function() {
      console.log('mouse leave');
    },
    onSubmit: function(e) {
      e.preventDefault();
      console.log('submitted');
    }
  }
});

var app4 = new Vue ({
  el: '#app-4',
  data: {
    name:'whh',
  }
});

var app5 = new Vue ({
  el: '#app-5',
  data: {
    sex: ['female'],
    article: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    form: 2,
    dest: [],
  }
});

var app6 = new Vue ({
  el: '#app-6',
  data: {
    role:'super_admin',
  }
})

var app7 = new Vue ({
  el: '#app-7',
  data: {
    math: 90,
    physics: 90,
    english: 30,
  },
  computed: {
    sum: function () {
      return this.math + this.english + this.english;
    },
    average: function() {
      return Math.round(this.sum / 3);
    }
  }
});
// Vue.component('alert', { //组件
//   template: '<button @click="on_click">弹弹弹</button>',
//   methods: {
//     on_click: function () {
//       alert('Yo.');
//     }
//   }
// });
// //先写组件，后写域
// var app8 = new Vue ({//域
//   el: '#app-8',
// });

var Alert = {//放入变量
  template: '<button @click="on_click">弹弹弹</button>',
  methods: {
    on_click: function () {
      alert('Yo.');
    }
  }
};

new Vue ({//封装components
  el: '#seg1',
  components: {
    alert:Alert,//传入变量
  }
})

//配置组件之点赞按钮实现
Vue.component('like', {
  template: '#like-component-tpl',
  data: function () {
    return {
      like_count: 10,
      liked: false,
    }
  },
  methods: {
    toggle_like: function () {
      if (!this.liked)
        this.like_count++;
      else
        this.like_count--;

      this.liked = !this.liked;
    }
  }
})

new Vue({
  el: '#applike',
});


//组件通信之父子通信
Vue.component('alert',{
  template:'<button @click="on_click()">弹弹弹</button>',
  methods: {
    on_click: function() {
      alert('Yo.');
    }
  }
});

new Vue({
  el:'#app-9',
})

//组件通信之子父通信
Vue.component('balance', {//父组件
  template: `
  <div>
    <show @show-balance="show_balance"></show>
    <div v-if="show">
    您的余额：￥98 元
    </div>
  </div>
  `,
  methods: {
    show_balance: function(data) {
      this.show = true;
      console.log('data:', data);
    }
  },
  data: function() {//在data里传值一定要用函数包裹起来
    return {
      show: false,//v-if=“show”这里调用了show的值
    }
  }
});
Vue.component('show', {
  template: '<button @click="on_click()">显示余额</button>',
  methods: {
    on_click() {
      this.$emit('show-balance', {a: 1, b: 2});//$emit 父组件监听子组件
    }
  }
});

new Vue({
  el: '#app-10',
})

//平行组件通信
Vue.component('huahua', {
  template:`<div>我说：<input v-model='i_said'/></div>`,
})
  data: function() {
    return {
      i_said:'',
    }
  }
Vue.component('shuandan', {
  template；`<div>花花说： {{huahua_said}}</div>`,
  data: function() { //函数定义
    return {
      huahua_said: '',
    };
  },
  mounted: function () {
      var me = this;//将this缓存在me里
      Event.$on('huahua-said-something', function(data){//this指代的问题
      console.log('data:',data);
      console.log('this:',this);
      this.huahua_said=data; //此时this指代的是event调度器 而非 component
    });
  }
})

new Vue({
  el:'#app11',
})

//过滤器
Vue.filter('currency',function(val){
  val = val || 0;
  return val + 'yuan';
})

new Vue({
  el:'#app12'
  data:{
    price: 10;
  }
})
