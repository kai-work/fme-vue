<template>
  <div>
    <div class="tabs">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index" :class="{ 'is-active': tab.isActive }">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Tab from "./components/Tab.vue";
import { inject } from "../ioc/decorators";
import { IApiService } from "../common/i.api.service";
import { ApiService } from "../common/api.service";

@Component({
  providers: [ApiService]
})
export default class Tabs extends Vue {
  @inject(ApiService) private readonly _apiService!: IApiService;

  tabs = Array<any>();

  mounted() {
    this.tabs = this.$children;
  }

  selectTab(selectedTab: any) {
    for (let tab of this.tabs) {
      tab.isActive = tab.name == selectedTab.name;
    }
  }

  async listObjects() {
    console.log(this._apiService.identifier);
    const obs = await this._apiService.list();
    console.log(obs);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
