const basep = extendContent(TurretType, "thepadoru",
{
draw: function(tile){
Draw.rect(Core.atlas.find("JustPADORU-basemalapadoru"), tile.drawx(), tile.drawy());
}.
});
