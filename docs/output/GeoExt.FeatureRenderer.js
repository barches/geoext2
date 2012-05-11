Ext.data.JsonP.GeoExt_FeatureRenderer({"parentMixins":[],"inheritdoc":null,"extends":"Ext.Component","alternateClassNames":[],"requires":[],"tagname":"class","singleton":false,"inheritable":false,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"mixins":[],"code_type":"ext_define","component":true,"uses":[],"members":{"cfg":[{"owner":"GeoExt.FeatureRenderer","tagname":"cfg","meta":{},"name":"feature","id":"cfg-feature"},{"owner":"GeoExt.FeatureRenderer","tagname":"cfg","meta":{},"name":"symbolType","id":"cfg-symbolType"},{"owner":"GeoExt.FeatureRenderer","tagname":"cfg","meta":{},"name":"symbolizers","id":"cfg-symbolizers"}],"method":[{"owner":"GeoExt.FeatureRenderer","tagname":"method","meta":{"private":true},"name":"afterRender","id":"method-afterRender"},{"owner":"GeoExt.FeatureRenderer","tagname":"method","meta":{"private":true},"name":"assignRenderer","id":"method-assignRenderer"},{"owner":"GeoExt.FeatureRenderer","tagname":"method","meta":{"private":true},"name":"beforeDestroy","id":"method-beforeDestroy"},{"owner":"GeoExt.FeatureRenderer","tagname":"method","meta":{"private":true},"name":"clearCustomEvents","id":"method-clearCustomEvents"},{"owner":"GeoExt.FeatureRenderer","tagname":"method","meta":{"private":true},"name":"drawFeature","id":"method-drawFeature"},{"owner":"GeoExt.FeatureRenderer","tagname":"method","meta":{"private":true},"name":"initCustomEvents","id":"method-initCustomEvents"},{"owner":"GeoExt.FeatureRenderer","tagname":"method","meta":{"private":true},"name":"onClick","id":"method-onClick"},{"owner":"GeoExt.FeatureRenderer","tagname":"method","meta":{"private":true},"name":"onRender","id":"method-onRender"},{"owner":"GeoExt.FeatureRenderer","tagname":"method","meta":{"private":true},"name":"onResize","id":"method-onResize"},{"owner":"GeoExt.FeatureRenderer","tagname":"method","meta":{},"name":"setFeature","id":"method-setFeature"},{"owner":"GeoExt.FeatureRenderer","tagname":"method","meta":{"private":true},"name":"setRendererDimensions","id":"method-setRendererDimensions"},{"owner":"GeoExt.FeatureRenderer","tagname":"method","meta":{},"name":"setSymbolType","id":"method-setSymbolType"},{"owner":"GeoExt.FeatureRenderer","tagname":"method","meta":{},"name":"setSymbolizers","id":"method-setSymbolizers"},{"owner":"GeoExt.FeatureRenderer","tagname":"method","meta":{},"name":"update","id":"method-update"}],"property":[{"owner":"GeoExt.FeatureRenderer","tagname":"property","meta":{"private":true},"name":"lineFeature","id":"property-lineFeature"},{"owner":"GeoExt.FeatureRenderer","tagname":"property","meta":{"private":true},"name":"minHeight","id":"property-minHeight"},{"owner":"GeoExt.FeatureRenderer","tagname":"property","meta":{"private":true},"name":"minWidth","id":"property-minWidth"},{"owner":"GeoExt.FeatureRenderer","tagname":"property","meta":{"private":true},"name":"pointFeature","id":"property-pointFeature"},{"owner":"GeoExt.FeatureRenderer","tagname":"property","meta":{"private":true},"name":"polygonFeature","id":"property-polygonFeature"},{"owner":"GeoExt.FeatureRenderer","tagname":"property","meta":{"private":true},"name":"renderer","id":"property-renderer"},{"owner":"GeoExt.FeatureRenderer","tagname":"property","meta":{"private":true},"name":"rendererOptions","id":"property-rendererOptions"},{"owner":"GeoExt.FeatureRenderer","tagname":"property","meta":{"private":true},"name":"renderers","id":"property-renderers"},{"owner":"GeoExt.FeatureRenderer","tagname":"property","meta":{"private":true},"name":"resolution","id":"property-resolution"}],"css_var":[],"event":[{"owner":"GeoExt.FeatureRenderer","tagname":"event","meta":{},"name":"click","id":"event-click"}],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Component<div class='subclass '><strong>GeoExt.FeatureRenderer</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer' target='_blank'>FeatureRenderer.js</a></div></pre><div class='doc-contents'><p>The feature renderer.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-feature' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-cfg-feature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-cfg-feature' class='name expandable'>feature</a><span> : OpenLayers.Feature.Vector</span></div><div class='description'><div class='short'>Optional vector to be drawn. ...</div><div class='long'><p>Optional vector to be drawn.  If not provided, and if <code>symbolizers</code>\n is configured with an array of plain symbolizer objects, <code>symbolType</code>\n should be configured.</p>\n</div></div></div><div id='cfg-symbolType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-cfg-symbolType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-cfg-symbolType' class='name expandable'>symbolType</a><span> : String</span></div><div class='description'><div class='short'>One of \"Point\", \"Line\", or \"Polygon\". ...</div><div class='long'><p>One of <code>\"Point\"</code>, <code>\"Line\"</code>, or <code>\"Polygon\"</code>.  Only pertinent if\n OpenLayers.Symbolizer objects are not used.  If <code>feature</code>\n is provided, it will be preferred.  The default is \"Polygon\".</p>\n<p>Defaults to: <code>&quot;Polygon&quot;</code></p></div></div></div><div id='cfg-symbolizers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-cfg-symbolizers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-cfg-symbolizers' class='name expandable'>symbolizers</a><span> : Object[]</span></div><div class='description'><div class='short'>An array of OpenLayers.Symbolizer instances or plain symbolizer\n objects (in painters order) for rendering a  feature. ...</div><div class='long'><p>An array of <code>OpenLayers.Symbolizer</code> instances or plain symbolizer\n objects (in painters order) for rendering a  feature.  If no\n symbolizers are provided, the OpenLayers default will be used. If a\n symbolizer is an instance of <code>OpenLayers.Symbolizer</code>, its type will\n override the symbolType for rendering.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-lineFeature' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-property-lineFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-property-lineFeature' class='name expandable'>lineFeature</a><span> : OpenLayers.Feature.Vector</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Feature with LineString geometry. ...</div><div class='long'><p>Feature with LineString geometry.  Default zig-zag is provided.</p>\n</div></div></div><div id='property-minHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-property-minHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-property-minHeight' class='name expandable'>minHeight</a><span> : Number</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>20</code></p></div></div></div><div id='property-minWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-property-minWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-property-minWidth' class='name expandable'>minWidth</a><span> : Number</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>20</code></p></div></div></div><div id='property-pointFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-property-pointFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-property-pointFeature' class='name expandable'>pointFeature</a><span> : OpenLayers.Feature.Vector</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Feature with point geometry. ...</div><div class='long'><p>Feature with point geometry.</p>\n</div></div></div><div id='property-polygonFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-property-polygonFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-property-polygonFeature' class='name expandable'>polygonFeature</a><span> : OpenLayers.Feature.Vector</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Feature with Polygon geometry. ...</div><div class='long'><p>Feature with Polygon geometry.  Default is a soft cornered rectangle.</p>\n</div></div></div><div id='property-renderer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-property-renderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-property-renderer' class='name expandable'>renderer</a><span> : OpenLayers.Renderer</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-rendererOptions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-property-rendererOptions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-property-rendererOptions' class='name expandable'>rendererOptions</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Options for the renderer. ...</div><div class='long'><p>Options for the renderer. See <code>OpenLayers.Renderer</code> for supported\n options.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-renderers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-property-renderers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-property-renderers' class='name expandable'>renderers</a><span> : String[]</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>List of supported Renderer classes. ...</div><div class='long'><p>List of supported Renderer classes. Add to this list to add support for\n additional renderers. The first renderer in the list that returns\n <code>true</code> for the <code>supported</code> method will be used, if not defined in\n the <code>renderer</code> config property.</p>\n<p>Defaults to: <code>[&quot;SVG&quot;, &quot;VML&quot;, &quot;Canvas&quot;]</code></p></div></div></div><div id='property-resolution' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-property-resolution' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-property-resolution' class='name expandable'>resolution</a><span> : Number</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>The resolution for the renderer. ...</div><div class='long'><p>The resolution for the renderer.</p>\n<p>Defaults to: <code>1</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-afterRender' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-method-afterRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-method-afterRender' class='name expandable'>afterRender</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-assignRenderer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-method-assignRenderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-method-assignRenderer' class='name expandable'>assignRenderer</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Iterate through the available renderer implementations and selects\n and assign the first one whose supported method r...</div><div class='long'><p>Iterate through the available renderer implementations and selects\n and assign the first one whose <code>supported</code> method returns <code>true</code>.</p>\n</div></div></div><div id='method-beforeDestroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-method-beforeDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-method-beforeDestroy' class='name expandable'>beforeDestroy</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Private method called during the destroy sequence. ...</div><div class='long'><p>Private method called during the destroy sequence.</p>\n</div></div></div><div id='method-clearCustomEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-method-clearCustomEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-method-clearCustomEvents' class='name expandable'>clearCustomEvents</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-drawFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-method-drawFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-method-drawFeature' class='name expandable'>drawFeature</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Render the feature with the symbolizers. ...</div><div class='long'><p>Render the feature with the symbolizers.</p>\n</div></div></div><div id='method-initCustomEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-method-initCustomEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-method-initCustomEvents' class='name expandable'>initCustomEvents</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-method-onClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-method-onClick' class='name expandable'>onClick</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-method-onRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-method-onRender' class='name expandable'>onRender</a>( <span class='pre'>Object ct, Object position</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>position</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onResize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-method-onResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-method-onResize' class='name expandable'>onResize</a>( <span class='pre'>Object w, Object h</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>w</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>h</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-method-setFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-method-setFeature' class='name expandable'>setFeature</a>( <span class='pre'>Object feature, Object options</span> )</div><div class='description'><div class='short'>Update the feature and redraw. ...</div><div class='long'><p>Update the feature and redraw.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>feature</span> : Object<div class='sub-desc'><p>{OpenLayers.Feature.Vector} The feature to be rendered.</p>\n\n<pre><code> If none is provided, one will be created based on ``symbolType``.\n</code></pre>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>{Object}</p>\n<ul><li><span class='pre'>draw</span> : <div class='sub-desc'><p>{Boolean} Draw the feature after setting it.  Default is <code>true</code>.</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-setRendererDimensions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-method-setRendererDimensions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-method-setRendererDimensions' class='name expandable'>setRendererDimensions</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setSymbolType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-method-setSymbolType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-method-setSymbolType' class='name expandable'>setSymbolType</a>( <span class='pre'>Object type, Object options</span> )</div><div class='description'><div class='short'>Create a new feature based on the geometry type and render it. ...</div><div class='long'><p>Create a new feature based on the geometry type and render it.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'><p>{String} One of the <code>symbolType</code> strings.</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>{Object}</p>\n<ul><li><span class='pre'>draw</span> : <div class='sub-desc'><p>{Boolean} Draw the feature after setting it.  Default is <code>true</code>.</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-setSymbolizers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-method-setSymbolizers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-method-setSymbolizers' class='name expandable'>setSymbolizers</a>( <span class='pre'>Object symbolizers, Object options</span> )</div><div class='description'><div class='short'>Update the symbolizers used to render the feature. ...</div><div class='long'><p>Update the symbolizers used to render the feature.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolizers</span> : Object<div class='sub-desc'><p>{Object[]} An array of symbolizers</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>{Object}</p>\n<ul><li><span class='pre'>draw</span> : <div class='sub-desc'><p>{Boolean} Draw the feature after setting it.  Default is <code>true</code>.</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-method-update' class='name expandable'>update</a>( <span class='pre'>Object options</span> )</div><div class='description'><div class='short'>Update the symbolType or feature and symbolizer and redraw\n the feature. ...</div><div class='long'><p>Update the <code>symbolType</code> or <code>feature</code> and <code>symbolizer</code> and redraw\n the feature.</p>\n\n<p> Valid options:</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>{Object} Object with properties to be updated.</p>\n<ul><li><span class='pre'>feature</span> : <div class='sub-desc'><p>{OpenLayers.Feature.Vector} The new or updated feature.</p>\n\n<pre><code> If provided, the feature gets precedence over ``symbolType``.\n</code></pre>\n</div></li><li><span class='pre'>symbolType</span> : <div class='sub-desc'><p>{String} One of the allowed <code>symbolType</code> values.</p>\n</div></li><li><span class='pre'>symbolizers</span> : <div class='sub-desc'><p>{Object[]} An array of symbolizer objects.</p>\n</div></li></ul></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-click' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.FeatureRenderer'>GeoExt.FeatureRenderer</span><br/><a href='source/FeatureRenderer.html#GeoExt-FeatureRenderer-event-click' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.FeatureRenderer-event-click' class='name expandable'>click</a>( <span class='pre'>Object eOpts</span> )</div><div class='description'><div class='short'>Fires when the feature is clicked on. ...</div><div class='long'><p>Fires when the feature is clicked on.</p>\n\n<p> Listener arguments:</p>\n\n<ul>\n<li>renderer - <a href=\"#!/api/GeoExt.FeatureRenderer\" rel=\"GeoExt.FeatureRenderer\" class=\"docClass\">GeoExt.FeatureRenderer</a> This feature renderer.</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"meta":{},"html_meta":{},"name":"GeoExt.FeatureRenderer","files":[{"href":"FeatureRenderer.html#GeoExt-FeatureRenderer","filename":"FeatureRenderer.js"}],"mixedInto":[],"aliases":{"widget":["gx_renderer"]},"id":"class-GeoExt.FeatureRenderer","superclasses":["Ext.Component"]});