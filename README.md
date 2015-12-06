# imgpreview

图片预览插件 结合了pinchzoom图片放大 和基于ZEPTO的TouchSwipe-Jquery-Plugin移动事件

### TouchSwipe-Jquery-Plugin 移动事件插件
https://github.com/mattbryson/TouchSwipe-Jquery-Plugin

### pinchzoom 图片放大插件
https://github.com/manuelstofer/pinchzoom


### 调用方式

```Javascript

$(function(){
    $(".box-container li").on("click",function(){
        $(this).zoomImg();
    })
})

```
### HTML结构

```Text
data-src 存放实际显示图片地址
<ul class="box-container">
        <li class="box">
          <img data-src="../img/image-3.jpg" src="../img/image-3.jpg" alt="image" class="lad"></li>
        <li class="box">
          <img data-src="http://ww1.sinaimg.cn/large/a4050c27jw1esgltuyj4dj20c8104n0u.jpg" src="http://ww1.sinaimg.cn/large/a4050c27jw1esgltuyj4dj20c8104n0u.jpg" alt="image" class="lad"></li>
          <li class="box">
          <img data-src="../img/image-4.jpg" src="../img/image-4.jpg" alt="image" class="lad"></li>
</ul>
```
