"use strict";

const button = document.querySelector(".down");

button.addEventListener("mousedown", (event) => {
  //   console.log("Спрацювала подія mousedown('клік на елементі')");
});

button.addEventListener("mouseup", (event) => {
  //   console.log("Спрацювала подія mouseup('відпустиили кнопку на елементі')");
});

button.addEventListener("mouseover", (event) => {
  //   console.log("Крусор миші над елементом");
});

button.addEventListener("mouseout", (event) => {
  //   console.log("Курсор миші виходить за межі елементу");
});

button.addEventListener("mousemove", (event) => {
  //   console.log("Працює при кожному наведенні на елемент");
});

button.onclick = function (event) {
  console.log(event.type);
  console.log(event.target);
  alert("Click");
  console.log(event.currentTarget);
};

button.addEventListener("dblclick", (event) => {
  alert("Double Click");
});

button.oncontextmenu = (event) => {
  console.log("Контекстне меню");
  event.preventDefault();
};

button.addEventListener("click", (event) => {
  console.log(event.buttons);
});

button.addEventListener("click", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.altKey) {
    alert("CLick by Shift + Alt + Click");
  }
  //   console.log(event.shiftKey);
});

button.addEventListener("mousemove", function (event) {
  button.innerHTML = `Coordinates:  ${event.clientX}: ${event.clientY}`;
});

button.addEventListener("dblclick", (event) => {
  alert("DBLclick");
});

document.oncopy = function (event) {
  alert("Копіювання тексту на сайті заборонено!");
  event.preventDefault();
};

const block = document.querySelector(".block");

block.addEventListener("mouseover", (event) => {
  console.log("Курсор над елементом");
  console.log(event.target);
  console.log(event.relatedTarget);
});

block.addEventListener("mouseout", (event) => {
  console.log("Курсор покидає елемент");
  console.log(event.target);
  console.log(event.relatedTarget);
});

// const button = document.querySelector(".button");

button.addEventListener("mousedown", function (event) {
  console.log("Button is down");
});

button.addEventListener("mouseup", function (event) {
  console.log("Button is out");
});

button.onmouseover = function (event) {
  console.log("Кнопка над елементом");
};
button.onmouseout = function (event) {
  console.log("Кнопка покинула елемент");
};

button.addEventListener("mousemove", (event) => {
  button.innerHTML = "Coordinates: " + event.clientX + ":" + event.clientY;
});

button.ondblclick = (event) => {
  console.log("Даблклік");
};

button.oncontextmenu = function (event) {
  return false;
};

button.onclick = (event) => {
  console.log(event.button);
};

button.addEventListener("click", (event) => {
  if (event.altKey && (event.ctrlKey || event.metaKey)) {
    alert("Стався клік");
  }
});

button.addEventListener("mousemove", (event) => {
  button.innerHTML = `Coordinates: ${event.clientX}: ${event.clientY}`;
});

button.ondblclick = (event) => {
  console.log("Hello!");
};

const button = document.querySelector(".btn");

const showClick = (e) => {
  console.log("Click");
};

button.addEventListener("click", showClick);

const showClack = (e) => {
  console.log("Clack");
};
button.addEventListener("click", showClack);

const options = {
  once: true,
  capture: false,
  passive: false,
};

const showConsole = (event) => {
  console.log("Click");
};

button.addEventListener("click", showConsole, options);

button.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.type);
  console.log(event.clientX + ":" + event.clientY);
});
// const block = document.querySelector('.block');
const blockInner = document.querySelector(".block__inner");
const blockInnerInner = document.querySelector(".block__inner-inner");
block.addEventListener();

button.addEventListener("mousedown", (event) => {
  console.log("Спрацювала подія mousedown");
});

button.addEventListener("mouseup", (event) => {
  console.log("Спрацювала подія mouseup");
});

button.addEventListener("mouseover", (event) => {
  console.log("Курсор над елементом");
});

button.addEventListener("mouseout", (event) => {
  console.log("Крусор йде з елемента");
});

button.onmousemove = function (event) {
  button.innerHTML = `Coordinates: ${event.clientX}: ${event.clientY}`;
  // };

  button.ondblclick = function (event) {
    console.log("DoubleClick");
  };

  button.oncontextmenu = (event) => {
    return false;
  };

  button.onclick = (event) => {
    console.log(event.which);
  };
  const button = document.querySelector(".button");
  button.addEventListener("click", (event) => {
    if (event.shiftKey && (event.ctrlKey || event.metaKey)) {
      console.log("Click to Shift + Ctrl + Click");
    }
  });

  button.addEventListener("mousemove", (event) => {
    button.innerHTML = `Coordinates: ${event.clientX}:${event.clientY}`;
  });

  button.addEventListener("dblclick", (event) => {
    console.log("dblclick");
  });

  button.onmousedown = function () {
    return false;
  };

  document.addEventListener("copy", (event) => {
    alert("Копіювання заборонено!");
    event.preventDefault();
  });

  const span = document.querySelector(".block");

  span.addEventListener("mouseover", (event) => {
    console.log("Курсор на елементі .block");
    console.log("event.target", event.target);
    console.log("event.relatedTarget", event.relatedTarget);
  });
  span.addEventListener("mouseout", (event) => {
    console.log("Курсор покидає елемент .block");
    console.log("event.target", event.target);
    console.log("event.relatedTarget", event.relatedTarget.tagName);
  });

  const fromEl = document.querySelector(".from");

  fromEl.addEventListener("mousemove", (event) => {
    console.log("MouseMove");
    console.log(event.target);
  });
};
