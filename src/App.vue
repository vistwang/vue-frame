<template>
  <v-app>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
        <span>Vue</span>
        <span class="font-weight-light">工程化 学习</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat><router-link to="/home">home</router-link></v-btn>
        <v-btn flat><router-link to="/user">user</router-link></v-btn>
        <v-btn flat><router-link to="/home/list">list</router-link></v-btn>
        <v-btn flat> <router-link to="/login">login</router-link></v-btn>
        <v-btn flat> <router-link to="/add">add</router-link></v-btn>
        </v-toolbar-items>
        <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-btn
        flat
        href="#"
      >
        <span class="mr-2">登陆</span>
      </v-btn>
    </v-toolbar>
    <v-content>
        <router-view></router-view>
        <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import router from './Router'

export default {
  name: 'App',
  router,
  components: {
    HelloWorld
  },
  data () {
    return {
      
    }
  },
  methods: {
    add() {
        console.log(1);
    }
  }
}
</script>
