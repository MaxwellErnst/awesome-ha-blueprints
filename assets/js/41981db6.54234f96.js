(self.webpackChunkawesome_ha_blueprints=self.webpackChunkawesome_ha_blueprints||[]).push([[709],{3531:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=o(2122),i=o(9756),r=(o(7294),o(3905)),a=o(4920),s={title:"Cover",description:"This Hook blueprint allows to build a controller-based automation to control a cover. Supports opening, closing and tilting the cover."},l={unversionedId:"blueprints/hooks/cover",id:"blueprints/hooks/cover",isDocsHomePage:!1,title:"Cover",description:"This Hook blueprint allows to build a controller-based automation to control a cover. Supports opening, closing and tilting the cover.",source:"@site/docs/blueprints/hooks/cover.mdx",sourceDirName:"blueprints/hooks",slug:"/blueprints/hooks/cover",permalink:"/awesome-ha-blueprints/docs/blueprints/hooks/cover",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/hooks/cover.mdx",version:"current",frontMatter:{title:"Cover",description:"This Hook blueprint allows to build a controller-based automation to control a cover. Supports opening, closing and tilting the cover."}},c=[{value:"Description",id:"description",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Supported Controllers",id:"supported-controllers",children:[]},{value:"Additional Notes",id:"additional-notes",children:[]},{value:"Changelog",id:"changelog",children:[]}],d={toc:c};function p(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Lu,{id:"cover",category:"hooks",mdxType:"ImportCard"}),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This blueprint is part of the ",(0,r.kt)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",(0,r.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a cover. Supports opening, closing and tilting the cover."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"An automation created with this blueprint must be linked to a ",(0,r.kt)("a",{parentName:"p",href:"/docs/blueprints/controllers"},"Controller")," automation. Controllers are blueprints which allow to easily integrate a wide range of controllers and use them to run a set of actions when interacting with them. They expose an abstract interface used by Hooks to create controller-based automations."),(0,r.kt)("p",{parentName:"div"},"See the list of ",(0,r.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/cover#supported-controllers"},"Controllers supported by this Hook")," for additional details."))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)(a.nb,{id:"controller",required:!0,mdxType:"Requirement"}),(0,r.kt)(a.nb,{name:"Cover Integration",required:!0,mdxType:"Requirement"},(0,r.kt)("p",null,"This integration provides the entity which represents a cover in Home Assistant. It should be activated by default so unless you tweaked the default configuration you're good to go."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/cover/"},"Cover Integration Docs"))),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)(a.II,{name:"Controller device",description:"The controller device which will control the light. Choose a value only if the integration used to connect the controller to Home Assistant exposes it as a Device. This value should match the one specified in the corresponding Controller automation.",selector:"device",required:!0,mdxType:"Input"}),(0,r.kt)(a.II,{name:"Controller entity",description:"The controller entity which will control the light. Choose a value only if the integration used to connect the controller to Home Assistant exposes it as an Entity. This value should match the one specified in the corresponding Controller automation.",selector:"entity",required:!0,mdxType:"Input"}),(0,r.kt)(a.II,{name:"Controller model",description:"The model for the controller used in this automation. Choose a value from the list of supported controllers.",selector:"select",required:!0,mdxType:"Input"}),(0,r.kt)(a.II,{name:"Cover",description:"Cover which will be controlled with this automation.",selector:"entity",required:!0,mdxType:"Input"}),(0,r.kt)("h2",{id:"supported-controllers"},"Supported Controllers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1524_e1810"},"IKEA E1524/E1810 5-Button Remote")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1743"},"IKEA E1743 On/Off Switch & Dimmer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1812"},"IKEA E1812 Shortcut button"))),(0,r.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,r.kt)("p",null,"If you want to link multiple covers to the same controller you can either use ",(0,r.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/cover.group/"},"Cover Groups")," or build multiple Hooks linked to the same Controller."),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-03-26"),": first blueprint version \ud83c\udf89"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-04-19"),": remove unused variable, fix warnings for undefined variables in Home Assistant Core >=2021.4.0")))}p.isMDXComponent=!0}}]);