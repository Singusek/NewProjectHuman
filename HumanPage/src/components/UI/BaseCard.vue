<template>
<div>
    <div class="container">
        <p class="glitch">
         <span aria-hidden="true">HUMAN</span>
        HUMAN
        <span aria-hidden="true">HUMAN</span>
        </p>
    </div>
    <div>
        <span class="sub">BIAŁYSTOK</span>
    </div>
</div>
</template>

<style scoped>
/* //@import url('https://fonts.googleapis.com/css?family=Kanit:800');
@import url('https://fonts.googleapis.com/css?family=Bungee+Shade');

:root {
  --f-size: 15;
  --f-unit: 1vmin;
  --f: calc(var(--f-size) * var(--f-unit));
  --bg: #181717; 
}

*, *::after, *::before {
  box-sizing: border-box;
}

body {
  font-family: 'Bungee Shade', cursive;//'Kanit', sans-serif;
  font-size: var(--f);
  
  background-color: var(--bg);
  display: flex;
  min-height: 100vh;
  margin: 0;
  overflow: hidden;
}

p {
  flex: 1;
  line-height: .75;
  margin: auto;
  color: #1af0dc;
  text-align: center;
  transform: scaleX(var(--scale, 1));
  animation: glitch-p 11s infinite alternate;
  
  &::before,
  &::after {
    --top: 0;        // offset from top [0 - 10]
    --left: 0;       // offset from left [0.001 - 1]
    --v-height: 30%; // visible part
    
    --n-tenth: calc(var(--f-size) * .1 * var(--top));
    --t-cut: calc(var(--n-tenth) / var(--f-size) * 100%);
    --b-cut: calc(var(--t-cut) + var(--v-height));
    
    content: attr(data-text);
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
    
    transform: translateX(calc(var(--left) * 100%));
    
    // this helps to get rid of pixelization
    filter: drop-shadow(0 0 transparent); 
    
    text-shadow: calc(var(--left) * -3em) 0 .02em lime, 
                 calc(var(--left) * -6em) 0 .02em #ff00e1;
    
    background-color: var(--bg);
    clip-path: polygon(0% var(--t-cut), 100% var(--t-cut), 100% var(--b-cut), 0% var(--b-cut));
  } 
  
  &::before {
    animation: glitch-b 1.7s infinite alternate-reverse;
  }
  &::after {
    animation: glitch-a 3.1s infinite alternate;
  }
}

@keyframes glitch-p {
  17% { --scale: .87; }
  31% { --scale: 1.1; }
  37% { --scale: 1.3; }
  47% { --scale: .91; }
  87% { --scale: 1; }
}

@keyframes glitch-a {
  10%,30%,50%,70%,90% {
    --top: 0;
    --left: 0;
  }
  0% {
   --v-height: 15%; 
  }
  20% {
    --left: .005;
  }
  40% {
    --left: .01;
    --v-height: 20%;
    --top: 3;
  }
  60% {
    --left: .03;
    --v-height: 25%;
    --top: 6;
  }
  80% {
    --left: .07;
    --v-height: 5%;
    --top: 8;
  }
  100% {
    --left: .083;
    --v-height: 30%;
    --top: 1;
  }
}

@keyframes glitch-b {
    10%,30%,50%,70%,90% {
    --top: 0;
    --left: 0;
  }
  0% {
   --v-height: 15%; 
   --top: 10;
  }
  20% {
    --left: -.005;
  }
  40% {
    --left: -.01;
    --v-height: 17%;
    --top: 3;
  }
  60% {
    --left: -.03;
    --v-height: 35%;
    --top: 6;
  }
  80% {
    --left: -.07;
    --v-height: 5%;
    --top: 8;
  }
  100% {
    --left: -.083;
    --v-height: 30%;
    --top: 1;
  }
} */
.sub {
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
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
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
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #ff0000,
      0.025em 0.04em 0 #ff9100;
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
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #ff0000,
      -0.04em -0.025em 0 #ff9100;
  }
}
</style>