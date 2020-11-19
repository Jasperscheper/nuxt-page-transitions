import { gsap, Linear, TweenMax } from "gsap";
export default {
  transition: {
    mode: "out-in",
    css: false,
    enter(el) {
      console.log(document.querySelector("#loader"));
      var tl = gsap.timeline({
        defaults: {
          duration: 1
        }
      });
      tl.to("#loader-logo", {
        opacity: 0, duration: 0.5,
      });
      tl.to("#loader", {
        y: "-100%"
      });
      document.querySelector("body").style.overflow = "initial";
    },
    // TODO hij gaat te snel.
    leave(el, done) {
      var tl = gsap.timeline({
        defaults: {
          duration: 0.6,
        }
      });
      tl.to("#loader", {
        y: "0"
      });
      tl.to("#loader-logo", {
        opacity: 1,
        onComplete: done
      });
      document.querySelector("body").style.overflow = "hidden";
    }
  }
}