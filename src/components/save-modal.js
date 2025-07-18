"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveModal = void 0;
var modal_1 = require("./modal");
var button_1 = require("./ui/button");
var SaveModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onConfirm = _a.onConfirm, loading = _a.loading;
    return (<modal_1.default title="Are you sure?" description="This action cannot be undone you can't edit or re-answer this question again!" isOpen={isOpen} onClose={onClose}>
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <button_1.Button disabled={loading} variant={"outline"} onClick={onClose}>
          Cancel
        </button_1.Button>
        <button_1.Button disabled={loading} className="bg-emerald-600 hover:bg-emerald-800" onClick={onConfirm}>
          Continue
        </button_1.Button>
      </div>
    </modal_1.default>);
};
exports.SaveModal = SaveModal;
