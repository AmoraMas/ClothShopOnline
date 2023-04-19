# **Quick start**

[React Slick Documentation (](https://react-slick.neostack.com/docs/get-started)neostack.com[)](https://react-slick.neostack.com/docs/get-started)

## **Installation**

<pre>npm install react-slick --save</pre>or

<pre>yarn add react-slick</pre>## Include CSS(optional)

<pre>npm install slick-carousel --save</pre>### This will be in the component file with the carousel

<pre>

<span dir="">import "slick-carousel/slick/slick.css"; </span>\\\\\\\\ <span dir="">import "slick-carousel/slick/slick-theme.css";</span>

</pre>
<details>
<summary>

## Code Block for SimpleSlider

</summary></details>

```
import React, { Component } from "react"; 
import Slider from "react-slick"; 

export default class SimpleSlider extends Component { 
render() { 
const settings = { 
dots: true, 
infinite: true, 
speed: 500, 
slidesToShow: 1, 
slidesToScroll: 1 
}; 
return ( 
<div> 
<h2> Single Item</h2> 
<Slider {...settings}> 
<div> 
<h3>1</h3> 
</div> 
<div> 
<h3>2</h3> 
</div> 
<div> 
<h3>3</h3> 
</div> 
<div> 
<h3>4</h3> 
</div> 
<div> 
<h3>5</h3> 
</div> 
<div> 
<h3>6</h3> 
</div> 
</Slider> 
</div> 
); 
} 
}
```