import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Board = () => {
    const canvasRef = useRef(null);
    const shouldDraw = useRef(false);
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
    const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const changeConfig = () => {
            context.strokeStyle = color;
            context.lineWidth = size;
        };

        changeConfig();
    }, [color, size, activeMenuItem]); // Include activeMenuItem in the dependency array

    
    //Before browser paint
    useLayoutEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;


        const BeginPath = (x, y) => {
            context.beginPath(x, y);
            // context.moveTo(x, y);
        }

        const drawLine = (x, y) => {
            context.lineTo(x, y);
            context.stroke();
        }

        const handleMouseDown = (e) => {
            shouldDraw.current = true;
            BeginPath(e.clientX, e.clientY)
        };

        const handleMouseUp = () => {
            shouldDraw.current = false;
            context.closePath(); // Close the path on mouse up
        };

        const handleMouseMove = (e) => {
            if (!shouldDraw.current) return;
            drawLine(e.clientX, e.clientY)
        };


        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);

        return () => {

            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseup', handleMouseUp);
        };
    }, []); // No dependencies needed here



    return (
        <>
            <canvas ref={canvasRef}></canvas>
        </>
    );
};

export default Board;
