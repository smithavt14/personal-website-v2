import swal from 'sweetalert';

// WeChat URL popup //

const imageURL = 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1534323248/1534323218.png'
const wechat = document.querySelector('.fa-weixin')
wechat.addEventListener('click', event => {
  swal({
    icon: imageURL,
  })
})
