<template>
    <div>
        <p>
            ここはHOMEです。
        </p>
        <h3>API呼び出し</h3>
        <img v-bind:src='img'/>
        <button @click="useAPI()">CALL API</button>
        {{animal}}
        <button @click="change()">CHANGE</button>
    </div>
</template>

<script>
import * as axios from 'axios';

export default {
    data (){
        return {
            img:'api_img'
        }
    },
    computed: {
        animal() {
            return this.$store.state.animal
        }
    },
    methods: {
        change() {
            this.$store.commit('setAnimal','cat')
        },
        async useAPI(){
            await axios.get('https://uweba49r70.execute-api.ap-northeast-1.amazonaws.com/dev')
                .then(response => {
                    this.img =response.data;
                    console.log(response.staus);
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    }
}
</script>
