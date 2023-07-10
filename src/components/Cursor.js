import React, { useEffect } from "react";
// import React, { useRef, useEffect } from "react";
import "../components/Cursor.css";

function Cursor() {
    useEffect(() => {
        const circles = document.querySelectorAll('.circle');
        const coords = {
            x: 0,
            y: 0,
        };

        const colors = [
            "#005c09", 
            "#00682e", 
            "#00744f", 
            "#008070", 
            "#008a91", 
            "#0094af", 
            "#009cca", 
            "#00a3df", 
            "#3ca8f0", 
            "#7bacfa", 
            "#aab0ff", 
            "#d2b4ff"
        ];

        circles.forEach(function (circle, index) {
            circle.x = 0;
            circle.y = 0;
            circle.style.backgroundColor = colors[index % colors.length];
        });

        const bg = document.createElement('div');
        bg.classList.add('bg');
        document.body.appendChild(bg);

        const animatedCircles = () => {
            let x = coords.x;
            let y = coords.y;

            circles.forEach(function (circle, index) {
                circle.style.left = circle.x - 12 + "px";
                circle.style.top = circle.y - 12 + "px";

                circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
                // circle.style.scale = (circles.length - index) / circles.length;

                circle.x = x;
                circle.y = y;

                const nextCircle = circles[index + 1] || circles[0];
                x += (nextCircle.x - x) * 0.5;
                y += (nextCircle.y - y) * 0.5;
            });


        }

        window.addEventListener('mousemove', (e) => {
            coords.x = e.clientX;
            coords.y = e.clientY;
            animatedCircles();
        });
    }, [])

    return (
        <div>
            <div className="bg"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    );
};

export default Cursor;

