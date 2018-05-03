<template>
  <div id="app">
    <img src="./assets/logo.svg">
    <div class="container">
      <Tabs>
        <tab name="Enter Code" :selected="true">
          
          <div class="field has-addons has-addons-centered">
            <div class="control has-icons-right">
              <input class="input is-large" type="text" placeholder="Enter printer code">
              <span class="icon is-large is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
            <div class="control">
              <a class="button is-info is-large">
                Print
              </a>
            </div>  
          </div>

        </tab>
        <tab name="Select Printer">
          <h1>Choose a printer here</h1>
        </tab>  
      </Tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tabs from "./components/Tabs.vue";
import Tab from "./components/Tab.vue";

@Component({
  components: {
    Tabs,
    Tab
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "../node_modules/bulma/css/bulma.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
