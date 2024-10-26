window.onload = () => {
         var headTag = document.getElementsByTagName('head')[0]
         const linkforCSSfile = document.createElement("link"); //How to load CSS files using JavaScript?
         //linkforCSSfile.href = 'purple.css'
         //linkforCSSfile.type = 'text/css'
         //linkforCSSfile.rel = 'stylesheet'
         headTag.appendChild(linkforCSSfile);
         document.body.appendChild(headTag);
      };