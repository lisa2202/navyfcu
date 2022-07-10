+function(e) {
        "use strict";
        e.fn.nfcuKeypad = function(t) {
            var n = e.extend({
                readOnly: !0,
                toggleButtonTpl: '<span class="input-group-btn"><button class="btn btn-keypad-toggle" type="button"><span class="sr-only">Open Keypad</span></button></span>',
                keypadTpl: '<table class="table table-keypad" tabindex="-1" role="dialog">     <tbody>         <tr>             <td><button type="button" class="btn-keypad-key">1</button></td>             <td><button type="button" class="btn-keypad-key">2</button></td>             <td><button type="button" class="btn-keypad-key">3</button></td>             <td><button type="button" class="btn-keypad-done">Done</button></td>         </tr>         <tr>             <td><button type="button" class="btn-keypad-key">4</button></td>             <td><button type="button" class="btn-keypad-key">5</button></td>             <td><button type="button" class="btn-keypad-key">6</button></td>             <td><button type="button" class="btn-keypad-clear">Clear</button></td>         </tr>         <tr>             <td><button type="button" class="btn-keypad-key">7</button></td>             <td><button type="button" class="btn-keypad-key">8</button></td>             <td colspan="2"><button type="button" class="btn-keypad-key">9</button></td>         </tr>         <tr>             <td></td>             <td colspan="3"><button type="button" class="btn-keypad-key">0</button></td>         </tr>     </tbody> </table>'
            }, t);
            this.each(function() {
                n.readOnly && e(this).attr("readonly", "readonly"), e(this).wrap('<div class="input-group"></div>');
                var t = e(this).parent(".input-group"),
                    i = this;
                e(this).after(n.toggleButtonTpl), e(this).after(n.keypadTpl), t.find(".table-keypad").css({
                    top: t.find(".form-control").outerHeight() + 5,
                    left: t.find(".form-control").outerWidth() - t.find(".table-keypad").outerWidth() + 7
                }), t.find(".btn-keypad-key").bind("click", function(t) {
                    var n = this;
                    e(i).attr("maxlength") > e(i).val().length && e(i).val(function() {
                        return e(this).val() + e(n).text()
                    }).trigger("change"), t.stopPropagation()
                }), t.find(".btn-keypad-clear").bind("click", function(t) {
                    e(i).val("").trigger("change"), t.stopPropagation()
                }), t.find(".btn-keypad-done").bind("click", function() {
                    e(".table-keypad").hide(), e(".btn-keypad-toggle").focus()
                }), t.find(".btn-keypad-toggle").bind("click", function(n) {
                    t.find(".table-keypad").is(":visible") ? (t.find(".table-keypad").hide(), t.find(".btn-keypad-toggle").focus()) : (t.find(".table-keypad").show(), e(i).focus()), n.stopPropagation()
                }), t.find("input").bind("click", function(n) {
                    t.find(".table-keypad").show(), e(i).focus(), n.stopPropagation()
                }), e(document).bind("click", function() {
                    t.find(".table-keypad").hide()
                })
            })
        }
    }(jQuery);