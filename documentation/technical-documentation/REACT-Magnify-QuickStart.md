# **Quick start**

[react-image-magnify - npm (](https://www.npmjs.com/package/react-image-magnify)npmjs.com[)](https://www.npmjs.com/package/react-image-magnify)

## **Installation**

<pre>

<span dir="">npm i react-image-magnify</span> --force

</pre>### This will be in the component file with the carousel

<pre>

<span dir="">import ReactImageMagnify from 'react-image-magnify'</span>

</pre>
<div>

<div>

</div>\* Code Block for SimpleMagnify

</div>
<pre>

<div>

<span dir=""><ReactImageMagnify {...{</span>

</div>
<div>

<span dir="">    smallImage: {</span>

</div>
<div>

<span dir="">        alt: 'Wristwatch by Ted Baker London',</span>

</div>
<div>

<span dir="">        isFluidWidth: true,</span>

</div>
<div>

<span dir="">        src: watchImg300</span> //put image variable or image src here

</div>
<div>

<span dir="">    },</span>

</div>
<div>

<span dir="">    largeImage: {</span>

</div>
<div>

<span dir="">        src: watchImg1200,</span> //put image variable or image src here

</div>
<div>

<span dir="">        width: 1200,</span> //width and height effect area of magnify shape

</div>
<div>

<span dir="">        height: 1800</span>

</div>
<div>

<span dir="">    }</span>

</div>
<div>

<span dir="">}} /></span>

</div>
</pre>