!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():t()}(this,function(){function e(e){if(null===w){for(var t=e.length,s=0,i=document.getElementById(a),n="<ul>";s<t;)n+="<li>"+e[s]+"</li>",s++;n+="</ul>",i.innerHTML=n}else w(e)}function t(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function s(e){for(var t=e.getElementsByTagName("a"),s=t.length-1;s>=0;s--)t[s].setAttribute("target","_blank")}function i(e,t){for(var s=[],i=new RegExp("(^| )"+t+"( |$)"),n=e.getElementsByTagName("*"),a=0,l=n.length;a<l;a++)i.test(n[a].className)&&s.push(n[a]);return s}function n(e){if(void 0!==e&&e.innerHTML.indexOf("data-srcset")>=0){var t=e.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0];return decodeURIComponent(t).split('"')[1]}}var a="",l=20,r=!0,o=[],c=!1,d=!0,m=!0,p=null,h=!0,u=!0,w=null,g=!0,f=!1,v=!0,b="en",y=!0,_=!1,T=null,k={fetch:function(e){if(void 0===e.maxTweets&&(e.maxTweets=20),void 0===e.enableLinks&&(e.enableLinks=!0),void 0===e.showUser&&(e.showUser=!0),void 0===e.showTime&&(e.showTime=!0),void 0===e.dateFunction&&(e.dateFunction="default"),void 0===e.showRetweet&&(e.showRetweet=!0),void 0===e.customCallback&&(e.customCallback=null),void 0===e.showInteraction&&(e.showInteraction=!0),void 0===e.showImages&&(e.showImages=!1),void 0===e.linksInNewWindow&&(e.linksInNewWindow=!0),void 0===e.showPermalinks&&(e.showPermalinks=!0),void 0===e.dataOnly&&(e.dataOnly=!1),c)o.push(e);else{c=!0,a=e.domId,l=e.maxTweets,r=e.enableLinks,m=e.showUser,d=e.showTime,u=e.showRetweet,p=e.dateFunction,w=e.customCallback,g=e.showInteraction,f=e.showImages,v=e.linksInNewWindow,y=e.showPermalinks,_=e.dataOnly;var t=document.getElementsByTagName("head")[0];null!==T&&t.removeChild(T),T=document.createElement("script"),T.type="text/javascript",void 0!==e.list?T.src="https://syndication.twitter.com/timeline/list?callback=__twttrf.callback&dnt=false&list_slug="+e.list.listSlug+"&screen_name="+e.list.screenName+"&suppress_response_codes=true&lang="+(e.lang||b)+"&rnd="+Math.random():void 0!==e.profile?T.src="https://syndication.twitter.com/timeline/profile?callback=__twttrf.callback&dnt=false&screen_name="+e.profile.screenName+"&suppress_response_codes=true&lang="+(e.lang||b)+"&rnd="+Math.random():void 0!==e.likes?T.src="https://syndication.twitter.com/timeline/likes?callback=__twttrf.callback&dnt=false&screen_name="+e.likes.screenName+"&suppress_response_codes=true&lang="+(e.lang||b)+"&rnd="+Math.random():T.src="https://cdn.syndication.twimg.com/widgets/timelines/"+e.id+"?&lang="+(e.lang||b)+"&callback=__twttrf.callback&suppress_response_codes=true&rnd="+Math.random(),t.appendChild(T)}},callback:function(a){function w(e){var t=e.getElementsByTagName("img")[0];return t.src=t.getAttribute("data-src-2x"),e}if(void 0===a||void 0===a.body)return c=!1,void(o.length>0&&(k.fetch(o[0]),o.splice(0,1)));a.body=a.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,""),f||(a.body=a.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,"")),m||(a.body=a.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g,""));var b=document.createElement("div");b.innerHTML=a.body,"undefined"==typeof b.getElementsByClassName&&(h=!1);var T=[],C=[],x=[],N=[],E=[],I=[],A=[],B=0;if(h)for(var L=b.getElementsByClassName("timeline-Tweet");B<L.length;)L[B].getElementsByClassName("timeline-Tweet-retweetCredit").length>0?E.push(!0):E.push(!1),(!E[B]||E[B]&&u)&&(T.push(L[B].getElementsByClassName("timeline-Tweet-text")[0]),I.push(L[B].getAttribute("data-tweet-id")),m&&C.push(w(L[B].getElementsByClassName("timeline-Tweet-author")[0])),x.push(L[B].getElementsByClassName("dt-updated")[0]),A.push(L[B].getElementsByClassName("timeline-Tweet-timestamp")[0]),void 0!==L[B].getElementsByClassName("timeline-Tweet-media")[0]?N.push(L[B].getElementsByClassName("timeline-Tweet-media")[0]):N.push(void 0)),B++;else for(var L=i(b,"timeline-Tweet");B<L.length;)i(L[B],"timeline-Tweet-retweetCredit").length>0?E.push(!0):E.push(!1),(!E[B]||E[B]&&u)&&(T.push(i(L[B],"timeline-Tweet-text")[0]),I.push(L[B].getAttribute("data-tweet-id")),m&&C.push(w(i(L[B],"timeline-Tweet-author")[0])),x.push(i(L[B],"dt-updated")[0]),A.push(i(L[B],"timeline-Tweet-timestamp")[0]),void 0!==i(L[B],"timeline-Tweet-media")[0]?N.push(i(L[B],"timeline-Tweet-media")[0]):N.push(void 0)),B++;T.length>l&&(T.splice(l,T.length-l),C.splice(l,C.length-l),x.splice(l,x.length-l),E.splice(l,E.length-l),N.splice(l,N.length-l),A.splice(l,A.length-l));var M=[],B=T.length,P=0;if(_)for(;P<B;)M.push({tweet:T[P].innerHTML,author:C[P]?C[P].innerHTML:"Unknown Author",time:x[P].textContent,timestamp:x[P].getAttribute("datetime").replace("+0000","Z").replace(/([\+\-])(\d\d)(\d\d)/,"$1$2:$3"),image:n(N[P]),rt:E[P],tid:I[P],permalinkURL:void 0===A[P]?"":A[P].href}),P++;else for(;P<B;){if("string"!=typeof p){var H=x[P].getAttribute("datetime"),R=new Date(x[P].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),U=p(R,H);if(x[P].setAttribute("aria-label",U),T[P].textContent)if(h)x[P].textContent=U;else{var F=document.createElement("p"),O=document.createTextNode(U);F.appendChild(O),F.setAttribute("aria-label",U),x[P]=F}else x[P].textContent=U}var $="";r?(v&&(s(T[P]),m&&s(C[P])),m&&($+='<div class="user">'+t(C[P].innerHTML)+"</div>"),$+='<small class="tweet">'+t(T[P].innerHTML)+"</small>",d&&($+=y?'<h6 class="timePosted"><a href="'+A[P]+'">'+x[P].getAttribute("aria-label")+"</a></h6>":'<p class="timePosted">'+x[P].getAttribute("aria-label")+"</p>")):T[P].textContent?(m&&($+='<p class="user">'+C[P].textContent+"</p>"),$+='<p class="tweet">'+T[P].textContent+"</p>",d&&($+='<p class="timePosted">'+x[P].textContent+"</p>")):(m&&($+='<p class="user">'+C[P].textContent+"</p>"),$+='<p class="tweet">'+T[P].textContent+"</p>",d&&($+='<p class="timePosted">'+x[P].textContent+"</p>")),g&&($+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+I[P]+'" class="twitter_reply_icon"'+(v?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+I[P]+'" class="twitter_retweet_icon"'+(v?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+I[P]+'" class="twitter_fav_icon"'+(v?' target="_blank">':">")+"Favorite</a></p>"),f&&void 0!==N[P]&&void 0!==n(N[P])&&($+='<div class="media"><img src="'+n(N[P])+'" alt="Image from tweet" /></div>'),f?M.push($):!f&&T[P].textContent.length&&M.push($),P++}e(M),c=!1,o.length>0&&(k.fetch(o[0]),o.splice(0,1))}};return window.__twttrf=k,window.twitterFetcher=k,k});var configProfile={profile:{screenName:"iammatthias"},domId:"tweets",maxTweets:1,enableLinks:!0,showUser:!1,showTime:!0,showImages:!1,showInteraction:!1,lang:"en"};twitterFetcher.fetch(configProfile);
