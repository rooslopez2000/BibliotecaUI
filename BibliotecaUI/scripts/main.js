// main.js
document.addEventListener('DOMContentLoaded',()=>{
  const navToggle=document.getElementById('nav-toggle');
  const nav=document.querySelector('.nav');
  if(navToggle){ navToggle.onclick=()=>nav.classList.toggle('is-open'); }

  document.querySelectorAll('[data-modal-open]').forEach(btn=>{
    const id=btn.dataset.modalOpen;
    btn.onclick=()=>{document.getElementById(id).setAttribute('aria-hidden','false');};
  });
  document.querySelectorAll('[data-modal-close]').forEach(btn=>{
    btn.onclick=()=>btn.closest('.modal').setAttribute('aria-hidden','true');
  });

  document.querySelectorAll('[data-accordion] .accordion__btn').forEach(btn=>{
    btn.onclick=()=>btn.parentElement.classList.toggle('is-open');
  });

  document.querySelectorAll('[data-tabs]').forEach(root=>{
    root.querySelectorAll('.tabs__tab').forEach(tab=>{
      tab.onclick=()=>{
        const id=tab.dataset.tab;
        root.querySelectorAll('.tabs__tab').forEach(x=>x.classList.remove('is-active'));
        root.querySelectorAll('.tabs__panel').forEach(p=>p.classList.remove('is-active'));
        tab.classList.add('is-active');
        root.querySelector(`.tabs__panel[data-panel="${id}"]`).classList.add('is-active');
      };
    });
  });

  const toastArea=document.getElementById('toasts');
  const trigger=document.getElementById('toast-trigger');
  if(trigger){
    trigger.onclick=()=>{
      const t=document.createElement('div');
      t.className='toast';
      t.textContent='Notificación de ejemplo';
      toastArea.appendChild(t);
      setTimeout(()=>t.remove(),3000);
    };
  }
});
