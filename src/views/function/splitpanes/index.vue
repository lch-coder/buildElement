<template>
  <splitpanes class="default-theme" h-full>
    <pane min-size="20">1</pane>
    <pane>
      <splitpanes horizontal>
        <pane>2</pane>
        <pane>3</pane>
        <pane>4</pane>
      </splitpanes>
    </pane>
    <pane>5</pane>
  </splitpanes>
</template>

<script setup lang="ts" name="splitpanes">
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
</script>

<style lang="scss" scoped>
.splitpanes__pane {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2) inset;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}
</style>
