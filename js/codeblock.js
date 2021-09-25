(() => {
  // <stdin>
  (function() {
    "use strict";
    if (!document.queryCommandSupported("copy")) {
      return;
    }
    function flashCopyMessage(el, msg) {
      var original = el.innerHTML;
      el.textContent = msg;
      setTimeout(function() {
        el.innerHTML = original;
      }, 1e3);
    }
    function selectText(node) {
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
      return selection;
    }
    function addBar(el) {
      new SimpleBar(el, {
        autoHide: true
      });
    }
    function addCopyButton(containerEl) {
      var copyBtn = document.createElement("button");
      copyBtn.className = "highlight-copy-btn";
      var icon = document.createElement("i");
      icon.setAttribute("data-feather", "clipboard");
      copyBtn.appendChild(icon);
      var elements = containerEl.querySelectorAll("pre");
      console.log(elements);
      var codeEl;
      if (elements.length > 1) {
        codeEl = elements[1].parentElement;
      } else {
        codeEl = elements[0];
      }
      addBar(codeEl);
      copyBtn.addEventListener("click", function() {
        try {
          var selection = selectText(codeEl.firstElementChild);
          document.execCommand("copy");
          selection.removeAllRanges();
          flashCopyMessage(copyBtn, "Copied!");
        } catch (e) {
          console && console.log(e);
          flashCopyMessage(copyBtn, "Failed :'(");
        }
      });
      containerEl.appendChild(copyBtn);
    }
    var highlightBlocks = document.getElementsByClassName("highlight");
    var blockArr = Array.prototype.slice.call(highlightBlocks);
    blockArr.forEach((el) => {
      addCopyButton(el);
    });
    var inputBlocks = document.querySelectorAll(".terminal-input-wrapper");
    var inputBlockArr = Array.prototype.slice.call(inputBlocks);
    inputBlockArr.forEach(addBar);
    var outputBlocks = document.querySelectorAll(".terminal-output");
    var outputBlockArr = Array.prototype.slice.call(outputBlocks);
    outputBlockArr.forEach(addBar);
    feather.replace();
  })();
})();
