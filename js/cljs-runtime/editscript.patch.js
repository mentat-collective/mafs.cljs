import "./cljs_env.js";
goog.provide('editscript.patch');
editscript.patch.vget = (function editscript$patch$vget(x,p){
var G__50938 = editscript.edit.get_type(x);
var G__50938__$1 = (((G__50938 instanceof cljs.core.Keyword))?G__50938.fqn:null);
switch (G__50938__$1) {
case "map":
case "vec":
case "set":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,p);

break;
case "lst":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,p);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50938__$1)].join('')));

}
});
editscript.patch.vdelete = (function editscript$patch$vdelete(x,p){
var G__50958 = editscript.edit.get_type(x);
var G__50958__$1 = (((G__50958 instanceof cljs.core.Keyword))?G__50958.fqn:null);
switch (G__50958__$1) {
case "map":
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,p);

break;
case "vec":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(x,(0),p),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(x,(p + (1))));

break;
case "set":
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentHashSet.createAsIfByAssoc([p]));

break;
case "lst":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,(function (p1__50939_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__50939_SHARP_,(0)),cljs.core.next(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__50939_SHARP_,(1))));
})(cljs.core.split_at(p,x)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50958__$1)].join('')));

}
});
editscript.patch.vadd = (function editscript$patch$vadd(x,p,v){
var G__50971 = editscript.edit.get_type(x);
var G__50971__$1 = (((G__50971 instanceof cljs.core.Keyword))?G__50971.fqn:null);
switch (G__50971__$1) {
case "map":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,p,v);

break;
case "vec":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(x,(0),p),v),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(x,p));

break;
case "set":
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x,v);

break;
case "lst":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,(function (p1__50970_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__50970_SHARP_,(0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__50970_SHARP_,(1)),v));
})(cljs.core.split_at(p,x)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50971__$1)].join('')));

}
});
editscript.patch.sreplace = (function editscript$patch$sreplace(x,edits,level){
var x__$1 = editscript.util.common.transform_str(x,level);
var sf = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"character","character",380652989)))?cljs.core.subs:cljs.core.subvec);
var i = cljs.core.volatile_BANG_((0));
var ss = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ss,e){
if(cljs.core.integer_QMARK_(e)){
var s = (function (){var G__51012 = x__$1;
var G__51013 = cljs.core.deref(i);
var G__51014 = (cljs.core.deref(i) + e);
return (sf.cljs$core$IFn$_invoke$arity$3 ? sf.cljs$core$IFn$_invoke$arity$3(G__51012,G__51013,G__51014) : sf.call(null,G__51012,G__51013,G__51014));
})();
i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,e)(i.cljs$core$IDeref$_deref$arity$1(null)));

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ss,s);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),new cljs.core.Keyword(null,"-","-",-2112348439))){
i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(1)))(i.cljs$core$IDeref$_deref$arity$1(null)));

return ss;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),new cljs.core.Keyword(null,"r","r",-471384190))){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(1));
i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.count(s))(i.cljs$core$IDeref$_deref$arity$1(null)));

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ss,s);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),new cljs.core.Keyword(null,"+","+",1913524883))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ss,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
} else {
return null;
}
}
}
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),edits));
var G__51021 = level;
var G__51021__$1 = (((G__51021 instanceof cljs.core.Keyword))?G__51021.fqn:null);
switch (G__51021__$1) {
case "character":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,ss);

break;
case "word":
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.flatten(ss));

break;
case "line":
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.flatten(ss));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51021__$1)].join('')));

}
});
editscript.patch.vreplace = (function editscript$patch$vreplace(x,p,v){
var G__51030 = editscript.edit.get_type(x);
var G__51030__$1 = (((G__51030 instanceof cljs.core.Keyword))?G__51030.fqn:null);
switch (G__51030__$1) {
case "map":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,p,v);

break;
case "vec":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(x,(0),p),v),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(x,(p + (1))));

break;
case "set":
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentHashSet.createAsIfByAssoc([p])),v);

break;
case "lst":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,(function (p1__51023_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__51023_SHARP_,(0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__51023_SHARP_,(1))),v));
})(cljs.core.split_at(p,x)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51030__$1)].join('')));

}
});
editscript.patch.valter = (function editscript$patch$valter(x,p,o,v){
var G__51033 = o;
var G__51033__$1 = (((G__51033 instanceof cljs.core.Keyword))?G__51033.fqn:null);
switch (G__51033__$1) {
case "-":
return editscript.patch.vdelete(x,p);

break;
case "+":
return editscript.patch.vadd(x,p,v);

break;
case "r":
return editscript.patch.vreplace(x,p,v);

break;
case "s":
return editscript.patch.vreplace(x,p,editscript.patch.sreplace(editscript.patch.vget(x,p),v,new cljs.core.Keyword(null,"character","character",380652989)));

break;
case "sw":
return editscript.patch.vreplace(x,p,editscript.patch.sreplace(editscript.patch.vget(x,p),v,new cljs.core.Keyword(null,"word","word",-420123725)));

break;
case "sl":
return editscript.patch.vreplace(x,p,editscript.patch.sreplace(editscript.patch.vget(x,p),v,new cljs.core.Keyword(null,"line","line",212345235)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51033__$1)].join('')));

}
});
editscript.patch.patch_STAR_ = (function editscript$patch$patch_STAR_(old,p__51036){
var vec__51037 = p__51036;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51037,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51037,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51037,(2),null);
var up = (function editscript$patch$patch_STAR__$_up(x,p,o,v){
var vec__51051 = p;
var seq__51052 = cljs.core.seq(vec__51051);
var first__51053 = cljs.core.first(seq__51052);
var seq__51052__$1 = cljs.core.next(seq__51052);
var f = first__51053;
var r = seq__51052__$1;
if(r){
return editscript.patch.valter(x,f,new cljs.core.Keyword(null,"r","r",-471384190),editscript$patch$patch_STAR__$_up(editscript.patch.vget(x,f),r,o,v));
} else {
if(cljs.core.seq(p)){
return editscript.patch.valter(x,f,o,v);
} else {
var G__51055 = o;
var G__51055__$1 = (((G__51055 instanceof cljs.core.Keyword))?G__51055.fqn:null);
switch (G__51055__$1) {
case "s":
return editscript.patch.sreplace(x,v,new cljs.core.Keyword(null,"character","character",380652989));

break;
case "sw":
return editscript.patch.sreplace(x,v,new cljs.core.Keyword(null,"word","word",-420123725));

break;
case "sl":
return editscript.patch.sreplace(x,v,new cljs.core.Keyword(null,"line","line",212345235));

break;
default:
return v;

}
}
}
});
return up(old,path,op,value);
});

//# sourceMappingURL=editscript.patch.js.map
