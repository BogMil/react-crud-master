var ColModel = /** @class */ (function () {
    function ColModel(init) {
        var _this = this;
        this._minWidth = 0;
        this.name = "";
        this.label = "";
        this.width = 0;
        this.order = "";
        this.showColMenuModal = false;
        this.calculateMinWithOfColumnByLabel = function (label) {
            var wordsInColLabel = label.split(" ");
            var longestWord = wordsInColLabel.reduce(function (a, b) {
                var aLength = _this.getWidthOfWord(a);
                var bLength = _this.getWidthOfWord(b);
                return aLength > bLength ? a : b;
            });
            return _this.getWidthOfWord(longestWord) + 40;
        };
        this.getWidthOfWord = function (word) {
            var tempWordHolder = document.getElementById("label-width-tester");
            tempWordHolder.textContent = word;
            return tempWordHolder.offsetWidth;
        };
        if (!ColModel.created) {
            var t = document.createElement('span');
            t.id = "label-width-tester";
            t.style.fontSize = '16px';
            t.style.fontWeight = '700';
            t.style.position = 'absolute';
            t.style.top = '-999999px';
            document.body.appendChild(t);
            ColModel.created = true;
        }
        if (init == undefined)
            return;
        Object.assign(this, init);
        if (init.minWidth == undefined)
            this.minWidth = this.calculateMinWithOfColumnByLabel(this.label);
    }
    Object.defineProperty(ColModel.prototype, "minWidth", {
        get: function () {
            return this._minWidth;
        },
        set: function (value) {
            if (value < 0)
                value = this.calculateMinWithOfColumnByLabel(this.label);
            this._minWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    ColModel.created = false;
    return ColModel;
}());
export { ColModel };
//# sourceMappingURL=ColModel.js.map