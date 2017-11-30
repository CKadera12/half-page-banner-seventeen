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
	this.shape.graphics.f("#FFFFFF").s().p("Ai3BwQgLgDAAgLQAAgHALgEIAGgDQAGgDADgIQACgHAAgRIAAgPIgBgTIAAgNQAAgpgBgNQgCgMgFgCIgKgFQgOgEAAgIQAAgEAEgEIAOgIIAigLIAWgFQAGAAADAEQADAEAAAIIAAAMIAAADIABACIABAAIABAAIABgBIAFgFIADgCQAbgZAcAAQAKABAKADQAKADAJAGQAHAGAJAKQAIAKACAAQADAAAGgHIAKgKQAPgMALgFQALgFANAAQAaAAAUALQATAKAJAUQAKAUAABCIABAWIgBAMIAAALQAAAMADAHQACAFAFADIAGADQAMAEAAAHQAAAKgLAEQgLADgjAAQggAAgLgDQgLgDAAgJQAAgJAMgEIAIgEQAGgDACgLQACgLAAgbQAAhCgJgSQgJgSgYAAQgaAAgLAXQgMAWAAA2IAAANQAAAYADAIQACAIAGADIAGADQALAEAAAHQAAAKgLAEQgKADgjAAQgeAAgLgDQgLgDAAgJQAAgJALgEIAJgDQAFgEACgJQACgJAAgaQAAhHgJgSQgJgSgYAAQgMAAgLAHQgLAIgGALQgFALgCASQgCASAAAqQAAAVACAIQACAHAFAEIAIADQAMAEAAAJQAAAJgLADQgMADgdAAQgjAAgLgDg");
	this.shape.setTransform(28.9,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoBqIgLgMIgKAFQgcATgcAAQghAAgUgTQgUgTgBgfQAAglAagTQAbgUAvAAQALAAAFADQAHAEgBAIQAAANgPAAQgWAAgOALQgNAKAAATQAAASALALQANALATAAQAWAAAJgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgKAFgIAKIgFAGQgOASgPAAQgJAAgFgGQgFgGgBgKQAAgVAagOQAbgPApAAQAZAAARAHQATAGAJANQAHAJADANQACAOABAhIAABHQgBANADAHQACAGAFABIAHACQAOAEgBAIQABAKgQAJQgOAJgVAAQgKAAgLgMg");
	this.shape_1.setTransform(-3.4,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAyCfQgMgEAAgKQAAgJAOgFIAKgFQAEgDACgOIABg1IAAggIgDgJQgCgEgLgCQgLgCgqAAIgvACQgNABgEADIgCAHIgCARIAAATIACA1QABAOAEADIAKAFQAOAFAAAJQAAAKgMAEQgMAEglAAQgiAAgNgEQgNgEAAgKQAAgJAOgFIAKgFQAFgEACgcQACgdAAhDIgChUQgCgigDgEQgCgDgMgFQgMgFAAgJQAAgJAKgDQAKgEApAAQAnAAALAEQAKADAAAJQAAAJgOAFIgKAFQgEADgBAOIgCBDQAAAJAIADQAJADAhAAIASAAIAvgBQAOgCAEgDIADgEIABgJIAAgKIgBg3QgCgMgEgDIgKgFQgOgFAAgJQAAgJAKgDQALgEAnAAQApAAAKADQAKAEAAAJQAAAJgOAFIgKAFQgFAEgCAeQgCAfAAA8IACBXQACAiADAEQACAEAMAEQAMAFAAAJQAAAKgNAEQgMAEgkAAQgkAAgMgEg");
	this.shape_2.setTransform(-32.8,7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLCHQgMgDgIgHQgIgIgDgMQgDgNAAghIAAh5IgVAAIgGgBIgCgHIAAgFQAAgHAXgUIAKgIIAIgIQAYgUAIAAIAGACQADACAAADIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHABAMgEIAPgEQAFAAADADQADADAAAFQAAAMgTAMQgTAMgYAAQgNgBgLgEg");
	this.shape_3.setTransform(96.6,-43.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgMAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTAAgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAEgEQAFgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIAAAJIgDBUQAAAuAKARQAKASAWAAQAZAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQgBgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIAAANIgDBcIAAAmIACAPQACAJALAFIABAAIADABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_4.setTransform(74.9,-41);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiCdQgegKgYgVQgagYgNgiQgOghAAgnQAAgfAJgcQAJgbASgWQAWgbAggOQAggOAlAAIAbACIAsAJIAFgBIARgFIAIADIAGAGQAHAMAFASQAEARAAANQAAAKgDAFQgEAFgHgBQgKAAgRgUIgOgQQgMgNgSgGQgTgHgVAAQgrAAgaAfQgZAeAAA0QAABCAgArQAgArAxABQAUgBASgGQARgGAMgMIAKgMQAKgOAHAAQAGAAAEAGQADAHAAAKQAAAVgFAMQgHANgKAAIgCgBIgDAAQgVALgVAFQgVAGgXgBQghABgegMg");
	this.shape_5.setTransform(46.3,-45.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2AVQgDgDAAgGIACgLIAFgLQADgHAEgCQADgCAJAAIALAAIAUAAIAmgBIAGAAQAIAAADACQADADAAAGQAAAMgHAKQgHALgLAAIgKAAIgNgBIgxACIgFABQgHgBgDgCg");
	this.shape_6.setTransform(22.9,-41.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmCiQgLgDAAgKQAAgHAKgEIALgHQAEgDACgOIABgtIAAgjIAAgqIAAgRQAAg5gCgQQgCgRgFgDIgOgFQgOgDAAgIQAAgGAFgEQAEgEAQgFIAegJIAXgDQAHAAACAFQADAEAAAKIAAASQgDBQAABRIACBNQABAQAEAFIAMAGQALAEAAAJQAAAJgLADQgMAEgdAAQgiAAgLgEg");
	this.shape_7.setTransform(8.5,-46.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAoBqIgLgMIgKAFQgcATgcAAQghAAgUgTQgUgTgBgfQAAglAagTQAbgUAvAAQALAAAFADQAHAEgBAIQAAANgPAAQgWAAgOALQgNAKAAATQAAASALALQANALATAAQAWAAAJgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgKAFgIAKIgFAGQgOASgPAAQgJAAgFgGQgFgGgBgKQAAgVAagOQAbgPApAAQAZAAARAHQATAGAJANQAHAJADANQACAOABAhIAABHQgBANADAHQACAGAFABIAHACQAOAEgBAIQABAKgQAJQgOAJgVAAQgKAAgLgMg");
	this.shape_8.setTransform(-9.2,-41);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDBwQgLgEAAgJQAAgJALgDIAGgDQAFgDACgHQADgIAAgSIAAgPIAAgSIAAgNQAAgpgCgMQgCgNgFgDIgKgDQgOgFAAgIQAAgFAFgEQADgEAKgDIAfgLIAUgEQALABADAeIABAFIACAAQALgRAMgKQANgJANAAQAQAAAJAJQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgDIgJgGIgGgJQgDgGgCAAQgPAAgHAWQgFAVAABEQAAAUACAKQACAKAHACIAJADQANAFAAAJQAAAIgMAEQgNAEgeAAQgiAAgLgEg");
	this.shape_9.setTransform(-29.7,-41.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnChQgMgDAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgSIAAgYQAAgjgBgKQgCgLgFgCIgKgEQgOgFAAgHQAAgFAEgEQAEgEAKgEIAigLIAXgEQAGAAADAEQADAEAAALIAAANIgBAKIgBA5IAAABIgBA4QAAAVACAJQACAJAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgeAAQghAAgLgEgAgbhxQgKgIAAgMQAAgNALgJQAKgJAQAAQANAAAKAIQAKAJAAAMQAAAMgLAJQgKAJgPAAQgPAAgJgIg");
	this.shape_10.setTransform(-45.3,-46.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhtCaQgMgEABgKQgBgHAKgDIAMgHQAEgEACgSQABgRABg5IAAgkQAAg9gCgSQgDgSgEgDIgLgDQgOgFAAgIQAAgFAFgEQADgEAJgDIAhgLQAPgEAHAAQAHABACADQADADAAAJIAAALIAAAEIACACIAJgHIAIgHQAOgKAMgFQANgEANAAQAqAAAbAeQAbAfgBAxQAAA1gdAjQgfAjguAAQgSAAgIgGQgHgFgBgJQAAgFAFgDQADgFAHAAIAFABIAIACQAZgBAPgUQAPgVAAgjQAAgmgQgYQgRgXgZAAQgXAAgOANQgNANAAAiIAACPIABAXQABAIADADQADADAKAEIAIACIAFAEIACAHQAAAIgNAEQgNADggABQghgBgLgDg");
	this.shape_11.setTransform(-65.6,-37);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag3CjQgZgGgQgJQgJgFgGgUQgGgTAAgZQAAgLAEgFQAEgGAHAAQALAAALAVIAFAJQAPAZARAMQARALAXAAQAYAAARgPQARgOAAgWQAAgfhCgdIgHgEQg3gXgSgUQgSgUAAggQAAgoAegaQAegaAwAAIAaACIAfAHIAJgGIAIgCQAFAAAFAEQAEADAFAJQAHANAFAPQAEAPAAALQAAAIgDAEQgEAEgGAAQgMAAgMgQIgDgEQgNgRgPgIQgPgIgSAAQgZAAgPAMQgOALAAAVQAAASAMAMQAMANAwAUIAJAFQApAQASAQQAMALAGAPQAHAQAAASQAAAuggAaQggAZg5AAQgbAAgZgFg");
	this.shape_12.setTransform(-91.5,-45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.spiralcutham, new cjs.Rectangle(-106.6,-75,213.2,111.2), null);


(lib.seventeenwhatsinourfest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXCOQgJgKAAgMQAAgOAJgJQAJgJAOAAQAMAAAJAJQAJAJAAAOQAAAMgJAKQgJAJgMAAQgOAAgJgJgAgOA2QgEgGAAgPQAAgOAEgOQAEgNAHgOIAKgQQAVgiAAgVQAAgPgJgJQgIgKgNAAQgNAAgIAIQgIAHgEAQIAAABQgIAggRgBQgKAAgFgFQgFgHAAgMQAAgaAYgSQAYgSAiAAQAkAAAWASQAVASAAAdQAAAQgHANQgHANgTASIgHAFQgTAQgGARQgDAIAAAMIgBAPQgDAHgCADQgDACgEAAQgJAAgFgGg");
	this.shape.setTransform(53.2,31.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA9CEQgDgDAAgGIiNAAQgMAAgDgCQgDgCAAgFQAAgKAbgYIAZgYQA0g0AOgVQANgWAAgUQAAgTgKgMQgLgMgRAAQgMAAgLAGQgLAFgMALIgIAJQgLAMgHAAQgGAAgDgDQgDgDAAgGQAAgGADgHQADgGAHgHQAQgSAWgKQAWgJAYAAQAlAAAXATQAWATAAAfQAAATgJASQgKASgVAUIgiAfIgmAiIgBADIgBACIACABIAEABIA/AAIARgCQAFgBADgFIAIgLQAIgOAIAAQAFAAADADQADAEAAAFQAAAKgCALIgIAYQgHARgFAGQgGAGgGAAQgFAAgCgDg");
	this.shape_1.setTransform(31.5,33.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAACBQgtAAgKgCQgLgDAAgIQAAgKASgDQALgBAFgDIAGgEIACgJIABgdIABheIAAgPIAAgMQAAgOgCgEQgDgEgIAAIgJAAIgKABQgGAAgDgCQgDgCAAgFQAAgFAGgFQAHgFAPgFQASgHARgEQAPgDAKAAQAIAAAFADQAEADAAAGQAAAGgIAGIgDACQgCADgBAQIgBBNIAAA4IABAjIACAKIAHAFIAQADQARADAAAJQAAAIgKADQgKADgpAAg");
	this.shape_2.setTransform(9.6,32.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9BlQgKgDAAgJQAAgHAKgEIAFgCQAGgDACgHQACgHAAgPIAAgOIgBgQIAAgMQABglgCgLQgCgLgEgDIgKgEQgMgDABgHQAAgFADgDQAEgEAJgEIAcgJIASgDQAJAAADAcIABAEIABAAQALgQALgJQALgIAMAAQAOAAAIAIQAJAJAAAOQgBAOgGAJQgGAIgMAAIgKgCIgJgGIgEgIQgDgGgCAAQgNAAgGAUQgFATAAA9QAAASACAJQACAJAFACIAIADQANAEAAAIQAAAIgMADQgLADgbAAQgfAAgKgDg");
	this.shape_3.setTransform(-20.3,35.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhJBMQgdgdAAguQAAgtAegfQAfgeAsAAQAsAAAcAcQAcAdAAAsQAAAvgeAgQgeAfgrAAQgsAAgdgegAgmg8QgMARAAAbQAAAnARAbQARAbAXAAQAUAAANgQQAMgRAAgcQAAgngRgaQgRgcgYAAQgUAAgMARg");
	this.shape_4.setTransform(-40,35.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5CSQgKgDAAgJQAAgGAKgEIAFgBQAFgDACgHQACgGAAgSIAAgUIAAhhIgXAAQgFAAgBgCQgCgCAAgGIAAgEQAAgGACgCQACgDAFAAIAVAAIgCgPIgBgPQAAgeATgSQATgRAgAAQAXAAAPALQAOAKAAAQQAAAJgFAGQgFAEgKAAQgHAAgFgCQgFgDgDgFIgEgIQgIgPgMAAQgHABgEAEQgFAFAAAIIAFAXQAEASAAANIAeAAQAFABACACQABABAAAHIAAAEQAAAFgCADQgCACgEAAIgeAAIAABoQAAAaACAIQACAIAEACIAIADQAMAEAAAIQAAAIgKADQgKADgdAAQgeAAgKgDg");
	this.shape_5.setTransform(-55.5,31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKB6QgKgDgIgHQgHgGgDgMQgDgLAAgeIAAhtIgSAAIgGgBIgCgFIAAgFQAAgHAVgSIAJgHIAIgHQAVgSAHAAIAGABQACACAAADIAAAmIAuAAQAFAAACACQACACAAAGIAAAEQAAAGgCACQgDACgEAAIgqAAIgDADIgCAEIAABkQAAAaAFAHQAEAGAMABQAHAAAKgEIAOgDQAEAAADADQADADAAADQAAAMgRALQgSAJgVABQgMAAgKgEg");
	this.shape_6.setTransform(114.4,-14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBqIgWgEIgFAEIgHABIgEgBIgFgDQgGgFgGgRQgFgQgBgPQABgHADgEQADgFAFAAQAKAAAKARIAHAMQAGAIALAFQALAFALAAQANAAAIgHQAHgHABgLQAAgRgigRIgLgGQgggPgMgNQgLgNABgTQAAgbASgQQATgRAdAAIAOABIAOACIAKgEIAFgBQAKAAAKAQQAKAQgBASQAAAHgDAEQgCAEgHAAQgEAAgFgEQgEgEgGgJQgIgNgIgFQgIgFgMAAQgLAAgGAHQgIAGAAALQAAAJAIAHQAGAIAaAMIACACQA4AbAAAhQAAAcgVATQgWATghAAg");
	this.shape_7.setTransform(98.2,-12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAkBgIgLgLIgIAFQgZAQgZAAQgeAAgSgRQgTgRAAgcQAAghAYgRQAYgSAqAAQAKAAAFADQAFADAAAIQAAALgOAAQgTAAgNAJQgMAKAAARQAAARALAJQAKAKASAAQATAAAJgJQAIgIAAgWIAAhMQAAgSgIgKQgHgKgOAAQgKAAgIAFQgJAEgIAJIgEAGQgNAPgNAAQgIAAgFgFQgFgFAAgJQAAgTAYgNQAXgNAlAAQAWAAAQAGQAQAGAJALQAGAIADAMQADANAAAdIAABBQAAALABAGQACAFAFACIAGABQANAEAAAHQAAAJgOAIQgOAIgSAAQgJAAgKgKg");
	this.shape_8.setTransform(78.9,-12.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhCBNQgcgeAAgsQAAguAdgfQAegfAuAAQAmAAAYAWQAXAXgBAmQAAAMgDAFQgEADgPAAIhNAAQgHAAgDgDQgFgEAAgEQAAgGAFgDQADgDAHAAIApAAIALgCQACgBAAgEQAAgUgNgOQgNgNgTAAQgXAAgMAWQgMAUAAAeQAAAfAQAYQAQAWAZAAQAPABALgEQAKgDAKgHIAIgGQAKgIAFAAQAFAAADADQADACAAAFQAAAFgGAHQgFAHgIAHQgSAPgQAGQgRAGgTAAQgrAAgdgdg");
	this.shape_9.setTransform(57.1,-12.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhnCSQgLgEAAgKQAAgHALgFQALgDACgEQACgDACggIAChOIgChLQgCgegCgFQgCgDgLgEQgLgFAAgIQAAgIAJgDQAKgCAjAAIB8AAIAUgDIAKgCIAGABIADAEQAEAHAEAOQAEAOAAAKQAAAJgEAFQgDAFgGAAQgHAAgJgOIgGgKQgEgGgJgEQgJgCgOAAIgcAAQgSAAgKABQgKACgEAGQgEADgBAOIgCAnIAAARQAAAJACACQACADAGAAIAgAAQAQAAAHgFQAGgEACgOIABgDQADgVAKAAQAJAAAEALQADALAAAnQAAAmgDALQgEALgJAAQgKAAgEgWIAAgDQgCgMgGgFQgHgFgQAAIggAAQgGAAgCADQgCAEAAANIAAAQIACA5QABALAEAEIAJAEQAMAEAAAJQAAAJgLAEQgLADggAAQghAAgLgDg");
	this.shape_10.setTransform(34.3,-17.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhCBNQgdgeAAgsQAAguAfgfQAdgfAtAAQAoAAAXAWQAWAXAAAmQAAAMgDAFQgEADgPAAIhOAAQgGAAgEgDQgDgEAAgEQAAgGADgDQAEgDAGAAIAqAAIAKgCQADgBAAgEQAAgUgNgOQgNgNgTAAQgXAAgNAWQgLAUAAAeQAAAfAQAYQARAWAZAAQAPABAJgEQALgDAKgHIAHgGQAKgIAGAAQAFAAACADQADACAAAFQAAAFgEAHQgGAHgJAHQgRAPgRAGQgQAGgTAAQgqAAgegdg");
	this.shape_11.setTransform(-0.1,-12.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVBVQgMgTgchDIgMgfQgPgmgJgFIgGgCQgMgFAAgHQAAgIALgEQAKgDAhAAQAcAAAKADQAJAEAAAIIgBAGIgEAEIgHADQgIAEAAADIAFARIAPAnIARAoQAFAIACAAQADAAADgFIAJgSIAXgzQAGgUAAgGIgBgHIgEgFIgHgCQgJgEAAgGQAAgIAJgEQAKgDAZAAQAWAAAIADQAIAEAAAHQAAAJgKADIgHACQgKAFgRAoIgFANIgIASQguBpgNAAQgJAAgLgUg");
	this.shape_12.setTransform(-21.3,-12.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjCRQgKgDAAgJQAAgHAKgDIAFgDQAFgDACgGQACgIAAgPIAAgNIAAgRIAAgVQAAgggCgJQgBgJgEgDIgKgEQgMgDAAgHQAAgEAEgEQAEgEAIgEIAfgJIAVgEQAFAAADAEQACAEAAAJIAAANIAAAJIgCAzIAAABIgBAxQAAAUACAIQACAIAEADIAIADQAKADAAAIQAAAIgKADQgKAEgaAAQgegBgKgDgAgYhmQgJgHAAgKQAAgMAKgIQAJgJAOABQAMAAAJAHQAJAHAAAMQAAAKgKAJQgJAHgOAAQgNAAgIgHg");
	this.shape_13.setTransform(-37.9,-17.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKB6QgKgDgIgHQgHgGgDgMQgDgLAAgeIAAhtIgSAAIgGgBIgCgFIAAgFQAAgHAVgSIAJgHIAIgHQAVgSAHAAIAGABQACACAAADIAAAmIAuAAQAFAAACACQACACAAAGIAAAEQAAAGgCACQgDACgEAAIgqAAIgDADIgCAEIAABkQAAAaAFAHQAEAGAMABQAHAAAKgEIAOgDQAEAAADADQADADAAADQAAAMgRALQgSAJgVABQgMAAgKgEg");
	this.shape_14.setTransform(-50.6,-14.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPBqIgWgEIgGAEIgGABIgEgBIgEgDQgHgFgGgRQgGgQABgPQgBgHAEgEQAEgFAEAAQAKAAAJARIAIAMQAHAIAKAFQALAFAKAAQAOAAAIgHQAIgHAAgLQgBgRgggRIgMgGQgggPgLgNQgLgNAAgTQAAgbASgQQASgRAeAAIAOABIAOACIAJgEIAHgBQAKAAAJAQQAJAQAAASQAAAHgCAEQgDAEgGAAQgFAAgEgEQgFgEgGgJQgIgNgIgFQgIgFgLAAQgMAAgGAHQgIAGAAALQAAAJAIAHQAGAIAZAMIACACQA6AbAAAhQAAAcgXATQgVATghAAg");
	this.shape_15.setTransform(-66.8,-12.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhCBNQgdgeAAgsQAAguAegfQAegfAuAAQAnAAAXAWQAWAXAAAmQABAMgEAFQgEADgPAAIhOAAQgGAAgEgDQgDgEAAgEQAAgGADgDQAEgDAGAAIAqAAIAKgCQADgBAAgEQAAgUgNgOQgNgNgTAAQgYAAgMAWQgLAUAAAeQAAAfAQAYQARAWAYAAQAQABAJgEQALgDAKgHIAHgGQAKgIAGAAQAFAAADADQACACAAAFQAAAFgEAHQgGAHgJAHQgRAPgRAGQgQAGgTAAQgrAAgdgdg");
	this.shape_16.setTransform(-86.2,-12.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhnCSQgLgEAAgKQAAgHALgFQALgDACgEQACgDACggIAChOIgChLQgCgegCgFQgCgDgLgEQgLgFAAgIQAAgIAJgDQAKgCAjAAIB8AAIAUgDIAKgCIAGABIADAEQAEAHAEAOQAEAOAAAKQAAAJgEAFQgDAFgGAAQgHAAgJgOIgGgKQgEgGgJgEQgJgCgOAAIgcAAQgSAAgKABQgKACgEAGQgEADgBAOIgCAnIAAARQAAAJACACQACADAGAAIAgAAQAQAAAHgFQAGgEACgOIABgDQADgVAKAAQAJAAAEALQADALAAAnQAAAmgDALQgEALgJAAQgKAAgEgWIAAgDQgCgMgGgFQgHgFgQAAIggAAQgGAAgCADQgCAEAAANIAAAQIACA5QABALAEAEIAJAEQAMAEAAAJQAAAJgLAEQgLADggAAQghAAgLgDg");
	this.shape_17.setTransform(-108.9,-17.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag9BlQgKgDAAgJQAAgHAKgEIAFgCQAGgDACgHQACgHAAgPIAAgOIgBgQIAAgMQAAglgBgLQgCgLgEgDIgJgEQgMgDgBgHQAAgFAFgDQADgEAJgEIAbgJIASgDQAKAAAEAcIAAAEIABAAQAKgQAMgJQALgIAMAAQAOAAAIAIQAJAJgBAOQAAAOgGAJQgGAIgLAAIgLgCIgJgGIgEgIQgCgGgDAAQgOAAgFAUQgFATAAA9QAAASACAJQACAJAGACIAIADQAMAEAAAIQAAAIgLADQgMADgbAAQgfAAgKgDg");
	this.shape_18.setTransform(121.3,-61.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAsBnQgDgDAAgHIAAgOIAAgBIgBAAQgDAAgEAFIgDADQgKAKgMAFQgLAFgPAAQgQAAgNgGQgNgGgKgLQgJgLgEgQQgEgRAAgrIAAgNIAAgPIAAgEQABgRgDgFQgCgEgHgDIgJgDQgLgDAAgHQAAgFAEgDQAEgEAOgFIAcgHIAWgDQAFAAADAEQACAEAAAJIAAAIIgCBMQgBApAJAPQAJAQAVAAQAWAAAKgUQAKgVAAgxIAAgPQAAgQgCgFQgCgFgIgCIgIgDQgLgDAAgHQAAgFAEgDQAEgEAOgFIAcgHIAVgDQAGAAACAEQADADAAAKIgBALIgCBTIAAAjIABANQACAJAKAEIAFABQALAEAAAHQAAAEgDAEQgEADgJADIgdAKQgOADgHAAQgGAAgDgDg");
	this.shape_19.setTransform(100.8,-61);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgsCRQgXgIgTgNQgegWgPghQgQggAAgoQAAhDApgoQApgpBBAAQAaAAAXAIQAXAHATAQQAbAVAPAiQAPAhAAAmQAAAZgHAWQgHAXgNASQgUAbgfAPQggAQgkAAQgXAAgXgHgAhDheQgWAbAAAvQAAA+AbApQAcAoAqAAQAlAAAWgbQAXgdAAguQAAg/gcgoQgdgpgpAAQglAAgWAdg");
	this.shape_20.setTransform(72.7,-65.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhjBlQgKgDAAgJQAAgHAKgEIAFgCQAFgDACgHQACgHAAgPIAAgOIAAgQIAAgUQAAgggCgKQgBgKgEgCIgKgEQgMgDAAgHQAAgFAEgDQAEgEAIgEIAegJIAVgDQAFAAADADQACADAAAGIAAAOIABACIABAAIABAAIABAAIAFgFIAEgDQAWgVAZAAQAOAAAOAGQAOAHAJAKQAJAMAEAPQAEAPAAAhIAAAbIAAANIAAAMQAAAOACAGQACAGAFADIAFACQAKAEAAAHQAAAIgJAEQgKADgfAAQgcAAgKgDQgKgDAAgIQAAgIAKgEIAIgDQAFgCACgJQACgJAAgWQAAhAgIgRQgJgQgVAAQgKAAgKAHQgKAGgFALQgFAJgCAQQgBAPAAAoQAAAUABAGQACAHAEACIAIADQAKAEAAAIQAAAIgKADQgKADgaAAQgfAAgKgDg");
	this.shape_21.setTransform(33.1,-61.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjCRQgKgDAAgJQAAgHAKgDIAFgDQAFgDACgHQACgHAAgPIAAgOIAAgQIAAgVQAAgggCgJQgBgKgEgCIgKgDQgMgEAAgHQAAgFAEgDQAEgEAIgDIAfgKIAVgEQAFAAADAEQACAEAAAJIAAANIAAAJIgCAyIAAACIgBAxQAAAUACAIQACAIAEACIAIAEQAKAEAAAHQAAAIgKADQgKADgaABQgeAAgKgEgAgYhmQgJgHAAgKQAAgMAKgJQAJgHAOAAQAMgBAJAIQAJAHAAALQAAALgKAJQgJAHgOAAQgNAAgIgHg");
	this.shape_22.setTransform(15.2,-65.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPBqIgVgEIgGAEIgHABIgEgBIgFgDQgGgFgGgRQgFgQgBgPQABgHADgEQADgFAGAAQAJAAAKARIAHAMQAGAIALAFQALAFALAAQANAAAIgHQAHgHAAgLQABgRgigRIgMgGQgfgPgMgNQgLgNAAgTQAAgbATgQQATgRAdAAIANABIAPACIAKgEIAFgBQAKAAAKAQQAKAQAAASQgBAHgDAEQgCAEgHAAQgEAAgFgEQgEgEgHgJQgHgNgIgFQgIgFgMAAQgKAAgIAHQgHAGAAALQAAAJAHAHQAIAIAZAMIACACQA4AbAAAhQAAAcgVATQgWATghAAg");
	this.shape_23.setTransform(-10.6,-61.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDA7IgOhZIAAgDIAAgEQAAgKAEgGQAFgFAIAAQAJAAAFAFQAEAFABALIAAAFIgBADIgOBYg");
	this.shape_24.setTransform(-22.7,-73.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKB6QgKgDgIgHQgHgHgDgLQgDgLAAgeIAAhtIgSAAIgGgBIgCgFIAAgFQAAgGAVgTIAJgHIAIgHQAVgSAHAAIAGACQACABAAADIAAAmIAuAAQAFAAACACQACACAAAGIAAAEQAAAGgCACQgDACgEAAIgqAAIgDACIgCAFIAABkQAAAbAFAGQAEAHAMAAQAHgBAKgDIAOgDQAEAAADADQADADAAAEQAAALgRAKQgSAKgVAAQgMAAgKgDg");
	this.shape_25.setTransform(-33.3,-63);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAkBgIgLgLIgIAFQgZAQgZAAQgeAAgSgRQgTgRAAgcQAAghAYgRQAYgSAqAAQAKAAAFADQAFADAAAIQAAALgOAAQgTAAgNAJQgMAKAAARQAAARALAJQAKAKASAAQATAAAJgJQAIgIAAgWIAAhMQAAgSgIgKQgHgKgOAAQgKAAgIAFQgJAEgIAJIgEAGQgNAPgNAAQgIAAgFgFQgFgFAAgJQAAgTAYgNQAXgNAlAAQAWAAAQAGQAQAGAJALQAGAIADAMQADANAAAdIAABBQAAALABAGQACAFAFACIAGABQANAEAAAHQAAAJgOAIQgOAIgSAAQgJAAgKgKg");
	this.shape_26.setTransform(-51.3,-61);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAcCSQgKgDAAgIQAAgIALgEIAHgDQAFgDACgIQACgJAAgVQAAhCgJgPQgIgRgVAAQgKAAgKAHQgKAGgFAKQgFAJgCAQQgBAPAAAoQAAAUABAHQACAHAEACIAIADQAKAEAAAIQAAAIgKADQgKADgaAAQggAAgKgDQgJgDAAgJQAAgHAJgEIAGgCQAFgDADgJQACgIAAgWIAAgiIAAgfIgBhbQgCgXgDgEQgCgDgMgDQgMgDAAgHQAAgGAFgEQAFgEASgHIAUgFIATgCQAHAAADAEQADADAAAKIgBAIIgBBRIAAAKIABAFIACACIAFgFIAHgIQAKgKAMgFQAKgFANAAQAjAAARAWQARAXAAAtIAAATIABAkIAAAMQAAAKACAFQACAEAEADIAFACQAKAEAAAHQAAAJgJADQgKADggAAQgbAAgKgDg");
	this.shape_27.setTransform(-74.8,-65.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAcBHIgshxQgMgkgIgRQgJgRgHgFIgLgGQgKgEAAgHQAAgJAJgCQAJgDAngBQAlABAJADQAKACAAAJQAAAIgPAGIgCABQgFABgCADQgDADAAAEQAAAIALAcIAhBYIAPAgQAEAJADAAQADAAAEgHIANgeIAEgJQAqhkAAgMQAAgHgDgEQgDgEgHgDIgFgDQgMgFABgHQAAgJAIgCQAIgDAhgBQAhABAIADQAIACAAAJQAAAHgMAFIgJAFQgOAJgaBGIgSApIgmBgIgHASQgNAhgIAAQgLAAgehPgAhTCFIgDgHQgag5gohnIgSgxIgMgZQgGgIgGgDIgGgDQgNgEAAgIQAAgJAJgCQAKgDAngBQAmABAKADQAJACAAAJQAAAIgQAGIgBAAQgGACgCADQgCADAAAEQAAAHAJAYIAiBZIAPAmQAFAHACAAQAEAAAEgKIAKgXQAFgOALAAQANAAAAAOIgDAMIgaBBIgGAPQgNAhgIABQgHAAgHgRg");
	this.shape_28.setTransform(-107.6,-65.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenwhatsinourfest, new cjs.Rectangle(-130.6,-91.9,261.3,149.1), null);


(lib.seventeenupdatedctavid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B63100").ss(2,1,1).p("Aogi2IRBAAQBMAAA1A2QA2A1AABLQAABMg2A1Qg1A2hMAAIxBAAQhLAAg2g2Qg1g1AAhMQAAhLA1g1QA2g2BLAAg");
	this.shape.setTransform(0,-52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B63100").s().p("AogC3QhLAAg2g2Qg1g2AAhLQAAhLA1g1QA2g2BLAAIRBAAQBMAAA1A2QA2A1gBBLQABBLg2A2Qg1A2hMAAg");
	this.shape_1.setTransform(0,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenupdatedctavid, new cjs.Rectangle(-73.7,-71.2,147.5,38.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhTCTQgdgRAAgZQAAgLAGgIQAGgHANgBQAJAAAGAGQAFAGADAKQAFARAOAJQAPAKAbAAQAdAAAUgMQAUgMAAgRQAAgKgHgHQgIgFgOAAIgaACIgiABQgoAAgWgNQgVgOAAgSQAAgLAHgLQAIgKARgKQgOgMgGgOQgHgOAAgSQAAglAcgYQAcgZAqAAIAXADIAjAGQAIAAAKgEQAKgEAOgKIAHAHIADAIQAAAJgIAJQgHAJgNAHIAHASIACATQAAAlgbAYQgbAWgsAAIgYgCIgVgEIgHAJIgDAIQAAALALAEQALAGAWAAIAigCIAjgEQAgABAQANQARAMAAAYQAAAkgjAYQgkAYg1AAQgrAAgdgSgAgkhwQgMAPAAAWQAAAXALAOQAMAOASAAQASAAANgOQANgNAAgXQAAgYgNgOQgMgOgSAAQgSAAgMAOg");
	this.shape.setTransform(68,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhuBwQgMgDAAgLQAAgHALgEIAGgDQAGgDACgIQADgHAAgRIAAgPIgBgTIAAgWQAAgkgBgLQgCgLgFgBIgKgFQgOgEAAgIQAAgEAEgFQAEgEAKgEIAhgKIAXgEQAGAAADAEQADADAAAHIAAAQIABABIABABIABAAIABgBIAFgFIAFgEQAYgXAcAAQAQABAQAGQAOAHALAMQAKANAFARQAEARAAAlIAAAdIAAAPIAAAMQAAARACAHQACAGAGADIAGADQALAEAAAHQAAAKgLAEQgKADgjAAQggAAgKgDQgLgDAAgJQAAgJALgEIAJgDQAFgEACgJQACgKAAgZQAAhHgJgSQgJgSgYAAQgLAAgLAHQgLAIgGALQgFAKgCASQgCARAAAsQAAAWACAHQACAIAFADIAIADQAMAEAAAJQAAAJgLADQgLADgeAAQgiAAgLgDg");
	this.shape_1.setTransform(41.8,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnChQgMgDAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgSIAAgYQAAgjgBgKQgCgLgFgCIgKgEQgOgFAAgHQAAgFAEgEQAEgEAKgEIAigLIAXgEQAGAAADAEQADAEAAALIAAANIgBAKIgBA5IAAABIgBA4QAAAVACAJQACAJAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgeAAQghAAgLgEgAgbhxQgKgIAAgMQAAgNALgJQAKgJAQAAQANAAAKAIQAKAJAAAMQAAAMgLAJQgKAJgPAAQgPAAgJgIg");
	this.shape_2.setTransform(21.9,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/CiQgLgDAAgKQAAgHALgEIAFgCQAGgDACgHQACgIAAgTIAAgWIAAhsIgZAAQgFAAgCgCQgCgDAAgGIAAgFQAAgGACgDQACgCAGAAIAXAAIgCgSIgBgQQAAgiAVgTQAUgTAlAAQAZAAAQALQARAMgBASQAAAKgFAGQgGAFgLAAQgHAAgGgDQgGgDgEgGIgEgIQgIgRgNAAQgIAAgFAGQgFAGgBAIIAGAaQAEATAAAQIAhAAQAGAAACACQACACAAAHIAAAFQAAAGgCACQgDADgFAAIggAAIAABzQAAAdACAJQABAJAFACIAJAEQANAEAAAJQAAAJgLADQgLADggAAQghAAgLgDg");
	this.shape_3.setTransform(11.1,7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/CiQgLgDAAgKQAAgHAKgEIAGgCQAGgDACgHQACgIAAgTIAAgWIAAhsIgZAAQgGAAgBgCQgDgDAAgGIAAgFQAAgGADgDQACgCAFAAIAYAAIgCgSIgBgQQAAgiAVgTQAUgTAlAAQAaAAAPALQAQAMABASQgBAKgFAGQgGAFgLAAQgIAAgFgDQgGgDgDgGIgFgIQgIgRgNAAQgJAAgEAGQgFAGAAAIIAFAaQAEATAAAQIAiAAQAFAAACACQACACAAAHIAAAFQAAAGgCACQgDADgEAAIghAAIAABzQAAAdABAJQACAJAFACIAJAEQANAEAAAJQAAAJgLADQgLADggAAQghAAgLgDg");
	this.shape_4.setTransform(-1.7,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgMAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTAAgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAEgEQAFgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIAAAJIgDBUQAAAuAKARQAKASAWAAQAZAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQgBgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIAAANIgDBcIAAAmIACAPQACAJALAFIAAAAIAEABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_5.setTransform(-23.7,12.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLCIQgMgEgIgIQgIgHgDgMQgDgNAAgiIAAh4IgVAAIgGgCIgCgFIAAgGQAAgHAXgVIAKgIIAIgHQAYgVAIAAIAGACQADACAAAEIAAAqIAzAAQAFAAACADQACACAAAGIAAAFQAAAGgCACQgCADgFAAIgvAAIgDACIgCAFIAABwQAAAdAFAHQAFAIANAAQAHgBAMgDIAPgEQAFAAADADQADADAAAEQAAANgTAMQgTALgYAAQgNAAgLgDg");
	this.shape_6.setTransform(-44.8,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3CjQgZgGgQgJQgJgFgGgUQgGgTAAgZQAAgLAEgFQAEgGAHAAQALAAALAVIAFAJQAPAZARAMQARALAXAAQAYAAARgPQARgOAAgWQAAgfhCgdIgHgEQg3gXgSgUQgSgUAAggQAAgoAegaQAegaAwAAIAaACIAfAHIAJgGIAIgCQAFAAAFAEQAEADAFAJQAHANAFAPQAEAPAAALQAAAIgDAEQgEAEgGAAQgMAAgMgQIgDgEQgNgRgPgIQgPgIgSAAQgZAAgPAMQgOALAAAVQAAASAMAMQAMANAwAUIAJAFQApAQASAQQAMALAGAPQAHAQAAASQAAAuggAaQggAZg5AAQgbAAgZgFg");
	this.shape_7.setTransform(-66.1,7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfCiQgSgFgOgKIgNAJQgIAEgGAAIgHgBIgJgDIAAgEQAJgJADgUQAEgUAAgyIAAgyIAAgzQAAgqgCgOQgCgOgFgDIgMgEQgPgDAAgIQABgFAEgEQAFgEARgGIAagIIAXgDQAIAAADADQADADAAAIIAAANIgCBCIAABjIAAA7QAAAhALALQALAMAYAAQAcAAAQgYQAQgYAAgqQAAglgQgUQgPgVgaAAIgHAAIgGABQgRAAAAgQQAAgLARgHQAQgGASAAQArAAAaAdQAaAeAAAwQgBA6ggAiQgfAig2AAQgVAAgTgFg");
	this.shape_8.setTransform(36.5,-46.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhEBwQgLgEABgJQgBgJALgDIAHgDQAFgDADgHQACgIAAgSIAAgPIAAgSIAAgNQgBgpgBgMQgCgNgFgDIgKgDQgOgFAAgIQAAgFAFgEQADgEAKgDIAfgLIAUgEQALABADAeIABAFIACAAQALgRAMgKQANgJANAAQAPAAAKAJQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgDIgJgGIgGgJQgDgGgCAAQgPAAgHAWQgFAVAABEQAAAUACAKQADAKAGACIAJADQANAFAAAJQAAAIgMAEQgNAEgeAAQgiAAgMgEg");
	this.shape_9.setTransform(16.3,-41.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_10.setTransform(-4.7,-41);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAyCfQgMgEAAgKQAAgJAOgFIAKgFQAEgDACgOIABg1IAAggIgDgJQgCgEgLgCQgLgCgqAAIgvACQgNABgEADIgCAHIgCARIAAATIACA1QABAOAEADIAKAFQAOAFAAAJQAAAKgMAEQgMAEglAAQgiAAgNgEQgNgEAAgKQAAgJAOgFIAKgFQAFgEACgcQACgdAAhDIgChUQgCgigDgEQgCgDgMgFQgMgFAAgJQAAgJAKgDQAKgEApAAQAnAAALAEQAKADAAAJQAAAJgOAFIgKAFQgEADgBAOIgCBDQAAAJAIADQAJADAhAAIASAAIAvgBQAOgCAEgDIADgEIABgJIAAgKIgBg3QgCgMgEgDIgKgFQgOgFAAgJQAAgJAKgDQALgEAnAAQApAAAKADQAKAEAAAJQAAAJgOAFIgKAFQgFAEgCAeQgCAfAAA8IACBXQACAiADAEQACAEAMAEQAMAFAAAJQAAAKgNAEQgMAEgkAAQgkAAgMgEg");
	this.shape_11.setTransform(-33.7,-45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenherbstuffing, new cjs.Rectangle(-81.1,-75,162.3,111.2), null);


(lib.seventeenham_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenham();
	this.instance.parent = this;
	this.instance.setTransform(-76,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenham_1, new cjs.Rectangle(-76,-94,143,198), null);


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
	this.shape.setTransform(78.7,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_1.setTransform(57.2,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhSBUQgfghAAgyQgBgyAigiQAigiAyAAQAwAAAgAgQAeAfAAAyQAAAzghAjQgiAkgwAAQgxAAgggigAgrhDQgNASAAAfQAAAsATAeQATAeAaAAQAWAAAOgTQAOgSAAgfQAAgrgTgeQgUgegaAAQgWAAgOASg");
	this.shape_2.setTransform(32.7,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLCIQgMgEgIgIQgIgHgDgMQgDgNAAgiIAAh4IgVAAIgGgCIgCgFIAAgGQAAgHAXgVIAKgIIAIgHQAYgVAIAAIAGACQADACAAAEIAAAqIAzAAQAFAAACADQACACAAAGIAAAFQAAAGgCACQgCADgFAAIgvAAIgDACIgCAFIAABwQAAAdAFAHQAFAIANAAQAHgBAMgDIAPgEQAFAAADADQADADAAAEQAAANgTAMQgTALgYAAQgNAAgLgDg");
	this.shape_3.setTransform(12.1,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoBqIgMgMIgKAFQgbATgcAAQghAAgUgTQgVgTABgfQAAglAagTQAagUAvAAQALAAAGADQAFAEABAIQgBANgPAAQgWAAgNALQgOAKgBATQABASAMALQALALAUAAQAVAAAKgKQAJgJAAgYIAAhVQAAgUgIgLQgJgLgPAAQgLAAgKAFQgKAFgIAKIgFAGQgOASgPAAQgJAAgFgGQgGgGABgKQAAgVAagOQAagPApAAQAYAAATAHQASAGAJANQAHAJADANQACAOAAAhIAABHQAAANADAHQACAGAEABIAHACQAPAEAAAIQAAAKgQAJQgPAJgUAAQgKAAgLgMg");
	this.shape_4.setTransform(-7.8,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLCIQgMgEgIgIQgIgHgDgMQgDgNAAgiIAAh4IgVAAIgGgCIgCgFIAAgGQAAgHAXgVIAKgIIAIgHQAYgVAIAAIAGACQADACAAAEIAAAqIAzAAQAFAAACADQACACAAAGIAAAFQAAAGgCACQgCADgFAAIgvAAIgDACIgCAFIAABwQAAAdAFAHQAFAIANAAQAHgBAMgDIAPgEQAFAAADADQADADAAAEQAAANgTAMQgTALgYAAQgNAAgLgDg");
	this.shape_5.setTransform(-28.1,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhRBUQghghAAgyQABgyAhgiQAigiAxAAQAyAAAeAgQAfAfAAAyQABAzgiAjQgiAkgvAAQgyAAgfgigAgqhDQgOASAAAfQAAAsATAeQASAeAbAAQAWAAAOgTQANgSAAgfQAAgrgTgeQgSgegaAAQgXAAgNASg");
	this.shape_6.setTransform(-48.8,12.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah0CgQgNgEAAgJQAAgKAOgFIAKgFQAFgEACgbQACgbAAhGIgChVQgCghgDgEQgCgDgMgFQgMgFAAgJQAAgIAHgEQAHgEAOAAIAXAAIAaAAIAtgBIAkgBQAzAAAZAWQAZAWAAAqQAAAwgfAZQgfAYg8AAQgWAAAAgPQAAgQATAAQAcAAASgPQARgPAAghQAAgfgRgPQgSgPglAAQgQAAgHADQgGACgDAHIgCAUIgBAvIAABjIABBAQACARAEAEIAKAEQAOAFAAAKQAAAJgMAEQgNAEgkAAQgjAAgMgEg");
	this.shape_7.setTransform(-74.5,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhiCIQgbgeAAgxQAAg3AfgiQAegiAxAAIAPACQAHABAEAFQAEAGAAAGQAAALgPABIgGgBIgGAAQgZgBgPAVQgPAUAAAjQAAAmAQAYQARAYAZAAQAXAAANgNQANgNAAgaIAAg9IAAhnQAAgRgDgGQgDgGgIgDIgGgCQgOgEAAgHQAAgHAFgDQAGgFARgHIAZgGIAVgDQAIAAADAEQAEAFAAAJIgBAMIgCCKIABBfQACAWADACIAQAGQAMADAAAHQAAALghAKIgWAGIgRACQgHABgDgEQgCgDAAgIIAAgLIgBgFIgBgBIgHAEIgKAIQgNALgMAEQgNAFgOAAQgrAAgagfg");
	this.shape_8.setTransform(68.3,-46);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_9.setTransform(42.3,-41);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfCiQgKgEgBgIQAAgJAMgEIAIgEQAGgCABgKQACgKAAgYQAAhJgJgQQgJgTgXAAQgLAAgMAIQgKAGgHAMQgEAJgCASQgCARAAAtQAAAWACAIQACAHAEACIAIAEQAMAEAAAJQAAAIgLAEQgLAEgdAAQgkAAgKgEQgLgEAAgJQAAgIALgEIAFgDQAHgDACgJQADgKAAgZIAAgkIAAgjIgChmQgBgYgDgGQgDgDgOgDQgNgEAAgIQAAgGAGgEQAGgFATgHIAXgGIAVgCQAIAAACADQADAFAAAKIAAAKIgCBaIAAAKIABAGIAEACIAFgFIAHgKQAMgKANgGQALgFAPAAQAnAAASAZQAUAZgBAxIABAVIAAApIAAAMQAAAMACAFQACAFAFADIAGACQALAFAAAIQAAAJgKAEQgLAEgkAAQgeAAgLgEg");
	this.shape_10.setTransform(16.5,-46.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape_11.setTransform(-6.4,-41.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAoBqIgMgMIgKAFQgbATgcAAQghAAgUgTQgUgTAAgfQAAglAagTQAagUAvAAQALAAAGADQAFAEAAAIQAAANgPAAQgWAAgNALQgOAKgBATQAAASAMALQANALATAAQAVAAAKgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgJAFgJAKIgFAGQgOASgPAAQgJAAgFgGQgGgGAAgKQAAgVAagOQAbgPApAAQAYAAATAHQASAGAJANQAHAJADANQADAOgBAhIAABHQABANACAHQACAGAEABIAIACQANAEAAAIQAAAKgOAJQgPAJgVAAQgKAAgLgMg");
	this.shape_12.setTransform(-27.8,-41);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABUCfQgMgEAAgKQAAgJAOgFIAKgFQAEgDACgKQABgKAAgfIAAgLIAAhgIgBg5IgdBLQhCCsgOAAQgHAAgNgXQgNgYgghJIgxhxIgCBYIgBA9IABAqQACAKADADIAKAFQAOAFAAAJQAAAKgLAEQgMAEgcAAQgYAAgLgEQgMgFAAgJQAAgIANgGQAMgGABgEQADgLAEg6QADg6AAhHIAAgHQAAgYgCgIQgCgIgFgDIgLgFQgOgFAAgJQAAgJAKgDQAKgEAhAAIAgABIAJACQAEADAQAoIANAgIAHAQQA2CHAEAAQAFAAAVgwQAUgwAchQIAEgNQAIgZAHgIQAEgEAJgBIAfgCQAeAAAKAEQAKADAAAJQAAAJgNAFIgGACQgHAEgCAJQgCAJAAAjIACCAQACA5ACAJQACAFAKAEIAEABIAJAGQADADAAAFQAAAKgNAEQgMAEglAAQgiAAgNgEg");
	this.shape_13.setTransform(-60.7,-45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sevenmashedpotatoes, new cjs.Rectangle(-90.7,-75,181.4,111.2), null);


(lib.roastedturkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhoCVQgLgKABgOQgBgLAJgIQAHgIAMAAIAJABIAIAGIAFAIQAHAJAEAAQALAAAMgQQAMgRAAgSQAAgTgQgkIgCgGIgkhOIgVgsQgEgIgNgFIgBAAQgHgEgDgDQgCgDAAgFQgBgKAMgDQAMgEAhgBQAhAAAMAEQALAEgBAIIgBAHIgEAFIgIAEQgJADAAAEIAEARIASAtIASAqQAHAMACAAQADAAAFgMIAPgjIARgtQAEgQAAgFQAAgHgMgHQgNgHAAgGQAAgIALgDQAKgEAaAAQAaAAAKAEQAKAEAAAIQAAAJgNADIgKAEQgMAGgPAnIgGARIgdBIQglBegXAcQgZAdggAAQgRAAgLgKg");
	this.shape.setTransform(61.4,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_1.setTransform(38.1,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABKClIgKgBQgKgEgVgcIgKgMIgEgFQg2hHgFAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgBAJIAAAKIACAvQABAOADAEIANAGQAKAEAAAJQAAAJgLADQgLAEgeAAQgiAAgLgEQgLgDAAgKQAAgIALgEIAGgDQAGgDADgLQACgLAAgaIAAgcIgBgjIAAgbIgBhUQgBgVgEgEQgCgDgLgDIgHgCIgIgEIgCgGQAAgGAEgEQAFgEAQgFIAegJIAXgDQAHAAADAFQADAEAAAKIgCAsIgBA6IAAA4IABAMQABAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIAKgFIAQgOIAWgVQAGgHAAgDQAAgCgJgEQgHgFAAgHQAAgKALgEQALgEAhAAQAVAAAKAEQAKAEAAAJQAAALgQAEQgRAEgHAEQgIAFgTASIgEAEIgIAIIgCAFQAAAEAUAaIACADIAnAvQAQATAJAHQAFADAPAFQAOAFAAAJQAAAJgKAFQgLAEgYAAg");
	this.shape_2.setTransform(14.3,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDBwQgLgDAAgLQAAgHALgEIAGgDQAFgDACgIQADgHAAgRIAAgPIAAgTIAAgNQAAgpgCgNQgCgMgFgCIgKgFQgOgEAAgIQAAgFAFgEQADgEAKgEIAfgJIAUgEQALAAADAeIABAFIACABQALgTAMgJQANgKANAAQAQAAAJAKQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgCIgJgHIgGgJQgDgGgCAAQgPAAgHAWQgFAWAABDQAAAUACAKQACAKAHADIAJADQANADAAAKQAAAJgMADQgNADgeAAQgiAAgLgDg");
	this.shape_3.setTransform(-7.2,12.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgMAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTAAgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAEgEQAFgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIAAAJIgDBUQAAAuAKARQAKASAWAAQAZAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQgBgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIAAANIgDBcIAAAmIACAPQACAJALAFIAAAAIAEABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_4.setTransform(-30,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvChQgNgEAAgKQAAgJANgFQAMgFACgDQADgEABglIABhqIAAg8IgCgkQgBgGgEgCQgEgCgJAAIgKAAQgPAAgJAEQgJADgGAJIgHAPIgHAQIgGAHQgEACgEAAQgHAAgDgFQgDgGAAgOQAAgeAHgSQAHgSALAAIACAAQASADAbAAICEAAQAcAAASgDIACAAQALAAAHASQAHASAAAeQAAANgDAGQgDAGgHAAIgIgCIgGgHIgHgQIgHgPQgGgJgJgDQgJgEgQAAIgJAAQgJAAgEACQgEACgBAGIgBAkIgBA8IABBqQABAlADAEQACADAMAFQANAFAAAJQAAAKgNAEQgNADgjAAQgiAAgNgDg");
	this.shape_5.setTransform(-57.9,7.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhiCIQgbgeAAgxQAAg3AfgiQAegiAxAAIAPACQAHABAEAFQAEAGAAAGQAAALgPABIgGgBIgGAAQgZgBgPAVQgPAUAAAjQAAAmAQAYQARAYAZAAQAXAAANgNQANgNAAgaIAAg9IAAhnQAAgRgDgGQgDgGgIgDIgGgCQgOgEAAgHQAAgHAFgDQAGgFARgHIAZgGIAVgDQAIAAADAEQAEAFAAAJIgBAMIgCCKIABBfQACAWADACIAQAGQAMADAAAHQAAALghAKIgWAGIgRACQgHABgDgEQgCgDAAgIIAAgLIgBgFIgBgBIgHAEIgKAIQgNALgMAEQgNAFgOAAQgrAAgagfg");
	this.shape_6.setTransform(71.3,-46);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_7.setTransform(45.3,-41);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLCHQgMgDgIgHQgIgIgDgMQgDgNAAghIAAh5IgVAAIgGgBIgCgHIAAgFQAAgHAXgUIAKgIIAIgIQAYgUAIAAIAGACQADACAAADIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHABAMgEIAPgEQAFAAADADQADADAAAFQAAAMgTAMQgTAMgYAAQgNgBgLgEg");
	this.shape_8.setTransform(25.5,-43.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape_9.setTransform(7.5,-41.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAoBqIgLgMIgKAFQgcATgcAAQghAAgUgTQgVgTAAgfQAAglAagTQAbgUAvAAQALAAAFADQAHAEAAAIQAAANgQAAQgWAAgOALQgOAKAAATQAAASANALQALALAUAAQAVAAAKgKQAJgJAAgYIAAhVQAAgUgIgLQgJgLgPAAQgLAAgKAFQgJAFgJAKIgFAGQgNASgQAAQgJAAgFgGQgFgGAAgKQAAgVAagOQAagPApAAQAZAAARAHQASAGAKANQAHAJADANQADAOAAAhIAABHQAAANACAHQACAGAFABIAGACQAOAEABAIQgBAKgPAJQgPAJgUAAQgKAAgLgMg");
	this.shape_10.setTransform(-13.9,-41);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhRBUQghghAAgyQABgyAhgiQAigiAxAAQAyAAAeAgQAfAfAAAyQABAzgiAjQgiAkgvAAQgyAAgfgigAgqhDQgOASAAAfQAAAsATAeQASAeAbAAQAWAAAOgTQANgSAAgfQAAgrgTgeQgSgegaAAQgXAAgNASg");
	this.shape_11.setTransform(-38.9,-41);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAwBxQgVhIgQgPQgPgOgXAAQgSAAAAgPQAAgNAPAAQAlAAASgPQASgPAAgeQAAgegSgPQgTgQgiAAQgSABgGACQgHACgCAGIgCAVIgCAtIAABkIACBDQABAQAFADIAKAEQANAFAAAKQAAAKgMAEQgMAEgkAAQgjAAgNgEQgNgEAAgKQAAgJAOgGIAKgFQAFgDACgbQACgbAAhHIgChUQgBgigEgDQgCgEgMgEQgMgGAAgIQAAgJAHgDQAHgEAOAAIAyAAIAtgCIAkgBQAxAAAaAWQAaAVAAAoQAAAegRAVQgSAWgfAJIAAADQAYAEAOAPQAOAPALAkIAGAXQAJAjANAAIAGgBIAJAAQAEAAADADQAEAEAAAEQAAALgNAHQgNAGgVABQgtgBgQg0g");
	this.shape_12.setTransform(-67.3,-45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.roastedturkey, new cjs.Rectangle(-86,-75,172.1,111.2), null);


(lib.pumpkinapplepies = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape.setTransform(99.3,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_1.setTransform(77.8,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnChQgMgDAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgSIAAgYQAAgjgBgKQgCgLgFgCIgKgEQgOgFAAgHQAAgFAEgEQAEgEAKgEIAigLIAXgEQAGAAADAEQADAEAAALIAAANIgBAKIgBA5IAAABIgBA4QAAAVACAJQACAJAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgeAAQghAAgLgEgAgbhxQgKgIAAgMQAAgNALgJQAKgJAQAAQANAAAKAIQAKAJAAAMQAAAMgLAJQgKAJgPAAQgPAAgJgIg");
	this.shape_2.setTransform(59.4,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah0CgQgNgEAAgJQAAgKAOgFIAKgFQAFgEACgbQACgbAAhGIgChVQgCghgDgEQgCgDgMgFQgMgFAAgJQAAgIAHgEQAHgEAOAAIAXAAIAaAAIAtgBIAkgBQAzAAAZAWQAZAWAAAqQAAAwgfAZQgfAYg8AAQgWAAAAgPQAAgQATAAQAcAAASgPQARgPAAghQAAgfgRgPQgSgPglAAQgQAAgHADQgGACgDAHIgCAUIgBAvIAABjIABBAQACARAEAEIAKAEQAOAFAAAKQAAAJgMAEQgNAEgkAAQgjAAgMgEg");
	this.shape_3.setTransform(40.2,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_4.setTransform(1.6,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmCiQgLgDAAgKQAAgHAKgEIALgHQAEgDACgOIABgtIAAgjIAAgqIAAgRQAAg5gCgQQgCgRgFgDIgOgFQgOgDAAgIQAAgGAFgEQAEgEAQgFIAegJIAXgDQAHAAACAFQADAEAAAKIAAASQgDBQAABRIACBNQABAQAEAFIAMAGQALAEAAAJQAAAJgLADQgMAEgdAAQgiAAgLgEg");
	this.shape_5.setTransform(-17,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhtCaQgMgEAAgJQAAgHAKgFIAMgFQAEgFACgSQACgRAAg5IAAgkQAAg9gDgSQgCgSgEgCIgLgFQgOgEAAgIQAAgFAEgEQAFgEAJgDIAfgKQAQgEAHAAQAGAAADADQADAEAAAHIAAALIAAAFIABABIAJgGIAJgGQAOgLAMgEQANgFANgBQAqAAAbAfQAaAfABAxQAAA1geAjQgeAjgvAAQgSAAgIgFQgHgGgBgJQAAgFAFgEQADgDAHAAIAFAAIAIABQAZABAPgVQAPgVAAgiQAAgngQgXQgRgYgZAAQgXAAgNANQgOANAAAiIAACPIABAWQABAJADAEQADADAKACIAIAEIAGADIABAHQAAAIgNAEQgNADggAAQghAAgLgDg");
	this.shape_6.setTransform(-36.9,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhtCaQgLgEAAgJQAAgHAJgFIALgFQAFgFACgSQABgRAAg5IAAgkQAAg9gBgSQgDgSgFgCIgKgFQgOgEAAgIQAAgFAFgEQAEgEAIgDIAhgKQAPgEAHAAQAHAAACADQADAEAAAHIAAALIABAFIABABIAJgGIAIgGQAOgLAMgEQANgFANgBQAqAAAbAfQAbAfgBAxQAAA1gdAjQgeAjgvAAQgSAAgIgFQgHgGAAgJQAAgFADgEQAEgDAGAAIAGAAIAIABQAZABAPgVQAPgVAAgiQAAgngRgXQgQgYgZAAQgYAAgNANQgNANAAAiIAACPIABAWQABAJADAEQADADAKACIAJAEIAEADIACAHQAAAIgNAEQgNADggAAQghAAgLgDg");
	this.shape_7.setTransform(-63.6,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAxCiQgNgEAAgLQAAgIAQgFIAEgCQAGgCACgDQADgDAAgGIgEgSIgIgZIgEgGIgDgCIgSgCIgiAAIgUAAQgSAAAAgQQAAgTATAAIALAAIAXABIAYAAIgXg9IgWg1IgGAAIgXA5IgXA6IgWA6QgFANAAAIQAAAHADAFQADAEAHADIAIAEQAOAEAAAJQAAALgMAEQgLADgiAAQgjAAgLgDQgMgEAAgLQAAgIAOgFIAIgFQASgKAPgnIAFgOIAghQIAIgUQAhhQAIgjQACgKAFgDQAEgDANAAQAHAAAFAEQAFADAFAIIAiBLIAtBqIAKAaQAaBCAPAIIAIADQAOAEAAAJQAAALgOAEQgNADgpAAQgnAAgOgDg");
	this.shape_8.setTransform(-92.7,7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiICJQgqghAAg0QAAgdAOgWQANgWAegUIABgCQgKgKgFgLQgFgLAAgMQAAgjAagXQAagXApAAQAcAAATALQASALAAAOQAAAFgEAEQgEADgHAAIgSgFQgQgGgNAAQgSAAgLALQgLAMAAAUQAAAJADAGQADAHAGAFQAFAFALAFIANAFIAEACIACADQAAAFgIAJQgJAKgHAAIgKgCIgPgGQgNALgHAPQgGARAAAUQAAArAcAcQAcAcAsAAQAkAAAXgTQAWgTAAgfQAAgTgJgLQgJgLgQAAQgPAAgKAJQgKAJAAAPIAAAEIAAACIgDABIgEABQgIAAgFgGQgFgHAAgLQAAghBjgtIAHgDQAagMANgOQAOgOAAgQQAAgLgGgFQgGgFgMAAIgIABIgJABQgFAAgDgDQgDgDAAgFQAAgKANgHQAMgGATAAQAYAAAPANQAOANAAAXQAAAdgZAWQgYAXgyATQAVAIAKARQALARAAAXQAAARgGAQQgHAQgNAOQgVAWgeAMQgfALgoAAQhFAAgpggg");
	this.shape_9.setTransform(100.8,-46);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhuBwQgMgEAAgJQAAgIALgFIAGgCQAGgDACgHQADgIAAgSIAAgPIgBgSIAAgWQAAgkgBgKQgCgMgFgCIgKgDQgOgFAAgIQAAgEAEgFQAEgEAKgDIAhgLIAXgEQAGAAADADQADAEAAAIIAAAOIABACIABACIABgBIABgBIAFgEIAFgFQAYgWAcAAQAQgBAQAIQAOAGALANQAKAMAFARQAEARAAAkIAAAeIAAAPIAAAMQAAARACAGQACAHAGADIAGACQALAFAAAIQAAAJgLAEQgKADgjAAQggAAgKgDQgLgEAAgIQAAgJALgEIAJgEQAFgCACgKQACgKAAgYQAAhIgJgSQgJgSgYAAQgLAAgLAIQgLAGgGANQgFAJgCASQgCARAAAtQAAAVACAIQACAHAFACIAIAEQAMAEAAAJQAAAIgLAEQgLAEgeAAQgiAAgLgEg");
	this.shape_10.setTransform(54.6,-41.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnChQgMgDAAgKQAAgIALgEIAGgDQAGgDACgHQADgIAAgRIAAgPIgBgSIAAgYQAAgjgBgKQgCgLgFgCIgKgEQgOgFAAgHQAAgFAEgEQAEgEAKgEIAigLIAXgEQAGAAADAEQADAEAAALIAAANIgBAKIgBA5IAAABIgBA4QAAAVACAJQACAJAFADIAIADQAMAEAAAJQAAAJgLADQgLAEgeAAQghAAgLgEgAgbhxQgKgIAAgMQAAgNALgJQAKgJAQAAQANAAAKAIQAKAJAAAMQAAAMgLAJQgKAJgPAAQgPAAgJgIg");
	this.shape_11.setTransform(34.7,-46.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABKClIgKgBQgKgEgVgcIgKgMIgEgFQg2hHgFAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgBAJIAAAKIACAvQABAOADAEIANAGQAKAEAAAJQAAAJgLADQgLAEgeAAQgiAAgLgEQgLgDAAgKQAAgIALgEIAGgDQAGgDADgLQACgLAAgaIAAgcIgBgjIAAgbIgBhUQgBgVgEgEQgCgDgLgDIgHgCIgIgEIgCgGQAAgGAEgEQAFgEAQgFIAegJIAXgDQAHAAADAFQADAEAAAKIgCAsIgBA6IAAA4IABAMQABAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIAKgFIAQgOIAWgVQAGgHAAgDQAAgCgJgEQgHgFAAgHQAAgKALgEQALgEAhAAQAVAAAKAEQAKAEAAAJQAAALgQAEQgRAEgHAEQgIAFgTASIgEAEIgIAIIgCAFQAAAEAUAaIACADIAnAvQAQATAJAHQAFADAPAFQAOAFAAAJQAAAJgKAFQgLAEgYAAg");
	this.shape_12.setTransform(16.6,-46.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhtCaQgMgEAAgKQAAgHAKgDIAMgHQAEgEACgSQACgRAAg5IAAgkQAAg9gDgSQgCgSgEgDIgLgDQgOgFAAgIQAAgFAEgEQAFgEAJgDIAfgLQAQgEAHAAQAGABADADQADADAAAJIAAALIAAAEIABACIAJgHIAJgHQAOgKAMgFQANgEANAAQAqAAAbAeQAaAfABAxQAAA1geAjQgeAjgvAAQgSAAgIgGQgHgFgBgJQAAgFAFgDQADgFAHAAIAFABIAIACQAZgBAPgUQAPgVAAgjQAAgmgQgYQgRgXgZAAQgXAAgNANQgOANAAAiIAACPIABAXQABAIADADQADADAKAEIAIACIAGAEIABAHQAAAIgNAEQgNADggABQghgBgLgDg");
	this.shape_13.setTransform(-10.8,-37);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ai3BwQgLgEAAgJQAAgIALgFIAGgCQAGgDADgHQACgIAAgSIAAgPIgBgSIAAgNQAAgpgBgMQgCgNgFgDIgKgDQgOgFAAgIQAAgFAEgDIAOgIIAigMIAWgDQAGAAADADQADAEAAAIIAAAMIAAACIABADIABABIABgBIABgBIAFgEIADgCQAbgZAcAAQAKAAAKACQAKADAJAHQAHAFAJAKQAIALACAAQADAAAGgHIAKgKQAPgNALgEQALgEANAAQAaAAAUAKQATAKAJATQAKAWAABBIABAWIgBANIAAAJQAAAOADAFQACAGAFADIAGACQAMAFAAAIQAAAJgLAEQgLADgjAAQggAAgLgDQgLgEAAgIQAAgJAMgFIAIgDQAGgDACgLQACgLAAgbQAAhCgJgSQgJgSgYAAQgaAAgLAXQgMAWAAA3IAAAMQAAAZADAHQACAIAGADIAGACQALAFAAAIQAAAJgLAEQgKADgjAAQgeAAgLgDQgLgEAAgIQAAgJALgEIAJgEQAFgDACgIQACgKAAgZQAAhIgJgSQgJgSgYAAQgMAAgLAIQgLAGgGANQgFAKgCATQgCARAAArQAAAUACAIQACAIAFACIAIAEQAMAEAAAJQAAAIgLAEQgMAEgdAAQgjAAgLgEg");
	this.shape_14.setTransform(-44.4,-41.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgMAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTAAgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAEgEQAFgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIAAAJIgDBUQAAAuAKARQAKASAWAAQAZAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQgBgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIAAANIgDBcIAAAmIACAPQACAJALAFIAAAAIAEABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_15.setTransform(-78.6,-41);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah0ChQgNgFAAgKQAAgJAOgFIAKgFQAFgEACgaQACgcAAhGIgChVQgCghgDgEQgCgDgMgFQgMgFAAgIQAAgJAHgEQAHgEAOAAIAXAAIAaABIAtgCIAkgBQAzAAAZAWQAZAWAAAqQAAAvgfAZQgfAYg8AAQgWAAAAgPQAAgPATAAQAcAAASgPQARgPAAghQAAgfgRgPQgSgPglAAQgQAAgHACQgGADgDAGIgCAVIgBAvIAABjIABBAQACARAEADIAKAFQAOAFAAAJQAAAKgMAFQgNADgkAAQgjAAgMgDg");
	this.shape_16.setTransform(-104.8,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pumpkinapplepies, new cjs.Rectangle(-121,-75,242,111.2), null);


(lib.ordernowuse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATAmIgTg4IgSA4IgQAAIgZhLIAQAAIARA5IABAAIASg5IAPAAIATA5IARg5IAQAAIgZBLg");
	this.shape.setTransform(33.7,-50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAlQgHgDgFgFQgGgGgDgHQgDgHAAgJQAAgIADgHQADgIAGgEQAFgGAHgDQAIgDAIAAQAIAAAIADQAHADAGAGQAFAEADAIQAEAHAAAIQAAAJgEAHQgDAHgFAGQgGAFgHADQgIADgIAAQgIAAgIgDgAgKgYQgEACgEAEQgDAEgCAFQgCAEAAAFQAAAGACAEQACAFADAEQAEAEAEACQAFACAFAAQAGAAAEgCQAGgCACgEQADgEADgFQABgEAAgGQAAgFgBgEQgDgFgDgEQgCgEgGgCQgEgDgGABQgFgBgFADg");
	this.shape_1.setTransform(22.7,-50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATAnIAAgpIgBgJIgCgHQgCgEgEgCQgDgBgFAAQgIgBgGAIQgFAGAAAMIAAAnIgQAAIAAg6IAAgIIAAgJIAOAAIABAGIAAAGIAAAAIAEgFIAGgFIAHgDIAHgBQAHAAAFADQAFACAEAEQAEAEACAGQABAGAAAGIAAAug");
	this.shape_2.setTransform(13.1,-50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAnIAAg6IAAgIIAAgJIAOAAIAAAHIAAAGIABAAQADgHAFgEIAHgDIAHgBIAGABIgBANIgGAAQgGAAgEACIgGAFQgCAEgBAEIgCAJIAAAng");
	this.shape_3.setTransform(2.2,-50.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAlQgHgDgFgFQgGgFgDgHQgDgIAAgJQAAgIADgHQADgIAFgEQAGgGAHgDQAHgDAHAAQAJAAAHADQAGADAFAFQAFAEACAIQADAHAAAJIAAACIAAACIg7AAQAAAGACADQACAFADADQADADAFACQAEABAEAAQAIAAAGgCQAFgEADgFIALAJQgGAHgIAEIgJADIgKABQgHAAgIgDgAAXgGQAAgEgCgEIgEgHIgGgFQgEgBgGAAIgIABIgHAFQgDADgCAEQgCAEAAAEIAsAAIAAAAg");
	this.shape_4.setTransform(-5.9,-50);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRA7QgHgDgFgGQgFgGgDgHQgCgIAAgIQAAgIACgHQADgGAFgGQAFgFAHgEQAHgDAJAAQAIAAAHAEQAHAFAEAFIAAAAIAAg5IAPAAIAAB5IgOAAIAAgNIgBAAQgEAIgIADQgHADgHABQgJAAgHgDgAgKgCQgEACgDACQgEAEgBAFQgCAFAAAFIACALQABAEAEAFQADADAEACQAFADAFAAQAGAAAFgDQAFgCADgDQADgEACgFQACgFAAgGQAAgFgCgFQgCgFgDgEQgDgCgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_5.setTransform(-15.8,-52.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAnIAAg6IAAgIIAAgJIAOAAIAAAHIAAAGIABAAQADgHAFgEIAHgDIAHgBIAGABIgBANIgGAAQgGAAgEACIgGAFQgCAEgBAEIgCAJIAAAng");
	this.shape_6.setTransform(-22.9,-50.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMA7IgLgEQgLgEgIgJQgIgHgEgLQgFgLAAgNQAAgNAFgKQAEgMAIgHQAIgIALgFIALgCIAMgBQANAAALADIAKAGIAJAHQAIAHAFAMQAEAKAAANQAAANgEALQgFALgIAHIgJAIQgFADgFACQgLAEgNAAIgMAAgAgRgpQgHADgHAHQgFAGgDAIQgDAJAAAIQAAAJADAIQADAJAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAHgDAGgGQAGgGADgJQADgIAAgJQAAgIgDgJQgDgIgGgGQgGgHgHgDQgJgEgJAAQgJAAgIAEg");
	this.shape_7.setTransform(-33.1,-51.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ordernowuse, new cjs.Rectangle(-41.9,-63.8,83.9,23.7), null);


(lib.ordernow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AATAmIgTg4IgSA4IgQAAIgYhLIAPAAIARA5IABAAIASg5IAPAAIASA5IASg5IAQAAIgaBLg");
	this.shape.setTransform(32.2,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63900").s().p("AgPAlQgIgDgGgFQgFgGgDgHQgDgIAAgIQAAgIADgHQADgIAFgEQAGgGAIgDQAHgDAIAAQAJAAAHADQAHADAGAGQAFAEAEAIQADAHAAAIQAAAIgDAIQgEAHgFAGQgGAFgHADQgHADgJAAQgIAAgHgDgAgKgYQgFACgDAEQgDAEgCAFQgBAEAAAFQAAAGABAEQACAFADAEQADAEAFACQAFADAFgBQAGABAFgDQAEgCAEgEQADgEABgFQACgEAAgGQAAgFgCgEQgBgFgDgEQgEgEgEgCQgFgCgGgBQgFABgFACg");
	this.shape_1.setTransform(21.2,-50.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D63900").s().p("AATAnIAAgpIgBgJIgCgHQgCgEgDgCQgEgCgFAAQgIAAgGAIQgGAGAAAMIAAAnIgOAAIAAg6IAAgIIgBgJIAOAAIAAAHIAAAFIABAAIAEgFIAGgFIAHgDIAHgBQAHAAAFADQAGACADAEQAEAEABAGQACAGAAAGIAAAug");
	this.shape_2.setTransform(11.6,-50.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D63900").s().p("AgVAnIAAg6IAAgIIAAgJIAOAAIAAAHIAAAGIABAAQADgHAFgEIAHgDIAHgBIAGABIgBANIgGAAQgGAAgEACIgGAFQgCAEgBAEIgCAJIAAAng");
	this.shape_3.setTransform(0.7,-50.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63900").s().p("AgNAlQgHgDgFgFQgGgFgDgHQgDgIAAgJQAAgIADgHQADgIAFgEQAGgGAHgDQAHgDAHAAQAJAAAHADQAGADAFAFQAFAEACAIQADAHAAAJIAAACIAAADIg7AAQAAAEACAFQACAEADADQADADAFACQAEACAEgBQAIAAAGgCQAFgEADgFIALAJQgGAHgIAEIgJADIgKABQgHAAgIgDgAAXgGQAAgEgCgEIgEgHIgGgFQgEgBgGAAIgIABIgHAFQgDADgCAEQgCAEAAAEIAsAAIAAAAg");
	this.shape_4.setTransform(-7.4,-50.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D63900").s().p("AgRA7QgHgEgFgFQgFgGgDgHQgCgIAAgHQAAgJACgHQADgHAFgFQAFgGAHgDQAHgDAJAAQAIAAAHAFQAHAEAEAFIAAAAIAAg5IAPAAIAAB5IgOAAIAAgNIgBAAQgEAIgIADQgHADgHAAQgJAAgHgCgAgKgCQgEABgDADQgEAEgBAFQgCAFAAAGIACAKQABAEAEAFQADADAEACQAFADAFAAQAGAAAFgDQAFgCADgDQADgEACgFQACgFAAgFQAAgGgCgFQgCgFgDgEQgDgDgFgBQgFgDgGAAQgFAAgFADg");
	this.shape_5.setTransform(-17.3,-52.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63900").s().p("AgVAnIAAg6IAAgIIAAgJIAOAAIAAAHIAAAGIABAAQADgHAFgEIAHgDIAHgBIAGABIgBANIgGAAQgGAAgEACIgGAFQgCAEgBAEIgCAJIAAAng");
	this.shape_6.setTransform(-24.4,-50.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D63900").s().p("AgLA6IgMgDQgLgEgIgJQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgMAIgHQAIgIALgFIAMgDIALAAQANAAALADIAKAGIAJAHQAIAHAEAMQAFAKAAANQAAANgFALQgEAKgIAIIgJAHQgEAEgGACQgLAEgNAAIgLgBgAgRgpQgIAEgFAGQgGAGgDAIQgDAJAAAIQAAAJADAIQADAJAGAGQAGAGAHADQAIAEAJAAQAJAAAIgEQAJgDAFgGQAGgGADgJQADgIAAgJQAAgIgDgJQgDgIgGgGQgFgGgJgEQgIgEgJAAQgJAAgIAEg");
	this.shape_7.setTransform(-34.6,-52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ordernow, new cjs.Rectangle(-43.4,-64.2,83.9,23.7), null);


(lib.mainsides = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBBQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAgFIAAgGIABgFIADgEIA4gsQAFgEADgFQADgEAAgGQAAgFgCgEQgCgEgEgCIgIgEIgHgBQgIAAgFACIgIAGIgHAGQgDACgDAAIgEgBIgEgCIgDgEQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIACgEQAEgGAFgEIALgHQAMgFANAAQAJAAAJACQAIADAGAFQAHAFAEAIQAEAHAAAKQAAALgHAJQgGAIgJAGIghAaIgBACIgBACQAAADADABIAxAAIAEABIACADIABAEIAAAEIgBAGQgBADgEAAg");
	this.shape.setTransform(92.4,-23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJBAIgEgBIgFgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAhQQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBIgCgBQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgEAAgDgDQgDgEAAgEIABgFQACgDACgBIAEgDIAGgEIAHgEIAGgEIAHgEIADgBQABAAAAAAQABAAAAABQABAAAAAAQABAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAABzQAAADgDABIgGACg");
	this.shape_1.setTransform(82.7,-23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBBIgDgBIgCgBIgCgBIgWgjIgDgEQgDgBgDAAIgQAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAAgQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAIgEACIgFAAIgEAAQgEAAgCgCQgCgBAAgEIAAh1QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAFgBIA2AAQAKAAAIADQAIADAGAFQAGAGADAIQAEAIAAAKQAAALgEAHQgEAGgFAEIgJAHQgEACAAADIAAADIAFAHIAHAKIAHALIADAGIgCAEIgDADIgFACIgEAAgAgagpQgCACAAAEIAAAcQAAAEACACQADABADAAIAaAAIAJgBIAHgEQAEgCACgEQACgEgBgGQABgKgIgGIgHgEIgJgBIgaAAIgGABg");
	this.shape_2.setTransform(68.8,-23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNBCIgNgEIgLgGIgLgIQgJgJgGgNIgDgMIgBgOIABgMIADgNQAGgMAJgJIALgIIALgGIANgEIANgCIAOACIANAEQANAFAJAJQAJAJAFAMQAGAMAAANIgBAOIgFAMQgFANgJAJQgJAJgNAFIgNAEIgOABIgNgBgAgQgoQgHAEgGAGQgHAGgDAIQgEAIAAAIQAAAKAEAIQADAIAHAGQAGAGAHADQAJADAHAAQAIAAAIgDQAJgDAGgGQAGgGADgIQAEgIAAgKQAAgIgEgIQgDgIgGgGQgGgGgJgEQgIgDgIAAQgHAAgJADg");
	this.shape_3.setTransform(54.2,-23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqBBQgFAAgCgFIAAh2QAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAIBYAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIACAEIABAEIAAADQAAAEgBACIgEAEIhAAAQgBAAAAAAQgBAAAAABQgBAAgBAAQAAABgBAAQAAABgBAAQAAABAAAAQAAABgBABQAAAAAAABIAAAPQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIApAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABAAIABAFIABAFIAAADIgBAFQgBAAAAABQgBAAAAABQAAAAgBAAQgBAAAAAAIgpAAIgCABIgCABIgCACIgBADIAAAtQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgEABIgFAAg");
	this.shape_4.setTransform(42.2,-23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcA+QgOgGgKgJIgBgDIgBgCIACgEIADgFIAFgDIAEgBQADAAAEACIAIAGIAKAFQAHACAIAAIAKAAIAKgDQAEgDADgDQADgEAAgGQAAgFgDgDQgEgDgGgCIgOgCIgOgDIgOgDQgIgCgGgDQgFgEgEgGQgDgGAAgKQAAgKAEgIQAGgHAIgFQAHgEAKgDQAJgCAIAAIAMABIANADIAMAFIAKAHIABACIAAADQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgEAEIgFADIgFABIgEAAQgGgGgIgDQgIgEgIAAIgIABIgJADQgEACgDADQgCAEAAAFQAAAHAFADQAGADAJABIATADQAMABAIAEQAJADAHAHQAGAHAAANQAAALgGAIQgEAIgJAFQgIAGgKACQgKADgIAAQgOAAgOgFg");
	this.shape_5.setTransform(23.6,-23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrBAIgEgBQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAAh3QAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAEgBIBZAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAIABAFIAAADIAAAEIgBAFIgDADIhCAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIAAASQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAIArAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIABAEIAAAGIAAACQAAAGgFABIgpAAQgCABgDACQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAABIAAATQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIBCAAQAEACAAAFIAAAEIgBAFIgBAFQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_6.setTransform(11.8,-23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BAIgFgBQgCgBgBgEIAAhzQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAgBQABAAAAAAQABAAAAgBQABAAABAAQAAAAABAAIAvAAIAOABIAMADQANAFAJAJQAJAIAGALIAEANIACANQgBAPgFAMIgHAKIgIAJIgKAIIgMAGQgMAEgOAAgAgjgmQgCACAAACIAABGQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGACIAWAAQAJAAAIgDQAIgDAHgGQAFgFAEgHQADgJAAgJQAAgIgDgIQgEgIgFgFQgHgFgIgDQgIgEgJAAIgWAAQgEAAgCADg");
	this.shape_7.setTransform(-1.8,-23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABCIgEAAQgFAAgCgEIAAh7QAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAIAFgBIADAAIAFAAQAFAAACAEIAAB7IgDADIgEABg");
	this.shape_8.setTransform(-12.5,-23.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcA+QgOgGgKgJIgBgDIgBgCIABgEIAEgFIAFgDIAEgBQADAAADACIAIAGIALAFQAHACAIAAIAJAAIAKgDQAFgDADgDQADgEAAgGQAAgFgDgDQgEgDgGgCIgOgCIgNgDIgQgDQgHgCgFgDQgHgEgDgGQgDgGgBgKQAAgKAGgIQAFgHAHgFQAIgEAJgDQAKgCAHAAIANABIANADIAMAFIAKAHIABACIAAADQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgEAEIgFADIgFABIgEAAQgGgGgIgDQgHgEgJAAIgIABIgJADQgEACgDADQgDAEABAFQgBAHAHADQAGADAIABIATADQALABAKAEQAIADAHAHQAGAHAAANQAAALgGAIQgEAIgJAFQgIAGgKACQgKADgIAAQgOAAgOgFg");
	this.shape_9.setTransform(-21.6,-23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbBAQgJgCgGgFQgHgFgFgIQgEgHAAgKQAAgJAEgIQAFgHAHgEIACgCIAAgDIgBgEIgDgFIgEgGQgBgEAAgGQAAgIADgHQAFgGAFgFQAHgEAHgCQAHgDAJAAQAGAAAIADQAJADAGAGQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgBAEIgDAEIgEADIgEABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBIgEgDIgEgDQgDgCgFAAIgHABIgHAEIgEAFIgCAHQAAAIAEAEQADAEAFABIAJABQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAFIgBAEQAAAAgBABQAAAAAAABQgBAAgBAAQAAAAgBAAIgKABQgGABgEADQgFACgCAEQgDAFAAAGQAAAGADAEQACAEADADIAIAEIAKABQAJAAAGgEQAHgEADgHQAEgHABgIQABgIAAgIIAAgCIAAgEIAFgFQADgDADAAIAUAAQABAAABAAQABABAAAAQABAAAAABQAAAAABABIAAAFQAAADgBABIgEABIgEABQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAIgCADIgBADQAAANgEAKQgDAKgHAIQgGAIgKAEQgKAFgMAAQgJAAgJgDg");
	this.shape_10.setTransform(-39.6,-23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAmBDQgDgBgDgDIg0hIQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIgDACQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIAABCQgBADgDABIgHABIgHAAQgEgBgBgEIAAh5QAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAEgCIAFAAIADgBQAHAAACAFIA0BFIADABIADAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAhBIADgDIAEgBIAFgBIAFAAQAFAAACAGIAAB6IgEAEIgFABg");
	this.shape_11.setTransform(-58.7,-23.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAABCIgEAAQgFAAgCgEIAAh7QAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAIAFgBIADAAIAFAAQAFAAACAEIAAB7IgDADIgEABg");
	this.shape_12.setTransform(-68.3,-23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAvBBIgHgBQgEgBgBgDIgHgSIgDgCQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAIgrAAIgBAAIgCABIgCABIgBABIgHASIgDACIgDACIgEABIgEAAIgCAAIgFgBIgDgCQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIA0h4QAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAIAEgBIAFAAQADABACADIAyB3IAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgEABIgFAAgAgBgUIgBACIgCAEIgCAFIgEAIIgDAGIgBAGIgBACIABADQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIAZAAIACgCIABgCIgCgGIgDgJIgFgLIgDgHQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAg");
	this.shape_13.setTransform(-77.4,-23.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AArBBIgGgBQgEgCAAgEIAAg5IgBgDIgDgBQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBABIgUAgQgCADgDAAIgEgBIgDgCIgSghQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAIgDACIAAACIAAA5QgCAFgEABIgIABIgDAAIgDgCIgDgCIgBgDIAAh0QACgEADgBIAIAAIADABIAFADIAeAzQACADAEABIADgBIADgEIAfgxQADgFAHgBIAFABQACAAACAEIAAB1QAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgFACIgEABg");
	this.shape_14.setTransform(-90.8,-23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainsides, new cjs.Rectangle(-100.1,-34.3,200.2,22.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgWBhQgIgJgBgOQABgNAIgJQAKgJAMAAQANAAAJAJQAKAJgBANQABAOgKAJQgJAJgNAAQgMAAgKgJgAgWgzQgIgJgBgNQABgNAIgKQAKgJAMAAQANAAAJAJQAKAKgBANQABANgKAJQgJAJgNAAQgMAAgKgJg");
	this.shape.setTransform(64.1,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9BlQgKgDAAgJQAAgHAKgEIAGgCQAFgDACgHQACgHAAgPIAAgOIAAgQIAAgMQAAglgCgLQgBgLgFgDIgJgEQgNgDAAgHQAAgFAFgDQADgEAJgEIAbgJIASgDQAKAAAEAcIAAAEIABAAQAKgQAMgJQAMgIALAAQAOAAAIAIQAIAJAAAOQABAOgHAJQgGAIgLAAIgLgCIgIgGIgFgIQgDgGgBAAQgPAAgFAUQgFATAAA9QAAASABAJQADAJAGACIAIADQAMAEAAAIQAAAIgLADQgMADgbAAQgfAAgKgDg");
	this.shape_1.setTransform(51.2,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBNQgdgeAAgsQAAguAdgfQAegfAtAAQAnAAAYAXQAXAWAAAmQgBAMgDAEQgEAFgPAAIhNAAQgHgBgDgDQgFgDAAgFQAAgGAFgDQADgDAHAAIApAAIALgCQACgBAAgFQAAgTgNgNQgNgOgSAAQgYAAgMAWQgMAVAAAdQAAAfAQAXQAQAXAZAAQAPAAALgDQAKgDAKgHIAIgFQAKgJAFAAQAEAAADADQAEACAAAFQAAAEgGAIQgFAHgIAHQgSAPgQAGQgRAGgTAAQgrAAgcgdg");
	this.shape_2.setTransform(32.2,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhjBlQgKgDAAgJQAAgHAKgEIAFgCQAFgDACgHQACgHAAgPIAAgOIAAgQIAAgUQAAgggCgKQgBgKgEgCIgKgEQgMgDAAgHQAAgFAEgDQAEgEAIgEIAegJIAVgDQAFAAADADQACADAAAGIAAAOIABACIABAAIABAAIABAAIAFgFIAEgDQAWgVAZAAQAOAAAOAGQAOAHAJAKQAJAMAEAPQAEAPAAAhIAAAbIAAANIAAAMQAAAOACAGQACAGAFADIAFACQAKAEAAAHQAAAIgJAEQgKADgfAAQgcAAgKgDQgKgDAAgIQAAgIAKgEIAIgDQAFgCACgJQACgJAAgWQAAhAgIgRQgJgQgVAAQgKAAgKAHQgKAGgFALQgFAJgCAQQgBAPAAAoQAAAUABAGQACAHAEACIAIADQAKAEAAAIQAAAIgKADQgKADgaAAQgfAAgKgDg");
	this.shape_3.setTransform(9.3,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhjBlQgKgDAAgJQAAgHAKgEIAFgCQAFgDACgHQACgHAAgPIAAgOIAAgQIAAgUQAAgggCgKQgBgKgEgCIgKgEQgMgDAAgHQAAgFAEgDQAEgEAIgEIAegJIAVgDQAFAAADADQACADAAAGIAAAOIABACIABAAIABAAIABAAIAFgFIAEgDQAWgVAZAAQAOAAAOAGQAOAHAJAKQAJAMAEAPQAEAPAAAhIAAAbIAAANIAAAMQAAAOACAGQACAGAFADIAFACQAKAEAAAHQAAAIgJAEQgKADgfAAQgcAAgKgDQgKgDAAgIQAAgIAKgEIAIgDQAFgCACgJQACgJAAgWQAAhAgIgRQgJgQgVAAQgKAAgKAHQgKAGgFALQgFAJgCAQQgBAPAAAoQAAAUABAGQACAHAEACIAIADQAKAEAAAIQAAAIgKADQgKADgaAAQgfAAgKgDg");
	this.shape_4.setTransform(-14.9,11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjCRQgKgDAAgJQAAgHAKgDIAFgDQAFgDACgHQACgHAAgPIAAgOIAAgQIAAgVQAAgggCgJQgBgKgEgCIgKgDQgMgEAAgHQAAgFAEgDQAEgEAIgDIAfgKIAVgEQAFAAADAEQACAEAAAJIAAANIAAAJIgCAyIAAACIgBAxQAAAUACAIQACAIAEACIAIAEQAKAEAAAHQAAAIgKADQgKADgaABQgeAAgKgEgAgYhmQgJgHAAgKQAAgMAKgJQAJgHAOAAQAMgBAJAIQAJAHAAALQAAALgKAJQgJAHgOAAQgNAAgIgHg");
	this.shape_5.setTransform(-32.8,7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsCTIgZgBIgRABIgRAAQgZAAgIgDQgHgEAAgJQAAgHAKgEQALgEACgEQADgDACggIABhOIgBhLQgCgegDgFQgCgDgKgEQgLgEAAgJQAAgIAIgDQAJgEAYAAIASABIAUAAIAbgBIAXAAQBLAAAqAnQApAoAABHQAABHgqAkQgqAkhRAAgAgshzQgJADgDAHQgCAHgCAYIgBA+IABBNQACAgACAGQACAGAOAFQANAEATAAQAuAAAXgcQAYgcAAg5QAAg8gbgfQgbgggyAAQgQAAgJADg");
	this.shape_6.setTransform(-54.3,7.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhdCHQgKgJAAgNQAAgKAHgHQAHgIAKAAIAJACIAHAFIAFAHQAFAIAEAAQALAAAKgPQALgPAAgQQAAgRgOggIgCgFIghhHIgTgnQgDgIgMgFQgHgDgDgCQgCgDAAgFQAAgJALgDQAKgEAeAAQAeAAAKAEQAKADAAAIIgCAGIgDAEIgIAEQgIADAAADIAFAPIAQApIAQAmQAFAKADAAQACAAAFgJIANghIAPgoQAFgOAAgFQAAgGgMgHQgLgGAAgGQAAgHAJgCQAKgEAXAAQAYAAAJAEQAIADAAAIQAAAHgLADIgJADQgLAHgNAiIgGAQIgaBAQgiBVgUAaQgWAZgeAAQgOAAgKgIg");
	this.shape_7.setTransform(128.7,-32.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBBMQgdgdAAgsQAAgvAegeQAdgfAtAAQAnAAAYAXQAWAWABAmQgBANgDADQgEAFgPAAIhNAAQgHAAgEgEQgDgDgBgGQABgFADgDQAEgDAHAAIApAAIAKgBQADgCAAgFQAAgTgNgNQgNgOgSAAQgYAAgMAVQgMAVAAAeQAAAfAQAXQAQAYAaAAQAOgBALgDQAKgDAKgHIAIgFQAKgJAFAAQAEAAADADQAEADAAAEQgBAFgFAHQgFAHgIAHQgSAOgQAHQgRAGgTAAQgqAAgdgeg");
	this.shape_8.setTransform(107.7,-36.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABDCVIgJgCQgKgDgSgZIgJgLIgEgEQgwhAgFAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABgBAAIAAAIIAAAJIABArQABAMADAEIAMAFQAJAFAAAHQAAAIgKADQgLADgaAAQgfABgKgEQgKgDAAgJQAAgHAKgEIAGgCQAFgDACgKQACgJABgZIgBgZIAAgfIAAgYIgBhMQgCgSgDgFQgCgCgJgDIgHgCIgIgDIgBgGQAAgFAEgEQAEgDAOgFIAcgIIAVgDQAFAAAEAFQACADAAAKIgCAnIAAA1IAAAyIAAAKQABABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIAJgEIAPgNIATgTQAFgGAAgDQAAgCgHgDQgHgEAAgHQAAgIAJgEQAMgEAdAAQASAAAKAEQAIAEABAHQAAAKgPAEQgPAEgGADQgIAEgRARIgDADIgHAIIgCAEQAAADASAYIACADIAjArQAOAQAIAGQAFAEANADQANAFAAAIQAAAJgJAEQgJADgXAAg");
	this.shape_9.setTransform(86.3,-41.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag9BlQgKgDAAgJQAAgHAKgEIAGgCQAFgDACgHQACgHAAgPIAAgOIAAgQIAAgMQAAglgCgLQgBgLgFgDIgJgEQgNgDAAgHQAAgFAFgDQADgEAJgEIAbgJIASgDQAKAAAEAcIAAAEIABAAQAKgQAMgJQAMgIALAAQAOAAAIAIQAIAJAAAOQABAOgHAJQgGAIgLAAIgLgCIgIgGIgFgIQgDgGgBAAQgPAAgFAUQgFATAAA9QAAASABAJQADAJAGACIAIADQAMAEAAAIQAAAIgLADQgMADgbAAQgfAAgKgDg");
	this.shape_10.setTransform(66.9,-36.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAsBnQgDgDAAgHIAAgOIAAgBIgBAAQgCAAgFAFIgDADQgKAKgMAFQgLAFgPAAQgQAAgNgGQgNgGgKgLQgJgLgEgQQgEgRAAgrIAAgNIAAgPIAAgEQAAgRgCgFQgCgEgHgDIgJgDQgLgDAAgHQAAgFAEgDQAEgEAOgFIAcgHIAWgDQAFAAADAEQACAEAAAJIAAAIIgCBMQgBApAJAPQAJAQAVAAQAWAAAKgUQAKgVAAgxIAAgPQAAgQgCgFQgCgFgIgCIgHgDQgMgDAAgHQAAgFAEgDQAEgEAOgFIAcgHIAUgDQAHAAACAEQADADAAAKIgBALIgCBTIAAAjIABANQACAJALAEIADABQAMAEAAAHQAAAEgDAEQgEADgJADIgdAKQgOADgHAAQgGAAgDgDg");
	this.shape_11.setTransform(46.4,-36.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqCRQgMgEAAgJQAAgIAMgEQAKgEACgDQADgEABghIABhgIAAg1IgCghQgBgGgDgBQgEgCgIAAIgJAAQgOAAgIADQgIAEgFAIIgHANIgFAOIgGAGQgEADgEAAQgGAAgDgGQgCgFAAgNQAAgaAGgRQAGgQAKAAIACAAQAQADAZAAIB3AAQAYAAARgDIACAAQAKAAAGAQQAGARAAAaQAAANgCAFQgDAGgHAAIgGgDIgGgGIgGgOIgHgNQgFgIgIgEQgIgDgOAAIgJAAQgIAAgDACQgEABgBAGIgBAhIgBA1IABBgQABAhADAEQACADALAEQALAEAAAIQAAAJgMAEQgLADggAAQgfAAgLgDg");
	this.shape_12.setTransform(21.2,-41.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah6B7QgmgdAAgvQAAgaAMgUQAMgUAbgSIABgCQgJgJgEgJQgFgKAAgLQAAggAXgVQAYgUAlAAQAZAAARAKQARAKAAAMQAAAFgEADQgEADgGAAIgQgFQgPgFgLAAQgRAAgJAKQgKALAAASQAAAHACAHQADAFAFAFQAFAFAJAEIAMAFIAEABIACADQAAAFgIAIQgHAIgHAAIgJgBIgOgFQgLAJgGAOQgGAPAAASQAAAnAZAZQAaAZAnAAQAhAAAUgRQAUgRAAgbQAAgSgIgKQgIgKgOAAQgOAAgJAIQgJAJAAANIAAAEIAAACIgDABIgDAAQgHAAgFgGQgEgFAAgKQAAgeBZgpIAGgCQAXgLAMgNQAMgNAAgNQAAgKgFgFQgFgFgLAAIgHABIgIABQgEAAgDgDQgDgCAAgFQAAgJALgGQALgGASAAQAWAAAMAMQANAMAAAVQAAAZgWAVQgWAUgtARQATAIAJAPQAKAPAAAVQAAAPgGAPQgGAOgLANQgTAUgcAKQgcAKgjAAQg+AAglgdg");
	this.shape_13.setTransform(-19.5,-41);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AilBlQgJgDgBgJQABgHAJgEIAGgCQAFgDACgHQACgHAAgPIAAgOIAAgQIAAgMQAAglgBgLQgDgLgEgDIgJgEQgMgDAAgHQAAgFADgDIAOgHIAdgKIAUgEQAFAAADADQADAEAAAHIAAALIAAACIABACIABAAIABAAIABAAIAEgFIADgCQAZgWAYAAQAKAAAIADQAJACAJAGQAGAFAIAJQAIAKACAAQACAAAGgHIAJgJQAMgLAKgEQALgEALAAQAYAAARAJQASAKAIARQAJATAAA7IAAAUIAAALIAAAJQAAAMACAFQACAFAFADIAGACQAKAEAAAHQAAAIgJAEQgLADgfAAQgdAAgKgDQgKgDAAgIQAAgIALgEIAHgDQAGgDABgKQADgKAAgYQAAg8gJgQQgIgQgWAAQgXAAgKAVQgKAUAAAxIAAALQAAAWACAHQACAHAFADIAFACQAKAEAAAHQAAAIgJAEQgJADggAAQgbAAgKgDQgKgDAAgIQAAgIALgEIAHgDQAFgCABgJQACgIAAgXQABhAgJgRQgJgQgVAAQgKAAgKAHQgKAGgGALQgEAJgCARQgBAQgBAmQABATABAHQACAHAEACIAIADQAKAEAAAIQAAAIgKADQgKADgaAAQgfAAgLgDg");
	this.shape_14.setTransform(-67.7,-36.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAkBgIgLgLIgIAFQgZAQgZAAQgeAAgSgRQgTgRAAgcQAAghAYgRQAYgSAqAAQAKAAAFADQAFADAAAIQAAALgOAAQgTAAgNAJQgMAKAAARQAAARALAJQAKAKASAAQATAAAJgJQAIgIAAgWIAAhMQAAgSgIgKQgHgKgOAAQgKAAgIAFQgJAEgIAJIgEAGQgNAPgNAAQgIAAgFgFQgFgFAAgJQAAgTAYgNQAXgNAlAAQAWAAAQAGQAQAGAJALQAGAIADAMQADANAAAdIAABBQAAALABAGQACAFAFACIAGABQANAEAAAHQAAAJgOAIQgOAIgSAAQgJAAgKgKg");
	this.shape_15.setTransform(-96.9,-36.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAtCPQgLgDAAgJQAAgJANgEIAJgFQADgCACgNIABgwIgBgcIgBgIQgCgEgKgCQgKgBgmAAIgrABQgLABgEADIgCAGIgBAPIAAARIACAwQABANADACIAJAFQANAEAAAJQAAAJgLADQgLAEghAAQggAAgLgEQgLgDAAgJQAAgJAMgEIAJgFQAFgDACgaQABgaAAg8IgBhMQgCgegDgEQgCgDgKgEQgLgFAAgIQAAgIAJgDQAJgDAkAAQAkAAAJADQAKADAAAIQAAAIgNAFIgJAFQgDADgCAMIgBA8QAAAIAHADQAIADAeAAIAQAAIArgBQAMgBAEgEIACgDIABgIIAAgKIgBgxQgCgLgDgCIgJgFQgNgFAAgIQAAgIAKgDQAJgDAkAAQAkAAAJADQAJADAAAIQAAAJgNAEIgJAFQgEADgCAbQgCAcAAA2IACBOQACAfACAEQACADALAEQALAFAAAIQAAAJgLADQgMAEgfAAQghAAgLgEg");
	this.shape_16.setTransform(-123.4,-40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hamturkeydinner, new cjs.Rectangle(-140.8,-67.3,281.7,100.7), null);


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
	this.shape.setTransform(0,-52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AogC3QhLAAg2g2Qg1g2AAhLQAAhLA1g1QA2g2BLAAIRBAAQBMAAA1A2QA2A1gBBLQABBLg2A2Qg1A2hMAAg");
	this.shape_1.setTransform(0,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectangleuse, new cjs.Rectangle(-73.7,-71.2,147.5,38.5), null);


(lib.butternutsquash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgCiQgLgDAAgJQAAgJALgEIAJgDQAFgEACgJQACgKAAgYQAAhIgJgSQgKgSgYAAQgLAAgKAHQgMAIgFAKQgGALgBAQQgCASAAAsQAAAXACAHQABAIAGADIAIADQALAEAAAJQAAAJgLADQgLADgdAAQgkAAgLgDQgKgDAAgLQAAgHAKgEIAHgDQAGgDADgKQACgJAAgZIAAglIAAgiIgBhmQgCgZgEgEQgCgDgNgEQgOgEAAgIQAAgGAGgEQAGgFAUgHIAWgGIAVgDQAHAAAEAFQADAEAAAKIAAAJIgCBaIAAAMIABAFIADACIAFgFIAIgJQALgMANgFQAMgGAOAAQAmAAAUAZQASAZABAzIAAAVIAAAoIAAANQAAALACAFQADAFAFADIAFADQALAEAAAHQAAALgKADQgLADgkAAQgdAAgLgDg");
	this.shape.setTransform(61.1,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape_1.setTransform(38.2,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoBqIgLgMIgKAFQgcATgcAAQghAAgUgTQgVgTAAgfQAAglAagTQAbgUAvAAQALAAAFADQAHAEAAAIQAAANgQAAQgWAAgOALQgNAKAAATQAAASAMALQALALAUAAQAWAAAJgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgJAFgJAKIgFAGQgNASgQAAQgJAAgFgGQgFgGgBgKQABgVAagOQAagPApAAQAZAAARAHQATAGAJANQAHAJADANQADAOAAAhIAABHQAAANACAHQACAGAFABIAGACQAOAEAAAIQAAAKgPAJQgPAJgUAAQgKAAgLgMg");
	this.shape_2.setTransform(16.8,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIAAgBIgBgBQgDAAgFAGIgEADQgKALgNAGQgNAFgRAAQgRAAgPgGQgPgHgKgLQgLgNgEgSQgEgTAAgvIAAgPIAAgRIAAgFQAAgSgCgFQgDgFgJgDIgJgDQgMgEAAgIQAAgFAFgEQAEgEAQgFIAegJIAZgDQAFAAAEAFQACAEAAAKIgBAJIgBBUQAAAuAJARQAJASAYAAQAYAAAMgXQALgXAAg2IAAgRQAAgSgCgFQgDgGgIgCIgJgDQgNgEAAgIQABgFAEgEQAEgEAQgFIAegJIAYgDQAHAAADAEQACAFAAAKIgBANIgCBcIABAmIABAPQACAJALAFIABAAIAEABQAMAFAAAHQAAAFgEAEQgEAEgKAEIgfAKQgQAEgJAAQgGAAgDgDg");
	this.shape_3.setTransform(-9.2,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYCbQgMgEAAgKQAAgIALgFIAMgHQAEgFACgOIABgoIAAiKQAAgZgMgMQgNgNgYAAQgbAAgPAVQgQAUAAAlQAAAmAQAWQARAYAZAAIAIAAIAIgBQALAAAAAMQAAANgOAJQgNAIgXAAQgoAAgbgeQgagfAAgvQAAg5AfgiQAggiAzAAQAPAAAPADQAPAEANAGIAZgLIAPgDIAGACIABAGIAAAGIgCAgIAAB2IAAASQAAA4ACASQACASAFAFIALAGQAKAFAAAHQAAALgLADQgMAEghAAQghAAgLgDg");
	this.shape_4.setTransform(-35.3,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3CjQgZgGgQgJQgJgFgGgUQgGgTAAgZQAAgLAEgFQAEgGAHAAQALAAALAVIAFAJQAPAZARAMQARALAXAAQAYAAARgPQARgOAAgWQAAgfhCgdIgHgEQg3gXgSgUQgSgUAAggQAAgoAegaQAegaAwAAIAaACIAfAHIAJgGIAIgCQAFAAAFAEQAEADAFAJQAHANAFAPQAEAPAAALQAAAIgDAEQgEAEgGAAQgMAAgMgQIgDgEQgNgRgPgIQgPgIgSAAQgZAAgPAMQgOALAAAVQAAASAMAMQAMANAwAUIAJAFQApAQASAQQAMALAGAPQAHAQAAASQAAAuggAaQggAZg5AAQgbAAgZgFg");
	this.shape_5.setTransform(-61.9,7.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLCHQgMgDgIgHQgIgIgDgMQgDgNAAghIAAh5IgVAAIgGgBIgCgHIAAgFQAAgHAXgUIAKgIIAIgIQAYgUAIAAIAGACQADACAAADIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHABAMgEIAPgEQAFAAADADQADADAAAFQAAAMgTAMQgTAMgYAAQgNgBgLgEg");
	this.shape_6.setTransform(92.4,-43.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIAAgBIgCgBQgCAAgFAGIgEADQgKALgNAGQgNAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTABgvIAAgPIAAgRIAAgFQAAgSgDgFQgCgFgJgDIgJgDQgMgEAAgIQAAgFAEgEQAFgEAQgFIAegJIAZgDQAFAAAEAFQACAEAAAKIAAAJIgCBUQAAAuAJARQAKASAWAAQAaAAAKgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQAAgFAEgEQAEgEAQgFIAfgJIAXgDQAGAAAEAEQACAFAAAKIAAANIgDBcIABAmIABAPQABAJAMAFIAAAAIAFABQAMAFAAAHQAAAFgDAEQgFAEgKAEIgfAKQgRAEgIAAQgGAAgDgDg");
	this.shape_7.setTransform(70.7,-41);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhuBwQgMgEAAgJQAAgIALgFIAGgCQAGgDACgHQADgIAAgSIAAgPIgBgSIAAgWQAAgkgBgKQgCgMgFgCIgKgDQgOgFAAgIQAAgEAEgFQAEgEAKgDIAhgLIAXgEQAGAAADADQADAEAAAIIAAAOIABACIABACIABgBIABgBIAFgEIAFgFQAYgWAcAAQAQgBAQAIQAOAGALANQAKAMAFARQAEARAAAkIAAAeIAAAPIAAAMQAAARACAGQACAHAGADIAGACQALAFAAAIQAAAJgLAEQgKADgjAAQggAAgKgDQgLgEAAgIQAAgJALgEIAJgEQAFgCACgKQACgKAAgYQAAhIgJgSQgJgSgYAAQgLAAgLAIQgLAGgGANQgFAJgCASQgCARAAAtQAAAVACAIQACAHAFACIAIAEQAMAEAAAJQAAAIgLAEQgLAEgeAAQgiAAgLgEg");
	this.shape_8.setTransform(43.9,-41.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDBwQgLgEAAgJQAAgJALgDIAFgDQAGgDACgHQADgIAAgSIAAgPIAAgSIAAgNQAAgpgCgMQgCgNgFgDIgLgDQgNgFAAgIQAAgFAEgEQAEgEALgDIAegLIAUgEQALABADAeIABAFIACAAQALgRAMgKQANgJANAAQAQAAAJAJQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgDIgJgGIgGgJQgDgGgCAAQgQAAgGAWQgFAVAABEQAAAUACAKQACAKAHACIAJADQANAFAAAJQAAAIgMAEQgNAEgeAAQgiAAgLgEg");
	this.shape_9.setTransform(22.4,-41.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_10.setTransform(1.4,-41);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLCHQgMgDgIgHQgIgIgDgMQgDgNAAghIAAh5IgVAAIgGgBIgCgHIAAgFQAAgHAXgUIAKgIIAIgIQAYgUAIAAIAGACQADACAAADIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHABAMgEIAPgEQAFAAADADQADADAAAFQAAAMgTAMQgTAMgYAAQgNgBgLgEg");
	this.shape_11.setTransform(-18.4,-43.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLCHQgMgDgIgHQgIgIgDgMQgDgNAAghIAAh5IgVAAIgGgBIgCgHIAAgFQAAgHAXgUIAKgIIAIgIQAYgUAIAAIAGACQADACAAADIAAAqIAzAAQAFAAACACQACACAAAHIAAAFQAAAGgCADQgCACgFAAIgvAAIgDACIgCAGIAABuQAAAdAFAIQAFAHANAAQAHABAMgEIAPgEQAFAAADADQADADAAAFQAAAMgTAMQgTAMgYAAQgNgBgLgEg");
	this.shape_12.setTransform(-34.4,-43.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgNAFgQAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgEgTgBgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAFgEQAEgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIgBAJIgCBUQAAAuAKARQAJASAYAAQAYAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgNgEAAgIQAAgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIgBANIgCBcIAAAmIACAPQABAJAMAFIABAAIADABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_13.setTransform(-56.2,-41);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQCjIgsgCIgWABIgaABQgPAAgIgFQgIgEAAgIQAAgJAMgFQAMgEACgEQADgFACggIAChYIgChVQgCghgDgEQgCgDgMgFQgMgFAAgJQAAgIAHgEQAGgEAOAAIAYAAIAaAAIAtgBIAkgBQAxAAAaAUQAaAVAAAlQAAAfgTATQgSAUgkAGQAtAEAYAVQAYAWAAAlQAAArgdAXQgfAXg2AAgAgiiCQgIACgCADQgDAGgBAVIgCBBIAABeIACAsQABANADAGQADAFALACQAMADASAAQAlAAATgQQAUgPAAgeQAAgggWgPQgWgPgpAAQgTAAAAgNQAAgQATAAQAdAAATgNQATgOAAgeQAAgdgRgOQgSgOglAAg");
	this.shape_14.setTransform(-85.2,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.butternutsquash, new cjs.Rectangle(-102.4,-75,204.8,111.2), null);


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
	this.shape.setTransform(119.4,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBVQggghAAgxQAAg0AhgiQAhgiAzAAQArAAAaAZQAZAZAAAqQAAAOgEAEQgEAFgRAAIhWAAQgHAAgEgEQgEgEAAgGQAAgGAEgDQAEgDAHAAIAuAAIAMgCQADgBAAgFQAAgWgPgPQgPgPgUAAQgbAAgNAYQgNAXAAAhQAAAiASAaQASAaAcAAQARAAALgEQAMgEALgHIAIgGQALgKAGAAQAFAAAEAEQADADAAAEQAAAGgGAIQgFAIgKAHQgUAQgSAIQgSAHgWAAQgvAAggghg");
	this.shape_1.setTransform(101.2,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhEBwQgLgDABgLQgBgHALgEIAHgDQAFgDADgIQACgHAAgRIAAgPIAAgTIAAgNQgBgpgBgNQgCgMgFgCIgKgFQgOgEAAgIQAAgFAFgEQADgEAKgEIAfgJIAUgEQALAAAEAeIAAAFIACABQALgTANgJQAMgKANAAQAPAAAKAKQAJAJAAAQQAAAQgHAJQgHAJgNAAIgLgCIgJgHIgGgJQgDgGgCAAQgPAAgHAWQgFAWAABDQAAAUACAKQADAKAGADIAJADQANADAAAKQAAAJgNADQgMADgeAAQgjAAgLgDg");
	this.shape_2.setTransform(81.2,12.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhSBUQgfghAAgyQAAgyAhgiQAigiAyAAQAwAAAgAgQAeAfAAAyQAAAzghAjQghAkgxAAQgwAAghgigAgqhDQgOASAAAfQAAAsATAeQASAeAbAAQAWAAAOgTQAOgSAAgfQgBgrgSgeQgUgegZAAQgXAAgNASg");
	this.shape_3.setTransform(59.4,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai3BwQgLgDAAgLQAAgHALgEIAGgDQAGgDADgIQACgHAAgRIAAgPIgBgTIAAgNQAAgpgBgNQgCgMgFgCIgKgFQgOgEAAgIQAAgEAEgEIAOgIIAigLIAWgFQAGAAADAEQADAEAAAIIAAAMIAAADIABACIABAAIABAAIABgBIAFgFIADgCQAbgZAcAAQAKABAKADQAKADAJAGQAHAGAJAKQAIAKACAAQADAAAGgHIAKgKQAPgMALgFQALgFANAAQAaAAAUALQATAKAJAUQAKAUAABCIABAWIgBAMIAAALQAAAMADAHQACAFAFADIAGADQAMAEAAAHQAAAKgLAEQgLADgjAAQggAAgLgDQgLgDAAgJQAAgJAMgEIAIgEQAGgDACgLQACgLAAgbQAAhCgJgSQgJgSgYAAQgaAAgLAXQgMAWAAA2IAAANQAAAYADAIQACAIAGADIAGADQALAEAAAHQAAAKgLAEQgKADgjAAQgeAAgLgDQgLgDAAgJQAAgJALgEIAJgDQAFgEACgJQACgJAAgaQAAhHgJgSQgJgSgYAAQgMAAgLAHQgLAIgGALQgFALgCASQgCASAAAqQAAAVACAIQACAHAFAEIAIADQAMAEAAAJQAAAJgLADQgMADgdAAQgjAAgLgDg");
	this.shape_4.setTransform(25.8,12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfCiQgLgDABgJQAAgJALgEIAIgDQAFgEADgJQABgKAAgYQABhIgKgSQgJgSgYAAQgKAAgLAHQgMAIgGAKQgEALgCAQQgCASAAAsQAAAXACAHQACAIAEADIAJADQALAEAAAJQAAAJgLADQgLADgdAAQgkAAgLgDQgKgDAAgLQAAgHAKgEIAGgDQAHgDACgKQADgJAAgZIAAglIAAgiIgChmQgBgZgDgEQgDgDgNgEQgOgEAAgIQAAgGAGgEQAFgFAVgHIAWgGIAVgDQAIAAADAFQACAEAAAKIAAAJIgBBaIAAAMIAAAFIAEACIAFgFIAIgJQALgMANgFQAMgGAOAAQAmAAAUAZQASAZAAAzIABAVIAAAoIAAANQAAALACAFQADAFAEADIAGADQALAEAAAHQAAALgKADQgLADgkAAQgdAAgMgDg");
	this.shape_5.setTransform(-21,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGBVQghghAAgxQAAgzAigiQAigjAyAAQAlAAAaAUQAaATAAAaQAAAKgHAHQgIAHgKAAQgMAAgHgGQgHgFgIgTQgHgQgJgGQgJgHgNAAQgZAAgPAUQgPATAAAjQABAnAUAaQAVAZAgAAQAKAAALgDQAKgDAIgGIAJgGQAMgKAHAAQAFAAACADQADACAAAFQAAAGgEAIQgGAIgHAGQgRAQgUAHQgTAIgWAAQgvAAgfghg");
	this.shape_6.setTransform(-45.6,12.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAxBzQgDgEAAgHIAAgQIgBgBIgBgBQgCAAgGAGIgCADQgLALgOAGQgMAFgRAAQgRAAgPgGQgPgHgKgLQgKgNgFgSQgFgTAAgvIABgPIAAgRIAAgFQAAgSgDgFQgCgFgIgDIgJgDQgNgEAAgIQAAgFAEgEQAFgEAQgFIAfgJIAXgDQAHAAACAFQADAEAAAKIAAAJIgDBUQAAAuAKARQAKASAWAAQAZAAALgXQAMgXAAg2IAAgRQAAgSgDgFQgCgGgIgCIgJgDQgMgEAAgIQgBgFAFgEQAEgEAQgFIAfgJIAXgDQAGAAADAEQADAFAAAKIAAANIgDBcIAAAmIACAPQACAJALAFIAAAAIAEABQANAFAAAHQAAAFgEAEQgEAEgJAEIghAKQgQAEgHAAQgHAAgDgDg");
	this.shape_7.setTransform(-70.9,12.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai3BwQgLgDAAgLQAAgHALgEIAGgDQAGgDADgIQACgHAAgRIAAgPIgBgTIAAgNQAAgpgBgNQgCgMgFgCIgKgFQgOgEAAgIQAAgEAEgEIAOgIIAigLIAWgFQAGAAADAEQADAEAAAIIAAAMIAAADIABACIABAAIABAAIABgBIAFgFIADgCQAbgZAcAAQAKABAKADQAKADAJAGQAHAGAJAKQAIAKACAAQADAAAGgHIAKgKQAPgMALgFQALgFANAAQAaAAAUALQATAKAJAUQAKAUAABCIABAWIgBAMIAAALQAAAMADAHQACAFAFADIAGADQAMAEAAAHQAAAKgLAEQgLADgjAAQggAAgLgDQgLgDAAgJQAAgJAMgEIAIgEQAGgDACgLQACgLAAgbQAAhCgJgSQgJgSgYAAQgaAAgLAXQgMAWAAA2IAAANQAAAYADAIQACAIAGADIAGADQALAEAAAHQAAAKgLAEQgKADgjAAQgeAAgLgDQgLgDAAgJQAAgJALgEIAJgDQAFgEACgJQACgJAAgaQAAhHgJgSQgJgSgYAAQgMAAgLAHQgLAIgGALQgFALgCASQgCASAAAqQAAAVACAIQACAHAFAEIAIADQAMAEAAAJQAAAJgLADQgMADgdAAQgjAAgLgDg");
	this.shape_8.setTransform(-105.1,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhSBUQgfghAAgyQgBgyAigiQAigiAyAAQAwAAAgAgQAeAfAAAyQAAAzghAjQgiAkgwAAQgwAAghgigAgqhDQgOASAAAfQAAAsATAeQATAeAaAAQAWAAAOgTQAOgSAAgfQgBgrgSgeQgUgegZAAQgXAAgNASg");
	this.shape_9.setTransform(73.7,-41);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQB1IgYgEIgHAEIgHACIgFgCIgEgDQgIgGgGgSQgHgSAAgRQAAgHAEgFQAEgFAGAAQAKAAALASIAIAOQAHAJAMAFQAMAFAMAAQAPAAAJgHQAIgIAAgMQAAgTglgTIgNgGQgjgRgMgOQgNgPAAgVQAAgeAVgSQAUgTAhAAIAPABIAQADIALgEIAHgCQALAAAKASQALASAAATQAAAIgEAFQgDAEgHAAQgFAAgFgEQgFgEgHgLQgIgOgJgFQgJgGgNAAQgMAAgIAHQgIAIAAAMQAAAKAIAIQAIAIAcAOIACABQA/AeAAAlQAAAfgYAWQgYAVglAAg");
	this.shape_10.setTransform(51.1,-41.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhiCIQgbgeAAgxQAAg3AfgiQAegiAxAAIAPACQAHABAEAFQAEAGAAAGQAAALgPABIgGgBIgGAAQgZgBgPAVQgPAUAAAjQAAAmAQAYQARAYAZAAQAXAAANgNQANgNAAgaIAAg9IAAhnQAAgRgDgGQgDgGgIgDIgGgCQgOgEAAgHQAAgHAFgDQAGgFARgHIAZgGIAVgDQAIAAADAEQAEAFAAAJIgBAMIgCCKIABBfQACAWADACIAQAGQAMADAAAHQAAALghAKIgWAGIgRACQgHABgDgEQgCgDAAgIIAAgLIgBgFIgBgBIgHAEIgKAIQgNALgMAEQgNAFgOAAQgrAAgagfg");
	this.shape_11.setTransform(16.4,-46);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhuBwQgMgEAAgJQAAgIALgFIAGgCQAGgDACgHQADgIAAgSIAAgPIgBgSIAAgWQAAgkgBgKQgCgMgFgCIgKgDQgOgFAAgIQAAgEAEgFQAEgEAKgDIAhgLIAXgEQAGAAADADQADAEAAAIIAAAOIABACIABACIABgBIABgBIAFgEIAFgFQAYgWAcAAQAQgBAQAIQAOAGALANQAKAMAFARQAEARAAAkIAAAeIAAAPIAAAMQAAARACAGQACAHAGADIAGACQALAFAAAIQAAAJgLAEQgKADgjAAQggAAgKgDQgLgEAAgIQAAgJALgEIAJgEQAFgCACgKQACgKAAgYQAAhIgJgSQgJgSgYAAQgLAAgLAIQgLAGgGANQgFAJgCASQgCARAAAtQAAAVACAIQACAHAFACIAIAEQAMAEAAAJQAAAIgLAEQgLAEgeAAQgiAAgLgEg");
	this.shape_12.setTransform(-11.3,-41.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAoBqIgMgMIgKAFQgbATgcAAQghAAgUgTQgUgTAAgfQAAglAZgTQAbgUAvAAQALAAAGADQAFAEAAAIQAAANgPAAQgWAAgOALQgOAKABATQgBASAMALQANALATAAQAWAAAJgKQAJgJAAgYIAAhVQAAgUgJgLQgIgLgPAAQgLAAgKAFQgKAFgIAKIgFAGQgOASgPAAQgJAAgFgGQgGgGAAgKQAAgVAagOQAbgPApAAQAYAAATAHQARAGAKANQAHAJADANQACAOAAAhIAABHQABANACAHQACAGAEABIAIACQANAEAAAIQAAAKgOAJQgPAJgVAAQgKAAgLgMg");
	this.shape_13.setTransform(-36.5,-41);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape_14.setTransform(-55.1,-32.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape_15.setTransform(-67.6,-32.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape_16.setTransform(-80.1,-32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.andsomuchmore, new cjs.Rectangle(-127.7,-75,255.4,111.2), null);


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
p.nominalBounds = new cjs.Rectangle(-73.7,-71.2,147.5,38.5);


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
	this.frame_334 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(303).call(this.frame_334).wait(2));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(150.3,301.6,1.456,0.919,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(336));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(336));

	// fade-from-white
	this.instance_1 = new lib.blackwideskyscraper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.2,300,1.826,1,0,0,0,0.1,0);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(327));

	// logo
	this.instance_2 = new lib.whitelogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,37,1.296,1.296);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({scaleX:0.11,scaleY:0.11,y:37.1},0).to({scaleX:1.3,scaleY:1.3,y:37,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},7,cjs.Ease.get(1)).wait(314));

	// main-sides-for-more
	this.instance_3 = new lib.mainsides();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,272.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(323).to({alpha:1},10).wait(3));

	// ham-turkey-dinner
	this.instance_4 = new lib.hamturkeydinner();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,197.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(323).to({alpha:1},10).wait(3));

	// and-so-much-more
	this.instance_5 = new lib.andsomuchmore();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,205.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(290).to({alpha:1},10).wait(23).to({alpha:0},5).wait(8));

	// pumpkin-apple-pie
	this.instance_6 = new lib.pumpkinapplepies();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,205.9);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(257).to({alpha:1},10).wait(23).to({alpha:0},5).wait(41));

	// butternut-squash
	this.instance_7 = new lib.butternutsquash();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,205.9);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(224).to({alpha:1},10).wait(23).to({alpha:0},5).wait(74));

	// herb-stuffing
	this.instance_8 = new lib.seventeenherbstuffing();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,205.9);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(191).to({alpha:1},10).wait(23).to({alpha:0},5).wait(107));

	// mashed potatoes
	this.instance_9 = new lib.sevenmashedpotatoes();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,205.9);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(158).to({alpha:1},10).wait(23).to({alpha:0},5).wait(140));

	// spiral-cut-ham
	this.instance_10 = new lib.spiralcutham();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,205.9);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(125).to({alpha:1},10).wait(23).to({alpha:0},5).wait(173));

	// roasted-turkey
	this.instance_11 = new lib.roastedturkey();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,206.6);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(92).to({alpha:1},10).wait(23).to({alpha:0},5).wait(206));

	// whats-in-our
	this.instance_12 = new lib.seventeenwhatsinourfest();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,213.7);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21).to({alpha:1},10).wait(61).to({alpha:0},5).wait(239));

	// cta-rollover
	this.cta_rollover = new lib.ctarolloveruse();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(150,347.2);
	this.cta_rollover.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(31).to({alpha:1},10).wait(295));

	// order-now
	this.instance_13 = new lib.ordernow();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,347.3);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31).to({y:346.3},0).to({alpha:1},10).wait(295));

	// cta-rectangle
	this.instance_14 = new lib.ctarectangleuse();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150,347.2);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(31).to({alpha:1},10).wait(295));

	// pie
	this.instance_15 = new lib.seventeenpie_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(51,67.5);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(41).to({alpha:1},10).wait(285));

	// spinach
	this.instance_16 = new lib.seventeenspinach();
	this.instance_16.parent = this;
	this.instance_16.setTransform(30,543);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(56).to({alpha:1},10).wait(270));

	// cranberries
	this.instance_17 = new lib.seventeencranberries_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(79.5,578.5);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(61).to({alpha:1},10).wait(265));

	// ham
	this.instance_18 = new lib.seventeenham_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(71.5,400);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(51).to({alpha:1},10).wait(275));

	// berries
	this.instance_19 = new lib.seventeenberries();
	this.instance_19.parent = this;
	this.instance_19.setTransform(253,57);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(66).to({alpha:1},10).wait(260));

	// green-beans
	this.instance_20 = new lib.seventeengreens_2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(267.5,314.5);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(72).to({alpha:1},10).wait(254));

	// turkey
	this.instance_21 = new lib.seventeenturkey_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(194,485);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(46).to({alpha:1},10).wait(280));

	// table
	this.instance_22 = new lib.seventeentable();
	this.instance_22.parent = this;
	this.instance_22.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(336));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145.5,286.5,304.5,616.6);
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