import"./assets/modulepreload-polyfill-3cfb730f.js";let o={email:"",message:""};const t=document.querySelector(".feedback-form"),l=t.email,r=t.message;t.addEventListener("input",s);t.addEventListener("submit",m);function s(e){o[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(o))}function m(e){e.preventDefault(),l.value===""||r.value===""?alert("«Fill please all fields»"):(console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),l.value="",r.value="",o={email:"",message:""},e.currentTarget.reset())}const a=JSON.parse(localStorage.getItem("feedback-form-state"));if(a)for(const e of Object.keys(a))document.querySelector(`[name="${e}"]`).value=a[e];
//# sourceMappingURL=commonHelpers2.js.map
