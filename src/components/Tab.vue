<template>
  <div v-show="isActive">
    <slot></slot>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { inject } from "../ioc/decorators";
import { IApiService } from "../common/i.api.service";
import { ApiService } from "../common/api.service";

@Component({
  providers: [ApiService]
})
export default class Tab extends Vue {
  @inject(ApiService) private readonly _apiService!: IApiService;

  @Prop({ required: true })
  public name!: string;
  @Prop({ default: false })
  private selected!: boolean;

  isActive: boolean = false;

  async mounted() {
    console.log("TAB");
    console.log(this._apiService.identifier);
    this.isActive = this.selected;
  }

  get href() {
    return "#" + this.name.toLowerCase().replace(/ /g, "-");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
