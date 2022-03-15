import html from './about.html'
import logo from '../../images/test.jpg'

// 会返回文件地址，这里返回的地址是编译后的
console.log('logo====', logo) 

const img = new Image()
img.src = logo // 这样做相当于给浏览器缓存了一张图片
img.onload = () => {
    document.querySelector('body').append(img)
}