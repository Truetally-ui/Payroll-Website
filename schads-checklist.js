/* True Tally — SCHADS & Health Services Award Checklist email gate (self-injects, call-triggered only, no sticky bar). Submits to GoHighLevel form IHC5JF1J4AMZI7kcUQ1u. */
(function(){
  if(window.__scInit)return; window.__scInit=true;
  var PDF='/schads-health-award-checklist.pdf', FORM='IHC5JF1J4AMZI7kcUQ1u';

  function init(){
    if(!document.getElementById('sc-overlay')){
      document.body.insertAdjacentHTML('beforeend','<div id="sc-overlay" style="display:none;position:fixed;inset:0;background:rgba(45,35,30,.72);z-index:9999;align-items:center;justify-content:center;padding:1rem;"><div style="background:#fff;border-radius:16px;max-width:460px;width:100%;padding:2rem 2rem 1.5rem;position:relative;box-shadow:0 24px 60px rgba(45,35,30,.22);"><button id="sc-close" aria-label="Close" style="position:absolute;top:1rem;right:1rem;background:none;border:none;font-size:1.4rem;cursor:pointer;color:#4d4642;opacity:.5;">&times;</button><div style="display:inline-block;background:#F7EDE6;color:#BD7655;font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.2rem .7rem;border-radius:50px;margin-bottom:.75rem;">Free download</div><h3 style="color:#BD7655;font-weight:700;margin-bottom:.25rem;font-size:1.15rem;font-family:Poppins,system-ui,-apple-system,sans-serif;">Get the SCHADS &amp; Health Services Award Checklist</h3><p style="color:#4d4642;font-size:.88rem;margin-bottom:1rem;line-height:1.55;font-family:Poppins,system-ui,-apple-system,sans-serif;">Enter your details and the PDF downloads the moment you hit send.</p><div id="sc-form-wrap"><iframe src="https://api.leadconnectorhq.com/widget/form/'+FORM+'" style="width:100%;height:420px;border:none;border-radius:8px;" id="inline-sc-'+FORM+'" data-form-id="'+FORM+'" title="Checklist Download"></iframe></div><p style="font-size:.72rem;color:#9CA3AF;text-align:center;margin-top:.75rem;font-family:Poppins,system-ui,-apple-system,sans-serif;">No spam. Unsubscribe any time.</p></div></div>');
    }
    if(!document.querySelector('script[src*="form_embed"]')){var s=document.createElement('script');s.src='https://link.msgsndr.com/js/form_embed.js';document.body.appendChild(s);}
    var ov=document.getElementById('sc-overlay'), done=false;
    function dl(){ if(done||!ov||ov.style.display!=='flex')return; done=true;
      var a=document.createElement('a');a.href=PDF;a.download='True-Tally-SCHADS-Health-Award-Checklist.pdf';document.body.appendChild(a);a.click();document.body.removeChild(a);
      document.getElementById('sc-form-wrap').innerHTML='<div style="text-align:center;padding:1.5rem 0;"><p style="color:#BD7655;font-weight:700;font-size:1rem;margin-bottom:.4rem;font-family:Poppins,system-ui,-apple-system,sans-serif;">Your download is starting…</p><p style="color:#6b625b;font-size:.88rem;font-family:Poppins,system-ui,-apple-system,sans-serif;">Check your downloads folder.</p></div>';
      setTimeout(function(){ov.style.display='none';done=false;},3500);
    }
    window.addEventListener('message',function(e){ if(!ov||ov.style.display!=='flex')return; var d=null; try{d=typeof e.data==='string'?JSON.parse(e.data):e.data;}catch(_){}
      var ok=(d&&d.formId===FORM)||(typeof e.data==='string'&&e.data.indexOf(FORM)>-1&&/submit|thank|success/i.test(e.data)); if(ok)dl(); });
    window.openChecklist=function(e){if(e&&e.preventDefault)e.preventDefault();done=false;if(ov)ov.style.display='flex';};
    var mc=document.getElementById('sc-close'); if(mc)mc.addEventListener('click',function(){ov.style.display='none';});
    ov.addEventListener('click',function(e){if(e.target===ov)ov.style.display='none';});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')ov.style.display='none';});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init); else init();
})();
