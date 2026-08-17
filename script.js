const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealObserver=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}
  });
},{threshold:.12,rootMargin:'0px 0px -5% 0px'});
document.querySelectorAll('.reveal').forEach((el)=>revealObserver.observe(el));

const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});
document.querySelectorAll('.nav a').forEach((link)=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));

const gallery=document.querySelector('.project-gallery');
if(gallery){
  let down=false,startX=0,scrollStart=0,moved=false;
  gallery.addEventListener('pointerdown',(event)=>{
    down=true;moved=false;startX=event.clientX;scrollStart=gallery.scrollLeft;
    gallery.setPointerCapture?.(event.pointerId);
  });
  gallery.addEventListener('pointermove',(event)=>{
    if(!down)return;
    if(Math.abs(event.clientX-startX)>6)moved=true;
    gallery.scrollLeft=scrollStart-(event.clientX-startX);
  });
  gallery.addEventListener('pointerup',()=>down=false);
  gallery.addEventListener('pointercancel',()=>down=false);
  gallery.addEventListener('click',(event)=>{if(moved){event.preventDefault();event.stopPropagation();moved=false}},true);
}

const cards=[...document.querySelectorAll('.gallery-image-card')];
const lightbox=document.querySelector('.lightbox');
const lightboxImage=document.querySelector('.lightbox-image');
const lightboxCaption=document.querySelector('.lightbox-caption');
const closeButton=document.querySelector('.lightbox-close');
let current=0;
let lastFocused=null;

const showLightbox=(index)=>{
  if(!cards.length)return;
  current=(index+cards.length)%cards.length;
  const card=cards[current];
  lightboxImage.src=card.dataset.full;
  lightboxImage.alt=card.querySelector('img')?.alt||'';
  lightboxCaption.textContent=card.dataset.caption||'';
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  closeButton?.focus();
};
const closeLightbox=()=>{
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  lastFocused?.focus();
};

cards.forEach((card,index)=>card.addEventListener('click',()=>{
  lastFocused=card;showLightbox(index);
}));
document.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);
document.querySelector('.lightbox-prev')?.addEventListener('click',()=>showLightbox(current-1));
document.querySelector('.lightbox-next')?.addEventListener('click',()=>showLightbox(current+1));
lightbox?.addEventListener('click',(event)=>{if(event.target===lightbox)closeLightbox()});
window.addEventListener('keydown',(event)=>{
  if(!lightbox?.classList.contains('is-open'))return;
  if(event.key==='Escape')closeLightbox();
  if(event.key==='ArrowLeft')showLightbox(current-1);
  if(event.key==='ArrowRight')showLightbox(current+1);
});

if(!reduceMotion){
  const sections=[...document.querySelectorAll('main section[id]')];
  const navLinks=[...document.querySelectorAll('.nav a')];
  const sectionObserver=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(!entry.isIntersecting)return;
      navLinks.forEach((link)=>link.removeAttribute('aria-current'));
      const active=navLinks.find((link)=>link.getAttribute('href')===`#${entry.target.id}`);
      active?.setAttribute('aria-current','page');
    });
  },{rootMargin:'-35% 0px -55% 0px',threshold:0});
  sections.forEach((section)=>sectionObserver.observe(section));
}
