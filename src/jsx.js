import React from "react";

// JSX : javascript + XML : đinh nghĩa các thẻ HTML trong JS ( cho phép viết html trong JS )
// ES6
// Babel : chuyển đổi mã nguồn ES6 sang ES5

/**
 * ví dụ khuyến khích sử dụng JSX hơn là react element (vì phức tạp hơn)
 * element = <div id = "root"> Hello world </div> : Jsx
 * element = React.createElement("div", {id: "root"}, "Hello world") : React element
 * funtion createElement(elementType, props, ...children)
 * elementType : có thể là string or function (div,p, span, h1, h2, h3, App, Home, ...)
 * props : object chứa các thuộc tính (attributes) của element (id, className, style, ...)
 * ...children : các tham số còn lại là các con của element (text, element, array, ...)
 * ví dụ :
 * code JSX:
 * element2 = (<div id = "root">
 * <span> Hello world </span> <span> Hello world </span>
 * </div>)
 *
 * babel sẽ chuyển đổi thành: (react element)
 * element2 = React.createElement("div", {
 * children: [
 * React.createElement("span", null, "Hello world")
 * ," ",
 * React.createElement("span", null, "Hello world")"
 * ]
 * })
 */
const jsx = () => {
  const element = <div id="root"> Hello world </div>;
  const elementR = React.createElement("div", { id: "root" }, "Hello world");

  const element2 = (
    <div id="root">
      <span> Hello world </span> <span> Hello world </span>
    </div>
  );

  const element2R = React.createElement("div", {
    children: [
      React.createElement("span", null, "Hello world"),
      " ",
      React.createElement("span", null, "Hello world"),
    ],
  });

  return (
    <div>
      <div className="heading" id="heading">
        This is heading
      </div>
      <div className="heading2" id="heading">
        This is heading
      </div>
    </div>
  );
};

export default jsx;
