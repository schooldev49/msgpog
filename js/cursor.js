window.NodeCursor = function(e) {
    let o, r, s = this;
    !(e = e || {}).hasOwnProperty("cursor") || e.cursor, !e.hasOwnProperty("node") || e.node, !e.hasOwnProperty("cursor_velocity") || e.cursor_velocity, !e.hasOwnProperty("node_velocity") || e.node_velocity, !e.hasOwnProperty("native_cursor") || e.native_cursor, !e.hasOwnProperty("element_to_hover") || e.element_to_hover, !e.hasOwnProperty("cursor_class_hover") || e.cursor_class_hover, !e.hasOwnProperty("node_class_hover") || e.node_class_hover, !e.hasOwnProperty("hide_mode") || e.hide_mode, !e.hasOwnProperty("hide_timing") || e.hide_timing;
    let t, n, i, d, c = !1;
    var a = 0,
        u = 0,
        m = 0,
        l = 0;
    let _ = 0,
        h = 0,
        v = 0,
        y = 0,
        w = 0,
        p = 0,
        f = 0,
        L = 0;
    !0 === e.cursor && (o = document.querySelector("#cursor")), !0 === e.node && (r = document.querySelector("#node")), !0 === e.cursor && (w = o.offsetWidth / 2), !0 === e.cursor && (p = o.offsetHeight / 2), !0 === e.node && (f = r.offsetHeight / 2), !0 === e.node && (L = r.offsetHeight / 2), document.body.style.cursor = e.native_cursor, this.initCursor = (() => { document.addEventListener("mousemove", o => { t = o.clientX, n = o.clientY, c = !0, !0 === e.hide_mode && (clearTimeout(i), i = setTimeout(s.mouseStopped, e.hide_timing)), !0 === e.cursor && (a = t - w, u = n - p), !0 === e.node && (m = t - f, l = n - L) }) }), this.mouseStopped = (() => { c = !1 }), this.render = (() => {!0 === c ? (!0 === e.cursor && o.classList.add("moving"), !0 === e.node && r.classList.add("moving")) : (!0 === e.cursor && o.classList.remove("moving"), !0 === e.node && r.classList.remove("moving")), !0 === e.cursor && (_ += (a - _) * e.cursor_velocity, h += (u - h) * e.cursor_velocity, o.style.transform = "translate3d(" + _ + "px," + h + "px, 0)"), !0 === e.node && (v += (m - v) * e.node_velocity, y += (l - y) * e.node_velocity, r.style.transform = "translate3d(" + v + "px," + y + "px, 0)"), "disable" !== e.element_to_hover && (nodes = document.querySelectorAll(e.element_to_hover), "disable" !== e.node_class_hover && nodes.forEach(function(s, t) { s.addEventListener("mouseover", function() {!0 === e.cursor && o.classList.add(e.cursor_class_hover), !0 === e.node && r.classList.add(e.node_class_hover) }), s.addEventListener("mouseleave", function() {!0 === e.cursor && o.classList.remove(e.cursor_class_hover), !0 === e.node && r.classList.remove(e.node_class_hover) }) })), d = requestAnimationFrame(s.render) }), requestAnimationFrame(s.render), this.init = function() { s.initCursor() }, this.init(), window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
};
