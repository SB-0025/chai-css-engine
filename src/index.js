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

  const allElements = document.querySelectorAll("*")

  allElements.forEach((element) => {
    const classes = element.classList

    classes.forEach((eachClass) => {
        const classValues = eachClass.split("-")

        if (classValues.length < 3 || classValues[0] !== "chai") return;
        const key = classValues[1]
        const value = classValues[2]
        const cssProperty = utilityMap[key]
        if(!cssProperty) return
        element.style[cssProperty] = valueHandler(key, value)
    })
  })
})
})()

function valueHandler(key, value) {
    const pxValues = ["p", "m", "rounded", "w","h","border"]
    if(key.includes(pxValues))
        return `${value}px`
    else 
        return value
}

export {};