class e{constructor(e,t,n){this.themeObj={newClass:e,oldClass1:t,oldClass2:n,newClassNoIndi:e.slice(1),oldClass1NoIndi:t.slice(1),oldClass2NoIndi:""},this.themeObj.oldClass2&&(this.themeObj.oldClass2NoIndi=n.slice(1))}addTheme=function(e){this.themeObj.oldClass1&&document.querySelectorAll(this.themeObj.oldClass1).forEach((e=>{e.classList.remove(this.themeObj.oldClass1NoIndi),e.classList.add(this.themeObj.newClassNoIndi)})),""!==this.themeObj.oldClass2NoIndi&&document.querySelectorAll(this.themeObj.oldClass2).forEach((e=>{e.classList.remove(this.themeObj.oldClass2NoIndi),e.classList.add(this.themeObj.newClassNoIndi)}))}}document.querySelector("#menu-btn"),document.querySelector(".logo"),document.querySelector(".menu-container"),document.querySelector(".white-theme"),document.querySelector(".gray-theme"),document.querySelector(".purple-theme"),document.querySelector(".transparent-black-screen"),document.querySelector(".create-a-quiz-hyperlink"),document.querySelector("#create-btn"),document.querySelector(".scroll-container");const t=document.querySelector("#signed-in-as"),n=(document.querySelector("#eaqc"),document.querySelector("#select-a-quiz-main-div"),document.querySelector(".new-quiz-btn"),document.querySelector(".log-out-btn"),document.querySelector("#quiz-name")),o=document.querySelector("#combo"),r=document.querySelector("#highest-combo"),c=document.querySelector("#quiz-question"),l=document.querySelector("#quiz-container"),a=JSON.parse(localStorage.getItem("current_quiz"));let s,i,u,d,m,h,y,p,q,g,w=new e(".main-theme-color",".gray-theme-color",".purple-theme-color"),f=new e(".main-hyperlink-color",".secondary-hyperlink-color"),b=new e(".main-quiz-tab-color",".purple-quiz-tab-color",".gray-quiz-tab-color"),S=new e(".main-theme-color-secondary",".gray-theme-color-secondary",".purple-theme-color-secondary"),v=new e(".main-font-color",".white-font-color"),C="main",x=JSON.parse(localStorage.getItem("current_username")),k=0,L=0,z=a.questions.length-1,I=0,E=!0,O=!1,T=[];const N=document.querySelector("#results"),j=document.querySelector("#correction-contianer"),A=document.querySelector("#correct-answer-value"),M=document.querySelector("#your-answer-value"),J=function(){G(),E=!0,o.textContent=`Combo: ${k}`,r.textContent=`High Score: ${a.highestCombo}`,c.textContent=`${a.questions[L].question}`,s&&i&&(s.value=I+1,i.value=z+1),"mc"===a.type&&ce()},_=function(){window.removeEventListener("keydown",K),i.value<=a.questions.length&&i.value>0&&s.value>0&&s.value<=a.questions.length?(z=i.value-1,I=s.value-1,O=!1,"sq"===a.type?te():ne(),J()):(I=0,z=a.questions.length-1,O=!1,"sq"===a.type?te():ne(),J())},$=function(e){B(),x.theme=e,D(),localStorage.setItem(`${JSON.parse(localStorage.getItem("current_username")).username}`,JSON.stringify(x))},H=function(){w=new e(".main-theme-color",".gray-theme-color",".purple-theme-color"),f=new e(".main-hyperlink-color",".secondary-hyperlink-color"),b=new e(".main-quiz-tab-color",".purple-quiz-tab-color",".gray-quiz-tab-color"),S=new e(".main-theme-color-secondary",".gray-theme-color-secondary",".purple-theme-color-secondary"),v=new e(".main-font-color",".white-font-color"),w.addTheme(),f.addTheme(),v.addTheme(),b.addTheme(),S.addTheme(),C="main",$("white")},R=function(){w=new e(".gray-theme-color",".main-theme-color",".purple-theme-color"),f=new e(".secondary-hyperlink-color",".main-hyperlink-color"),b=new e(".gray-quiz-tab-color",".purple-quiz-tab-color",".main-quiz-tab-color"),S=new e(".gray-theme-color-secondary",".main-theme-color-secondary",".purple-theme-color-secondary"),v=new e(".white-font-color",".main-font-color"),w.addTheme(),f.addTheme(),v.addTheme(),b.addTheme(),S.addTheme(),C="gray",$("gray")},Q=function(){w=new e(".purple-theme-color",".main-theme-color",".gray-theme-color"),f=new e(".secondary-hyperlink-color",".main-hyperlink-color"),b=new e(".purple-quiz-tab-color",".gray-quiz-tab-color",".main-quiz-tab-color"),S=new e(".purple-theme-color-secondary",".main-theme-color-secondary",".gray-theme-color-secondary"),v=new e(".white-font-color",".main-font-color"),w.addTheme(),f.addTheme(),v.addTheme(),b.addTheme(),S.addTheme(),C="purple",$("purple")},B=function(){x=JSON.parse(localStorage.getItem("current_username"))},D=function(){localStorage.setItem("current_username",JSON.stringify(x))},F=function(e){for(y=Math.round(1+Math.random()*q.length-1),h=q[y];T.includes(h)||y>q.length-1||y<0;)y=Math.round(1+Math.random()*q.length-1),h=q[y]},G=function(){for(L=Math.round(1+Math.random()*(a.questions.length-1));L>z||L<I;)L=Math.round(1+Math.random()*a.questions.length-1)},K=function(e){"Enter"===e.key&&(console.log("l"),_())},P=function(){d=u.value.trim()," "!==d&&""!==d&&("true"===a.questions[L].interchangeable?V():a.questions[L].answer===u.value?(re("Correct!"),X()):(re("Incorrect..."),W()))},U=function(){window.addEventListener("keydown",(function(e){"n"===e.key&&(console.log("l"),_())})),document.querySelectorAll(".answer-radio").forEach((e=>{e.checked&&(O=!0)})),O&&(p.checked?(O=!1,document.querySelectorAll(".answer-radio").forEach((e=>{e.disabled=!0})),re("Correct!"),X()):(O=!1,document.querySelectorAll(".answer-radio").forEach((e=>{e.disabled=!0})),re("Incorrect..."),W()))},V=function(){let e=0,t=[],n=!1;m=a.questions[L].answer.replace(/[\s]+/g,"*").split("*"),d=d.replace(/[\s]+/g,"*").split("*"),d.forEach((o=>{if(m.includes(o)){for(let r=0;r<m.length;r++)if(e===m.length&&e++,m[r]===o){if(t.forEach((e=>{o===e&&(n=!0)})),!n){t.push(o),e++;break}n=!1}}else e=9999999})),e===m.length?(oe("Correct!"),X()):(oe("Incorrect..."),W())},W=function(){k=0,window.addEventListener("keydown",K)},X=function(){E&&(E=!1,k+=1,k>a.highestCombo&&(a.highestCombo=k,Y()),window.addEventListener("keydown",K))},Y=function(){a.highestCombo=k,x.quizzes[a.name]=a,Z()},Z=function(){localStorage.setItem("current_username",JSON.stringify(x)),localStorage.setItem(`${x.username}`,JSON.stringify(x))},ee=function(){"white"===JSON.parse(localStorage.getItem("current_username")).theme?H():"gray"===JSON.parse(localStorage.getItem("current_username")).theme?R():Q()},te=function(){u.disabled=!1,N.classList.add("no-opacity"),j.classList.add("no-opacity"),u.value=""},ne=function(){document.querySelectorAll(".mc-answer-flex").forEach((e=>{e.remove()})),N.classList.add("no-opacity")},oe=function(e){N.textContent=e,N.classList.remove("no-opacity"),j.classList.remove("no-opacity"),A.textContent=m.join(" "),M.textContent=d.join(" "),u.disabled=!0},re=function(e){N.textContent=e,N.classList.remove("no-opacity"),j&&u&&(j.classList.remove("no-opacity"),A.textContent=a.questions[L].answer,M.textContent=u.value.trim(),u.disabled=!0),window.scrollTo({left:0,top:0,behavior:"smooth"})},ce=function(){for(let e=0;e<a.questions[L].answers.wrongAnswers.length+1;e++)document.querySelector("#multiple-choice-wrap").insertAdjacentHTML("beforeend",'<div class="mc-answer-flex">\n          <label class="custom-radio-btn">\n          <input type="radio" class="answer-radio" name="answer" />\n          <span class="selected"></span>\n          </label>\n          <p class="quiz-mc-answer main-font-color"></p>\n  </div> ');a.questions[L]?(q=[],q=[...a.questions[L].answers.wrongAnswers,a.questions[L].answers.realAnswer],p="",ee(),document.querySelectorAll(".mc-answer-flex").forEach((e=>{const t=e.querySelector(".quiz-mc-answer");T.length!==q.length&&(F(t),T.push(h),t.textContent=h),t.textContent===a.questions[L].answers.realAnswer&&(p=e.querySelector(".answer-radio"))})),T=[]):window.location.href="logged-in.html"},le=function(){"sq"===a.type&&l.insertAdjacentHTML("beforeend",'  <input id="aib" class="answer-input-box" type="text" placeholder="Answer" />\n      '),l.insertAdjacentHTML("beforeend",`  <div id="settings-container" class="flex-column">\n    <div  id="theme-settings-container" class="flex-column">\n        <header id="theme" class="title theme-title main-font-color">Theme</header>\n        <div class="theme-cs-grid grid">\n        <button class="white-theme scale-up">\n        </button>\n        \n        <button class="gray-theme scale-up">\n      </button>\n\n      <button class="purple-theme scale-up">\n      </button>\n      </div>\n      </div>\n      <div id="btn-flex"> \n      <div id="random-range-flex">\n      <header id="random-question-range" class="title theme-title main-font-color">Random Question Range</header>\n      <input id="r-min" class="random-range-input-box" type="text" placeholder="Min"  value="1"/>\n      <p id="through-symbol" class="main-font-color">-</p>\n      <input id="r-max" class="random-range-input-box" type="text" placeholder="Max" value="${a.questions.length}" />\n      </div>\n      <button id="check-btn" class="quiz-btn scale-up" type="submit">Check</button>\n      <button id="next-btn" class="quiz-btn scale-up " type="submit">Next</button>\n\n      </div>\n      </div>\n    `),"sq"===a.type?(g=document.querySelector("#check-btn"),u=document.querySelector("#aib"),document.querySelector("#multiple-choice-wrap").classList.add("hidden"),ee(),g.addEventListener("click",P),u.addEventListener("keyup",(function(e){"Enter"===e.key&&P()}))):(g=document.querySelector("#check-btn"),document.querySelector("#correction-contianer").classList.add("hidden"),ee(),g.addEventListener("click",U))};!function(){if(n.textContent=`${a.name}`,t.textContent=`Signed in as: ${x.username}`,J(),localStorage.getItem("current_username")){le();const e=document.querySelector(".white-theme"),t=document.querySelector(".gray-theme"),n=document.querySelector(".purple-theme"),o=document.querySelector("#next-btn");s=document.querySelector("#r-min"),i=document.querySelector("#r-max"),t.addEventListener("click",R),e.addEventListener("click",H),n.addEventListener("click",Q),o.addEventListener("click",(function(){_()}))}else window.location.href="index.html"}();
//# sourceMappingURL=quizzing.6134a7d3.js.map
