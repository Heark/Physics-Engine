function EqMotionConstantAcc(a, b, c, d, e) {
    var f;
    return null === a ? (a = b + c, a /= 2, !0 === d && (a = Math.round(a)), f = !0 === e ? "Average speed of the object at constant acceleration is: " + a + "m/s" : a) : null === b || (a = b + c, a /= 2, !0 === d && (a = Math.round(a))), f
}
var P = {
    E: Math.E,
    Pi: Math.PI
};
