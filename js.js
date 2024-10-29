window.onload = () => {
         var headTag = document.getElementsByTagName('head')[0]
         const linkforCSSfile = document.createElement("link"); //How to load CSS files using JavaScript?
         //linkforCSSfile.href = 'purple.css'
         //linkforCSSfile.type = 'text/css'
         //linkforCSSfile.rel = 'stylesheet'
         headTag.appendChild(linkforCSSfile);
         document.body.appendChild(headTag);
      };
if((navigator.userAgent.match(/Nintendo DSi/i))||(navigator.userAgent.match(/483; U; en-GB/i))){
alert("We will redirect you in a moment, since you are on a unsupported device (DSi)");
location.replace("https://www.w3schools.com");
}
