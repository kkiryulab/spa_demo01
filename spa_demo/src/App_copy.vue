<template>
    <div>
        <p>
            {{msg}}
        </p>
        <input type="text" v-model="msg">
        <button @click="clear()">Clear</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg: 'Hello World!'
        }
    },
    methods: {
        clear(){
            this.msg = ''
        }
    }
}
</script>