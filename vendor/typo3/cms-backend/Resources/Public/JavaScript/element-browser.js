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
import{MessageUtility}from"@typo3/backend/utility/message-utility.js";import DocumentService from"@typo3/core/document-service.js";import Modal from"@typo3/backend/modal.js";class ElementBrowser{constructor(){this.opener=null,this.formFieldName="",this.fieldReference="",this.rte={parameters:"",configuration:""},this.irre={objectId:""},this.focusOpenerAndClose=()=>{this.getParent()&&this.getParent().focus(),Modal.dismiss(),close()},DocumentService.ready().then((()=>{const e=document.body.dataset;this.formFieldName=e.formFieldName,this.fieldReference=e.fieldReference,this.rte.parameters=e.rteParameters,this.rte.configuration=e.rteConfiguration,this.irre.objectId=e.irreObjectId}))}setReferences(){return!!(this.getParent()&&this.getParent().content&&this.getParent().content.document.editform&&this.getParent().content.document.editform[this.formFieldName])&&(this.targetDoc=this.getParent().content.document,this.elRef=this.targetDoc.editform[this.formFieldName],!0)}getParent(){return null===this.opener&&(void 0!==window.parent&&void 0!==window.parent.document.list_frame&&null!==window.parent.document.list_frame.parent.document.querySelector(".t3js-modal-iframe")?this.opener=window.parent.document.list_frame:void 0!==window.parent&&void 0!==window.parent.frames.list_frame&&null!==window.parent.frames.list_frame.parent.document.querySelector(".t3js-modal-iframe")?this.opener=window.parent.frames.list_frame:void 0!==window.frames&&void 0!==window.frames.frameElement&&null!==window.frames.frameElement&&window.frames.frameElement.classList.contains("t3js-modal-iframe")?this.opener=window.frames.frameElement.contentWindow.parent:window.opener&&(this.opener=window.opener)),this.opener}insertElement(e,t,r,n,i){if(this.irre.objectId){if(this.getParent()){const r={actionName:"typo3:foreignRelation:insert",objectGroup:this.irre.objectId,table:e,uid:t};MessageUtility.send(r,this.getParent())}else alert("Error - reference to main window is not set properly!"),this.focusOpenerAndClose();return i&&this.focusOpenerAndClose(),!0}return!this.fieldReference||this.rte.parameters||this.rte.configuration||this.addElement(r,n||e+"_"+t,i),!1}addElement(e,t,r){if(this.getParent()){const n={actionName:"typo3:elementBrowser:elementAdded",fieldName:this.fieldReference,value:t,label:e};MessageUtility.send(n,this.getParent()),r&&this.focusOpenerAndClose()}else alert("Error - reference to main window is not set properly!"),this.focusOpenerAndClose()}}export default new ElementBrowser;