let spotlightCase = 1

const button = document.getElementsByClassName("button");
let isWeb = false
let isSwift = false
let isJava = false
let isPython = false
let isC = false
hideStories()


function hideStories() {
    let reset = document.getElementsByClassName("stories");
    for (i = 0; i < reset.length; i++) {
        reset.item(i).style.display = "none";
    }
}
function currentStorie(n) {
    switch (n) {
        case n = 1:
            isWeb = true
          break;
        case n = 2:
            isSwift = true
          break;
        case n = 3:
            isJava = true
          break;
    
        case n = 4: 
            isPython = true
          break;
    
          case n = 5: 
          isC = true
        break;

      }
}

function showStories(n) {
    let i;
    let web = document.getElementsByClassName("web");
    let swift = document.getElementsByClassName("swift");
    let java = document.getElementsByClassName("java");
    let python = document.getElementsByClassName("python");
    let c = document.getElementsByClassName("c");
    let reset = document.getElementsByClassName("stories");
    for (i = 0; i < web.length; i++) {
        if (isWeb) web.item(i).style.display = "initial";
    }
    for (i = 0; i < swift.length; i++) {
        if (isSwift) swift.item(i).style.display = "initial";

    }
    for (i = 0; i < java.length; i++) {
        if (isJava) java.item(i).style.display = "initial";

    }
    for (i = 0; i < python.length; i++) {
        if (isPython) python.item(i).style.display = "initial";

    }
    for (i = 0; i < c.length; i++) {
        if (isC) c.item(i).style.display = "initial";

    }
}


