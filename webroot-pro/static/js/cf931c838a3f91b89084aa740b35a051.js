!function(){function e(e,l){return s(e||self.document.URL||self.location.href,l||t())}function t(){var e=document.getElementsByTagName("script");return e[e.length-1].src}function s(e,t){var s=t;if(/^(\/|\\\\)/.test(t))s=/^.+?\w(\/|\\\\)/.exec(e)[0]+t.replace(/^(\/|\\\\)/,"");else if(!/^[a-z]+:/i.test(t)){e=e.split("#")[0].split("?")[0].replace(/[^\\\/]+$/,"");s=e+""+t}return l(s)}function l(e){var t=/^[a-z]+:\/\//.exec(e)[0],s=null,l=[];e=e.replace(t,"").split("?")[0].split("#")[0];e=e.replace(/\\/g,"/").split(/\//);e[e.length-1]="";for(;e.length;)".."===(s=e.shift())?l.pop():"."!==s&&l.push(s);return t+l.join("/")}var a=window.UEDITOR_HOME_URL||e();window.UEDITOR_CONFIG={UEDITOR_HOME_URL:a,serverUrl:a+"php/controller.php",toolbars:[["fullscreen","source","|","undo","redo","|","bold","italic","underline","fontborder","strikethrough","superscript","subscript","removeformat","formatmatch","autotypeset","blockquote","pasteplain","|","forecolor","backcolor","insertorderedlist","insertunorderedlist","selectall","cleardoc","|","rowspacingtop","rowspacingbottom","lineheight","|","customstyle","paragraph","fontfamily","fontsize","|","directionalityltr","directionalityrtl","indent","|","justifyleft","justifycenter","justifyright","justifyjustify","|","touppercase","tolowercase","|","link","unlink","anchor","|","imagenone","imageleft","imageright","imagecenter","|","simpleupload","insertimage","emotion","scrawl","insertvideo","music","attachment","map","gmap","insertframe","insertcode","webapp","pagebreak","template","background","|","horizontal","date","time","spechars","snapscreen","wordimage","|","inserttable","deletetable","insertparagraphbeforetable","insertrow","deleterow","insertcol","deletecol","mergecells","mergeright","mergedown","splittocells","splittorows","splittocols","charts","|","print","preview","searchreplace","drafts","help"]],initialFrameHeight:800,enableAutoSave:!1,saveInterval:6e3,fontsize:[10,11,12,14,16,18,20,24,36],elementPathEnabled:!1,wordCount:!1,maxUndoCount:20,autoHeightEnabled:!1,scaleEnabled:!1,imageScaleEnabled:!1,autoFloatEnabled:!1,catchRemoteImageEnable:!0,autotypeset:{clearFontSize:!1,clearFontFamily:!1,removeEmptyNode:!1,bdc2sb:!1,tobdc:!1},sourceEditor:"codemirror",rgb2Hex:!0,xssFilterRules:!0,inputXssFilter:!0,outputXssFilter:!0,whitList:{a:["target","href","title","class","style"],abbr:["title","class","style"],address:["class","style"],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src","class","style"],b:["class","style"],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite","class","style"],br:[],caption:["class","style"],center:[],cite:[],code:["class","style"],col:["align","valign","span","width","class","style"],colgroup:["align","valign","span","width","class","style"],dd:["class","style"],del:["datetime"],details:["open"],div:["class","style"],dl:["class","style"],dt:["class","style"],em:["class","style"],font:["color","size","face"],footer:[],h1:["class","style"],h2:["class","style"],h3:["class","style"],h4:["class","style"],h5:["class","style"],h6:["class","style"],header:[],hr:[],i:["class","style"],img:["src","alt","title","width","height","id","_src","loadingclass","class","data-latex"],ins:["datetime"],li:["class","style"],mark:[],nav:[],ol:["class","style"],p:["class","style"],pre:["class","style"],s:[],section:[],small:[],span:["class","style"],sub:["class","style"],sup:["class","style"],strong:["class","style"],table:["width","border","align","valign","class","style"],tbody:["align","valign","class","style"],td:["width","rowspan","colspan","align","valign","class","style"],tfoot:["align","valign","class","style"],th:["width","rowspan","colspan","align","valign","class","style"],thead:["align","valign","class","style"],tr:["rowspan","align","valign","class","style"],tt:[],u:[],ul:["class","style"],video:["autoplay","controls","loop","preload","src","height","width","class","style"]}};window.UE={getUEBasePath:e}}();