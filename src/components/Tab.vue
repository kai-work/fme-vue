<template>
  <div v-show="isActive">
    <slot></slot>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tab extends Vue {
  @Prop({ required: true })
  public name!: string;
  @Prop({ default: false })
  private selected!: boolean;

  isActive: boolean = false;

  mounted() {
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
