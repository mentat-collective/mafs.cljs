import "./cljs_env.js";
goog.provide('nextjournal.view.context');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.view !== 'undefined') && (typeof nextjournal.view.context !== 'undefined') && (typeof nextjournal.view.context.get_context !== 'undefined')){
} else {
nextjournal.view.context.get_context = cljs.core.memoize((function (k){
if((k instanceof cljs.core.Keyword)){
return module$node_modules$react$index.createContext(cljs.core.munge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)));
} else {
return k;
}
}));
}
/**
 * Adds React contexts to the component tree.
 * `bindings` should be a map of {<keyword-or-Context>, <value-to-be-bound>}.
 */
nextjournal.view.context.provide = (function nextjournal$view$context$provide(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48235 = arguments.length;
var i__5770__auto___48236 = (0);
while(true){
if((i__5770__auto___48236 < len__5769__auto___48235)){
args__5775__auto__.push((arguments[i__5770__auto___48236]));

var G__48237 = (i__5770__auto___48236 + (1));
i__5770__auto___48236 = G__48237;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return nextjournal.view.context.provide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(nextjournal.view.context.provide.cljs$core$IFn$_invoke$arity$variadic = (function (bindings,body){
var bindings__$1 = cljs.core.seq(bindings);
var out = module$node_modules$react$index.createElement.apply(null,[module$node_modules$react$index.Fragment,({})].concat(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (bindings__$1){
return (function (a,el){
var G__48214 = a;
G__48214.push(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(el));

return G__48214;
});})(bindings__$1))
,[],body)));
while(true){
if(cljs.core.empty_QMARK_(bindings__$1)){
return out;
} else {
var G__48238 = cljs.core.rest(bindings__$1);
var G__48239 = (function (){var vec__48218 = cljs.core.first(bindings__$1);
var context_or_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48218,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48218,(1),null);
var context = nextjournal.view.context.get_context(context_or_key);
return module$node_modules$react$index.createElement(context.Provider,({"value": v}),out);
})();
bindings__$1 = G__48238;
out = G__48239;
continue;
}
break;
}
}));

(nextjournal.view.context.provide.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nextjournal.view.context.provide.cljs$lang$applyTo = (function (seq48203){
var G__48204 = cljs.core.first(seq48203);
var seq48203__$1 = cljs.core.next(seq48203);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48204,seq48203__$1);
}));

/**
 * Reads a React context value within component tree.
 * `context` should be a keyword or React Context instance.
 */
nextjournal.view.context.consume = (function nextjournal$view$context$consume(context,f){
return module$node_modules$react$index.createElement(nextjournal.view.context.get_context(context).Consumer,({}),(function (value){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,value], null));
}));
});

//# sourceMappingURL=nextjournal.view.context.js.map
