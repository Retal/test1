var loadingpage=document.getElementById("loading-page"),
    nav=document.getElementById('nav'),
    line=document.getElementById('line');

// window.onload =function()
// {
//  document.body.style.overflow='hidden';
//  setTimeout(function()
//  {
//    loadingpage.style.display='none';
//    document.body.style.overflow='auto';
//  },1000)
// }
window.onscroll=function()
{
  if(window.scrollY >=400)
  {
    nav.classList.remove('nav-header')
    nav.classList.add('nav-scroll')
  }
  else
  {
    nav.classList.remove('nav-scroll')
    nav.classList.add('nav-header')
  }
}
