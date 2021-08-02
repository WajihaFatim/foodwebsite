document.querySelector('.menu').addEventListener('click',handleClick
);

function handleClick(){
       document.querySelectorAll('.target')[0].classList.toggle('change');
       document.querySelectorAll('.target')[1].classList.toggle('change');
    //     document.querySelectorAll('.target').forEach(function(item)
    //     {
            
    //    item.classList.toggle('change');
    //     })
       
}

const icons= document.querySelectorAll('.section-1-icons i')

let i=1;

setInterval(() => {
    i++

  const icon=  document.querySelector('.section-1-icons .change')

  icon.classList.remove('change')

  if(i>icons.length)

  {
    icons[0].classList.add('change');
      i=1;
  }
  else {
      icon.nextElementSibling.classList.add('change')
  }

}, 3000);

