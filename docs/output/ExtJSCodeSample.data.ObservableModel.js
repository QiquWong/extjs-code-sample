Ext.data.JsonP.ExtJSCodeSample_data_ObservableModel({"tagname":"class","files":[{"filename":"ObservableModel.js","href":"ObservableModel.html#ExtJSCodeSample-data-ObservableModel"}],"aliases":{},"alternateClassNames":[],"members":[{"name":"set","tagname":"method","owner":"ExtJSCodeSample.data.ObservableModel","id":"method-set","meta":{}}],"extends":"Ext.data.Model","name":"ExtJSCodeSample.data.ObservableModel","mixins":[],"requires":["ExtJSCodeSample.data.event.ModelChangeEvent"],"uses":[],"code_type":"ext_define","id":"class-ExtJSCodeSample.data.ObservableModel","short_doc":"Base class for all Model's within the application. ...","component":false,"superclasses":["Ext.data.Model"],"subclasses":["ExtJSCodeSample.model.ModelLocator","ExtJSCodeSample.model.SessionModel","ExtJSCodeSample.model.dto.UserDTO"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Model<div class='subclass '><strong>ExtJSCodeSample.data.ObservableModel</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/ExtJSCodeSample.data.event.ModelChangeEvent' rel='ExtJSCodeSample.data.event.ModelChangeEvent' class='docClass'>ExtJSCodeSample.data.event.ModelChangeEvent</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/ExtJSCodeSample.model.ModelLocator' rel='ExtJSCodeSample.model.ModelLocator' class='docClass'>ExtJSCodeSample.model.ModelLocator</a></div><div class='dependency'><a href='#!/api/ExtJSCodeSample.model.SessionModel' rel='ExtJSCodeSample.model.SessionModel' class='docClass'>ExtJSCodeSample.model.SessionModel</a></div><div class='dependency'><a href='#!/api/ExtJSCodeSample.model.dto.UserDTO' rel='ExtJSCodeSample.model.dto.UserDTO' class='docClass'>ExtJSCodeSample.model.dto.UserDTO</a></div><h4>Files</h4><div class='dependency'><a href='source/ObservableModel.html#ExtJSCodeSample-data-ObservableModel' target='_blank'>ObservableModel.js</a></div></pre><div class='doc-contents'><p>Base class for all Model's within the application. Allows objects to listen to ModelChangeEvent that fires\nwhenever the models set method is called and the value being passed is different then the current value.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-set' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ExtJSCodeSample.data.ObservableModel'>ExtJSCodeSample.data.ObservableModel</span><br/><a href='source/ObservableModel.html#ExtJSCodeSample-data-ObservableModel-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ExtJSCodeSample.data.ObservableModel-method-set' class='name expandable'>set</a>( <span class='pre'>fieldName, newValue, suppressChangeEvent</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>When setting field on model, if property has changed and not suppressing\nchange event, dispatch ModelChangeEvent ...</div><div class='long'><p>When setting field on model, if property has changed and not suppressing\nchange event, dispatch ModelChangeEvent</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fieldName</span> : String<div class='sub-desc'><ul>\n<li>The name of the field to set</li>\n</ul>\n\n</div></li><li><span class='pre'>newValue</span> : Object<div class='sub-desc'><ul>\n<li>The value to place on the field</li>\n</ul>\n\n</div></li><li><span class='pre'>suppressChangeEvent</span> : Boolean<div class='sub-desc'><ul>\n<li>Wither or not to suppress the ModelChangeEvent</li>\n</ul>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});