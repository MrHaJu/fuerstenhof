/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
class Clearable{constructor(){"function"!=typeof HTMLInputElement.prototype.clearable&&this.registerClearable()}static createCloseButton(e){const t=document.createElement("button");return t.type="button",t.tabIndex=-1,t.title=e,t.ariaLabel=e,t.innerHTML='<span class="t3js-icon icon icon-size-small icon-state-default icon-actions-close" data-identifier="actions-close">\n        <span class="icon-markup">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">\n                <path\n                    d="M11.9 5.5L9.4 8l2.5 2.5c.2.2.2.5 0\n                    .7l-.7.7c-.2.2-.5.2-.7 0L8 9.4l-2.5 2.5c-.2.2-.5.2-.7\n                    0l-.7-.7c-.2-.2-.2-.5 0-.7L6.6 8 4.1 5.5c-.2-.2-.2-.5\n                    0-.7l.7-.7c.2-.2.5-.2.7 0L8 6.6l2.5-2.5c.2-.2.5-.2.7\n                    0l.7.7c.2.2.2.5 0 .7z"\n                    class="icon-color"/>\n            </svg>\n        </span>\n    </span>',t.style.visibility="hidden",t.classList.add("close"),t}registerClearable(){HTMLInputElement.prototype.clearable=function(e={}){if(this.isClearable)return;if("object"!=typeof e)throw new Error("Passed options must be an object, "+typeof e+" given");this.classList.add("form-control-clearable");const t=document.createElement("div");t.classList.add("form-control-clearable-wrapper"),this.parentNode.insertBefore(t,this),t.appendChild(this);let l="Clear input";this.dataset.clearableLabel?l=this.dataset.clearableLabel:"lang"in top.TYPO3&&top.TYPO3.lang["labels.inputfield.clearButton.title"]&&(l=top.TYPO3.lang["labels.inputfield.clearButton.title"]);const a=Clearable.createCloseButton(l),n=()=>{a.style.visibility=0===this.value.length?"hidden":"visible"};a.addEventListener("click",(t=>{t.preventDefault(),this.value="","function"==typeof e.onClear&&e.onClear(this),this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0})),n()})),t.appendChild(a),this.addEventListener("focus",n),this.addEventListener("keyup",n),n(),this.isClearable=!0}}}export default new Clearable;