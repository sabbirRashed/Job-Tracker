

1.Answer: i. getElementById used for select a specific element that has a spefic id. It returns a single element. If could not found id, it returns null. 
ii. getElementByClassName retuns Html collection. Html collection means multiple elements. If could not found it return empty array.
it also a live, that means if dom change it change the result.
iii. getqueryselector return a single element. It return first match element. if not found return null.
iv.getquerySelectorAll return a nodeList . It is not live its static. That means if dom change it do not change its result.

2.Answer: For create element and insert in the dom at first I create an element using document.createElementByTagName method . Then I set its innerText And then I select the element where I want to insert. After selecting the expecting element I append the created element using .appendChid() method. We can also create element using innHtml. For this at first We select the expected elment where I want to create . Then I create full elment like html file inside its innerHtml. Thats it. 