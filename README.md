# jquery-weui-accordion

折叠菜单 [https://zhuowenli.github.io/jquery-weui-accordion/](https://zhuowenli.github.io/jquery-weui-accordion/)

## usage

```html
<div class="weui_accordion_box">
    <div class="weui_accordion_title">标题三</div>
    <div class="weui_accordion_content">
        <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
        <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
        <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
    </div>
</div>
```

```js
$('.weui_accordion_box').accordion({
    animate: true, // 开启动画效果
    duration: 300, // 动画时长
    onChange: function(event) {
        console.log(event); // 'open' or 'close'
    }
});
```