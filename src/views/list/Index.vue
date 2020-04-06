<template>
    <div>
        <ul>
            <li v-for="(item, index) in lists" :key="index">
                {{item.name}}
            </li>
        </ul>
        <button @click="turnToHome()">to home</button>
    </div>
</template>

<script>
import store from '@/store';
export default {
    name: 'index-list',
    store,
    data: () => {
        return {

        }
    },
    methods: {
        turnToHome() {
            this.$router.push('/home');
        }
    },
    computed: {
        lists() {
            return store.state.lists;
        }
    }
}
</script>

<style>

</style>