<template>
  <v-app>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">vuetify 学习</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>angular</v-btn>
        <v-btn flat>react</v-btn>
        <v-btn flat>vue</v-btn>
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
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
