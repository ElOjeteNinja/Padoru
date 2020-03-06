const basep = extendContent(DoubleTurret, "thepadoru",
{
draw: function(tile){
Draw.rect(Core.atlas.find("padoru-basemalapadoru"), tile.drawx(), tile.drawy());
},
});
