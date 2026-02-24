

1.Answer: i. getElementById used for select a specific element that has a spefic id. It returns a single element. If could not found id, it returns null. 
ii. getElementByClassName retuns Html collection. Html collection means multiple elements. If could not found it return empty array.
it also a live, that means if dom change it change the result.
iii. getqueryselector return a single element. It return first match element. if not found return null.
iv.getquerySelectorAll return a nodeList . It is not live its static. That means if dom change it do not change its result.

2.Answer: For create element and insert in the dom at first I create an element using document.createElement() method. Then I set its innerText And then I select the element from the dom where I want to insert using getElementById. After selecting the expecting element I append the created element using .appendChid() method. We can also create element using innerHtml. For this at first We select the expected elment where I want to create . Then I create a div using createElement. Then set the the html code inside the created element as innerHtml using baptiq qutation. And last I append this div in the selected dom element.

3.Answer: Event Bubbling is dom event propagation method. It starts from the target element and propagets up to its parent element. We can stop propagets using stopProgagation() or immidiateStop ropgagation mehtod. Example if we click a button at first the button will run event. Then event bubble up to its parent and then its parent if has. If nothin event goes body, then html and last reace the document.

4.Answer: Event delegation is a tecnique. For event delegation system we can handle multiple event using only addEvent lestener in a parent. Example if we have multiple button in the main section we do not need add addEventListener with every button. we can handle every button's event adding addEventListener() with main section.
It is usefull because: i. It keeps code clean ii. Fewer addEventListener iii.Better performance iv. works for dynamically update element.

5.Answer: stopPropagation() method used for stop the event bubbling form target to parent. On the other hand stopPreventDefault() method used for stop browser's default behaviour. 