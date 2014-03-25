﻿#target photoshopif (app.documents.length > 0) {var myDocument = app.activeDocument;var theLayers = GetSelectedLayers();myDocument.suspendHistory("operation", "main(myDocument)");};////////////////////////////////////function main () {// do stuff;for (var n = 0; n < theLayers.length; n++) {myDocument.activeLayer = theLayers[n];try {myDocument.activeLayer.name = myDocument.activeLayer.name + ".svg"}catch (e) {}};// reselect layers;var theIndices = new Array;for (var o = 0; o < theLayers.length; o++) {   myDocument.activeLayer = theLayers[o];   theIndices.push(getSelectedLayerID())   };for (var p = 0; p < theLayers.length; p++) {   selectLayerByIndex(theIndices[p], true)   };};// function to get selected layers;function GetSelectedLayers() {var A=[];    var desc11 = new ActionDescriptor();        var ref9 = new ActionReference();        ref9.putClass( stringIDToTypeID('layerSection') );    desc11.putReference( charIDToTypeID('null'), ref9 );        var ref10 = new ActionReference();        ref10.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );    desc11.putReference( charIDToTypeID('From'), ref10 );    executeAction( charIDToTypeID('Mk  '), desc11, DialogModes.NO );var gL = activeDocument.activeLayer.layers;for(var i=0;i<gL.length;i++){ A.push(gL[i]); } executeAction( charIDToTypeID('undo'), undefined, DialogModes.NO );return A;};function getSelectedLayerID() {    try{      activeDocument.backgroundLayer;      var mod = 1;   }catch(e){      var mod = 0   }    var ref = new ActionReference();     ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "ItmI" ));     ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );    return desc = executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" ))-mod;}function selectLayerByIndex(index,add){ add = undefined ? add = false:add var ref = new ActionReference();    ref.putIndex(charIDToTypeID("Lyr "), index);    var desc = new ActionDescriptor();    desc.putReference(charIDToTypeID("null"), ref );       if(add) desc.putEnumerated( stringIDToTypeID( "selectionModifier" ), stringIDToTypeID( "selectionModifierType" ), stringIDToTypeID( "addToSelection" ) );       desc.putBoolean( charIDToTypeID( "MkVs" ), false );    try{    executeAction(charIDToTypeID("slct"), desc, DialogModes.NO );}catch(e){alert(e.message); }};