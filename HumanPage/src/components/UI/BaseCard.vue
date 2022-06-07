<template>
<div>
    <div class="container">
      <transition-group 
            appear
            @before-enter="beforeEnter"
            @enter="enter">
      <div id="txt">
      <div class="glitch top">HUMAN</div>
      <div class="glitch bottom">HUMAN</div>
      </div>
      </transition-group>
        <!-- <p class="glitch">
         <span aria-hidden="true">HUMAN</span>
        HUMAN
        <span aria-hidden="true">HUMAN</span>
        </p>
    </div>
    <div> 
        <span class="sub">BIAŁYSTOK</span> -->
    </div>
</div>
</template>

<script>
import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'
  gsap.registerPlugin(CSSPlugin);

export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    animation: (tl) =>  {
      var tl = this.gsap.TimelineMax({repeat: -1, repeatDelay: 2})
      // var tl = this.$gsap.TimelineMax({repeat: -1,repeatDelay: 2})

      tl.to('.glitch', 0.1, {skewX:70, ease: Power4.easeInOut})
      .to('.glitch', 0.04, {skewX:0, ease: Power4.easeInOut})
      .to('.glitch', 0.04, {opacity:0})
      .to('.glitch', 0.04, {opacity:1})
      .to('.glitch', 0.04, {x:-20})
      .to('.glitch', 0.04, {x:0})
      .add("split", 0)
      .to('.top', 0.5, {x:-60, ease: Power4.easeInOut},'split')
      .to('.bottom', 0.5, {x:60, ease: Power4.easeInOut},'split')
      .to('.glitch', 0.08, { className: '+=redShadow'},'split')

      .to('#txt', 0, { scale:1.1},'split')
      .to('#txt', 0, { scale:1}, "+=0.02")

      .to('.glitch', 0.08, { className: '-=redShadow'}, "+=0.09")
      .to('.glitch', 0.03,{ className: '+=greenShadow'},'split')
      .to('.glitch', 0.03,{ className: '-=greenShadow'},"+=0.01")

      .to('.top', 0.2, {x:0, ease: Power4.easeInOut})
      .to('.bottom', 0.2, {x:0, ease: Power4.easeInOut})

      .to('.glitch', 0.02, {scaleY:1.1, ease: Power4.easeInOut})
      .to('.glitch', 0.04, {scaleY:1, ease: Power4.easeInOut})
  },
  // beforeEnter(tl) {
  //           tl.style.opacity = 0;
  //       },

        // enter() {
        //     gsap.to('.glitch', 0.1, {
        //         skewX: 70,
        //         ease: Power4.easeInOut
               
        //     }); // to is not working ??? 
        // },
},
mounted() {
  
  // var tl = this.$gsap.timeline()
  //   tl.to('.my-class', { x: 1, duration: 2, ease: 'slow' }, '+=0.5')
  //   tl.to(this.data, { percent: 1, duration: 1, ease: 'power2.in' }, '-=1')
},
}
</script>

<style scoped>
.container {
  background:#1a1a1a;
  color:#fff;
  font-family:Helvetica;
  overflow:hidden;
}
.bottom {
   font-size:100px;
  -webkit-clip-path: inset(58% 0 0 0);
  clip-path: inset(58% 0 0 0);
}
.top {
   -webkit-clip-path: inset(0 0 41% 0);
  clip-path: inset(0 0 41%);
}
.redShadow {  text-shadow:-3px 0 red;}
.greenShadow {  text-shadow:-3px 0 red;}

.glitch {position: absolute}

#txt {
  position:relative;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  width:482px;
  height:100px;
  text-align: center;
  z-index:2;
  font-size:100px;
  color:#fff;
  text-transform:uppercase;
}
/* .sub {
  color: #ff7708;
  letter-spacing: 1em;
  font-size: 32px;
  margin-bottom: 20px;
  justify-content: center;
}
p {
    margin-bottom: 30px;
    margin-top: 75px;
}
.container {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  text-align: center;
}

.glitch {
  font-size: 9rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  text-shadow: 0.05em 0 0 #00fffc, -1em -1em 0 #fc00ff,
    1em 1em 0 #fffc00;
  animation: glitch 725ms infinite;
}

.glitch span {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
}

.glitch span:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.5em -0.5em 0 #ff0000,
      0.5em 0.5em 0 #ff9100;
  }
  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #ff0000,
      0.025em 0.04em 0 #ff9100;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #ff0000,
      -0.05em -0.05em 0 #ff9100;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #ff0000,
      -0.05em -0.05em 0 #ff9100;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #ff0000,
      0 -0.04em 0 #ff9100;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #ff0000,
      0 -0.04em 0 #ff9100;
  }
  100% {
    text-shadow: -0.5em 0 0 #00fffc, -0.5em -0.5em 0 #ff0000,
      -0.5em -0.5em 0 #ff9100;
  }
} */
</style>