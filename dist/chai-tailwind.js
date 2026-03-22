(function () {
  'use strict';

  (function () {
      document.addEventListener("DOMContentLoaded", () => {
      const utilityMap = {
      p: "padding",
      m: "margin",
      bg: "backgroundColor",
      text: "textAlign",
      fs: "fontSize",
      rounded: "borderRadius",
      w: "width",
      h: "height",
      color: "color",
      border: "border",
      g: "gap",
      fw: "fontWeight"

    };

    const allElements = document.querySelectorAll("*");
    
    console.log(allElements);

    allElements.forEach((element) => {
      console.log("element ", element);
      const classes = element.classList;

      console.log("classes of ecah elements -> ", classes);
      classes.forEach((eachClass) => {
          console.log("Single Class ----> ", eachClass);
          const classValues = eachClass.split("-");
          console.log("😍", classValues);

          const key = classValues[1];
          const value = classValues[2];

          console.table(key, value);

          const cssProperty = utilityMap[key];
          console.log("means -> ", cssProperty);

          if(!cssProperty) return

          element.style[cssProperty] = valueHandler(key, value);
      });
    });
  });
  })();

  function valueHandler(key, value) {
      const pxValues = ["p", "m", "rounded", "w","h","border"];
      if(key.includes(pxValues))
          return `${value}px`
      else 
          return value
  }

})();
