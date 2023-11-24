const denomination = {
    data() {
        return{
            denominations: '均衡教派',
            skill: '[隐身,分身,电耗子]',
            msg: '我是小小换入'
        }
    },
    beforeCreate() {
        console.log('beforeCreate----mixins')
    },
    created() {
        console.log('created----mixins');
    },
    beforeMount() {
        console.log('beforeMount----mixins')
    },
    mounted() {
        console.log('mounted----mixins')
    },
    methods: {
        handlerGetRef() {
            console.log(this.skill);
        },
    }
}


const mysss = {
    data() {
        return{
            denominations: '均衡教派sssss',
            skillssss: '[隐身,分身,电耗子]ssssss',
            msgssss: '我是小小换入sssssss'
        }
    },
    beforeCreate() {
        console.log('beforeCreate----mixins')
    },
    created() {
        console.log('created----mixins');
    },
    beforeMount() {
        console.log('beforeMount----mixins')
    },
    mounted() {
        console.log('mounted----mixins')
    },
    methods: {
        handlerGetRef() {
            console.log(this.skill);
        },
    }
}

export {mysss,denomination }