require=function e(t,n,l){function c(a,o){if(!n[a]){if(!t[a]){var p="function"==typeof require&&require;if(!o&&p)return p(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var r=n[a]={exports:{}};t[a][0].call(r.exports,function(e){var n=t[a][1][e];return c(n?n:e)},r,r.exports,e,t,n,l)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<l.length;a++)c(l[a]);return c}({HelloWorld:[function(e,t,n){"use strict";cc._RFpush(t,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld"),cc.Class({"extends":cc.Component,properties:{label:{"default":null,type:cc.Label},text:"Hello, World!",spKuma:{"default":null,type:cc.Sprite},spLine:{"default":null,type:cc.Sprite},nodeKuma:{"default":null,type:cc.Node},btnKuji:{"default":null,type:cc.Button},btnTweet:{"default":null,type:cc.Button},lbMsg:{"default":null,type:cc.Label},lbDetail:{"default":null,type:cc.Label},_msg:"",_appIndex:0,kumaArray:null,appArray:null,spApp:{"default":null,type:cc.Sprite},lbApp:{"default":null,type:cc.Label}},onLoad:function(){cc.loader.loadResAll("kuma",cc.SpriteFrame,this.resReadCallback),this.btnTweet.node.setScale(0),this.spLine.node.setScale(0),this.spApp.node.setScale(0),this.lbApp.node.setScale(0);var e=function(e,t,n){this.img=e,this.title=t,this.detail=n},t=function(e,t){this.img=e,this.url=t};this.kumaArray=[new e("line_giza.png","ギザギザ線","アップダウンの激しい１年クマ"),new e("line_double.png","二重線","並行世界を感じられる１年クマ"),new e("line_hasen.png","破線","既成概念を打破する１年クマ"),new e("line_hutosen.png","太線","余裕を持った１年クマ"),new e("line_toukousen.png","等高線","地形を見極められる１年クマ"),new e("line_wave.png","波線","ゆらゆら揺れる１年クマ"),new e("line_hosoi.png","細線","スマートな１年クマ"),new e("line_kanlei.png","寒冷前線","いろいろ急変の可能性がある１年クマ")],this.appArray=[new t("icon_morikuma.png","https://goo.gl/5Mu4xp"),new t("icon_kumanta.png","https://goo.gl/SY1Thq"),new t("icon_uma.png","https://goo.gl/GXEG4p"),new t("icon_kumavs.png","https://goo.gl/Fr7bVd")]},update:function(e){},resReadCallback:function(){},goTweet:function(){var e="http://twitter.com/intent/tweet?text="+encodeURIComponent(this._msg+"\n")+"https://goo.gl/GLcgaK"+encodeURIComponent("\n #森クマのアゴ線占い");cc.sys.openURL(e)},goApp:function(){var e=this.appArray[this._appIndex];cc.sys.openURL(e.url)},goKuji:function(){this.spKuma.node.runAction(cc.sequence(cc.jumpBy(.1,0,0,100,1),cc.jumpBy(.1,0,0,100,1),cc.jumpBy(.1,0,0,100,1),cc.jumpBy(.1,0,0,100,1),cc.jumpBy(.1,0,0,100,1),new cc.CallFunc(this.showKuji,this),cc.scaleTo(0,2,2),cc.scaleTo(.2,.8,.8),new cc.CallFunc(this.showApp,this)))},showApp:function(){this.spApp.node.setScale(.9),this.lbApp.node.setScale(1)},showKuji:function(){var e=Math.floor(Math.random()*this.kumaArray.length),t=this.kumaArray[e],n="resources/kuma/"+t.img,l=cc.url.raw(n),c=cc.textureCache.addImage(l);this.spLine.spriteFrame.setTexture(c),this.lbMsg.string=t.title,this.lbDetail.string=t.detail,this._msg="今年の線は・・・【"+t.title+"】！！\n"+t.detail,this.btnTweet.node.setScale(1),this.spLine.node.setScale(1),this._appIndex=Math.floor(Math.random()*this.appArray.length);var i=this.appArray[this._appIndex],n="resources/icon/"+i.img,l=cc.url.raw(n),c=cc.textureCache.addImage(l);this.spApp.spriteFrame.setTexture(c)}}),cc._RFpop()},{}]},{},["HelloWorld"]);