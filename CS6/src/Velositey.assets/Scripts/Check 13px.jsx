﻿#target photoshopvar docRef = app.activeDocument;var fontSizesArray = new Array();for (i=0; i < docRef.layers.length; i++){    if((docRef.layers[i].kind == LayerKind.TEXT) && (docRef.layers[i].textItem.size <= 12)){        fontSizesArray.push(docRef.layers[i].textItem.size);    }}var cleanArray = unique(fontSizesArray);var fontSizeList = "";for(i=0;i < cleanArray.length;i++){        app[cleanArray[i]] = new Array();    app[cleanArray[i]].push(cleanArray[i]);    for(j=0; j < docRef.layers.length; j++){        if(docRef.layers[j].kind == LayerKind.TEXT){            if(docRef.layers[j].textItem.size==cleanArray[i]){               app[cleanArray[i]].push(docRef.layers[j].name);            }        }    }        fontSizeList = fontSizeList + app[cleanArray[i]][0] + "\n" + app[cleanArray[i]].slice(1,app[cleanArray[i]].length).join('\n') + "\n\n";}if(fontSizeList != ""){alert("There are fonts smaller than 13px\n" + fontSizeList);}else{alert("All fonts are 13px or bigger");}// Remove Duplicates from an arrayfunction unique(origArr) {    var newArr = [],        origLen = origArr.length,        found,        x, y;     for ( x = 0; x < origLen; x++ ) {        found = undefined;        for ( y = 0; y < newArr.length; y++ ) {            if ( origArr[x] === newArr[y] ) {               found = true;              break;            }        }        if ( !found) newArr.push( origArr[x] );        }   return newArr;}