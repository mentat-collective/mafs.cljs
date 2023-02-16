;; # Welcome to [Clerk](https://clerk.vision/)!

^{:nextjournal.clerk/toc true}
(ns {{top/ns}}.{{main/ns}}
    (:require [mentat.clerk-utils.show :refer [show-sci]]
              [nextjournal.clerk :as clerk]))

;; Hello! This project was generated by the [`mafs/clerk`
;; template](https://mafs.mentat.org/#project-template). The template comes with
;; everything you need you everything you need to

;; - Interactively develop Clerk notebooks
;; - Publish them to [GitHub Pages](https://pages.github.com/) or [Clerk's Garden](https://github.clerk.garden/)
;; - Use a [custom ClojureScript build](https://clerk-utils.mentat.org/#custom-clojurescript-builds) in both modes

;; Some good next steps:

;; - Visit this project's README.md for guides on how to proceed.
;; - Read the [`Mafs.cljs` documentation notebook](https://mafs.mentat.org)
;; - Read the [Book of Clerk](https://book.clerk.vision/)
;; - Visit the [Awesome-Clerk](https://github.com/mentat-collective/awesome-clerk) list for ideas
;; - Delete anything in this notebook you feel like you don't need.

;; ## Clerk Environment Basics
;;
;; Here's a basic use of Clerk. This is a function:

(defn hello [s]
  (str "Hello, " s "!"))

;; If we call this function, Clerk will render the form and its output:

(hello "Clerk")

;; - The form `(hello "Clerk")` executes in the JVM.
;; - The resulting string "Hello, Clerk!" is serialized over a WebSocket to the
;;   browser, where Clerk's ClojureScript side renders it using a
;;   pre-registered "viewer".
;; - These viewers are written in code evaluated using the [Small Clojure
;;   Interpreter](https://github.com/babashka/sci), or "SCI".

;; Clerk comes with [many viewers](https://book.clerk.vision/#viewers), and
;; gives us the ability to [write _new_
;; viewers](https://book.clerk.vision/#writing-viewers) using a default SCI
;; environment that Clerk makes available to us.

;; ## Mafs Quickstart

;; First, we'll use `clerk/eval-cljs` to install some nice aliases into this
;; notebook's namespace:

(clerk/eval-cljs
 '(require '[reagent.core :as reagent])
 '(require '[mafs.core :as mafs]))

;; > Note that you can also use fully-qualified names of any namespace installed
;; > into SCI via the `{{top/ns}}.sci-extensions` namespace.

;; The following snippet implements the example from the ["Making Things
;; Interactive"](https://mafs.mentat.org/#making-things-interactive) section of
;; the [`Mafs.cljs` docs
;; notebook](https://mafs.mentat.org/#making-things-interactive):

^{::clerk/width :wide}
(show-sci
 (reagent/with-let [!phase (reagent/atom [0 0])]
   [:<>
    [mafs/Mafs
     {:view-box {:x [-10 10] :y [-2 2]}
      :preserve-aspect-ratio false}
     [mafs.coordinates/Cartesian
      {:subdivisions 4
       :x-axis
       {:lines Math/PI
        :labels mafs/labelPi}}]
     [mafs.plot/OfX
      {:y (fn [x]
            (let [shift (first @!phase)]
              (Math/sin (- x shift))))}]
     [mafs/MovablePoint
      {:atom !phase
       :constrain "horizontal"}]]
    [:pre
     (str "Phase shift: " (first @!phase))]]))

;; One potential wrinkle to note when using `Mafs.cljs` in Clerk is that you
;; have to define any function you'd like to use over on the ClojureScript side.
;; You won't be able to use this function (defined on the JVM) with Mafs:

(defn square [x]
  (* x x))

;; But _this_ version will work, since it's wrapped in
;; `mentat.clerk-utils.show/show-sci`, and is therefore evaluated on the browser
;; side:

(show-sci
 (defn square [x]
   (* x x)))

;; ## Mafs Clerk Viewer
;;
;; Here's an example of a viewer that lets us instantiate a `Mafs.cljs` graph
;; using data from the JVM. This viewer takes a `view-box` argument from the JVM
;; and passes it as a property to the `mafs/Mafs` component:

(def parabola-viewer
  {:transform-fn clerk/mark-presented
   :render-fn
   '(fn [view-box]
      (reagent/with-let [!root (reagent/atom [0 0])]
        [:<>
         [mafs/Mafs
          {:view-box view-box
           :preserve-aspect-ratio false}
          [mafs.coordinates/Cartesian
           {:subdivisions 4
            :x-axis
            {:lines Math/PI
             :labels mafs/labelPi}}]
          [mafs.plot/OfX
           {:y (let [zero (first @!root)]
                 (fn [x]
                   (* x (- x zero))))}]
          [mafs/MovablePoint
           {:atom !root
            :constrain "horizontal"}]]
         [:pre
          (str "Function root: " (first @!root))]]))})

;; We can apply it here:
^{::clerk/viewer parabola-viewer}
{:x [-10 10]
 :y [-2 2]}
