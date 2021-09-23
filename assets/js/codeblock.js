(function() {
  'use strict';

  if(!document.queryCommandSupported('copy')) {
    return;
  }

  function flashCopyMessage(el, msg) {
    var original = el.textContent;
    el.textContent = msg;
    setTimeout(function() {
      el.textContent = original;
    }, 1000);
  }

  function selectText(node) {
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
    return selection;
  }

  function addCopyButton(containerEl) {
    var copyBtn = document.createElement("button");
    copyBtn.className = "highlight-copy-btn";
    copyBtn.textContent = "Copy";

    var codeEl = containerEl.firstElementChild.parentElement;
    console.log(codeEl);
    copyBtn.addEventListener('click', function() {
      try {
        var selection = selectText(codeEl.firstElementChild);
        document.execCommand('copy');
        selection.removeAllRanges();

        flashCopyMessage(copyBtn, 'Copied!')
      } catch(e) {
        console && console.log(e);
        flashCopyMessage(copyBtn, 'Failed :\'(')
      }
    });

    console.log("Adding child to " + containerEl);

    containerEl.appendChild(copyBtn);
  }

  // Add copy button to code blocks
  var highlightBlocks = document.getElementsByClassName('highlight');
  console.log(highlightBlocks);
  var blockArr = Array.prototype.slice.call(highlightBlocks);
  console.log(blockArr);
  blockArr.forEach((el) => {
    new SimpleBar(el, {
      autoHide: true
    });
    addCopyButton(el);
  });
})();