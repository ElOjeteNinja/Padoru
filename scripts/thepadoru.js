const basep = extendContent(TurretType, "thepadoru",
{
draw: function(tile){
Draw.rect(Core.atlas.find("JustPADORU-basemala"), tile.drawx(), tile.drawy());
}.
});
