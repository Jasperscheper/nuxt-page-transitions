<template>
  <div
    class="h-screen w-full bg-white fixed top-0 right-0 overflow-hidden select-none z-50"
    id="loader"
  >
    <div class="flex justify-center items-center h-full w-full">
      <img class="h-32" id="loader-logo" src="~assets/logo.svg" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { gsap } from "gsap";
export default Vue.extend({
  mounted() {
    let self = this;
    document.querySelector("body").style.overflow = "hidden";
    setTimeout(() => {
      var tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.to("#loader-logo", { opacity: 0, duration: 0.5 });
      tl.to("#loader", { y: "-100%" });
      document.querySelector("body").style.overflow = "initial";
    }, 1000);
  }
});
</script>
<style>
#loader{
  height: 100vh;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  overflow: hidden;
  -moz-user-select: none;
  z-index: 50;
}
</style>