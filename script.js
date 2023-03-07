var tl=gsap.timeline();
tl
.from("#lnav",{
  opacity:0,
  scale:1.3,
  duration:1,
})
  .from("#textcenter h1",{
    opacity:0,
    scale:1.3,
    duration:1,
  })
  .from("#textcenter p",{
    opacity:0,
    scale:1.3,
    duration:1,
  })
  .from("#textcenter a",{
    opacity:0,
    scale:1.3,
    duration:1,
  })
  .from("#rtop #rtopleft",{
    opacity:0,
    scale:1.3,
    duration:1,
  })
  .from("#rtop #rtopright",{
    opacity:0,
    scale:1.3,
    duration:1,
  })
  .from("#rbottom",{
    opacity:0,
    scale:1.3,
    duration:1,
  })
 