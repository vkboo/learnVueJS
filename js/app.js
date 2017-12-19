/**
 * 声明式渲染
 * v- 开头的叫做指令
 * v-bind后面接上HTML自带的属性，双引号中后依然是一个变量，在data中进行声明
 */
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        test: 'app2',
        hover: 'hh'
    }
})

/**
 * 条件语句 v-if后面的变量可以是非Bool值，JS自动处理成bool值类型
 * 循环语句 v-for="a in b" b是JS中data定义的变量，是一个数组，a只是在模版中引用的item
 */
var app3 = new Vue({
    el: '#app3',
    data: {
        seen: 0
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        does: [
            { text: 'AAA' },
            { text: 'BBB' },
            { text: 'CCC' }
        ]
    }
})

/**
 * Vue中的事件监听
 * v-on:click="methodName" click是DOM原生触发事件（不要'on'），
 * 后面的方法名在vue的methods中定义
 */
var app5 = new Vue({
    el: '#app5',
    data: {
        count: 0
    },
    methods: {
        counter: function () {
            this.count++;
        }
    }
})

/**
 * 表单元素的绑定
 * v-model
 */
var app6 = new Vue({
    el: '#app6',
    data: {
        msg: 'Hello'
    }
})

/**
 * DOM中的值不随数据改变而改变
 * v-once
 */

var app7 = new Vue({
    el: '#app7',
    data: {
        msg: 'HEEE'
    }
})

/**
 * 插入原始HTML
 * v-html="varHTML"
 */
var app8 = new Vue({
    el: '#app8',
    data: {
        htm: '<s>THIS IS HTML</s>'
    }
})

/**
 * 计算属性computed
 * 是一个对象，key是需要绑定的变量名，
 * 通过在函数中return一个值来得到变量的值
 */
var app9 = new Vue({
    el: '#app9',
    data: {
        msg: 'So High'
    },
    computed: {
        ccc: function () {
            return this.msg + ' to me'
        }
    }
})

/**
 * 方法methods
 * 与computed不同的是，methods在页面中用到时每次都需要去执行一遍代码，
 * 而computed只要函数中依赖的变量没有改变，则会用到之前的缓存值而非重新计算，性能更高。
 */

var app10 = new Vue({
    el: '#app10',
    data: {
        msg: 'AAA'
    },
    methods: {
        did: function () {
            return +new Date();
        }
    },
    computed: {
        didc: function () {
            return +new Date();
        }
    }
})

/**
 * 侦听属性
 * watch
 * key是需要监听变化的变量，后面是要执行的操作(表单验证适用)
 */

var app11 = new Vue({
    el: '#app11',
    data: {
        msg: '1',
        show: '22'
    },
    watch: {
        msg: function (val) {
            this.show = `这里变成了${val}`
        }
    }
})

/**
 * 计算属性的Setter与getter
 */

var app12 = new Vue({
    el: '#app12',
    data: {
        msg: 'WWW'
    },
    computed: {
        daa: {
            set: function (val) {
                this.msg = 'changed:' + val;
            },
            get: function () {
                return this.msg
            }
        }
    }
})

// 样式相关

// 对象用法：一般用于class的动态切换
/**
 * :class内直接写全对象
 */
var appA = new Vue({
    el: '#appA',
    data: {
        isActive: true,
        hasError: true
    }
})

/**
 * :class内直接写对象名称
 */
var appB = new Vue({
    el: '#appB',
    data: {
        clObject: {
            className: true,
            'is-Error': true
        }
    }
})

// 对象的数组用法

var appC = new Vue({
    el: '#appC',
    data: {
        a: 'className',
        b: 'is-Error'
    }
})

var appD = new Vue({
    el: '#appD',
    data: {
        obj: {
            isSuccess: true
        },
        b: 'is-Error',
        isOther: true
    }
})

// 内联样式
// 对象形式

/**
 * HTML中指定了属性名，只需要属性值
 */
var appE = new Vue({
    el: '#appE',
    data: {
        colorset: 'red'
    }
})

/**
 * 直接赋一个对象
 */

var appF = new Vue({
    el: '#appF',
    data: {
        styObj: {
            color: '#cc0000'
        }
    }
})

// 数组形式
/**
 * 数组元素也是对象
 */
var appG = new Vue({
    el: '#appG',
    data: {
        a: {
            color: 'gray'
        },
        b: {
            background: 'pink'
        }
    }
})

/******************条件渲染************************/
/**
 * 条件渲染
 * 1.v-if后支持一个bool值，只有v-if和v-else两种情况
 * 2.v-if后支持一个表达式，除上面两种之外还支持v-else-if
 */
var appH = new Vue({
    el: '#appH',
    data: {
        ok: 2
    }
})

/**
 * Vue有一个key的属性，若不指定，底层将会复用DOM
 */

/**
 * v-show="bool" 相当于visibility ，
 * v-if则相当于display
 * v-if更加耗能
 */

/**
 * for-in 遍历数组，第二个可选参数是索引
 */
var appI = new Vue({
    el: '#appI',
    data: {
        items: ['A', 'B', 'C'],
        va: {
            cc: '!@#'
        }
    }
})

/**
 * for-in 可以遍历对象，第一个参数是value，第二个可选参数是key
 * 第三个可选参数是index
 */



/**
 * todolist小应用
 */

var appTodo = new Vue({
    el: '#app_todo',
    data: {
        todos: [],
        thing: ''
    },
    methods: {
        addList: function () {
            this.todos.push({
                text: this.thing
            })
            this.thing = '';
        },
        close: function () {
            this.todos.shift(); // ???
        }
    }
})

/**
 * 事件
 * v-on
 * 1. HTML中写入表达式
 * 2. HTML中写入方法名(默认有个event参数)
 * 3. HTML中写入方法名并传参（传入$event获取原始DOM事件）
 */


/**
 * 事件修饰符
 * .stop 等同于 event.stopPropagation
 * .prevent 等同于 event.preventDefault （阻止表单跳转）
 * .capture 添加事件监听器时使用事件捕获模式 即内部元素触发的事件先在此处处理，然后才交由内部元素自身进行处理
 * .self 只有event.target是当前绑定元素时才触发
 * .once 绑定的事件将只会触发一次jjj
 */

/**
 * 按键修饰符（针对键盘事件）
 * keyCode或别名
 * .enter
 * .tab
 * .delete
 * .esc
 * .space
 * .up
 * .down
 * .left
 * .right
 */

/**
 * 系统修饰符（针对键盘或鼠标事件，仅在以下按钮按下时才执行方法）
 * .ctrl
 * .meta
 * .shift
 * .alt
 */

// 可以在指定的事件中直apo赤岭矿井 接写表达式（主流写法还是写事件方法名称，写名称时有第一个参数是event）
var appEvent = new Vue({
    el: '#appEvent',
    data: {
        counter: 0
    },
    methods: {
        test: function (str, event) {
            console.log(str, event)
        },
        prev: function () {
            console.log('XXX')
        }
    }
})

// 表单相关

/**
 * v-model
 * 需要注意v-model的值必须在data中进行注册绑定,可以指定默认值
 * 1.绑定普通文本值
 * 2.checkbox 绑定值是勾选的checkbox组成的数组
 * 3.radio 绑定值是勾选的value值
 * 4.select
 */
var appForm = new Vue({
    el: '#appForm',
    data: {
        checked: true,
        txt: '',
        options: [],
        radioM: '',
        selM: '2'
    }
})

/**
 * 修饰符
 * .lazy 在change事件时触发数据同步
 * .number 绑定值总是返回number类型
 * .trim 自动去除首尾空格
 */

/**
 * 组件
 * 1.全局注册
 * 2.局部注册
 */
/**
 * 1.模版的各属性与vue实例基本一样，不同的是，data必须是一个函数，因为template需要做到复用，
 * 则每一个模版实例的数据必须相互独立
 */

Vue.component('my-component', {
    template: '<h1>First Component</h1>'
})

var myTemp = {
    template: '<h1>模版局部注册</h1>'
}

var zCounter = {
    template: '<button @click="counter++">{{counter}}</button>',
    data: function () {
        return {
            counter: 0
        }
    }
}

/**
* 父子组件间数据的传递
* 1.子组件 --> 父组件 传递事件
* 2.父组件 --> 子组件 prop
*/

/**
 * PROPS
 * 1.在定义模版中，props是一个数组，声明来自父组件中的传递过来的数据；
 * 2.可以在`template`中用{{}}的形式引用props中定义的数据；
 * 3.在父组件中，可以直接在模版标签上指定props名(不用'v-bind'前缀)进行数据的赋值(静态数据)；
 * 4.若要传递动态数据即变量，则要`v-bind:`的前缀
 * 5.父组件中直接使用v-bind="obj"，obj是一个对象，在childTemplate的props中需指定obj需要的key
 * 6.注意组件模版标签有无v-bind的区别，如v-bind:param="1"与param="1",由于v-bind将后面引号包含部分当成JavaScript代码，
 * 所以前者的一是表达式，而后者是字符串
 * 7.props在template中不应该再作修改，如要使用，有两种方式:(1)赋值给当前template的data;(2)computed
 * 8.给props定义成一个对象以加以验证，如： props: {propA: 'number',propB: ['number','string']}
 * 9.父组件传过来的重复属性(如type等)大多都会覆盖子组件中定义的，但style\class将会合并
 */

var myChild = {
    props: ['msg'],
    template: '<p>{{msg}}</p>'
}

var todoChild = {
    props: ['thing', 'date'],
    data: function () {
        return {
            datee: this.date * 2
        }
    },
    template: `<div>{{thing}}{{this.datee}}</div>`
}


/**
 * 自定义事件
 * 1.只有原生HTML标签才可以通过一般的方式绑定DOM事件，组件可以自己定义事件；
 * 2.在使用template的自定义事件时，@tempEvent="proMethod"的方式，tempEvent为组件事件名，通过在组件的函数内$emit('tempEvent') trggier
 * 3.组件想绑定原生DOM事件，在标签上加上.native修饰符
 */

Vue.component('number-counter', {
    data: function () {
        return {
            counter: 0
        }
    },
    template: '<button @click="doAdd">{{this.counter}}</button>',
    methods: {
        doAdd: function () {
            this.counter++;
            this.$emit('addchildcounter');
        }
    }
})

var appTemp = new Vue({
    el: '#appTemp',
    components: {
        'abc-temp': myTemp,
        'z-counter': zCounter,
        'my-child': myChild,
        'todo-child': todoChild
    },
    data: {
        propData: '动态数据',
        todo: {
            thing: '写DSP改版',
            date: 1
        },
        total: 0
    },
    methods: {
        totalEvent: function () {
            this.total++
        },
        nativeEvent: function () {
            console.log('组件的原生事件')
        }
    }
})

/**
 * 自定义组件的v-model绑定
 * 1.接收一个value的prop
 * 2.在有新值触发input事件时，将新值作为参数
 * 3.通过组件的$emit->input事件带出值
 * #注意v-model后面的变量值与childTemplate没有关系，只需在parentTemplate的data中定义
 */
Vue.component('my-input', {
    template: '<div><input type="text"\
    ref="input"\
    :value="value"\
    @input="formatRMB($event.target.value)" /></div>',
    props: ['value'],
    methods: {
        formatRMB: function (val) {
            // var r;
            // if (val.indexOf('￥') === -1) {
            //     r = '￥' + val;
            // } else {
            //     r = val;
            // }
            r = val;
            this.$emit('input', '$' + r)
        }
    }
})

// Vue.component('currency-input', {
//     template: `<div>
//     <input type="text" :value="value" @input="formatInput($event.target.value)" />
//     </div>`,
//     prop: ['value'],
//     methods: {
//         formatInput: function (value) {
//             var formatVal = Number(value);

//             this.$emit('input', formatVal)
//         }
//     }
// })

var appModel = new Vue({
    el: '#appModel',
    data: {
        rmb: '',
        moval: ''
    }
})

/**
 * 组件间的通信
 * 创建一个空的Vue实例
 */
var emptyVm = new Vue();
Vue.component('conponent-a', {
    template: '<button @click="increteB">{{a}}</button>',
    data: function () {
        return {
            a: 0
        }
    },
    methods: {
        increteB: function () {
            emptyVm.$emit('increteBB');
        }
    },
    mounted: function () {
        emptyVm.$on('increteAA', function () {
            this.a++
        }.bind(this))
    }
})
Vue.component('conponent-b', {
    template: '<button @click="increteA">{{b}}</button>',
    data: function () {
        return {
            b: 0
        }
    },
    methods: {
        increteA: function () {
            emptyVm.$emit('increteAA');
        }
    },
    mounted: function () {
        emptyVm.$on('increteBB', function () {
            console.log('AAA')
            this.b++
        }.bind(this))
    }
})
var appMsg = new Vue({
    el: '#appMsg'
})

/**
 * 插槽Slot
 * 1.默认插槽（单个插槽）
 * 2.具名插槽:<slot>的name属性与父组件中的slot属性一一对应
 * *利用component标签的is属性可以动态或静态的绑定组件
 */

Vue.component('slot-component', {
    template: '<div><h1>模版标题</h1></div>'
})
Vue.component('app-layout', {
    template: `<div>
                    <header>
                        <slot name="header"></slot>
                    </header>
                    <slot name="main"></slot>
                    <footer>
                        <slot name="footer"></slot>
                    </footer>
                </div>`
})
var appSlot = new Vue({
    el: '#appSlot',
    data: {
        con: 'slot-component' // 可以是想这样全局声明的字符串形式，也可以是声明的局部变量名形式的组件
    },
    methods: {
        findDo: function () {
            console.log(this.$refs.refname) // 是一个VueConponent或DOM对象
        }
    }
})

/**
 * 过渡与动画
 * 1.transition标签的name指定动画css的前缀（如v-）
 * 2.css文件中有v-enter,v-enter-active,v-leave,v-leave-active,v-leave-to 6种状态；
 * 3.还可以自定义类名,首先指定transition的name属性值为custom-classes-transition(结合Animate.css很有用)
 * enter-class
 * enter-active-class
 * enter-to-class (2.1.8+)
 * leave-class
 * leave-active-class
 * leave-to-class (2.1.8+)
 * 也可以使用JavaScript钩子使用js的过渡和动画效果(如结合Velocity.js或$.animate)
 * <transition
 * v-on:before-enter="beforeEnter"
 * v-on:enter="enter"
 * v-on:after-enter="afterEnter"
 * v-on:enter-cancelled="enterCancelled"
 * v-on:before-leave="beforeLeave"
 * v-on:leave="leave"
 * v-on:after-leave="afterLeave"
 * v-on:leave-cancelled="leaveCancelled"
 * 在methods中定义这些钩子
 * 
 * 给标签加上appear属性，表示元素初识进入的过渡动画
 * 
 * 过渡模式(标签的mode属性)
 * 1.in-out 新元素过度完了再进行老元素的过渡
 * 2.out-in 老元素过渡完了再进行新元素的过渡
 * 
 * 多个组件的过渡
 * <transition>下<conponet :is="view">
 * 
 * 列表过渡
 * <transition-group> 标签子级默认为<span>，如需要其他标签，则区域tag属性手动指定
 */

var radioEl = {
    props: ['select', 'name'],
    template: `<div>
                    <input :name="select" type="radio"><p>{{name}}</p>
               </div>`
}


var appAnimate = new Vue({
    el: '#appAnimate',
    data: {
        show: true,
        view: 'ca',
        params: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    components: {
        'radio-el': radioEl,
        'ca': {
            template: '<h1>123</h1>'
        },
        'cb': {
            template: '<h1>456</h1>'
        }
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.transformOrigin = 'left'
        },
        enter: function (el, done) {
            Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
            Velocity(el, { fontSize: '1em' }, { complete: done })
        },
        leave: function (el, done) {
            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
            Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, { complete: done })
        },
        getNum: function () {
            return Math.floor(Math.random() * 9 + 1)
        },
        add: function () {
            this.params.push(this.getNum())
        },
        remove: function () {
            this.params.splice(this.getNum(), 1)
        }
    }
})

/**
 * 自定义指令
 * 1.全局注册
 * 2.组件注册
 */
// Vue.directive('focus', {
//     // 钩子，当元素被插入DOM中
//     inserted: function (el) {
//         el.focus()
//     }
// })


/**
 * 混合mixins
 * 1.通过的钩子函数将会合并成一个数组，混合对象的钩子先被调用
 * 2.对位对象的选项,如methods, components 和 directives,自身组件定义的值将会覆盖混合的
 */

var myMixins = {
    data: {
        from: '来自MIXINS'
    }
}

var appMixins = new Vue({
    el: '#appMixins',
    data: {
        froms: '来自MIINS'
    },
    mixins: [myMixins],
    directives: {
        focus: {
            inserted: function(el) {
                el.focus()
            }
        }
    }
})




