<template>
  <div>
      <h2>名字: {{ prentice }}</h2>
      <!-- <h3>标语: {{ slogan }}</h3> -->
  </div>
</template>
<script>
export default{

  data(){
    return{
      tribe: '暗翼',
      age: 15
    }
  },
  // 数组方法
  // props:['prentice', 'slogan'],
  // 对象, 确定传参类型
  // props: {
  //   prentice: String,
  // },
  props: {
    prentice: {
      type: String,
       required: true,
    //  default: "默认值",
      // validator: function (value) {
      //   console.log(value,'value');
      //   // 这个值必须匹配下列字符串中的一个
      //   return ['success', 'warning', 'danger'].includes(value)
      // }
    }
  },
  methods: {
    handlerGetage(value) {
      console.log(value, '父组件传递过来的值');
      console.log(this.age);
    }
  }
}
</script>
<style>
</style>