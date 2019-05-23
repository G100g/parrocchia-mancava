import React, { createRef, useEffect } from "react";

function getSunday(d) {
    d = new Date(d);
    const day = d.getDay();
    const diff = d.getDate() + day + (day === 0 ? 0 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}

function formatDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const WidgetLiturgia = ({ sunday = false, className }) => {
    const ref = createRef();

    useEffect(() => {
        let date = formatDate(sunday ? getSunday(new Date()) : new Date());

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `https://widgets.chiesacattolica.it/widget-almanacco-v2/widget.php?mods=401568&font=8&date=${date}`;
        script.async = true;
        script.onload = function() {
            if (ref.current) {
                const $style = ref.current.querySelector("style");
                $style && $style.remove();
            }
        };

        ref.current.innerHTML = "";
        ref.current.appendChild(script);
    });

    return (
        <div className={`${className} widget-liturgia`} ref={ref}>
            Loading...
        </div>
    );
};

export default WidgetLiturgia;
