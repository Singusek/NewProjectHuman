<template>
<div>
    <!-- <div class="container">
    <div class="human" title="HUMAN">HUMAN</div>
    </div> -->
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

/* @import url('https://fonts.googleapis.com/css?family=Fira+Mono:400');

.human{ 
  display: flex;
  width: 70vw;
  height: 60vh;
  align-items: center;
  justify-content: center;
  margin: 0;
  background: rgb(54, 53, 53);
  color: #fff;
  font-size: 150px;
  font-family: 'Fira Mono', monospace;
  letter-spacing: -7px;
}

div{
  animation: glitch 1s linear infinite;
  
}

@keyframes glitch{
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
}

div:before,
div:after{
  content: attr(title);
  position: absolute;
  color: rgb(255, 255, 255);
}


div:before{
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop{
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}

div:after{
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
} */
</style>