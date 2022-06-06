var tl = new TimelineMax({repeat: -1,repeatDelay: 2});

tl.to('.glitch', 0.1, {skewX:70,ease: Power4.easeInOut})
.to('.glitch', 0.04, {skewX:0,ease: Power4.easeInOut})
.to('.glitch', 0.04, {opacity:0})
.to('.glitch', 0.04, {opacity:1})
.to('.glitch', 0.04, {x:-20})
.to('.glitch', 0.04, {x:0})
.add("split", 0)
.to('.top', 0.5, {x:-60,ease: Power4.easeInOut},'split')
.to('.bottom', 0.5, {x:60,ease: Power4.easeInOut},'split')
.to('.glitch', 0.08, { className: '+=redShadow'},'split')

.to('#txt', 0, { scale:1.1},'split')
.to('#txt', 0, { scale:1}, "+=0.02")

.to('.glitch', 0.08, { className: '-=redShadow'}, "+=0.09")
.to('.glitch', 0.03,{ className: '+=greenShadow'},'split')
.to('.glitch', 0.03,{ className: '-=greenShadow'},"+=0.01")

.to('.top', 0.2, {x:0,ease: Power4.easeInOut})
.to('.bottom', 0.2, {x:0,ease: Power4.easeInOut})

.to('.glitch', 0.02, {scaleY:1.1,ease: Power4.easeInOut})
.to('.glitch', 0.04, {scaleY:1,ease: Power4.easeInOut})