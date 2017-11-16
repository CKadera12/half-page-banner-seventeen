(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[0,432,97,43],[214,0,65,157],[145,369,60,114],[0,232,143,198],[145,232,102,135],[0,0,212,230]]},
		{name:"index_atlas_NP_", frames: [[0,0,300,600],[0,602,94,114]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.halfpagebannerseventeen_1 = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.seventeencranberries = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.seventeengreenbeans = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.seventeengreens = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.seventeengreens_1 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.seventeenham = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.seventeenpie = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.seventeenturkey = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.spiralcutham = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEDGQgDgCAAgEQAAgFAPgKQAOgKAJgJQAYgaAMgoQANgpAAg0QAAgxgNgpQgMgogYgaQgJgIgOgLQgPgKAAgFQAAgEADgCQACgCAGAAQAMAAASAKQATALAQASQAgAhASAqQARApAAAsQAAAsgRAqQgSArggAgQgQASgTALQgSAKgMAAQgGAAgCgCg");
	this.shape.setTransform(102.5,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeCiQgUgFgMgKIgPAJQgHAEgGAAIgHgBIgJgDIAAgEQAJgJAEgUQADgUAAgyIAAgyIAAgzQAAgqgCgOQgCgOgFgDIgMgEQgPgDAAgIQAAgFAGgEQAEgEARgGIAbgIIAVgDQAJAAAEADQACADAAAIIAAANIgCBCIAABjIABA7QAAAhAKALQAKAMAZAAQAcAAAQgYQAQgYAAgqQAAglgPgUQgQgVgbAAIgHAAIgEABQgRAAAAgQQAAgLAQgHQAPgGAUAAQArAAAZAdQAaAegBAwQAAA6gfAiQggAig2AAQgVAAgSgFg");
	this.shape_1.setTransform(81.5,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmCiQgLgDAAgKQAAgHAKgEIALgHQAEgDACgOIABgtIAAgjIAAgqIAAgRQAAg5gCgQQgCgRgFgDIgOgFQgOgDAAgIQAAgGAFgEQAEgEAQgFIAegJIAXgDQAHAAACAFQADAEAAAKIAAASQgDBQAABRIACBNQABAQAEAFIAMAGQALAEAAAJQAAAJgLADQgMAEgdAAQgiAAgLgEg");
	this.shape_2.setTransform(62.8,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2AVQgDgDAAgGIACgLIAFgLQADgHAEgCQADgCAJAAIALAAIAUAAIAmgBIAGAAQAIAAADACQADADAAAGQAAAMgHAKQgHALgLAAIgKAAIgNgBIgxACIgFABQgHgBgDgCg");
	this.shape_3.setTransform(49.1,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA0CsQgPAAgCgCQgDgDAAgJIAAhEIh9AAQgTAAgDgDQgFgDAAgJQAAgRBEhaIARgYIARgXQBBhcATAAQAKAAAFAGQAEAGAAARIAADDIAWAAQAJAAACACQADACgBAGIAAARQABAGgDACQgCACgJAAIgWAAIAABEQAAAKgCACQgDACgOAAgAgYgYQgcAlgZAoIBtAAIAAiWQgeAjgaAmg");
	this.shape_4.setTransform(28.6,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfC+QgTgLgQgSQgggggRgqQgSgqAAgtQAAgsASgqQARgqAgggQAQgSATgLQASgKANAAQAFAAADACQACACAAAEQAAAFgPAKQgOAKgJAJQgZAagLApQgNAoAAA0QAAAxANApQAMAoAYAaQAJAIAOALQAPAKAAAFQAAAEgCACQgDACgFAAQgNAAgSgKg");
	this.shape_5.setTransform(9.8,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai3BwQgLgEAAgJQAAgIALgFIAGgCQAGgDADgHQACgIAAgSIAAgPIgBgSIAAgNQAAgpgBgMQgCgNgFgDIgKgDQgOgFAAgIQAAgFAEgDIAOgIIAigMIAWgDQAGAAADADQADAEAAAIIAAAMIAAACIABADIABABIABgBIABgBIAFgEIADgCQAbgZAcAAQAKAAAKACQAKADAJAHQAHAFAJAKQAIALACAAQADAAAGgHIAKgKQAPgNALgEQALgEANAAQAaAAAUAKQATAKAJATQAKAWAABBIABAWIgBANIAAAJQAAAOADAFQACAGAFADIAGACQAMAFAAAIQAAAJgLAEQgLADgjAAQggAAgLgDQgLgEAAgIQAAgJAMgFIAIgDQAGgDACgLQACgLAAgbQAAhCgJgSQgJgSgYAAQgaAAgLAXQgMAWAAA3IAAAMQAAAZADAHQACAIAGADIAGACQALAFAAAIQAAAJgLAEQgKADgjAAQgeAAgLgDQgLgEAAgIQAAgJALgEIAJgEQAFgDACgIQACgKAAgZQAAhIgJgSQgJgSgYAAQgMAAgLAIQgLAGgGANQgFAKgCATQgCARAAArQAAAUACAIQACAIAFACIAIAEQAMAEAAAJQAAAIgLAEQgMAEgdAAQgjAAgLgEg");
	this.shape_6.setTransform(-33.4,25.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAoBqIgMgMIgKAFQgbATgcAAQghAAgUgTQgUgTAAgfQAAglAZgTQAbgUAvAAQALAAAGADQAFAEAAAIQAAANgPAAQgWAAgOALQgOAKABATQgBASAMALQANALATAAQAWAAAJgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgKAFgIAKIgFAGQgOASgPAAQgJAAgFgGQgGgGAAgKQAAgVAagOQAbgPApAAQAYAAATAHQARAGAKANQAHAJADANQACAOAAAhIAABHQABANACAHQACAGAEABIAIACQANAEAAAIQAAAKgOAJQgPAJgVAAQgKAAgLgMg");
	this.shape_7.setTransform(-65.7,25.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAyCfQgMgEAAgKQAAgJAOgFIAKgFQAEgDACgOIABg1IAAggIgCgJQgDgEgLgCQgLgCgqAAIgvACQgNABgEADIgCAHIgBARIAAATIABA1QABAOAEADIALAFQANAFAAAJQAAAKgMAEQgNAEgkAAQgjAAgMgEQgNgEAAgKQAAgJAOgFIAKgFQAFgEACgcQACgdAAhDIgChUQgCgigDgEQgCgDgMgFQgMgFAAgJQAAgJAKgDQAKgEApAAQAoAAAKAEQAKADAAAJQAAAJgNAFIgLAFQgEADgBAOIgCBDQAAAJAJADQAIADAhAAIASAAIAwgBQANgCAFgDIACgEIABgJIAAgKIgBg3QgCgMgEgDIgKgFQgOgFAAgJQAAgJALgDQAKgEAnAAQApAAAKADQAKAEAAAJQAAAJgOAFIgKAFQgFAEgCAeQgCAfAAA8IACBXQACAiADAEQACAEAMAEQAMAFAAAJQAAAKgMAEQgNAEgkAAQgjAAgNgEg");
	this.shape_8.setTransform(-95.1,20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLCIQgMgEgIgIQgIgHgDgMQgDgNAAgiIAAh4IgVAAIgGgCIgCgFIAAgGQAAgHAXgVIAKgIIAIgHQAYgVAIAAIAGACQADACAAAEIAAAqIAzAAQAFAAACADQACACAAAGIAAAFQAAAGgCACQgCADgFAAIgvAAIgDACIgCAFIAABwQAAAdAFAHQAFAIANAAQAHAAAMgEIAPgEQAFAAADADQADADAAAEQAAANgTAMQgTALgYAAQgNAAgLgDg");
	this.shape_9.setTransform(96.6,-30.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgMAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTAAgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAEgEQAFgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIAAAJIgDBUQAAAuAKARQAKASAWAAQAZAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQgBgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIAAANIgDBcIAAAmIACAPQACAJALAFIABAAIADABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_10.setTransform(74.9,-28);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiCdQgegKgYgVQgagYgNghQgOgiAAgnQAAgfAJgbQAJgcASgWQAWgbAggOQAggPAlAAIAbADIAsAJIAFgCIARgDIAIACIAGAHQAHALAFASQAEARAAAOQAAAJgDAFQgEAFgHAAQgKAAgRgVIgOgPQgMgOgSgGQgTgGgVAAQgrAAgaAdQgZAfAAA0QAABCAgAsQAgAqAxAAQAUABASgHQARgGAMgMIAKgNQAKgNAHAAQAGAAAEAGQADAHAAAKQAAAVgFAMQgHAMgKAAIgCAAIgDgBQgVALgVAGQgVAGgXAAQghAAgegMg");
	this.shape_11.setTransform(46.3,-32.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag2AVQgDgDAAgGIACgKIAFgNQADgGAEgCQADgCAJgBIALABIAUAAIAmgBIAGgBQAIABADACQADADAAAFQAAANgHALQgHAKgLAAIgKgBIgNAAIgxACIgFAAQgHABgDgDg");
	this.shape_12.setTransform(22.9,-28.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmCiQgLgDAAgKQAAgHAKgEIALgHQAEgDACgOIABgtIAAgjIAAgqIAAgRQAAg5gCgQQgCgRgFgDIgOgFQgOgDAAgIQAAgGAFgEQAEgEAQgFIAegJIAXgDQAHAAACAFQADAEAAAKIAAASQgDBQAABRIACBNQABAQAEAFIAMAGQALAEAAAJQAAAJgLADQgMAEgdAAQgiAAgLgEg");
	this.shape_13.setTransform(8.5,-33.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAoBqIgLgMIgKAFQgcATgcAAQghAAgUgTQgUgTgBgfQAAglAagTQAbgUAvAAQALAAAFADQAHAEgBAIQAAANgPAAQgWAAgOALQgNAKAAATQAAASALALQANALATAAQAWAAAJgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgKAFgIAKIgFAGQgOASgPAAQgJAAgFgGQgFgGgBgKQAAgVAagOQAbgPApAAQAZAAARAHQATAGAJANQAHAJADANQACAOABAhIAABHQgBANADAHQACAGAFABIAHACQAOAEgBAIQABAKgQAJQgOAJgVAAQgKAAgLgMg");
	this.shape_14.setTransform(-9.2,-28);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhDBwQgLgDAAgLQAAgHALgEIAGgDQAFgDACgIQADgHAAgRIAAgPIAAgSIAAgOQAAgpgCgNQgCgMgFgCIgKgFQgOgEAAgHQAAgGAFgDQADgEAKgFIAfgJIAUgFQALAAADAfIABAFIACAAQALgRAMgKQANgKANAAQAQAAAJAKQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgCIgJgHIgGgJQgDgGgCAAQgPAAgHAWQgFAWAABDQAAAUACAKQACAKAHACIAJAEQANADAAAKQAAAIgMAEQgNADgeAAQgiAAgLgDg");
	this.shape_15.setTransform(-29.7,-28.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnChQgMgDAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgSIAAgYQAAgjgBgKQgCgLgFgCIgKgEQgOgFAAgHQAAgFAEgEQAEgEAKgEIAigLIAXgEQAGAAADAEQADAEAAALIAAANIgBAKIgBA5IAAABIgBA4QAAAVACAJQACAJAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgeAAQghAAgLgEgAgbhxQgKgIAAgMQAAgNALgJQAKgJAQAAQANAAAKAIQAKAJAAAMQAAAMgLAJQgKAJgPAAQgPAAgJgIg");
	this.shape_16.setTransform(-45.3,-33.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhtCaQgMgEABgKQgBgGAKgFIAMgFQAEgFACgSQABgRABg5IAAgkQAAg9gCgSQgDgSgEgCIgLgFQgOgEAAgHQAAgGAFgEQADgEAJgDIAhgKQAPgEAHgBQAHAAACAEQADAEAAAHIAAALIAAAFIACABIAJgGIAIgGQAOgLAMgEQANgFANgBQAqAAAbAfQAbAfgBAxQAAA1gdAjQgfAjguAAQgSAAgIgFQgHgGgBgJQAAgFAFgEQADgDAHAAIAFABIAIAAQAZABAPgVQAPgVAAgjQAAgmgQgXQgRgYgZAAQgXAAgOANQgNANAAAiIAACPIABAWQABAKADACQADAEAKACIAIADIAFAFIACAGQAAAJgNADQgNAEgggBQghABgLgEg");
	this.shape_17.setTransform(-65.6,-24);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag3CjQgZgGgQgJQgJgFgGgUQgGgTAAgZQAAgLAEgFQAEgGAHAAQALAAALAVIAFAJQAPAZARAMQARALAXAAQAYAAARgPQARgOAAgWQAAgfhCgdIgHgEQg3gXgSgUQgSgUAAggQAAgoAegaQAegaAwAAIAaACIAfAHIAJgGIAIgCQAFAAAFAEQAEADAFAJQAHANAFAPQAEAPAAALQAAAIgDAEQgEAEgGAAQgMAAgMgQIgDgEQgNgRgPgIQgPgIgSAAQgZAAgPAMQgOALAAAVQAAASAMAMQAMANAwAUIAJAFQApAQASAQQAMALAGAPQAHAQAAASQAAAuggAaQggAZg5AAQgbAAgZgFg");
	this.shape_18.setTransform(-91.5,-32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.spiralcutham, new cjs.Rectangle(-114.2,-62,228.5,111.2), null);


(lib.seventeenwhatsinourfest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXCOQgJgKAAgNQAAgNAJgJQAJgJAOAAQAMAAAJAJQAJAJAAANQAAANgJAKQgJAJgMAAQgOAAgJgJgAgOA2QgEgGAAgOQAAgPAEgOQAEgNAHgOIAKgQQAVghAAgWQAAgPgJgJQgIgJgNAAQgNgBgIAIQgIAHgEAQIAAABQgIAggRAAQgKgBgFgGQgFgGAAgMQAAgaAYgSQAYgSAiAAQAkAAAWASQAVARAAAdQAAARgHAOQgHANgTARIgHAFQgTAQgGARQgDAIAAAMIgBAOQgDAJgCACQgDACgEAAQgJAAgFgGg");
	this.shape.setTransform(53.2,42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA9CEQgDgDAAgGIiNAAQgMAAgDgCQgDgCAAgFQAAgKAbgYIAZgYQA0g0AOgVQANgWAAgUQAAgTgKgMQgLgMgRAAQgMAAgLAGQgLAFgMALIgIAJQgLAMgHAAQgGAAgDgDQgDgDAAgGQAAgGADgHQADgGAHgHQAQgSAWgKQAWgJAYAAQAlAAAXATQAWATAAAfQAAATgJASQgKASgVAUIgiAfIgmAiIgBADIgBACIACABIAEABIA/AAIARgCQAFgBADgFIAIgLQAIgOAIAAQAFAAADADQADAEAAAFQAAAKgCALIgIAYQgHARgFAGQgGAGgGAAQgFAAgCgDg");
	this.shape_1.setTransform(31.5,44.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAACBQgtAAgKgCQgLgDAAgIQAAgKASgDQALgBAFgDIAGgEIACgJIABgdIABheIAAgPIAAgMQAAgOgCgEQgDgEgIAAIgJAAIgKABQgGAAgDgCQgDgCAAgFQAAgFAGgFQAHgFAPgFQASgHARgEQAPgDAKAAQAIAAAFADQAEADAAAGQAAAGgIAGIgDACQgCADgBAQIgBBNIAAA4IABAjIACAKIAHAFIAQADQARADAAAJQAAAIgKADQgKADgpAAg");
	this.shape_2.setTransform(9.6,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9BlQgKgDAAgJQAAgHAKgEIAFgCQAGgDACgHQACgHAAgPIAAgOIgBgQIAAgMQABglgCgLQgCgLgEgDIgKgEQgMgDABgHQAAgFADgDQAEgEAJgEIAcgJIASgDQAJAAADAcIABAEIABAAQALgQALgJQALgIAMAAQAOAAAIAIQAJAJAAAOQgBAOgGAJQgGAIgMAAIgKgCIgJgGIgEgIQgDgGgCAAQgNAAgGAUQgFATAAA9QAAASACAJQACAJAFACIAIADQANAEAAAIQAAAIgMADQgLADgbAAQgfAAgKgDg");
	this.shape_3.setTransform(-20.3,46.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhJBMQgdgdAAguQAAgtAegfQAfgeAsAAQAsAAAcAcQAcAdAAAsQAAAvgeAfQgeAggrAAQgsAAgdgegAgmg8QgMAQAAAcQAAAnARAbQARAbAXAAQAUAAANgQQAMgRAAgbQAAgngRgcQgRgbgYAAQgUAAgMARg");
	this.shape_4.setTransform(-40,46.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5CSQgKgDAAgIQAAgHAKgEIAFgCQAFgDACgGQACgHAAgRIAAgUIAAhhIgXAAQgFAAgBgCQgCgCAAgGIAAgEQAAgGACgCQACgCAFAAIAVAAIgCgQIgBgPQAAgeATgSQATgRAgAAQAXAAAPAKQAOALAAAQQAAAJgFAGQgFAEgKAAQgHAAgFgDQgFgDgDgFIgEgHQgIgOgMAAQgHAAgEAEQgFAFAAAIIAFAXQAEASAAAOIAeAAQAFAAACACQABABAAAHIAAAEQAAAFgCADQgCACgEAAIgeAAIAABoQAAAaACAIQACAIAEACIAIADQAMAEAAAIQAAAIgKADQgKADgdAAQgeAAgKgDg");
	this.shape_5.setTransform(-55.5,42);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKB7QgKgEgIgHQgHgGgDgMQgDgKAAgfIAAhsIgSAAIgGgCIgCgFIAAgFQAAgHAVgSIAJgHIAIgHQAVgTAHAAIAGACQACACAAADIAAAmIAuAAQAFAAACACQACACAAAGIAAAFQAAAFgCACQgDADgEAAIgqAAIgDACIgCAEIAABlQAAAZAFAHQAEAGAMABQAHgBAKgCIAOgEQAEAAADADQADACAAAEQAAAMgRALQgSAKgVAAQgMAAgKgDg");
	this.shape_6.setTransform(114.4,-3.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBqIgWgEIgFAEIgHABIgEgBIgFgDQgGgFgGgRQgFgQgBgPQABgHADgEQADgFAFAAQAKAAAKARIAHAMQAGAIALAFQALAFALAAQANAAAIgHQAHgHABgLQAAgRgigRIgLgGQgggPgMgNQgLgNABgTQAAgbASgQQATgRAdAAIAOABIAOACIAKgEIAFgBQAKAAAKAQQAKAQgBASQAAAHgDAEQgCAEgHAAQgEAAgFgEQgEgEgGgJQgIgNgIgFQgIgFgMAAQgLAAgGAHQgIAGAAALQAAAJAIAHQAGAIAaAMIACACQA4AbAAAhQAAAcgVATQgWATghAAg");
	this.shape_7.setTransform(98.2,-1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAkBgIgLgLIgIAFQgZAQgZAAQgeAAgSgRQgTgRAAgcQAAghAYgRQAYgSAqAAQAKAAAFADQAFADAAAIQAAALgOAAQgTAAgNAJQgMAKAAARQAAARALAJQAKAKASAAQATAAAJgJQAIgIAAgWIAAhMQAAgSgIgKQgHgKgOAAQgKAAgIAFQgJAEgIAJIgEAGQgNAPgNAAQgIAAgFgFQgFgFAAgJQAAgTAYgNQAXgNAlAAQAWAAAQAGQAQAGAJALQAGAIADAMQADANAAAdIAABBQAAALABAGQACAFAFACIAGABQANAEAAAHQAAAJgOAIQgOAIgSAAQgJAAgKgKg");
	this.shape_8.setTransform(78.9,-1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhCBMQgcgdAAgsQAAguAdgfQAegfAuAAQAmAAAYAWQAXAXgBAmQAAAMgDAFQgEADgPAAIhNAAQgHABgDgEQgFgEAAgFQAAgFAFgDQADgDAHAAIApAAIALgBQACgCAAgEQAAgUgNgOQgNgNgTAAQgXAAgMAVQgMAWAAAdQAAAfAQAYQAQAXAZgBQAPAAALgDQAKgDAKgHIAIgGQAKgIAFAAQAFAAADADQADACAAAFQAAAFgGAHQgFAHgIAHQgSAPgQAGQgRAGgTAAQgrAAgdgeg");
	this.shape_9.setTransform(57.1,-1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhnCRQgLgDAAgJQAAgIALgFQALgDACgDQACgFACgeIAChPIgChKQgCgggCgDQgCgEgLgEQgLgEAAgJQAAgIAJgDQAKgCAjAAIB8AAIAUgCIAKgDIAGACIADADQAEAHAEAOQAEAOAAAKQAAAJgEAFQgDAFgGAAQgHAAgJgOIgGgKQgEgGgJgEQgJgDgOAAIgcAAQgSAAgKACQgKADgEAEQgEAEgBAOIgCAnIAAAQQAAAKACACQACADAGAAIAgAAQAQAAAHgFQAGgEACgOIABgDQADgVAKAAQAJAAAEALQADALAAAnQAAAmgDALQgEALgJAAQgKAAgEgVIAAgEQgCgNgGgEQgHgFgQAAIggAAQgGAAgCADQgCAEAAANIAAAQIACA4QABANAEADIAJAEQAMAFAAAIQAAAJgLADQgLAEggAAQghAAgLgEg");
	this.shape_10.setTransform(34.3,-6.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhCBMQgdgdAAgsQAAguAfgfQAdgfAtAAQAoAAAXAWQAWAXAAAmQAAAMgDAFQgEADgPAAIhOAAQgGABgEgEQgDgEAAgFQAAgFADgDQAEgDAGAAIAqAAIAKgBQADgCAAgEQAAgUgNgOQgNgNgTAAQgXAAgNAVQgLAWAAAdQAAAfAQAYQARAXAZgBQAPAAAJgDQALgDAKgHIAHgGQAKgIAGAAQAFAAACADQADACAAAFQAAAFgEAHQgGAHgJAHQgRAPgRAGQgQAGgTAAQgqAAgegeg");
	this.shape_11.setTransform(-0.1,-1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVBVQgMgTgchDIgMgfQgPgmgJgEIgGgDQgMgFAAgHQAAgIALgDQAKgEAhAAQAcAAAKAEQAJADAAAIIgBAHIgEADIgHADQgIADAAAEIAFAQIAPAoIARAoQAFAIACAAQADAAADgFIAJgSIAXgyQAGgUAAgHIgBgHIgEgFIgHgDQgJgDAAgGQAAgJAJgCQAKgEAZAAQAWAAAIAEQAIADAAAHQAAAIgKAEIgHACQgKAFgRAoIgFANIgIASQguBpgNAAQgJAAgLgUg");
	this.shape_12.setTransform(-21.3,-1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjCRQgKgDAAgJQAAgHAKgEIAFgCQAFgDACgGQACgIAAgPIAAgNIAAgRIAAgVQAAgggCgJQgBgJgEgDIgKgEQgMgDAAgHQAAgFAEgDQAEgEAIgEIAfgJIAVgEQAFAAADAEQACAEAAAJIAAAMIAAAJIgCA0IAAAAIgBAzQAAATACAIQACAIAEADIAIACQAKAEAAAIQAAAIgKAEQgKADgaAAQgegBgKgDgAgYhmQgJgHAAgLQAAgLAKgIQAJgJAOAAQAMABAJAHQAJAHAAAMQAAAKgKAIQgJAIgOAAQgNAAgIgHg");
	this.shape_13.setTransform(-37.9,-6.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKB7QgKgEgIgHQgHgGgDgMQgDgKAAgfIAAhsIgSAAIgGgCIgCgFIAAgFQAAgHAVgSIAJgHIAIgHQAVgTAHAAIAGACQACACAAADIAAAmIAuAAQAFAAACACQACACAAAGIAAAFQAAAFgCACQgDADgEAAIgqAAIgDACIgCAEIAABlQAAAZAFAHQAEAGAMABQAHgBAKgCIAOgEQAEAAADADQADACAAAEQAAAMgRALQgSAKgVAAQgMAAgKgDg");
	this.shape_14.setTransform(-50.6,-3.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPBqIgWgEIgGAEIgGABIgEgBIgEgDQgHgFgGgRQgGgQABgPQgBgHAEgEQAEgFAEAAQAKAAAJARIAIAMQAHAIAKAFQALAFAKAAQAOAAAIgHQAIgHAAgLQgBgRgggRIgMgGQgggPgLgNQgLgNAAgTQAAgbASgQQASgRAeAAIAOABIAOACIAJgEIAHgBQAKAAAJAQQAJAQAAASQAAAHgCAEQgDAEgGAAQgFAAgEgEQgFgEgGgJQgIgNgIgFQgIgFgLAAQgMAAgGAHQgIAGAAALQAAAJAIAHQAGAIAZAMIACACQA6AbAAAhQAAAcgXATQgVATghAAg");
	this.shape_15.setTransform(-66.8,-1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhCBMQgdgdAAgsQAAguAegfQAegfAuAAQAnAAAXAWQAWAXAAAmQABAMgEAFQgEADgPAAIhOAAQgGABgEgEQgDgEAAgFQAAgFADgDQAEgDAGAAIAqAAIAKgBQADgCAAgEQAAgUgNgOQgNgNgTAAQgYAAgMAVQgLAWAAAdQAAAfAQAYQARAXAYgBQAQAAAJgDQALgDAKgHIAHgGQAKgIAGAAQAFAAADADQACACAAAFQAAAFgEAHQgGAHgJAHQgRAPgRAGQgQAGgTAAQgrAAgdgeg");
	this.shape_16.setTransform(-86.2,-1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhnCRQgLgDAAgJQAAgIALgFQALgDACgDQACgFACgeIAChPIgChKQgCgggCgDQgCgEgLgEQgLgEAAgJQAAgIAJgDQAKgCAjAAIB8AAIAUgCIAKgDIAGACIADADQAEAHAEAOQAEAOAAAKQAAAJgEAFQgDAFgGAAQgHAAgJgOIgGgKQgEgGgJgEQgJgDgOAAIgcAAQgSAAgKACQgKADgEAEQgEAEgBAOIgCAnIAAAQQAAAKACACQACADAGAAIAgAAQAQAAAHgFQAGgEACgOIABgDQADgVAKAAQAJAAAEALQADALAAAnQAAAmgDALQgEALgJAAQgKAAgEgVIAAgEQgCgNgGgEQgHgFgQAAIggAAQgGAAgCADQgCAEAAANIAAAQIACA4QABANAEADIAJAEQAMAFAAAIQAAAJgLADQgLAEggAAQghAAgLgEg");
	this.shape_17.setTransform(-108.9,-6.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag9BlQgKgDAAgJQAAgHAKgEIAFgCQAGgDACgHQACgHAAgPIAAgOIgBgQIAAgMQAAglgBgLQgCgLgEgDIgJgEQgMgDgBgHQAAgFAFgDQADgEAJgEIAbgJIASgDQAKAAAEAcIAAAEIABAAQAKgQAMgJQALgIAMAAQAOAAAIAIQAJAJgBAOQAAAOgGAJQgGAIgLAAIgLgCIgJgGIgEgIQgCgGgDAAQgOAAgFAUQgFATAAA9QAAASACAJQACAJAGACIAIADQAMAEAAAIQAAAIgLADQgMADgbAAQgfAAgKgDg");
	this.shape_18.setTransform(121.3,-50.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAsBnQgDgDAAgHIAAgOIAAgBIgBAAQgDAAgEAFIgDADQgKAKgMAFQgLAFgPAAQgQAAgNgGQgNgGgKgLQgJgLgEgQQgEgRAAgrIAAgNIAAgPIAAgEQABgRgDgFQgCgEgHgDIgJgDQgLgDAAgHQAAgFAEgDQAEgEAOgFIAcgHIAWgDQAFAAADAEQACAEAAAJIAAAIIgCBMQgBApAJAPQAJAQAVAAQAWAAAKgUQAKgVAAgxIAAgPQAAgQgCgFQgCgFgIgCIgIgDQgLgDAAgHQAAgFAEgDQAEgEAOgFIAcgHIAVgDQAGAAACAEQADADAAAKIgBALIgCBTIAAAjIABANQACAJAKAEIAFABQALAEAAAHQAAAEgDAEQgEADgJADIgdAKQgOADgHAAQgGAAgDgDg");
	this.shape_19.setTransform(100.8,-50);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgsCRQgXgHgTgOQgegVgPgiQgQggAAgpQAAhBApgpQApgpBBAAQAaAAAXAIQAXAIATAOQAbAWAPAiQAPAhAAAmQAAAZgHAWQgHAXgNASQgUAbgfAQQggAPgkAAQgXAAgXgHgAhDheQgWAbAAAvQAAA+AbApQAcAoAqAAQAlAAAWgcQAXgcAAguQAAg/gcgoQgdgpgpAAQglAAgWAdg");
	this.shape_20.setTransform(72.7,-54.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhjBlQgKgDAAgJQAAgHAKgEIAFgCQAFgDACgHQACgHAAgPIAAgOIAAgQIAAgUQAAgggCgKQgBgKgEgCIgKgEQgMgDAAgHQAAgFAEgDQAEgEAIgEIAegJIAVgDQAFAAADADQACADAAAGIAAAOIABACIABAAIABAAIABAAIAFgFIAEgDQAWgVAZAAQAOAAAOAGQAOAHAJAKQAJAMAEAPQAEAPAAAhIAAAbIAAANIAAAMQAAAOACAGQACAGAFADIAFACQAKAEAAAHQAAAIgJAEQgKADgfAAQgcAAgKgDQgKgDAAgIQAAgIAKgEIAIgDQAFgCACgJQACgJAAgWQAAhAgIgRQgJgQgVAAQgKAAgKAHQgKAGgFALQgFAJgCAQQgBAPAAAoQAAAUABAGQACAHAEACIAIADQAKAEAAAIQAAAIgKADQgKADgaAAQgfAAgKgDg");
	this.shape_21.setTransform(33.1,-50.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjCRQgKgDAAgJQAAgHAKgDIAFgDQAFgDACgGQACgIAAgPIAAgNIAAgRIAAgVQAAgggCgJQgBgJgEgDIgKgEQgMgDAAgHQAAgEAEgEQAEgEAIgEIAfgJIAVgEQAFAAADAEQACAEAAAJIAAANIAAAJIgCAzIAAABIgBAxQAAAUACAIQACAIAEADIAIADQAKADAAAIQAAAIgKADQgKAEgaAAQgegBgKgDgAgYhmQgJgHAAgKQAAgMAKgIQAJgJAOABQAMAAAJAHQAJAHAAAMQAAAKgKAJQgJAHgOAAQgNAAgIgHg");
	this.shape_22.setTransform(15.2,-54.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPBqIgVgEIgGAEIgHABIgEgBIgFgDQgGgFgGgRQgFgQgBgPQABgHADgEQADgFAGAAQAJAAAKARIAHAMQAGAIALAFQALAFALAAQANAAAIgHQAHgHAAgLQABgRgigRIgMgGQgfgPgMgNQgLgNAAgTQAAgbATgQQATgRAdAAIANABIAPACIAKgEIAFgBQAKAAAKAQQAKAQAAASQgBAHgDAEQgCAEgHAAQgEAAgFgEQgEgEgHgJQgHgNgIgFQgIgFgMAAQgKAAgIAHQgHAGAAALQAAAJAHAHQAIAIAZAMIACACQA4AbAAAhQAAAcgVATQgWATghAAg");
	this.shape_23.setTransform(-10.6,-50.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDA7IgOhZIAAgDIAAgEQAAgKAEgGQAFgFAIAAQAJAAAFAFQAEAFABALIAAAFIgBADIgOBYg");
	this.shape_24.setTransform(-22.7,-62.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKB6QgKgDgIgHQgHgGgDgMQgDgLAAgeIAAhtIgSAAIgGgBIgCgFIAAgFQAAgHAVgSIAJgHIAIgHQAVgSAHAAIAGABQACACAAADIAAAmIAuAAQAFAAACACQACACAAAGIAAAEQAAAGgCACQgDACgEAAIgqAAIgDADIgCAEIAABkQAAAaAFAHQAEAGAMABQAHAAAKgEIAOgDQAEAAADADQADADAAADQAAAMgRALQgSAJgVABQgMAAgKgEg");
	this.shape_25.setTransform(-33.3,-52);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAkBgIgLgLIgIAFQgZAQgZAAQgeAAgSgRQgTgRAAgcQAAghAYgRQAYgSAqAAQAKAAAFADQAFADAAAIQAAALgOAAQgTAAgNAJQgMAKAAARQAAARALAJQAKAKASAAQATAAAJgJQAIgIAAgWIAAhMQAAgSgIgKQgHgKgOAAQgKAAgIAFQgJAEgIAJIgEAGQgNAPgNAAQgIAAgFgFQgFgFAAgJQAAgTAYgNQAXgNAlAAQAWAAAQAGQAQAGAJALQAGAIADAMQADANAAAdIAABBQAAALABAGQACAFAFACIAGABQANAEAAAHQAAAJgOAIQgOAIgSAAQgJAAgKgKg");
	this.shape_26.setTransform(-51.3,-50);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAcCSQgKgDAAgIQAAgIALgEIAHgDQAFgDACgIQACgJAAgVQAAhCgJgPQgIgRgVAAQgKAAgKAHQgKAGgFAKQgFAJgCAQQgBAPAAAoQAAAUABAHQACAHAEACIAIADQAKAEAAAIQAAAIgKADQgKADgaAAQggAAgKgDQgJgDAAgJQAAgHAJgEIAGgCQAFgDADgJQACgIAAgWIAAgiIAAgfIgBhbQgCgXgDgEQgCgDgMgDQgMgDAAgHQAAgGAFgEQAFgEASgHIAUgFIATgCQAHAAADAEQADADAAAKIgBAIIgBBRIAAAKIABAFIACACIAFgFIAHgIQAKgKAMgFQAKgFANAAQAjAAARAWQARAXAAAtIAAATIABAkIAAAMQAAAKACAFQACAEAEADIAFACQAKAEAAAHQAAAJgJADQgKADggAAQgbAAgKgDg");
	this.shape_27.setTransform(-74.8,-54.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAcBHIgshwQgMglgIgRQgJgRgHgGIgLgEQgKgFAAgHQAAgJAJgDQAJgCAnAAQAlAAAJACQAKADAAAJQAAAIgPAGIgCABQgFABgCADQgDACAAAFQAAAHALAcIAhBYIAPAiQAEAIADAAQADAAAEgHIANgdIAEgJQAqhlAAgMQAAgHgDgEQgDgEgHgDIgFgCQgMgGABgHQAAgJAIgDQAIgCAhAAQAhAAAIACQAIADAAAJQAAAHgMAGIgJAEQgOAJgaBGIgSAqIgmBfIgHASQgNAggIABQgLgBgehOgAhTCEIgDgGQgag4gohoIgSgxIgMgZQgGgIgGgDIgGgCQgNgFAAgIQAAgJAJgDQAKgCAnAAQAmAAAKACQAJADAAAJQAAAIgQAGIgBAAQgGACgCADQgCACAAAFQAAAHAJAZIAiBZIAPAlQAFAHACAAQAEAAAEgKIAKgXQAFgOALAAQANAAAAAOIgDAMIgaBBIgGAPQgNAigIAAQgHgBgHgRg");
	this.shape_28.setTransform(-107.6,-54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenwhatsinourfest, new cjs.Rectangle(-130.6,-80.9,261.3,149.1), null);


(lib.seventeenupdatedctavid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B63100").ss(2,1,1).p("Aogi2IRBAAQBMAAA1A2QA2A1AABLQAABMg2A1Qg1A2hMAAIxBAAQhLAAg2g2Qg1g1AAhMQAAhLA1g1QA2g2BLAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B63100").s().p("AogC3QhLAAg2g2Qg1g2AAhLQAAhLA1g1QA2g2BLAAIRBAAQBMAAA1A2QA2A1gBBLQABBLg2A2Qg1A2hMAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenupdatedctavid, new cjs.Rectangle(-73.7,-19.2,147.5,38.5), null);


(lib.seventeenturkey_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenturkey();
	this.instance.parent = this;
	this.instance.setTransform(-106,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenturkey_1, new cjs.Rectangle(-106,-115,212,230), null);


(lib.seventeentable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.halfpagebannerseventeen_1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeentable, new cjs.Rectangle(-150,-300,300,600), null);


(lib.seventeenspinach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeengreens_1();
	this.instance.parent = this;
	this.instance.setTransform(-30,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenspinach, new cjs.Rectangle(-30,-57,60,114), null);


(lib.seventeenpie_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenpie();
	this.instance.parent = this;
	this.instance.setTransform(-51,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenpie_1, new cjs.Rectangle(-51,-67.5,102,135), null);


(lib.seventeenherbstuffing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTCUQgdgSAAgZQAAgMAGgGQAGgJANABQAJAAAGAFQAFAFADALQAFAQAOAKQAPAJAbAAQAdAAAUgLQAUgLAAgSQAAgLgHgFQgIgHgOAAIgaACIgiADQgoAAgWgOQgVgOAAgSQAAgMAHgKQAIgKARgKQgOgLgGgPQgHgPAAgRQAAglAcgYQAcgZAqABIAXABIAjAHQAIAAAKgEQAKgEAOgKIAHAHIADAIQAAAJgIAJQgHAJgNAHIAHASIACASQAAAmgbAYQgbAWgsAAIgYgBIgVgFIgHAIIgDAJQAAAKALAGQALAEAWAAIAigCIAjgCQAgAAAQAMQARANAAAYQAAAkgjAYQgkAYg1AAQgrAAgdgRgAgkhvQgMAOAAAXQAAAWALAPQAMANASAAQASAAANgNQANgOAAgXQAAgXgNgOQgMgPgSgBQgSABgMAPg");
	this.shape.setTransform(68,29.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhuBwQgMgEAAgJQAAgIALgFIAGgCQAGgDACgHQADgIAAgSIAAgPIgBgSIAAgWQAAgkgBgKQgCgMgFgCIgKgDQgOgFAAgIQAAgEAEgFQAEgDAKgEIAhgLIAXgEQAGAAADADQADAEAAAIIAAAOIABACIABACIABgBIABgBIAFgEIAFgFQAYgWAcAAQAQgBAQAIQAOAGALANQAKAMAFARQAEARAAAkIAAAeIAAAPIAAAMQAAARACAGQACAHAGADIAGACQALAFAAAIQAAAJgLAEQgKADgjAAQggAAgKgDQgLgEAAgIQAAgJALgEIAJgEQAFgCACgKQACgKAAgYQAAhIgJgSQgJgSgYAAQgLAAgLAIQgLAGgGANQgFAJgCASQgCARAAAtQAAAVACAIQACAHAFACIAIAEQAMAEAAAJQAAAIgLAEQgLAEgeAAQgiAAgLgEg");
	this.shape_1.setTransform(41.8,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnChQgMgDAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgSIAAgYQAAgjgBgKQgCgLgFgCIgKgEQgOgFAAgHQAAgFAEgEQAEgEAKgEIAigLIAXgEQAGAAADAEQADAEAAALIAAANIgBAKIgBA5IAAABIgBA4QAAAVACAJQACAJAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgeAAQghAAgLgEgAgbhxQgKgIAAgMQAAgNALgJQAKgJAQAAQANAAAKAIQAKAJAAAMQAAAMgLAJQgKAJgPAAQgPAAgJgIg");
	this.shape_2.setTransform(21.9,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/CiQgLgDAAgKQAAgHALgEIAFgCQAGgDACgHQACgIAAgTIAAgWIAAhsIgZAAQgFAAgCgCQgCgDAAgGIAAgFQAAgGACgDQACgCAGAAIAXAAIgCgSIgBgQQAAgiAVgTQAUgTAlAAQAZAAAQALQARAMgBASQAAAKgFAGQgGAFgLAAQgHAAgGgDQgGgDgEgGIgEgIQgIgRgNAAQgIAAgFAGQgFAGgBAIIAGAaQAEATAAAQIAhAAQAGAAACACQACACAAAHIAAAFQAAAGgCACQgDADgFAAIggAAIAABzQAAAdACAJQABAJAFACIAJAEQANAEAAAJQAAAJgLADQgLADggAAQghAAgLgDg");
	this.shape_3.setTransform(11.1,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/CiQgLgDAAgKQAAgHAKgEIAGgCQAGgDACgHQACgIAAgTIAAgWIAAhsIgZAAQgGAAgBgCQgDgDAAgGIAAgFQAAgGADgDQACgCAFAAIAYAAIgCgSIgBgQQAAgiAVgTQAUgTAlAAQAaAAAPALQAQAMABASQgBAKgFAGQgGAFgLAAQgIAAgFgDQgGgDgDgGIgFgIQgIgRgNAAQgJAAgEAGQgFAGAAAIIAFAaQAEATAAAQIAiAAQAFAAACACQACACAAAHIAAAFQAAAGgCACQgDADgEAAIghAAIAABzQAAAdABAJQACAJAFACIAJAEQANAEAAAJQAAAJgLADQgLADggAAQghAAgLgDg");
	this.shape_4.setTransform(-1.7,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgMAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTAAgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAEgEQAFgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIAAAJIgDBUQAAAuAKARQAKASAWAAQAZAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQgBgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIAAANIgDBcIAAAmIACAPQACAJALAFIAAAAIAEABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_5.setTransform(-23.7,25.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLCHQgMgDgIgHQgIgIgDgMQgDgNAAghIAAh5IgVAAIgGgBIgCgHIAAgFQAAgHAXgUIAKgIIAIgIQAYgUAIAAIAGACQADACAAADIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHABAMgEIAPgEQAFAAADADQADADAAAFQAAAMgTAMQgTAMgYAAQgNgBgLgEg");
	this.shape_6.setTransform(-44.8,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3CjQgZgGgQgJQgJgFgGgUQgGgTAAgZQAAgLAEgFQAEgGAHAAQALAAALAVIAFAJQAPAZARAMQARALAXAAQAYAAARgPQARgOAAgWQAAgfhCgdIgHgEQg3gXgSgUQgSgUAAggQAAgoAegaQAegaAwAAIAaACIAfAHIAJgGIAIgCQAFAAAFAEQAEADAFAJQAHANAFAPQAEAPAAALQAAAIgDAEQgEAEgGAAQgMAAgMgQIgDgEQgNgRgPgIQgPgIgSAAQgZAAgPAMQgOALAAAVQAAASAMAMQAMANAwAUIAJAFQApAQASAQQAMALAGAPQAHAQAAASQAAAuggAaQggAZg5AAQgbAAgZgFg");
	this.shape_7.setTransform(-66.1,20.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfCiQgSgFgOgKIgNAJQgIAEgGAAIgHgBIgJgDIAAgEQAJgJADgUQAEgUAAgyIAAgyIAAgzQAAgqgCgOQgCgOgFgDIgMgEQgPgDAAgIQABgFAEgEQAFgEARgGIAagIIAXgDQAIAAADADQADADAAAIIAAANIgCBCIAABjIAAA7QAAAhALALQALAMAYAAQAcAAAQgYQAQgYAAgqQAAglgQgUQgPgVgaAAIgHAAIgGABQgRAAAAgQQAAgLARgHQAQgGASAAQArAAAaAdQAaAeAAAwQgBA6ggAiQgfAig2AAQgVAAgTgFg");
	this.shape_8.setTransform(36.5,-33.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhEBwQgLgDABgLQgBgHALgEIAHgDQAFgDADgIQACgHAAgRIAAgPIAAgSIAAgOQgBgpgBgNQgCgMgFgCIgKgFQgOgEAAgHQAAgGAFgDQADgEAKgFIAfgJIAUgFQALAAADAfIABAFIACAAQALgRAMgKQANgKANAAQAPAAAKAKQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgCIgJgHIgGgJQgDgGgCAAQgPAAgHAWQgFAWAABDQAAAUACAKQADAKAGACIAJAEQANADAAAKQAAAIgMAEQgNADgeAAQgiAAgMgDg");
	this.shape_9.setTransform(16.3,-28.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_10.setTransform(-4.7,-28);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAyCfQgMgEAAgKQAAgJAOgFIAKgFQAEgDACgOIABg1IAAggIgDgJQgCgEgLgCQgLgCgqAAIgvACQgNABgEADIgCAHIgCARIAAATIACA1QABAOAEADIAKAFQAOAFAAAJQAAAKgMAEQgMAEglAAQgiAAgNgEQgNgEAAgKQAAgJAOgFIAKgFQAFgEACgcQACgdAAhDIgChUQgCgigDgEQgCgDgMgFQgMgFAAgJQAAgJAKgDQAKgEApAAQAnAAALAEQAKADAAAJQAAAJgOAFIgKAFQgEADgBAOIgCBDQAAAJAIADQAJADAhAAIASAAIAvgBQAOgCAEgDIADgEIABgJIAAgKIgBg3QgCgMgEgDIgKgFQgOgFAAgJQAAgJAKgDQALgEAnAAQApAAAKADQAKAEAAAJQAAAJgOAFIgKAFQgFAEgCAeQgCAfAAA8IACBXQACAiADAEQACAEAMAEQAMAFAAAJQAAAKgNAEQgMAEgkAAQgkAAgMgEg");
	this.shape_11.setTransform(-33.7,-32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenherbstuffing, new cjs.Rectangle(-81.1,-62,162.3,111.2), null);


(lib.seventeenham_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenham();
	this.instance.parent = this;
	this.instance.setTransform(-71.5,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenham_1, new cjs.Rectangle(-71.5,-99,143,198), null);


(lib.seventeengreens_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeengreenbeans();
	this.instance.parent = this;
	this.instance.setTransform(-32.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeengreens_2, new cjs.Rectangle(-32.5,-78.5,65,157), null);


(lib.seventeencranberries_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeencranberries();
	this.instance.parent = this;
	this.instance.setTransform(-48.5,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeencranberries_1, new cjs.Rectangle(-48.5,-21.5,97,43), null);


(lib.seventeenberries = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeengreens();
	this.instance.parent = this;
	this.instance.setTransform(-47,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenberries, new cjs.Rectangle(-47,-57,94,114), null);


(lib.sevenmashedpotatoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape.setTransform(78.7,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_1.setTransform(57.2,25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhSBUQgfghAAgyQgBgyAigiQAigiAyAAQAwAAAgAgQAeAfAAAyQAAAzghAjQgiAkgwAAQgxAAgggigAgrhDQgNASAAAfQAAAsATAeQATAeAaAAQAWAAAOgTQAOgSAAgfQAAgrgTgeQgUgegaAAQgWAAgOASg");
	this.shape_2.setTransform(32.7,25.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLCHQgMgDgIgHQgIgIgDgMQgDgNAAghIAAh5IgVAAIgGgBIgCgHIAAgFQAAgHAXgUIAKgIIAIgIQAYgUAIAAIAGACQADACAAADIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHABAMgEIAPgEQAFAAADADQADADAAAFQAAAMgTAMQgTAMgYAAQgNgBgLgEg");
	this.shape_3.setTransform(12.1,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoBqIgMgMIgKAFQgbATgcAAQghAAgUgTQgVgTABgfQAAglAagTQAagUAvAAQALAAAGADQAFAEABAIQgBANgPAAQgWAAgNALQgOAKgBATQABASAMALQALALAUAAQAVAAAKgKQAJgJAAgYIAAhVQAAgUgIgLQgJgLgPAAQgLAAgKAFQgKAFgIAKIgFAGQgOASgPAAQgJAAgFgGQgGgGABgKQAAgVAagOQAagPApAAQAYAAATAHQASAGAJANQAHAJADANQACAOAAAhIAABHQAAANADAHQACAGAEABIAHACQAPAEAAAIQAAAKgQAJQgPAJgUAAQgKAAgLgMg");
	this.shape_4.setTransform(-7.8,25.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLCHQgMgDgIgHQgIgIgDgMQgDgNAAghIAAh5IgVAAIgGgBIgCgHIAAgFQAAgHAXgUIAKgIIAIgIQAYgUAIAAIAGACQADACAAADIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHABAMgEIAPgEQAFAAADADQADADAAAFQAAAMgTAMQgTAMgYAAQgNgBgLgEg");
	this.shape_5.setTransform(-28.1,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhRBUQghghAAgyQABgyAhgiQAigiAxAAQAyAAAeAgQAfAfAAAyQABAzgiAjQgiAkgvAAQgyAAgfgigAgqhDQgOASAAAfQAAAsATAeQASAeAbAAQAWAAAOgTQANgSAAgfQAAgrgTgeQgSgegaAAQgXAAgNASg");
	this.shape_6.setTransform(-48.8,25.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah0ChQgNgFAAgKQAAgJAOgFIAKgFQAFgEACgaQACgcAAhGIgChVQgCghgDgEQgCgDgMgFQgMgFAAgIQAAgJAHgEQAHgEAOAAIAXAAIAaABIAtgCIAkgBQAzAAAZAWQAZAWAAAqQAAAvgfAZQgfAYg8AAQgWAAAAgPQAAgPATAAQAcAAASgPQARgPAAghQAAgfgRgPQgSgPglAAQgQAAgHACQgGADgDAGIgCAVIgBAvIAABjIABBAQACARAEADIAKAFQAOAFAAAJQAAAKgMAFQgNADgkAAQgjAAgMgDg");
	this.shape_7.setTransform(-74.5,20.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhiCIQgbgeAAgwQAAg4AfghQAegjAxAAIAPACQAHABAEAGQAEAFAAAFQAAAMgPAAIgGAAIgGgBQgZAAgPAVQgPAUAAAkQAAAlAQAYQARAYAZAAQAXAAANgNQANgNAAgZIAAg+IAAhoQAAgQgDgFQgDgHgIgCIgGgDQgOgDAAgJQAAgFAFgFQAGgEARgGIAZgIIAVgCQAIAAADAEQAEAEAAALIgBALIgCCLIABBeQACAWADADIAQAFQAMACAAAJQAAAKghALIgWAGIgRACQgHgBgDgDQgCgEAAgHIAAgLIgBgFIgBgBIgHAFIgKAIQgNAJgMAFQgNAFgOAAQgrAAgagfg");
	this.shape_8.setTransform(68.3,-33);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_9.setTransform(42.3,-28);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfCiQgKgEgBgIQAAgJAMgEIAIgEQAGgDABgJQACgKAAgYQAAhIgJgSQgJgSgXAAQgLAAgMAHQgKAIgHAKQgEALgCAQQgCASAAAsQAAAXACAHQACAIAEACIAIAEQAMAEAAAJQAAAIgLAEQgLADgdAAQgkAAgKgDQgLgDAAgLQAAgHALgEIAFgDQAHgDACgKQADgJAAgZIAAglIAAgiIgChmQgBgYgDgFQgDgEgOgDQgNgEAAgIQAAgGAGgEQAGgFATgHIAXgGIAVgDQAIAAACAFQADAEAAAKIAAAJIgCBaIAAAMIABAFIAEACIAFgFIAHgJQAMgLANgGQALgGAPAAQAnAAASAZQAUAagBAyIABAVIAAAoIAAANQAAALACAFQACAFAFADIAGADQALAEAAAHQAAALgKADQgLADgkAAQgeAAgLgDg");
	this.shape_10.setTransform(16.5,-33.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape_11.setTransform(-6.4,-28.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAoBqIgMgMIgKAFQgbATgcAAQghAAgUgTQgUgTAAgfQAAglAagTQAagUAvAAQALAAAGADQAFAEAAAIQAAANgPAAQgWAAgNALQgOAKgBATQAAASAMALQANALATAAQAVAAAKgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgJAFgJAKIgFAGQgOASgPAAQgJAAgFgGQgGgGAAgKQAAgVAagOQAbgPApAAQAYAAATAHQASAGAJANQAHAJADANQADAOgBAhIAABHQABANACAHQACAGAEABIAIACQANAEAAAIQAAAKgOAJQgPAJgVAAQgKAAgLgMg");
	this.shape_12.setTransform(-27.8,-28);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABUCfQgMgEAAgKQAAgJAOgFIAKgFQAEgDACgKQABgKAAgfIAAgLIAAhgIgBg5IgdBLQhCCsgOAAQgHAAgNgXQgNgYgghJIgxhxIgCBYIgBA9IABAqQACAKADADIAKAFQAOAFAAAJQAAAKgLAEQgMAEgcAAQgYAAgLgEQgMgFAAgJQAAgIANgGQAMgGABgEQADgLAEg6QADg6AAhHIAAgHQAAgYgCgIQgCgIgFgDIgLgFQgOgFAAgJQAAgJAKgDQAKgEAhAAIAgABIAJACQAEADAQAoIANAgIAHAQQA2CHAEAAQAFAAAVgwQAUgwAchQIAEgNQAIgZAHgIQAEgEAJgBIAfgCQAeAAAKAEQAKADAAAJQAAAJgNAFIgGACQgHAEgCAJQgCAJAAAjIACCAQACA5ACAJQACAFAKAEIAEABIAJAGQADADAAAFQAAAKgNAEQgMAEglAAQgiAAgNgEg");
	this.shape_13.setTransform(-60.7,-32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sevenmashedpotatoes, new cjs.Rectangle(-90.7,-62,181.4,111.2), null);


(lib.roastedturkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEDGQgDgCAAgEQAAgFAPgKQAOgKAJgJQAYgbAMgnQANgpAAg0QAAgxgNgpQgMgogYgaQgJgIgOgLQgPgKAAgFQAAgEADgCQACgCAGAAQAMAAASAKQATALAQARQAgAiASAqQARApAAAsQAAAsgRAqQgSArggAgQgQASgTAKQgSALgMAAQgGAAgCgCg");
	this.shape.setTransform(58.9,57.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeCiQgUgFgNgKIgNAJQgHAEgHAAIgHgBIgJgDIAAgEQAJgJAEgUQADgUAAgyIAAgyIAAgzQAAgqgCgOQgCgOgFgDIgMgEQgPgDAAgIQAAgFAGgEQAEgEARgGIAbgIIAVgDQAKAAADADQACADAAAIIAAANIgCBCIAABjIABA7QAAAhAKALQAKAMAZAAQAcAAAQgYQAQgYAAgqQAAglgPgUQgQgVgbAAIgGAAIgFABQgRAAgBgQQAAgLARgHQAQgGATAAQAqAAAaAdQAaAegBAwQAAA6gfAiQghAig1AAQgVAAgSgFg");
	this.shape_1.setTransform(38,53.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmCiQgLgDAAgKQAAgHAKgEIALgHQAEgDACgOIABgtIAAgjIAAgqIAAgRQAAg5gCgQQgCgRgFgDIgOgFQgOgDAAgIQAAgGAFgEQAEgEAQgFIAegJIAXgDQAHAAACAFQADAEAAAKIAAASQgDBQAABRIACBNQABAQAEAFIAMAGQALAEAAAJQAAAJgLADQgMAEgdAAQgiAAgLgEg");
	this.shape_2.setTransform(19.2,53.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2AVQgDgDAAgGIACgLIAFgLQADgHAEgCQADgCAJAAIALAAIAUAAIAmgBIAGgBQAIAAADADQADACAAAHQAAAMgHAKQgHALgLAAIgKgBIgNAAIgxACIgFABQgHAAgDgDg");
	this.shape_3.setTransform(5.6,58.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhPB8QgegiAAg4QAAgnAQgmQAPgmAdggQAVgWAOgLQAOgMAGAAQAJABAIAFQAJAGAAAFQAAADgPAOQgOAOgJAOQgOATgJATQgKAUgFAVQARgOARgHQAQgGASAAQAlgBAYAcQAZAaAAArQAAAvgfAeQggAdgxAAQgwABgdgjgAggAIQgMAOAAAZQAAAiAPAXQAPAWAXAAQAUAAANgPQAMgOAAgZQAAgigQgWQgPgWgXAAQgUAAgMAOg");
	this.shape_4.setTransform(-14.5,54.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAACQQgzAAgLgDQgLgEAAgIQAAgLATgDQANgCAFgDIAHgFIACgKIABggIABhoIAAgRIAAgNQAAgQgCgEQgDgFgIAAIgLABIgLAAQgHAAgDgCQgDgCAAgFQAAgHAHgFQAGgFARgGQAUgHATgFQARgEALAAQAJAAAFAEQAFADAAAHQAAAHgJAGIgDACQgDAEgBASIgBBVIAAA+IABAnIADALIAHAFIASAFQATACAAALQAAAJgLADQgLAEgtAAg");
	this.shape_5.setTransform(-39.5,55.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfC9QgTgKgQgSQgggggRgqQgSgqAAgtQAAgsASgqQARgqAgghQAQgRATgLQASgKAMAAQAGAAACACQADACAAAEQAAAEgPALQgOAKgJAJQgYAagMApQgNAoAAA0QAAAxANApQAMAoAYAaQAJAJAOAKQAPAKAAAFQAAAEgDACQgCACgGAAQgMAAgSgLg");
	this.shape_6.setTransform(-58.8,57.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhoCVQgLgKABgNQgBgMAJgIQAHgIAMAAIAJACIAIAEIAFAJQAHAJAEAAQALAAAMgQQAMgRAAgSQAAgTgQgkIgCgFIgkhPIgVgsQgEgIgNgFIgBAAQgHgEgDgDQgCgDAAgFQgBgKAMgDQAMgFAhAAQAhABAMADQALADgBAJIgBAIIgEAEIgIAEQgJADAAAEIAEARIASAtIASAqQAHALACAAQADAAAFgLIAPgjIARgtQAEgQAAgFQAAgHgMgHQgNgHAAgGQAAgIALgDQAKgDAagBQAaABAKADQAKADAAAJQAAAJgNADIgKAEQgMAGgPAnIgGARIgdBIQglBegXAcQgZAcggAAQgRABgLgKg");
	this.shape_7.setTransform(61.4,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_8.setTransform(38.1,5.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABKClIgKgBQgKgEgVgcIgKgMIgEgFQg2hHgFAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgBAJIAAAKIACAvQABAOADAEIANAGQAKAEAAAJQAAAJgLADQgLAEgeAAQgiAAgLgEQgLgDAAgKQAAgIALgEIAGgDQAGgDADgLQACgLAAgaIAAgcIgBgjIAAgbIgBhUQgBgVgEgEQgCgDgLgDIgHgCIgIgEIgCgGQAAgGAEgEQAFgEAQgFIAegJIAXgDQAHAAADAFQADAEAAAKIgCAsIgBA6IAAA4IABAMQABAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIAKgFIAQgOIAWgVQAGgHAAgDQAAgCgJgEQgHgFAAgHQAAgKALgEQALgEAhAAQAVAAAKAEQAKAEAAAJQAAALgQAEQgRAEgHAEQgIAFgTASIgEAEIgIAIIgCAFQAAAEAUAaIACADIAnAvQAQATAJAHQAFADAPAFQAOAFAAAJQAAAJgKAFQgLAEgYAAg");
	this.shape_9.setTransform(14.3,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhDBwQgLgDAAgLQAAgIALgDIAGgDQAFgDACgIQADgHAAgSIAAgOIAAgSIAAgOQAAgpgCgNQgCgMgFgCIgKgFQgOgEAAgHQAAgGAFgDQADgFAKgDIAfgKIAUgFQALAAADAfIABAFIACAAQALgSAMgJQANgKANAAQAQAAAJAKQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgCIgJgHIgGgJQgDgGgCAAQgPAAgHAWQgFAWAABDQAAAUACAKQACAKAHACIAJAEQANADAAAKQAAAIgMAEQgNADgeABQgigBgLgDg");
	this.shape_10.setTransform(-7.2,5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgMAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTAAgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAEgEQAFgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIAAAJIgDBUQAAAuAKARQAKASAWAAQAZAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQgBgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIAAANIgDBcIAAAmIACAPQACAJALAFIAAAAIAEABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_11.setTransform(-30,5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvChQgNgEAAgKQAAgJANgFQAMgFACgDQADgEABglIABhqIAAg8IgCgkQgBgGgEgCQgEgCgJAAIgKAAQgPAAgJAEQgJADgGAJIgHAPIgHAQIgGAHQgEACgEAAQgHAAgDgFQgDgGAAgOQAAgeAHgSQAHgSALAAIACAAQASADAbAAICEAAQAcAAASgDIACAAQALAAAHASQAHASAAAeQAAANgDAGQgDAGgHAAIgIgCIgGgHIgHgQIgHgPQgGgJgJgDQgJgEgQAAIgJAAQgJAAgEACQgEACgBAGIgBAkIgBA8IABBqQABAlADAEQACADAMAFQANAFAAAJQAAAKgNAEQgNADgjAAQgiAAgNgDg");
	this.shape_12.setTransform(-57.9,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhiCJQgbgfAAgxQAAg3AfgiQAegiAxAAIAPACQAHACAEAEQAEAFAAAGQAAANgPAAIgGgBIgGAAQgZAAgPAUQgPAUAAAjQAAAnAQAXQARAYAZAAQAXAAANgNQANgNAAgZIAAg+IAAhoQAAgQgDgGQgDgFgIgEIgGgBQgOgFAAgIQAAgFAFgFQAGgEARgHIAZgHIAVgCQAIAAADAEQAEAEAAAKIgBAMIgCCLIABBeQACAWADACIAQAGQAMACAAAJQAAAKghAKIgWAHIgRABQgHAAgDgDQgCgDAAgIIAAgLIgBgEIgBgCIgHAEIgKAIQgNALgMAEQgNAFgOAAQgrAAgageg");
	this.shape_13.setTransform(71.3,-53.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_14.setTransform(45.3,-48.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLCIQgMgEgIgHQgIgIgDgMQgDgNAAgiIAAh4IgVAAIgGgBIgCgHIAAgFQAAgHAXgVIAKgIIAIgHQAYgUAIgBIAGADQADABAAAEIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHAAAMgDIAPgEQAFAAADADQADADAAAEQAAANgTAMQgTALgYAAQgNAAgLgDg");
	this.shape_15.setTransform(25.5,-50.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape_16.setTransform(7.5,-48.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAoBqIgLgMIgKAFQgcATgcAAQghAAgUgTQgVgTAAgfQAAglAagTQAbgUAvAAQALAAAFADQAHAEAAAIQAAANgQAAQgWAAgOALQgOAKAAATQAAASANALQALALAUAAQAVAAAKgKQAJgJAAgYIAAhVQAAgUgIgLQgJgLgPAAQgLAAgKAFQgJAFgJAKIgFAGQgNASgQAAQgJAAgFgGQgFgGAAgKQAAgVAagOQAagPApAAQAZAAARAHQASAGAKANQAHAJADANQADAOAAAhIAABHQAAANACAHQACAGAFABIAGACQAOAEABAIQgBAKgPAJQgPAJgUAAQgKAAgLgMg");
	this.shape_17.setTransform(-13.9,-48.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhRBUQghghAAgyQABgyAhgiQAigiAxAAQAyAAAeAgQAfAfAAAyQABAzgiAjQgiAkgvAAQgyAAgfgigAgqhDQgOASAAAfQAAAsATAeQASAeAbAAQAWAAAOgTQANgSAAgfQAAgrgTgeQgSgegaAAQgXAAgNASg");
	this.shape_18.setTransform(-38.9,-48.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAwBxQgVhIgQgPQgPgOgXAAQgSAAAAgOQAAgPAPAAQAlAAASgOQASgPAAgeQAAgegSgPQgTgQgiAAQgSABgGACQgHACgCAGIgCAUIgCAuIAABkIACBDQABAQAFADIAKAFQANAEAAAKQAAAKgMAEQgMAEgkgBQgjABgNgEQgNgEAAgKQAAgJAOgFIAKgGQAFgEACgaQACgbAAhGIgChWQgBgggEgFQgCgCgMgGQgMgEAAgJQAAgIAHgEQAHgEAOAAIAyAAIAtgCIAkAAQAxgBAaAWQAaAVAAAoQAAAegRAVQgSAWgfAJIAAADQAYAEAOAPQAOAOALAlIAGAXQAJAjANAAIAGAAIAJgBQAEAAADADQAEAEAAAEQAAALgNAHQgNAHgVAAQgtAAgQg1g");
	this.shape_19.setTransform(-67.3,-53.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.roastedturkey, new cjs.Rectangle(-86,-82.4,172.1,164.8), null);


(lib.pumpkinapplepies = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape.setTransform(99.3,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_1.setTransform(77.8,25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnChQgMgDAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgSIAAgYQAAgjgBgKQgCgLgFgCIgKgEQgOgFAAgHQAAgFAEgEQAEgEAKgEIAigLIAXgEQAGAAADAEQADAEAAALIAAANIgBAKIgBA5IAAABIgBA4QAAAVACAJQACAJAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgeAAQghAAgLgEgAgbhxQgKgIAAgMQAAgNALgJQAKgJAQAAQANAAAKAIQAKAJAAAMQAAAMgLAJQgKAJgPAAQgPAAgJgIg");
	this.shape_2.setTransform(59.4,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah0ChQgNgFAAgKQAAgJAOgFIAKgFQAFgEACgaQACgcAAhGIgChVQgCghgDgEQgCgDgMgFQgMgFAAgIQAAgJAHgEQAHgEAOAAIAXAAIAaABIAtgCIAkgBQAzAAAZAWQAZAWAAAqQAAAvgfAZQgfAYg8AAQgWAAAAgPQAAgPATAAQAcAAASgPQARgPAAghQAAgfgRgPQgSgPglAAQgQAAgHACQgGADgDAGIgCAVIgBAvIAABjIABBAQACARAEADIAKAFQAOAFAAAJQAAAKgMAFQgNADgkAAQgjAAgMgDg");
	this.shape_3.setTransform(40.2,20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_4.setTransform(1.6,25.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmCiQgLgDAAgKQAAgHAKgEIALgHQAEgDACgOIABgtIAAgjIAAgqIAAgRQAAg5gCgQQgCgRgFgDIgOgFQgOgDAAgIQAAgGAFgEQAEgEAQgFIAegJIAXgDQAHAAACAFQADAEAAAKIAAASQgDBQAABRIACBNQABAQAEAFIAMAGQALAEAAAJQAAAJgLADQgMAEgdAAQgiAAgLgEg");
	this.shape_5.setTransform(-17,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhtCaQgMgEAAgKQAAgHAKgDIAMgHQAEgEACgSQACgRAAg5IAAgkQAAg9gDgSQgCgSgEgDIgLgDQgOgFAAgIQAAgFAEgEQAFgEAJgDIAfgLQAQgEAHAAQAGABADADQADADAAAJIAAALIAAAEIABACIAJgHIAJgHQAOgKAMgFQANgEANAAQAqAAAbAeQAaAfABAxQAAA1geAjQgeAjgvAAQgSAAgIgGQgHgFgBgJQAAgFAFgDQADgFAHAAIAFABIAIACQAZgBAPgUQAPgVAAgjQAAgmgQgYQgRgXgZAAQgXAAgNANQgOANAAAiIAACPIABAXQABAIADADQADADAKAEIAIADIAGADIABAHQAAAIgNAEQgNADggABQghgBgLgDg");
	this.shape_6.setTransform(-36.9,29.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhtCaQgLgEAAgKQAAgHAJgDIALgHQAFgEACgSQABgRAAg5IAAgkQAAg9gBgSQgDgSgFgDIgKgDQgOgFAAgIQAAgFAFgEQAEgEAIgDIAhgLQAPgEAHAAQAHABACADQADADAAAJIAAALIABAEIABACIAJgHIAIgHQAOgKAMgFQANgEANAAQAqAAAbAeQAbAfgBAxQAAA1gdAjQgeAjgvAAQgSAAgIgGQgHgFAAgJQAAgFADgDQAEgFAGAAIAGABIAIACQAZgBAPgUQAPgVAAgjQAAgmgRgYQgQgXgZAAQgYAAgNANQgNANAAAiIAACPIABAXQABAIADADQADADAKAEIAJADIAEADIACAHQAAAIgNAEQgNADggABQghgBgLgDg");
	this.shape_7.setTransform(-63.6,29.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAxCiQgNgEAAgKQAAgJAQgGIAEgBQAGgCACgDQADgDAAgGIgEgTIgIgXIgEgHIgDgCIgSgCIgigBIgUAAQgSAAAAgPQAAgSATAAIALAAIAXAAIAYABIgXg9IgWg1IgGAAIgXA4IgXA6IgWA6QgFANAAAIQAAAHADAFQADAEAHAEIAIACQAOAFAAAKQAAAKgMAEQgLAEgiAAQgjAAgLgEQgMgEAAgKQAAgJAOgGIAIgEQASgKAPgnIAFgNIAghRIAIgUQAhhRAIghQACgLAFgDQAEgDANABQAHAAAFACQAFADAFAJIAiBLIAtBqIAKAbQAaBBAPAIIAIADQAOAEAAAKQAAAKgOAEQgNAEgpAAQgnAAgOgEg");
	this.shape_8.setTransform(-92.7,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiICJQgqghAAg0QAAgdAOgWQANgWAegUIABgCQgKgKgFgLQgFgLAAgMQAAgjAagXQAagXApAAQAcAAATALQASALAAAOQAAAFgEAEQgEADgHAAIgSgFQgQgGgNAAQgSAAgLALQgLAMAAAUQAAAJADAGQADAHAGAFQAFAFALAFIANAFIAEACIACADQAAAFgIAJQgJAKgHAAIgKgCIgPgGQgNALgHAPQgGARAAAUQAAArAcAcQAcAcAsAAQAkAAAXgTQAWgTAAgfQAAgTgJgLQgJgLgQAAQgPAAgKAJQgKAJAAAPIAAAEIAAACIgDABIgEABQgIAAgFgGQgFgHAAgLQAAghBjgtIAHgDQAagMANgOQAOgOAAgQQAAgLgGgFQgGgFgMAAIgIABIgJABQgFAAgDgDQgDgDAAgFQAAgKANgHQAMgGATAAQAYAAAPANQAOANAAAXQAAAdgZAWQgYAXgyATQAVAIAKARQALARAAAXQAAARgGAQQgHAQgNAOQgVAWgeAMQgfALgoAAQhFAAgpggg");
	this.shape_9.setTransform(100.8,-33);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhuBwQgMgDAAgLQAAgHALgEIAGgDQAGgDACgIQADgHAAgRIAAgPIgBgSIAAgXQAAgkgBgLQgCgLgFgBIgKgFQgOgEAAgHQAAgFAEgEQAEgEAKgFIAhgKIAXgEQAGAAADAEQADADAAAHIAAAQIABACIABAAIABAAIABAAIAFgGIAFgDQAYgYAcAAQAQABAQAGQAOAIALALQAKANAFARQAEARAAAkIAAAeIAAAPIAAANQAAAQACAGQACAHAGADIAGADQALAEAAAHQAAAKgLAEQgKADgjAAQggAAgKgDQgLgEAAgIQAAgJALgEIAJgEQAFgDACgJQACgKAAgZQAAhGgJgTQgJgSgYAAQgLAAgLAHQgLAIgGALQgFAKgCASQgCARAAAsQAAAWACAHQACAIAFACIAIAEQAMAEAAAJQAAAIgLAEQgLADgeAAQgiAAgLgDg");
	this.shape_10.setTransform(54.6,-28.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnChQgMgDAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgSIAAgYQAAgjgBgKQgCgLgFgCIgKgEQgOgFAAgHQAAgFAEgEQAEgEAKgEIAigLIAXgEQAGAAADAEQADAEAAALIAAANIgBAKIgBA5IAAABIgBA4QAAAVACAJQACAJAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgeAAQghAAgLgEgAgbhxQgKgIAAgMQAAgNALgJQAKgJAQAAQANAAAKAIQAKAJAAAMQAAAMgLAJQgKAJgPAAQgPAAgJgIg");
	this.shape_11.setTransform(34.7,-33.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABKClIgKgBQgKgEgVgcIgKgMIgEgFQg2hHgFAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgBAJIAAAKIACAvQABAOADAEIANAGQAKAEAAAJQAAAJgLADQgLAEgeAAQgiAAgLgEQgLgDAAgKQAAgIALgEIAGgDQAGgDADgLQACgLAAgaIAAgcIgBgjIAAgbIgBhUQgBgVgEgEQgCgDgLgDIgHgCIgIgEIgCgGQAAgGAEgEQAFgEAQgFIAegJIAXgDQAHAAADAFQADAEAAAKIgCAsIgBA6IAAA4IABAMQABAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIAKgFIAQgOIAWgVQAGgHAAgDQAAgCgJgEQgHgFAAgHQAAgKALgEQALgEAhAAQAVAAAKAEQAKAEAAAJQAAALgQAEQgRAEgHAEQgIAFgTASIgEAEIgIAIIgCAFQAAAEAUAaIACADIAnAvQAQATAJAHQAFADAPAFQAOAFAAAJQAAAJgKAFQgLAEgYAAg");
	this.shape_12.setTransform(16.6,-33.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhtCaQgMgEAAgKQAAgGAKgFIAMgFQAEgFACgSQACgRAAg5IAAgkQAAg9gDgSQgCgSgEgCIgLgFQgOgEAAgHQAAgGAEgEQAFgEAJgDIAfgKQAQgEAHgBQAGAAADAEQADAEAAAHIAAALIAAAFIABABIAJgGIAJgGQAOgLAMgEQANgFANgBQAqAAAbAfQAaAfABAxQAAA1geAjQgeAjgvAAQgSAAgIgFQgHgGgBgJQAAgFAFgEQADgDAHAAIAFABIAIAAQAZABAPgVQAPgVAAgjQAAgmgQgXQgRgYgZAAQgXAAgNANQgOANAAAiIAACPIABAWQABAKADACQADAEAKACIAIADIAGAFIABAGQAAAJgNADQgNAEgggBQghABgLgEg");
	this.shape_13.setTransform(-10.8,-24);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ai3BwQgLgDAAgLQAAgHALgEIAGgDQAGgDADgIQACgHAAgRIAAgPIgBgSIAAgOQAAgpgBgNQgCgMgFgCIgKgFQgOgEAAgHQAAgFAEgEIAOgIIAigLIAWgFQAGAAADAEQADAEAAAIIAAAMIAAADIABACIABAAIABAAIABAAIAFgGIADgCQAbgZAcAAQAKAAAKAEQAKADAJAGQAHAGAJAJQAIALACAAQADAAAGgHIAKgKQAPgMALgFQALgFANAAQAaAAAUALQATAKAJAUQAKAUAABCIABAWIgBAMIAAAKQAAANADAHQACAFAFADIAGADQAMAEAAAHQAAAKgLAEQgLADgjAAQggAAgLgDQgLgEAAgIQAAgJAMgEIAIgEQAGgDACgLQACgMAAgaQAAhCgJgSQgJgSgYAAQgaAAgLAXQgMAXAAA1IAAANQAAAYADAIQACAIAGADIAGADQALAEAAAHQAAAKgLAEQgKADgjAAQgeAAgLgDQgLgEAAgIQAAgJALgEIAJgEQAFgCACgKQACgJAAgaQAAhGgJgTQgJgSgYAAQgMAAgLAHQgLAIgGALQgFALgCASQgCASAAAqQAAAVACAIQACAHAFADIAIAEQAMAEAAAJQAAAIgLAEQgMADgdAAQgjAAgLgDg");
	this.shape_14.setTransform(-44.4,-28.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgMAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTAAgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAEgEQAFgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIAAAJIgDBUQAAAuAKARQAKASAWAAQAZAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQgBgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIAAANIgDBcIAAAmIACAPQACAJALAFIAAAAIAEABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_15.setTransform(-78.6,-28);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah0CgQgNgEAAgJQAAgJAOgGIAKgFQAFgEACgbQACgbAAhGIgChVQgCghgDgEQgCgDgMgFQgMgFAAgJQAAgIAHgEQAHgEAOAAIAXAAIAaAAIAtgBIAkgBQAzAAAZAWQAZAWAAAqQAAAwgfAZQgfAYg8gBQgWAAAAgOQAAgQATAAQAcAAASgPQARgPAAghQAAgfgRgPQgSgPglAAQgQAAgHACQgGADgDAGIgCAVIgBAvIAABjIABBAQACARAEADIAKAFQAOAFAAAKQAAAJgMAEQgNAEgkAAQgjAAgMgEg");
	this.shape_16.setTransform(-104.8,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pumpkinapplepies, new cjs.Rectangle(-121,-62,242,111.2), null);


(lib.ordernowuse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATAmIgTg4IgSA4IgQAAIgZhLIAQAAIARA5IABAAIASg5IAPAAIATA5IARg5IAQAAIgZBLg");
	this.shape.setTransform(33.7,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAlQgHgDgFgFQgGgFgDgIQgDgIAAgIQAAgIADgHQADgHAGgFQAFgGAHgDQAIgDAIAAQAIAAAIADQAHADAGAGQAFAFADAHQAEAHAAAIQAAAIgEAIQgDAIgFAFQgGAFgHADQgIADgIAAQgIAAgIgDgAgKgYQgEACgEAEQgDADgCAGQgCAFAAAEQAAAGACAFQACAEADAEQAEAEAEACQAFACAFABQAGgBAEgCQAGgCACgEQADgEADgEQABgFAAgGQAAgEgBgFQgDgGgDgDQgCgEgGgCQgEgCgGAAQgFAAgFACg");
	this.shape_1.setTransform(22.7,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATAnIAAgpIgBgJIgCgHQgCgDgEgCQgDgCgFAAQgIAAgGAGQgFAIAAAKIAAAoIgQAAIAAg7IAAgIIAAgIIAOAAIABAGIAAAHIAAAAIAEgGIAGgEIAHgEIAHgBQAHAAAFADQAFACAEAEQAEAEACAGQABAFAAAHIAAAug");
	this.shape_2.setTransform(13.1,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAnIAAg7IAAgIIAAgIIAOAAIAAAHIAAAGIABAAQADgHAFgEIAHgDIAHgBIAGAAIgBAPIgGgBQgGAAgEACIgGAFQgCAEgBAEIgCAJIAAAng");
	this.shape_3.setTransform(2.2,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAlQgHgCgFgGQgGgFgDgHQgDgIAAgIQAAgJADgHQADgHAFgFQAGgGAHgDQAHgDAHAAQAJAAAHADQAGACAFAFQAFAGACAHQADAIAAAIIAAACIAAACIg7AAQAAAGACADQACAFADADQADADAFACQAEABAEABQAIAAAGgEQAFgDADgFIALAIQgGAIgIAFIgJACIgKABQgHAAgIgDgAAXgFQAAgFgCgEIgEgHIgGgEQgEgCgGAAIgIACIgHAEQgDADgCAEQgCAEAAAFIAsAAIAAAAg");
	this.shape_4.setTransform(-5.9,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRA6QgHgDgFgFQgFgGgDgHQgCgHAAgJQAAgIACgHQADgHAFgFQAFgGAHgDQAHgCAJAAQAIAAAHADQAHAFAEAFIAAAAIAAg5IAPAAIAAB4IgOAAIAAgMIgBAAQgEAIgIADQgHAEgHAAQgJAAgHgEgAgKgDQgEADgDACQgEAEgBAFQgCAFAAAFIACAKQABAGAEADQADAFAEACQAFACAFAAQAGAAAFgCQAFgCADgFQADgDACgFQACgFAAgGQAAgFgCgFQgCgFgDgEQgDgCgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_5.setTransform(-15.8,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAnIAAg7IAAgIIAAgIIAOAAIAAAHIAAAGIABAAQADgHAFgEIAHgDIAHgBIAGAAIgBAPIgGgBQgGAAgEACIgGAFQgCAEgBAEIgCAJIAAAng");
	this.shape_6.setTransform(-22.9,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMA7IgLgEQgLgFgIgHQgIgJgEgKQgFgLAAgNQAAgNAFgLQAEgKAIgJQAIgHALgFIALgCIAMgBQANAAALADIAKAGIAJAGQAIAJAFAKQAEALAAANQAAANgEALQgFAKgIAJIgJAHQgFADgFACQgLAEgNABIgMgBgAgRgpQgHADgHAHQgFAGgDAIQgDAIAAAJQAAAJADAIQADAJAGAGQAGAGAHAEQAIADAJAAQAJAAAJgDQAHgEAGgGQAGgGADgJQADgIAAgJQAAgJgDgIQgDgIgGgGQgGgHgHgDQgJgEgJAAQgJAAgIAEg");
	this.shape_7.setTransform(-33.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ordernowuse, new cjs.Rectangle(-41.9,-11.8,83.9,23.7), null);


(lib.ordernow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AATAmIgTg4IgSA4IgQAAIgYhLIAPAAIARA5IABAAIASg5IAPAAIASA5IASg5IAQAAIgaBLg");
	this.shape.setTransform(32.2,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63900").s().p("AgPAlQgIgDgGgFQgFgFgDgIQgDgHAAgJQAAgIADgHQADgIAFgEQAGgGAIgDQAHgDAIAAQAJAAAHADQAHADAGAGQAFAEAEAIQADAHAAAIQAAAJgDAHQgEAIgFAFQgGAFgHADQgHADgJAAQgIAAgHgDgAgKgYQgFACgDAEQgDADgCAGQgBAFAAAEQAAAGABAFQACAEADAEQADAEAFACQAFACAFABQAGgBAFgCQAEgCAEgEQADgEABgEQACgFAAgGQAAgEgCgFQgBgGgDgDQgEgEgEgCQgFgDgGABQgFgBgFADg");
	this.shape_1.setTransform(21.2,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D63900").s().p("AATAnIAAgpIgBgJIgCgHQgCgDgDgDQgEgBgFAAQgIgBgGAIQgGAGAAAMIAAAnIgOAAIAAg7IAAgHIgBgJIAOAAIAAAGIAAAGIABAAIAEgFIAGgEIAHgEIAHgBQAHAAAFADQAGACADAEQAEAFABAFQACAFAAAHIAAAug");
	this.shape_2.setTransform(11.6,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D63900").s().p("AgVAnIAAg7IAAgHIAAgJIAOAAIAAAHIAAAGIABAAQADgHAFgEIAHgDIAHgBIAGAAIgBAOIgGAAQgGAAgEACIgGAFQgCADgBAFIgCAJIAAAng");
	this.shape_3.setTransform(0.7,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63900").s().p("AgNAlQgHgDgFgFQgGgFgDgHQgDgIAAgIQAAgJADgHQADgIAFgEQAGgGAHgDQAHgDAHAAQAJAAAHADQAGACAFAGQAFAFACAHQADAHAAAJIAAACIAAACIg7AAQAAAGACADQACAFADADQADADAFACQAEABAEABQAIAAAGgDQAFgEADgFIALAJQgGAIgIAEIgJACIgKABQgHAAgIgDgAAXgGQAAgEgCgEIgEgHIgGgEQgEgCgGAAIgIACIgHAEQgDADgCAEQgCAEAAAEIAsAAIAAAAg");
	this.shape_4.setTransform(-7.4,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D63900").s().p("AgRA6QgHgDgFgFQgFgFgDgIQgCgHAAgJQAAgIACgHQADgGAFgGQAFgGAHgDQAHgCAJAAQAIAAAHADQAHAEAEAGIAAAAIAAg5IAPAAIAAB5IgOAAIAAgNIgBAAQgEAIgIADQgHADgHABQgJAAgHgEgAgKgCQgEACgDACQgEAEgBAFQgCAFAAAFIACAKQABAGAEADQADAFAEABQAFADAFAAQAGAAAFgDQAFgBADgFQADgDACgFQACgFAAgGQAAgFgCgFQgCgFgDgEQgDgCgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_5.setTransform(-17.3,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63900").s().p("AgVAnIAAg7IAAgHIAAgJIAOAAIAAAHIAAAGIABAAQADgHAFgEIAHgDIAHgBIAGAAIgBAOIgGAAQgGAAgEACIgGAFQgCADgBAFIgCAJIAAAng");
	this.shape_6.setTransform(-24.4,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D63900").s().p("AgLA7IgMgEQgLgEgIgJQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgLAIgJQAIgHALgFIAMgCIALgBQANAAALADIAKAGIAJAGQAIAJAEALQAFAKAAANQAAANgFALQgEAKgIAIIgJAIQgEADgGACQgLAEgNABIgLgBgAgRgpQgIADgFAHQgGAGgDAIQgDAJAAAIQAAAJADAIQADAJAGAGQAGAGAHAEQAIADAJAAQAJAAAIgDQAJgEAFgGQAGgGADgJQADgIAAgJQAAgIgDgJQgDgIgGgGQgFgHgJgDQgIgEgJAAQgJAAgIAEg");
	this.shape_7.setTransform(-34.6,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ordernow, new cjs.Rectangle(-43.4,-12.2,83.9,23.7), null);


(lib.mainsides = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBBQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAgFIAAgGIABgFIADgEIA4gsQAFgEADgFQADgEAAgGQAAgFgCgEQgCgEgEgCIgIgEIgHgBQgIAAgFACIgIAGIgHAGQgDACgDAAIgEgBIgEgCIgDgEQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIACgEQAEgGAFgEIALgHQAMgFANAAQAJAAAJACQAIADAGAFQAHAFAEAIQAEAHAAAKQAAALgHAJQgGAIgJAGIghAaIgBACIgBACQAAADADABIAxAAIAEABIACADIABAEIAAAEIgBAGQgBADgEAAg");
	this.shape.setTransform(92.4,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJBAIgEgBIgFgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAhQQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgCgBQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgEAAgDgDQgDgEAAgEIABgFQACgDACgBIAEgDIAGgEIAHgEIAGgEIAHgEIADgBQABAAAAAAQABAAAAABQABAAAAAAQABAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAABzQAAADgDABIgGACg");
	this.shape_1.setTransform(82.7,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBBIgDgBIgCgBIgCgBIgWgjIgDgEQgDgBgDAAIgQAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIAAAgQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAIgEACIgFAAIgEAAQgEAAgCgCQgCgBAAgEIAAh1QAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAFgBIA2AAQAKAAAIADQAIADAGAFQAGAGADAIQAEAIAAAKQAAALgEAHQgEAGgFAEIgJAHQgEACAAADIAAADIAFAHIAHAKIAHALIADAGIgCAEIgDADIgFACIgEAAgAgagpQgCACAAAEIAAAcQAAAEACACQADABADAAIAaAAIAJgBIAHgEQAEgCACgEQACgEgBgGQABgKgIgGIgHgEIgJgBIgaAAIgGABg");
	this.shape_2.setTransform(68.8,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNBCIgNgEIgLgGIgLgIQgJgJgGgNIgDgMIgBgOIABgMIADgNQAGgMAJgJIALgIIALgGIANgEIANgCIAOACIANAEQANAFAJAJQAJAJAFAMQAGAMAAANIgBAOIgFAMQgFANgJAJQgJAJgNAFIgNAEIgOABIgNgBgAgQgoQgHAEgGAGQgHAGgDAIQgEAIAAAIQAAAKAEAIQADAIAHAGQAGAGAHADQAJADAHAAQAIAAAIgDQAJgDAGgGQAGgGADgIQAEgIAAgKQAAgIgEgIQgDgIgGgGQgGgGgJgEQgIgDgIAAQgHAAgJADg");
	this.shape_3.setTransform(54.2,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqBBQgFAAgCgFIAAh2QAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAIBYAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIACAEIABAEIAAADQAAAEgBACIgEAEIhAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQAAABgBAAQAAABAAAAQAAABgBABQAAAAAAABIAAAPQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIApAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABAAIABAFIABAFIAAADIgBAFQgBAAAAABQgBAAAAABQAAAAgBAAQgBAAAAAAIgpAAIgCABIgCABIgCACIgBADIAAAtQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABIgEABIgFAAg");
	this.shape_4.setTransform(42.2,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcA+QgOgGgKgJIgBgDIgBgCIACgEIADgFIAFgDIAEgBQADAAAEACIAIAGIAKAFQAHACAIAAIAKAAIAKgDQAEgDADgDQADgEAAgGQAAgFgDgDQgEgDgGgCIgOgCIgOgDIgOgDQgIgCgGgDQgFgEgEgGQgDgGAAgKQAAgKAEgIQAGgHAIgFQAHgEAKgDQAJgCAIAAIAMABIANADIAMAFIAKAHIABACIAAADQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgEAEIgFADIgFABIgEAAQgGgGgIgDQgIgEgIAAIgIABIgJADQgEACgDADQgCAEAAAFQAAAHAFADQAGADAJABIATADQAMABAIAEQAJADAHAHQAGAHAAANQAAALgGAIQgEAIgJAFQgIAGgKACQgKADgIAAQgOAAgOgFg");
	this.shape_5.setTransform(23.6,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrBAIgEgCQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAh1QAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAIAEgCIBZAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABIABADIAAAFIAAADIgBAFIgDAEIhCAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAABIAAAQQAAABAAABQAAABABAAQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAIArAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAIABAFIAAAFIAAADQAAAFgFACIgpAAQgCAAgDACQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAIAAAUQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAAAABABQAAAAABABQAAAAABAAQABAAAAAAIBCAAQAEACAAAFIAAAEIgBAFIgBAEQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_6.setTransform(11.8,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BAIgFgBQgCgCgBgCIAAh0QAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIAvAAIAOABIAMAEQANAEAJAIQAJAJAGAMIAEAMIACANQgBAPgFALIgHAMIgIAJIgKAHIgMAFQgMAFgOAAgAgjgnQgCACAAAEIAABFQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQADACADAAIAWAAQAJAAAIgDQAIgDAHgFQAFgGAEgIQADgHAAgKQAAgIgDgIQgEgIgFgFQgHgGgIgDQgIgCgJAAIgWAAQgEAAgCABg");
	this.shape_7.setTransform(-1.8,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABCIgEAAQgFAAgCgEIAAh7QAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAIAFgBIADAAIAFAAQAFAAACAEIAAB7IgDADIgEABg");
	this.shape_8.setTransform(-12.5,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcA+QgOgGgKgJIgBgDIgBgCIABgEIAEgFIAFgDIAEgBQADAAADACIAIAGIALAFQAHACAIAAIAJAAIAKgDQAFgDADgDQADgEAAgGQAAgFgDgDQgEgDgGgCIgOgCIgNgDIgQgDQgHgCgFgDQgHgEgDgGQgDgGgBgKQAAgKAGgIQAFgHAHgFQAIgEAJgDQAKgCAHAAIANABIANADIAMAFIAKAHIABACIAAADQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgEAEIgFADIgFABIgEAAQgGgGgIgDQgHgEgJAAIgIABIgJADQgEACgDADQgDAEABAFQgBAHAHADQAGADAIABIATADQALABAKAEQAIADAHAHQAGAHAAANQAAALgGAIQgEAIgJAFQgIAGgKACQgKADgIAAQgOAAgOgFg");
	this.shape_9.setTransform(-21.6,-0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbBAQgJgCgGgFQgHgFgFgIQgEgHAAgKQAAgJAEgIQAFgHAHgEIACgCIAAgDIgBgEIgDgFIgEgGQgBgEAAgGQAAgIADgHQAFgGAFgFQAHgEAHgCQAHgDAJAAQAGAAAIADQAJADAGAGQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgBAEIgDAEIgEADIgEABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBIgEgDIgEgDQgDgCgFAAIgHABIgHAEIgEAFIgCAHQAAAIAEAEQADAEAFABIAJABQADAAACACQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABIAAAFIgBAEQAAAAgBABQAAAAAAABQgBAAgBAAQAAAAgBAAIgKABQgGABgEADQgFACgCAEQgDAFAAAGQAAAGADAEQACAEADADIAIAEIAKABQAJAAAGgEQAHgEADgHQAEgHABgIQABgIAAgIIAAgCIAAgEIAFgFQADgDADAAIAUAAQABAAABAAQABABAAAAQABAAAAABQAAAAABABIAAAFQAAADgBABIgEABIgEABQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAIgCADIgBADQAAANgEAKQgDAKgHAIQgGAIgKAEQgKAFgMAAQgJAAgJgDg");
	this.shape_10.setTransform(-39.6,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAmBDQgDgBgDgDIg0hIQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAIgDACQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIAABCQgBADgDABIgHABIgHAAQgEgBgBgEIAAh5QAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAEgCIAFAAIADgBQAHAAACAFIA0BFIADABIADAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAhBIADgDIAEgBIAFgBIAFAAQAFAAACAGIAAB6IgEAEIgFABg");
	this.shape_11.setTransform(-58.7,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAABCIgEAAQgFAAgCgEIAAh7QAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAIAFgBIADAAIAFAAQAFAAACAEIAAB7IgDADIgEABg");
	this.shape_12.setTransform(-68.3,-0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAvBAIgHAAQgEgBgBgDIgHgRIgDgDQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgrAAIgBABIgCACIgCABIgBABIgHARIgDACIgDABIgEABIgEAAIgCAAIgFAAIgDgCQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIA0h5QAAAAABAAQAAgBAAAAQABAAAAgBQAAAAABAAIAEgBIAFABQADAAACACIAyB5IAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgEABIgFABgAgBgTIgBABIgCADIgCAGIgEAIIgDAGIgBAGIgBADIABADQAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAIAZAAIACgBIABgDIgCgGIgDgJIgFgLIgDgGQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAg");
	this.shape_13.setTransform(-77.4,-0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AArBAIgGgBQgEgBAAgDIAAg7IgBgBIgDgBQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBABIgUAgQgCADgDAAIgEAAIgDgDIgSggQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgDABIAAACIAAA5QgCAFgEABIgIAAIgDAAIgDgBIgDgCIgBgDIAAhzQACgFADgBIAIAAIADABIAFACIAeA0QACADAEAAIADgBIADgDIAfgyQADgEAHAAIAFAAQACAAACADIAAB2QAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgFACIgEAAg");
	this.shape_14.setTransform(-90.8,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainsides, new cjs.Rectangle(-100.1,-11.3,200.2,22.8), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.hamturkeydinner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWBhQgIgJgBgOQABgNAIgJQAKgJAMAAQANAAAJAJQAKAJgBANQABAOgKAJQgJAJgNAAQgMAAgKgJgAgWgzQgIgJgBgNQABgOAIgJQAKgJAMAAQANAAAJAJQAKAJgBAOQABANgKAJQgJAJgNAAQgMAAgKgJg");
	this.shape.setTransform(64.1,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9BlQgKgDAAgJQAAgHAKgEIAGgCQAFgDACgHQACgHAAgPIAAgOIAAgQIAAgMQAAglgCgLQgBgLgFgDIgJgEQgNgDAAgHQAAgFAFgDQADgEAJgEIAbgJIASgDQAKAAAEAcIAAAEIABAAQAKgQAMgJQAMgIALAAQAOAAAIAIQAIAJAAAOQABAOgHAJQgGAIgLAAIgLgCIgIgGIgFgIQgDgGgBAAQgPAAgFAUQgFATAAA9QAAASABAJQADAJAGACIAIADQAMAEAAAIQAAAIgLADQgMADgbAAQgfAAgKgDg");
	this.shape_1.setTransform(51.2,28.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBNQgdgeAAgsQAAgvAdgeQAegfAtAAQAnAAAYAXQAXAWAAAmQgBANgDADQgEAFgPAAIhNAAQgHgBgDgDQgFgDAAgGQAAgFAFgDQADgDAHAAIApAAIALgBQACgCAAgFQAAgTgNgNQgNgOgSAAQgYAAgMAWQgMAUAAAeQAAAfAQAXQAQAYAZAAQAPgBALgDQAKgDAKgHIAIgFQAKgJAFAAQAEAAADADQAEADAAAEQAAAFgGAHQgFAHgIAHQgSAOgQAHQgRAGgTAAQgrAAgcgdg");
	this.shape_2.setTransform(32.2,28.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhjBlQgKgDAAgJQAAgHAKgEIAFgCQAFgDACgHQACgHAAgPIAAgOIAAgQIAAgUQAAgggCgKQgBgKgEgCIgKgEQgMgDAAgHQAAgFAEgDQAEgEAIgEIAegJIAVgDQAFAAADADQACADAAAGIAAAOIABACIABAAIABAAIABAAIAFgFIAEgDQAWgVAZAAQAOAAAOAGQAOAHAJAKQAJAMAEAPQAEAPAAAhIAAAbIAAANIAAAMQAAAOACAGQACAGAFADIAFACQAKAEAAAHQAAAIgJAEQgKADgfAAQgcAAgKgDQgKgDAAgIQAAgIAKgEIAIgDQAFgCACgJQACgJAAgWQAAhAgIgRQgJgQgVAAQgKAAgKAHQgKAGgFALQgFAJgCAQQgBAPAAAoQAAAUABAGQACAHAEACIAIADQAKAEAAAIQAAAIgKADQgKADgaAAQgfAAgKgDg");
	this.shape_3.setTransform(9.3,28.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhjBlQgKgDAAgJQAAgHAKgEIAFgCQAFgDACgHQACgHAAgPIAAgOIAAgQIAAgUQAAgggCgKQgBgKgEgCIgKgEQgMgDAAgHQAAgFAEgDQAEgEAIgEIAegJIAVgDQAFAAADADQACADAAAGIAAAOIABACIABAAIABAAIABAAIAFgFIAEgDQAWgVAZAAQAOAAAOAGQAOAHAJAKQAJAMAEAPQAEAPAAAhIAAAbIAAANIAAAMQAAAOACAGQACAGAFADIAFACQAKAEAAAHQAAAIgJAEQgKADgfAAQgcAAgKgDQgKgDAAgIQAAgIAKgEIAIgDQAFgCACgJQACgJAAgWQAAhAgIgRQgJgQgVAAQgKAAgKAHQgKAGgFALQgFAJgCAQQgBAPAAAoQAAAUABAGQACAHAEACIAIADQAKAEAAAIQAAAIgKADQgKADgaAAQgfAAgKgDg");
	this.shape_4.setTransform(-14.9,28.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjCRQgKgDAAgJQAAgHAKgDIAFgDQAFgDACgHQACgGAAgQIAAgOIAAgQIAAgVQAAgggCgJQgBgKgEgCIgKgDQgMgEAAgHQAAgEAEgEQAEgEAIgDIAfgKIAVgEQAFAAADAEQACAEAAAJIAAANIAAAJIgCAyIAAABIgBAyQAAAUACAIQACAIAEACIAIAEQAKAEAAAHQAAAIgKADQgKADgaAAQgeAAgKgDgAgYhmQgJgHAAgKQAAgMAKgJQAJgHAOgBQAMAAAJAIQAJAHAAALQAAAMgKAHQgJAIgOAAQgNAAgIgHg");
	this.shape_5.setTransform(-32.8,24.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsCTIgZgBIgRABIgRAAQgZAAgIgEQgHgDAAgJQAAgHAKgEQALgFACgDQADgEACgfIABhOIgBhLQgCgfgDgEQgCgDgKgEQgLgFAAgHQAAgJAIgDQAJgDAYgBIASABIAUAAIAbgBIAXAAQBLAAAqAnQApAoAABHQAABHgqAkQgqAkhRAAgAgshzQgJADgDAHQgCAHgCAYIgBA+IABBNQACAgACAGQACAGAOAFQANAEATAAQAuAAAXgcQAYgcAAg5QAAg8gbgfQgbgggyAAQgQAAgJADg");
	this.shape_6.setTransform(-54.3,24.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhdCHQgKgJAAgNQAAgKAHgHQAHgIAKAAIAJACIAHAFIAFAHQAFAIAEAAQALAAAKgPQALgPAAgQQAAgRgOggIgCgFIghhHIgTgnQgDgIgMgFQgHgDgDgCQgCgDAAgFQAAgJALgDQAKgEAeAAQAeAAAKAEQAKADAAAIIgCAGIgDAEIgIAEQgIADAAADIAFAPIAQApIAQAmQAFAKADAAQACAAAFgJIANghIAPgoQAFgOAAgFQAAgGgMgHQgLgGAAgGQAAgHAJgCQAKgEAXAAQAYAAAJAEQAIADAAAIQAAAHgLADIgJADQgLAHgNAiIgGAQIgaBAQgiBVgUAaQgWAZgeAAQgOAAgKgIg");
	this.shape_7.setTransform(128.7,-15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBBMQgdgdAAgsQAAgvAegeQAdgfAtAAQAnAAAYAXQAWAWABAmQgBANgDADQgEAEgPABIhNAAQgHAAgEgEQgDgEgBgFQABgFADgDQAEgDAHAAIApAAIAKgBQADgCAAgFQAAgTgNgOQgNgNgSAAQgYAAgMAVQgMAWAAAdQAAAfAQAXQAQAYAaAAQAOAAALgEQAKgDAKgHIAIgFQAKgJAFAAQAEAAADADQAEADAAAEQgBAFgFAHQgFAHgIAHQgSAPgQAGQgRAGgTAAQgqAAgdgeg");
	this.shape_8.setTransform(107.7,-19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABDCVIgJgCQgKgDgSgZIgJgLIgEgEQgwhAgFAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABgBAAIAAAIIAAAJIABArQABAMADAEIAMAFQAJAFAAAHQAAAIgKAEQgLACgaAAQgfABgKgEQgKgDAAgJQAAgHAKgEIAGgCQAFgDACgKQACgKABgXIgBgaIAAgfIAAgYIgBhMQgCgSgDgEQgCgDgJgDIgHgCIgIgDIgBgGQAAgFAEgEQAEgDAOgFIAcgIIAVgDQAFAAAEAEQACAEAAAKIgCAnIAAA1IAAAyIAAAKQABABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIAJgEIAPgNIATgTQAFgFAAgEQAAgBgHgFQgHgDAAgHQAAgIAJgEQAMgEAdAAQASAAAKAEQAIAEABAHQAAAKgPAEQgPAEgGADQgIAEgRARIgDADIgHAIIgCAEQAAADASAYIACADIAjArQAOAQAIAGQAFAEANADQANAFAAAIQAAAJgJAEQgJADgXAAg");
	this.shape_9.setTransform(86.3,-24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag9BlQgKgDAAgJQAAgHAKgEIAGgCQAFgDACgHQACgHAAgPIAAgOIAAgQIAAgMQAAglgCgLQgBgLgFgDIgJgEQgNgDAAgHQAAgFAFgDQADgEAJgEIAbgJIASgDQAKAAAEAcIAAAEIABAAQAKgQAMgJQAMgIALAAQAOAAAIAIQAIAJAAAOQABAOgHAJQgGAIgLAAIgLgCIgIgGIgFgIQgDgGgBAAQgPAAgFAUQgFATAAA9QAAASABAJQADAJAGACIAIADQAMAEAAAIQAAAIgLADQgMADgbAAQgfAAgKgDg");
	this.shape_10.setTransform(66.9,-19.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAsBnQgDgDAAgHIAAgOIAAgBIgBAAQgCAAgFAFIgDADQgKAKgMAFQgLAFgPAAQgQAAgNgGQgNgGgKgLQgJgLgEgQQgEgRAAgrIAAgNIAAgPIAAgEQAAgRgCgFQgCgEgHgDIgJgDQgLgDAAgHQAAgFAEgDQAEgEAOgFIAcgHIAWgDQAFAAADAEQACAEAAAJIAAAIIgCBMQgBApAJAPQAJAQAVAAQAWAAAKgUQAKgVAAgxIAAgPQAAgQgCgFQgCgFgIgCIgHgDQgMgDAAgHQAAgFAEgDQAEgEAOgFIAcgHIAUgDQAHAAACAEQADADAAAKIgBALIgCBTIAAAjIABANQACAJALAEIADABQAMAEAAAHQAAAEgDAEQgEADgJADIgdAKQgOADgHAAQgGAAgDgDg");
	this.shape_11.setTransform(46.4,-19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqCRQgMgEAAgJQAAgIAMgEQAKgEACgDQADgEABghIABhgIAAg1IgCghQgBgGgDgBQgEgCgIAAIgJAAQgOAAgIADQgIAEgFAIIgHANIgFAOIgGAGQgEADgEAAQgGAAgDgGQgCgFAAgNQAAgaAGgRQAGgQAKAAIACAAQAQADAZAAIB3AAQAYAAARgDIACAAQAKAAAGAQQAGARAAAaQAAANgCAFQgDAGgHAAIgGgDIgGgGIgGgOIgHgNQgFgIgIgEQgIgDgOAAIgJAAQgIAAgDACQgEABgBAGIgBAhIgBA1IABBgQABAhADAEQACADALAEQALAEAAAIQAAAJgMAEQgLADggAAQgfAAgLgDg");
	this.shape_12.setTransform(21.2,-24.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah6B7QgmgdAAgvQAAgaAMgUQAMgUAbgSIABgCQgJgJgEgJQgFgKAAgLQAAggAXgVQAYgUAlAAQAZAAARAKQARAKAAAMQAAAFgEADQgEADgGAAIgQgFQgPgFgLAAQgRAAgJAKQgKALAAASQAAAHACAHQADAFAFAFQAFAFAJAEIAMAFIAEABIACADQAAAFgIAIQgHAIgHAAIgJgBIgOgFQgLAJgGAOQgGAPAAASQAAAnAZAZQAaAZAnAAQAhAAAUgRQAUgRAAgbQAAgSgIgKQgIgKgOAAQgOAAgJAIQgJAJAAANIAAAEIAAACIgDABIgDAAQgHAAgFgGQgEgFAAgKQAAgeBZgpIAGgCQAXgLAMgNQAMgNAAgNQAAgKgFgFQgFgFgLAAIgHABIgIABQgEAAgDgDQgDgCAAgFQAAgJALgGQALgGASAAQAWAAAMAMQANAMAAAVQAAAZgWAVQgWAUgtARQATAIAJAPQAKAPAAAVQAAAPgGAPQgGAOgLANQgTAUgcAKQgcAKgjAAQg+AAglgdg");
	this.shape_13.setTransform(-19.5,-24);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AilBlQgJgDgBgJQABgHAJgEIAGgCQAFgDACgHQACgHAAgPIAAgOIAAgQIAAgMQAAglgBgLQgDgLgEgDIgJgEQgMgDAAgHQAAgFADgDIAOgHIAdgKIAUgEQAFAAADADQADAEAAAHIAAALIAAACIABACIABAAIABAAIABAAIAEgFIADgCQAZgWAYAAQAKAAAIADQAJACAJAGQAGAFAIAJQAIAKACAAQACAAAGgHIAJgJQAMgLAKgEQALgEALAAQAYAAARAJQASAKAIARQAJATAAA7IAAAUIAAALIAAAJQAAAMACAFQACAFAFADIAGACQAKAEAAAHQAAAIgJAEQgLADgfAAQgdAAgKgDQgKgDAAgIQAAgIALgEIAHgDQAGgDABgKQADgKAAgYQAAg8gJgQQgIgQgWAAQgXAAgKAVQgKAUAAAxIAAALQAAAWACAHQACAHAFADIAFACQAKAEAAAHQAAAIgJAEQgJADggAAQgbAAgKgDQgKgDAAgIQAAgIALgEIAHgDQAFgCABgJQACgIAAgXQABhAgJgRQgJgQgVAAQgKAAgKAHQgKAGgGALQgEAJgCARQgBAQgBAmQABATABAHQACAHAEACIAIADQAKAEAAAIQAAAIgKADQgKADgaAAQgfAAgLgDg");
	this.shape_14.setTransform(-67.7,-19.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAkBgIgLgLIgIAFQgZAQgZAAQgeAAgSgRQgTgRAAgcQAAghAYgRQAYgSAqAAQAKAAAFADQAFADAAAIQAAALgOAAQgTAAgNAJQgMAKAAARQAAARALAJQAKAKASAAQATAAAJgJQAIgIAAgWIAAhMQAAgSgIgKQgHgKgOAAQgKAAgIAFQgJAEgIAJIgEAGQgNAPgNAAQgIAAgFgFQgFgFAAgJQAAgTAYgNQAXgNAlAAQAWAAAQAGQAQAGAJALQAGAIADAMQADANAAAdIAABBQAAALABAGQACAFAFACIAGABQANAEAAAHQAAAJgOAIQgOAIgSAAQgJAAgKgKg");
	this.shape_15.setTransform(-96.9,-19.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAtCPQgLgDAAgJQAAgJANgEIAJgFQADgCACgNIABgwIgBgcIgBgIQgCgEgKgCQgKgBgmAAIgrABQgLABgEADIgCAGIgBAPIAAARIACAwQABANADACIAJAFQANAEAAAJQAAAJgLADQgLAEghAAQggAAgLgEQgLgDAAgJQAAgJAMgEIAJgFQAFgDACgaQABgaAAg8IgBhMQgCgegDgEQgCgDgKgEQgLgFAAgIQAAgIAJgDQAJgDAkAAQAkAAAJADQAKADAAAIQAAAIgNAFIgJAFQgDADgCAMIgBA8QAAAIAHADQAIADAeAAIAQAAIArgBQAMgBAEgEIACgDIABgIIAAgKIgBgxQgCgLgDgCIgJgFQgNgFAAgIQAAgIAKgDQAJgDAkAAQAkAAAJADQAJADAAAIQAAAJgNAEIgJAFQgEADgCAbQgCAcAAA2IACBOQACAfACAEQACADALAEQALAFAAAIQAAAJgLADQgMAEgfAAQghAAgLgEg");
	this.shape_16.setTransform(-123.4,-23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hamturkeydinner, new cjs.Rectangle(-140.8,-50.3,281.7,100.7), null);


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgWVgteMAsrAAAMAAABa9MgsrAAAg");
	this.shape.setTransform(0,0,1.045,1.029);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-150.5,-300.5,301,601), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqAXuQkoh9jkjkQjkjkh9koQiCkyAAlPQAAlOCCkyQB9koDkjkQDkjkEoh9QEyiCFOAAQFPAAEyCCQEoB9DkDkQDkDkB9EoQCCEygBFOQABFPiCEyQh9EojkDkQjkDkkoB9QkyCClPAAQlOAAkyiCg");
	this.shape.setTransform(164.8,164.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,329.5,329.6), null);


(lib.ctarectangleuse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D63900").ss(2,1,1).p("Aogi2IRBAAQBMAAA1A2QA2A1AABLQAABMg2A1Qg1A2hMAAIxBAAQhLAAg2g2Qg1g1AAhMQAAhLA1g1QA2g2BLAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AogC3QhLAAg2g2Qg1g2AAhLQAAhLA1g1QA2g2BLAAIRBAAQBMAAA1A2QA2A1gBBLQABBLg2A2Qg1A2hMAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectangleuse, new cjs.Rectangle(-73.7,-19.2,147.5,38.5), null);


(lib.butternutsquash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgCiQgLgEAAgIQAAgJALgEIAJgEQAFgCACgKQACgKAAgYQAAhJgJgQQgKgTgYAAQgLAAgKAIQgMAGgFAMQgGAJgBASQgCARAAAtQAAAWACAIQABAHAGACIAIAEQALAEAAAJQAAAIgLAEQgLAEgdAAQgkAAgLgEQgKgEAAgJQAAgIAKgEIAHgDQAGgDADgJQACgKAAgZIAAgkIAAgjIgBhmQgCgYgEgGQgCgDgNgDQgOgEAAgIQAAgGAGgEQAGgFAUgHIAWgGIAVgCQAHAAAEADQADAFAAAKIAAAKIgCBaIAAAKIABAGIADACIAFgFIAIgKQALgKANgGQAMgFAOAAQAmAAAUAZQASAZABAxIAAAVIAAApIAAAMQAAAMACAFQADAFAFADIAFACQALAFAAAIQAAAJgKAEQgLAEgkAAQgdAAgLgEg");
	this.shape.setTransform(61.1,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape_1.setTransform(38.2,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoBqIgLgMIgKAFQgcATgcAAQghAAgUgTQgVgTAAgfQAAglAagTQAbgUAvAAQALAAAFADQAHAEAAAIQAAANgQAAQgWAAgOALQgNAKAAATQAAASAMALQALALAUAAQAWAAAJgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgJAFgJAKIgFAGQgNASgQAAQgJAAgFgGQgFgGgBgKQABgVAagOQAagPApAAQAZAAARAHQATAGAJANQAHAJADANQADAOAAAhIAABHQAAANACAHQACAGAFABIAGACQAOAEAAAIQAAAKgPAJQgPAJgUAAQgKAAgLgMg");
	this.shape_2.setTransform(16.8,25.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIAAgBIgBgBQgDAAgFAGIgEADQgKALgNAGQgNAFgRAAQgRAAgPgGQgPgHgKgLQgLgNgEgSQgEgTAAgvIAAgPIAAgRIAAgFQAAgSgCgFQgDgFgJgDIgJgDQgMgEAAgIQAAgFAFgEQAEgEAQgFIAegJIAZgDQAFAAAEAFQACAEAAAKIgBAJIgBBUQAAAuAJARQAJASAYAAQAYAAAMgXQALgXAAg2IAAgRQAAgSgCgFQgDgGgIgCIgJgDQgNgEAAgIQABgFAEgEQAEgEAQgFIAegJIAYgDQAHAAADAEQACAFAAAKIgBANIgCBcIABAmIABAPQACAJALAFIABAAIAEABQAMAFAAAHQAAAFgEAEQgEAEgKAEIgfAKQgQAEgJAAQgGAAgDgDg");
	this.shape_3.setTransform(-9.2,25.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYCbQgMgEAAgKQAAgIALgFIAMgHQAEgFACgOIABgoIAAiKQAAgZgMgMQgNgNgYAAQgbAAgPAVQgQAUAAAlQAAAmAQAWQARAYAZAAIAIAAIAIgBQALAAAAAMQAAANgOAJQgNAIgXAAQgoAAgbgeQgagfAAgvQAAg5AfgiQAggiAzAAQAPAAAPADQAPAEANAGIAZgLIAPgDIAGACIABAGIAAAGIgCAgIAAB2IAAASQAAA4ACASQACASAFAFIALAGQAKAFAAAHQAAALgLADQgMAEghAAQghAAgLgDg");
	this.shape_4.setTransform(-35.3,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3CjQgZgGgQgJQgJgFgGgUQgGgTAAgZQAAgLAEgFQAEgGAHAAQALAAALAVIAFAJQAPAZARAMQARALAXAAQAYAAARgPQARgOAAgWQAAgfhCgdIgHgEQg3gXgSgUQgSgUAAggQAAgoAegaQAegaAwAAIAaACIAfAHIAJgGIAIgCQAFAAAFAEQAEADAFAJQAHANAFAPQAEAPAAALQAAAIgDAEQgEAEgGAAQgMAAgMgQIgDgEQgNgRgPgIQgPgIgSAAQgZAAgPAMQgOALAAAVQAAASAMAMQAMANAwAUIAJAFQApAQASAQQAMALAGAPQAHAQAAASQAAAuggAaQggAZg5AAQgbAAgZgFg");
	this.shape_5.setTransform(-61.9,20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLCIQgMgEgIgIQgIgHgDgMQgDgNAAgiIAAh4IgVAAIgGgCIgCgFIAAgGQAAgHAXgVIAKgIIAIgHQAYgVAIAAIAGACQADACAAAEIAAAqIAzAAQAFAAACADQACACAAAGIAAAFQAAAGgCACQgCADgFAAIgvAAIgDACIgCAFIAABwQAAAdAFAHQAFAIANAAQAHAAAMgEIAPgEQAFAAADADQADADAAAEQAAANgTAMQgTALgYAAQgNAAgLgDg");
	this.shape_6.setTransform(92.4,-30.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIAAgBIgCgBQgCAAgFAGIgEADQgKALgNAGQgNAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTABgvIAAgPIAAgRIAAgFQAAgSgDgFQgCgFgJgDIgJgDQgMgEAAgIQAAgFAEgEQAFgEAQgFIAegJIAZgDQAFAAAEAFQACAEAAAKIAAAJIgCBUQAAAuAJARQAKASAWAAQAaAAAKgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQAAgFAEgEQAEgEAQgFIAfgJIAXgDQAGAAAEAEQACAFAAAKIAAANIgDBcIABAmIABAPQABAJAMAFIAAAAIAFABQAMAFAAAHQAAAFgDAEQgFAEgKAEIgfAKQgRAEgIAAQgGAAgDgDg");
	this.shape_7.setTransform(70.7,-28);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhuBwQgMgDAAgLQAAgHALgEIAGgDQAGgDACgIQADgHAAgRIAAgPIgBgSIAAgXQAAgkgBgLQgCgLgFgBIgKgFQgOgEAAgHQAAgFAEgEQAEgEAKgFIAhgKIAXgEQAGAAADAEQADADAAAHIAAAQIABACIABAAIABAAIABAAIAFgGIAFgDQAYgYAcAAQAQABAQAGQAOAIALALQAKANAFARQAEARAAAkIAAAeIAAAPIAAANQAAAQACAGQACAHAGADIAGADQALAEAAAHQAAAKgLAEQgKADgjAAQggAAgKgDQgLgEAAgIQAAgJALgEIAJgEQAFgDACgJQACgKAAgZQAAhGgJgTQgJgSgYAAQgLAAgLAHQgLAIgGALQgFAKgCASQgCARAAAsQAAAWACAHQACAIAFACIAIAEQAMAEAAAJQAAAIgLAEQgLADgeAAQgiAAgLgDg");
	this.shape_8.setTransform(43.9,-28.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDBwQgLgDAAgLQAAgHALgEIAFgDQAGgDACgIQADgHAAgRIAAgPIAAgSIAAgOQAAgpgCgNQgCgMgFgCIgLgFQgNgEAAgHQAAgGAEgDQAEgEALgFIAegJIAUgFQALAAADAfIABAFIACAAQALgRAMgKQANgKANAAQAQAAAJAKQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgCIgJgHIgGgJQgDgGgCAAQgQAAgGAWQgFAWAABDQAAAUACAKQACAKAHACIAJAEQANADAAAKQAAAIgMAEQgNADgeAAQgiAAgLgDg");
	this.shape_9.setTransform(22.4,-28.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_10.setTransform(1.4,-28);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLCIQgMgEgIgIQgIgHgDgMQgDgNAAgiIAAh4IgVAAIgGgCIgCgFIAAgGQAAgHAXgVIAKgIIAIgHQAYgVAIAAIAGACQADACAAAEIAAAqIAzAAQAFAAACADQACACAAAGIAAAFQAAAGgCACQgCADgFAAIgvAAIgDACIgCAFIAABwQAAAdAFAHQAFAIANAAQAHAAAMgEIAPgEQAFAAADADQADADAAAEQAAANgTAMQgTALgYAAQgNAAgLgDg");
	this.shape_11.setTransform(-18.4,-30.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLCIQgMgEgIgIQgIgHgDgMQgDgNAAgiIAAh4IgVAAIgGgCIgCgFIAAgGQAAgHAXgVIAKgIIAIgHQAYgVAIAAIAGACQADACAAAEIAAAqIAzAAQAFAAACADQACACAAAGIAAAFQAAAGgCACQgCADgFAAIgvAAIgDACIgCAFIAABwQAAAdAFAHQAFAIANAAQAHAAAMgEIAPgEQAFAAADADQADADAAAEQAAANgTAMQgTALgYAAQgNAAgLgDg");
	this.shape_12.setTransform(-34.4,-30.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgNAFgQAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgEgTgBgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAFgEQAEgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIgBAJIgCBUQAAAuAKARQAJASAYAAQAYAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgNgEAAgIQAAgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIgBANIgCBcIAAAmIACAPQABAJAMAFIABAAIADABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_13.setTransform(-56.2,-28);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQCjIgsgCIgWABIgaABQgPAAgIgFQgIgEAAgIQAAgJAMgFQAMgEACgEQADgFACggIAChYIgChVQgCghgDgEQgCgDgMgFQgMgFAAgJQAAgIAHgEQAGgEAOAAIAYAAIAaAAIAtgBIAkgBQAxAAAaAUQAaAVAAAlQAAAfgTATQgSAUgkAGQAtAEAYAVQAYAWAAAlQAAArgdAXQgfAXg2AAgAgiiCQgIACgCADQgDAGgBAVIgCBBIAABeIACAsQABANADAGQADAFALACQAMADASAAQAlAAATgQQAUgPAAgeQAAgggWgPQgWgPgpAAQgTAAAAgNQAAgQATAAQAdAAATgNQATgOAAgeQAAgdgRgOQgSgOglAAg");
	this.shape_14.setTransform(-85.2,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.butternutsquash, new cjs.Rectangle(-102.4,-62,204.8,111.2), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.andsomuchmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape.setTransform(119.4,33.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_1.setTransform(101.2,25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhEBwQgLgEABgJQgBgJALgDIAHgDQAFgDADgHQACgIAAgSIAAgPIAAgSIAAgNQgBgpgBgMQgCgNgFgDIgKgDQgOgFAAgIQAAgFAFgEQADgDAKgEIAfgLIAUgEQALABAEAeIAAAFIACAAQALgRANgKQAMgJANAAQAPAAAKAJQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgDIgJgGIgGgJQgDgGgCAAQgPAAgHAWQgFAVAABEQAAAUACAKQADAKAGACIAJADQANAFAAAJQAAAIgNAEQgMAEgeAAQgjAAgLgEg");
	this.shape_2.setTransform(81.2,25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhSBUQgfghAAgyQAAgyAhgiQAigiAyAAQAwAAAgAgQAeAfAAAyQAAAzghAjQghAkgxAAQgwAAghgigAgqhDQgOASAAAfQAAAsATAeQASAeAbAAQAWAAAOgTQAOgSAAgfQgBgrgSgeQgUgegZAAQgXAAgNASg");
	this.shape_3.setTransform(59.4,25.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai3BwQgLgEAAgJQAAgIALgFIAGgCQAGgDADgHQACgIAAgSIAAgPIgBgSIAAgNQAAgpgBgMQgCgNgFgDIgKgDQgOgFAAgIQAAgFAEgDIAOgIIAigMIAWgDQAGAAADADQADAEAAAIIAAAMIAAACIABADIABABIABgBIABgBIAFgEIADgCQAbgZAcAAQAKAAAKACQAKADAJAHQAHAFAJAKQAIALACAAQADAAAGgHIAKgKQAPgNALgEQALgEANAAQAaAAAUAKQATAKAJATQAKAWAABBIABAWIgBANIAAAJQAAAOADAFQACAGAFADIAGACQAMAFAAAIQAAAJgLAEQgLADgjAAQggAAgLgDQgLgEAAgIQAAgJAMgFIAIgDQAGgDACgLQACgLAAgbQAAhCgJgSQgJgSgYAAQgaAAgLAXQgMAWAAA3IAAAMQAAAZADAHQACAIAGADIAGACQALAFAAAIQAAAJgLAEQgKADgjAAQgeAAgLgDQgLgEAAgIQAAgJALgEIAJgEQAFgDACgIQACgKAAgZQAAhIgJgSQgJgSgYAAQgMAAgLAIQgLAGgGANQgFAKgCATQgCARAAArQAAAUACAIQACAIAFACIAIAEQAMAEAAAJQAAAIgLAEQgMAEgdAAQgjAAgLgEg");
	this.shape_4.setTransform(25.8,25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfCiQgLgEABgIQAAgJALgEIAIgEQAFgCADgKQABgKAAgYQABhJgKgQQgJgTgYAAQgKAAgLAIQgMAGgGAMQgEAJgCASQgCARAAAtQAAAWACAIQACAHAEACIAJAEQALAEAAAJQAAAIgLAEQgLAEgdAAQgkAAgLgEQgKgEAAgJQAAgIAKgEIAGgDQAHgDACgJQADgKAAgZIAAgkIAAgjIgChmQgBgYgDgGQgDgDgNgDQgOgEAAgIQAAgGAGgEQAFgFAVgHIAWgGIAVgCQAIAAADADQACAFAAAKIAAAKIgBBaIAAAKIAAAGIAEACIAFgFIAIgKQALgKANgGQAMgFAOAAQAmAAAUAZQASAZAAAxIABAVIAAApIAAAMQAAAMACAFQADAFAEADIAGACQALAFAAAIQAAAJgKAEQgLAEgkAAQgdAAgMgEg");
	this.shape_5.setTransform(-21,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGBVQghghAAgxQAAgzAigiQAigjAyAAQAlAAAaAUQAaATAAAaQAAAKgHAHQgIAHgKAAQgMAAgHgGQgHgFgIgTQgHgQgJgGQgJgHgNAAQgZAAgPAUQgPATAAAjQABAnAUAaQAVAZAgAAQAKAAALgDQAKgDAIgGIAJgGQAMgKAHAAQAFAAACADQADACAAAFQAAAGgEAIQgGAIgHAGQgRAQgUAHQgTAIgWAAQgvAAgfghg");
	this.shape_6.setTransform(-45.6,25.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgMAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTAAgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAEgEQAFgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIAAAJIgDBUQAAAuAKARQAKASAWAAQAZAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQgBgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIAAANIgDBcIAAAmIACAPQACAJALAFIAAAAIAEABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_7.setTransform(-70.9,25.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai3BwQgLgEAAgJQAAgIALgFIAGgCQAGgDADgHQACgIAAgSIAAgPIgBgSIAAgNQAAgpgBgMQgCgNgFgDIgKgDQgOgFAAgIQAAgFAEgDIAOgIIAigMIAWgDQAGAAADADQADAEAAAIIAAAMIAAACIABADIABABIABgBIABgBIAFgEIADgCQAbgZAcAAQAKAAAKACQAKADAJAHQAHAFAJAKQAIALACAAQADAAAGgHIAKgKQAPgNALgEQALgEANAAQAaAAAUAKQATAKAJATQAKAWAABBIABAWIgBANIAAAJQAAAOADAFQACAGAFADIAGACQAMAFAAAIQAAAJgLAEQgLADgjAAQggAAgLgDQgLgEAAgIQAAgJAMgFIAIgDQAGgDACgLQACgLAAgbQAAhCgJgSQgJgSgYAAQgaAAgLAXQgMAWAAA3IAAAMQAAAZADAHQACAIAGADIAGACQALAFAAAIQAAAJgLAEQgKADgjAAQgeAAgLgDQgLgEAAgIQAAgJALgEIAJgEQAFgDACgIQACgKAAgZQAAhIgJgSQgJgSgYAAQgMAAgLAIQgLAGgGANQgFAKgCATQgCARAAArQAAAUACAIQACAIAFACIAIAEQAMAEAAAJQAAAIgLAEQgMAEgdAAQgjAAgLgEg");
	this.shape_8.setTransform(-105.1,25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhSBUQgfghAAgyQgBgyAigiQAigiAyAAQAwAAAgAgQAeAfAAAyQAAAzghAjQgiAkgwAAQgwAAghgigAgqhDQgOASAAAfQAAAsATAeQATAeAaAAQAWAAAOgTQAOgSAAgfQgBgrgSgeQgUgegZAAQgXAAgNASg");
	this.shape_9.setTransform(73.7,-28);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape_10.setTransform(51.1,-28.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhiCIQgbgeAAgwQAAg4AfghQAegjAxAAIAPACQAHABAEAGQAEAFAAAFQAAAMgPAAIgGAAIgGgBQgZAAgPAVQgPAUAAAkQAAAlAQAYQARAYAZAAQAXAAANgNQANgNAAgZIAAg+IAAhoQAAgQgDgFQgDgHgIgCIgGgDQgOgDAAgJQAAgFAFgFQAGgEARgGIAZgIIAVgCQAIAAADAEQAEAEAAALIgBALIgCCLIABBeQACAWADADIAQAFQAMACAAAJQAAAKghALIgWAGIgRACQgHgBgDgDQgCgEAAgHIAAgLIgBgFIgBgBIgHAFIgKAIQgNAJgMAFQgNAFgOAAQgrAAgagfg");
	this.shape_11.setTransform(16.4,-33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhuBwQgMgDAAgLQAAgHALgEIAGgDQAGgDACgIQADgHAAgRIAAgPIgBgSIAAgXQAAgkgBgLQgCgLgFgBIgKgFQgOgEAAgHQAAgFAEgEQAEgEAKgFIAhgKIAXgEQAGAAADAEQADADAAAHIAAAQIABACIABAAIABAAIABAAIAFgGIAFgDQAYgYAcAAQAQABAQAGQAOAIALALQAKANAFARQAEARAAAkIAAAeIAAAPIAAANQAAAQACAGQACAHAGADIAGADQALAEAAAHQAAAKgLAEQgKADgjAAQggAAgKgDQgLgEAAgIQAAgJALgEIAJgEQAFgDACgJQACgKAAgZQAAhGgJgTQgJgSgYAAQgLAAgLAHQgLAIgGALQgFAKgCASQgCARAAAsQAAAWACAHQACAIAFACIAIAEQAMAEAAAJQAAAIgLAEQgLADgeAAQgiAAgLgDg");
	this.shape_12.setTransform(-11.3,-28.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAoBqIgMgMIgKAFQgbATgcAAQghAAgUgTQgUgTAAgfQAAglAZgTQAbgUAvAAQALAAAGADQAFAEAAAIQAAANgPAAQgWAAgOALQgOAKABATQgBASAMALQANALATAAQAWAAAJgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgKAFgIAKIgFAGQgOASgPAAQgJAAgFgGQgGgGAAgKQAAgVAagOQAbgPApAAQAYAAATAHQARAGAKANQAHAJADANQACAOAAAhIAABHQABANACAHQACAGAEABIAIACQANAEAAAIQAAAKgOAJQgPAJgVAAQgKAAgLgMg");
	this.shape_13.setTransform(-36.5,-28);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape_14.setTransform(-55.1,-19.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape_15.setTransform(-67.6,-19.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape_16.setTransform(-80.1,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.andsomuchmore, new cjs.Rectangle(-127.7,-62,255.4,111.2), null);


(lib.whitelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,0,0.223,0.223);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgOAKgLQAKgJAOgBQAPABAKAJQAKALAAAOQAAAPgKAKQgKALgPgBQgOABgKgLgAAWAYIgPgVQANgBAAgNQAAgPgRAAIgTAAIAAAyIAJAAIAAgUIAFAAIAOAUIAKAAg");
	this.shape_1.setTransform(29.1,13.2,0.223,0.223);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgDAAgFIAAgtQAAgLANAAIA+AAQARAAAKAJQALAJAAAPQAAAQgLAJQgKAJgRAAg");
	this.shape_2.setTransform(-2.5,18.9,0.223,0.223);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(29.1,12.9,0.223,0.223);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCtQgog+AAhsQAAhuAog/QApg/BFAAQBGAAAqBAQApA+AABsQAABrgpA/QgpA/hGAAQhGAAgpg9g");
	this.shape_4.setTransform(-10.9,6.7,0.223,0.223);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgIAAADgIIAZgxQABgEADAAQADAAACAEIAZAyQABADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-9.9,19.6,0.223,0.223);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDtQgngDgNgHQgVgLAAghIAAljQAAghAKgMQAKgLAcgFIAdgDQBLAAAqA/QArA/AABvQAABxgrA/QgqA8hGAAIgJAAg");
	this.shape_6.setTransform(14.4,6.7,0.223,0.223);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hGAAQhGAAgpg9g");
	this.shape_7.setTransform(1.5,6.7,0.223,0.223);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.223,0.223,0,0,0,164.9,164.9);
	this.instance.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitelogo, new cjs.Rectangle(-39,-39,78,78), null);


(lib.ctarolloveruse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// order-now
	this.instance = new lib.ordernowuse();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

	// Layer 1
	this.instance_1 = new lib.seventeenupdatedctavid();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.7,-19.2,147.5,38.5);


// stage content:
(lib.halfpagebannerseventeen = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_438 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(407).call(this.frame_438).wait(2));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(150.3,301.6,1.456,0.919,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(440));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(440));

	// fade-from-white
	this.instance_1 = new lib.blackwideskyscraper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.2,300,1.826,1,0,0,0,0.1,0);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(431));

	// logo
	this.instance_2 = new lib.whitelogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,37,1.296,1.296);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({scaleX:0.11,scaleY:0.11,y:37.1},0).to({scaleX:1.3,scaleY:1.3,y:37,alpha:1},6).to({scaleX:1.21,scaleY:1.21},7).wait(418));

	// main-sides-for-more
	this.instance_3 = new lib.mainsides();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,272.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(426).to({alpha:1},10).wait(4));

	// ham-turkey-dinner
	this.instance_4 = new lib.hamturkeydinner();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,197.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(412).to({alpha:1},10).wait(18));

	// and-so-much-more
	this.instance_5 = new lib.andsomuchmore();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,205.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(357).to({alpha:1},10).wait(30).to({alpha:0},5).wait(38));

	// pumpkin-apple-pie
	this.instance_6 = new lib.pumpkinapplepies();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,205.9);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(317).to({alpha:1},10).wait(30).to({alpha:0},5).wait(78));

	// butternut-squash
	this.instance_7 = new lib.butternutsquash();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,205.9);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(277).to({alpha:1},10).wait(30).to({alpha:0},5).wait(118));

	// herb-stuffing
	this.instance_8 = new lib.seventeenherbstuffing();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,205.9);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(237).to({alpha:1},10).wait(30).to({alpha:0},5).wait(158));

	// mashed potatoes
	this.instance_9 = new lib.sevenmashedpotatoes();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,205.9);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(197).to({alpha:1},10).wait(30).to({alpha:0},5).wait(198));

	// spiral-cut-ham
	this.instance_10 = new lib.spiralcutham();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,205.9);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(157).to({alpha:1},10).wait(30).to({alpha:0},5).wait(238));

	// roasted-turkey
	this.instance_11 = new lib.roastedturkey();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,206.6);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(117).to({alpha:1},10).wait(30).to({alpha:0},5).wait(278));

	// whats-in-our
	this.instance_12 = new lib.seventeenwhatsinourfest();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,213.7);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21).to({alpha:1},10).wait(86).to({alpha:0},5).wait(318));

	// cta-rollover
	this.cta_rollover = new lib.ctarolloveruse();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(150,347.2);
	this.cta_rollover.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(31).to({alpha:1},10).wait(399));

	// order-now
	this.instance_13 = new lib.ordernow();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,347.3);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31).to({y:346.3},0).to({alpha:1},10).wait(399));

	// cta-rectangle
	this.instance_14 = new lib.ctarectangleuse();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150,347.2);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(31).to({alpha:1},10).wait(399));

	// pie
	this.instance_15 = new lib.seventeenpie_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(51,67.5);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(36).to({alpha:1},10).wait(394));

	// spinach
	this.instance_16 = new lib.seventeenspinach();
	this.instance_16.parent = this;
	this.instance_16.setTransform(30,543);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(51).to({alpha:1},10).wait(379));

	// cranberries
	this.instance_17 = new lib.seventeencranberries_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(79.5,578.5);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(56).to({alpha:1},10).wait(374));

	// ham
	this.instance_18 = new lib.seventeenham_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(71.5,400);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(46).to({alpha:1},10).wait(384));

	// berries
	this.instance_19 = new lib.seventeenberries();
	this.instance_19.parent = this;
	this.instance_19.setTransform(253,57);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(61).to({alpha:1},10).wait(369));

	// green-beans
	this.instance_20 = new lib.seventeengreens_2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(267.5,314.5);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(67).to({alpha:1},10).wait(363));

	// turkey
	this.instance_21 = new lib.seventeenturkey_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(194,485);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(41).to({alpha:1},10).wait(389));

	// table
	this.instance_22 = new lib.seventeentable();
	this.instance_22.parent = this;
	this.instance_22.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(440));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,286.5,300,616.6);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_P_.png", id:"index_atlas_P_"},
		{src:"images/index_atlas_NP_.jpg", id:"index_atlas_NP_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;