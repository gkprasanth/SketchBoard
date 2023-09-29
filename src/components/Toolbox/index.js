import React from 'react'
import styles from "./index.module.css"

import { COLORS, MENU_ITEMS } from '@/constants'
import { useDispatch, useSelector } from 'react-redux'
import { changeBrushSize, changeColor } from '@/slice/toolBoxSlice'
const ToolBox = () => {

    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    const showStrokes = activeMenuItem === MENU_ITEMS.PENCIL
    const showBrush = activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER



    const dispatch = useDispatch()

    const updateBrushSize = (e) => {
        dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }))
    }

    const updateColor = (newColor) => {
        dispatch(changeColor({ item: activeMenuItem, color: newColor }))
    }



    return (
        <div className={styles.toolboxContainer} >
            {
                showStrokes && (<div className={styles.toolItem} >
                    <h4 className={styles.toolText} >Stroke Color</h4>
                    <div className={styles.itemContainer} >
                        <div className={styles.colorBox} onClick={()=>updateColor(COLORS.BLACK)} style={{
                            backgroundColor: COLORS.BLACK
                        }} />

                        <div className={styles.colorBox} onClick={()=>updateColor(COLORS.RED)} style={{
                            backgroundColor: COLORS.RED
                        }} />

                        <div className={styles.colorBox} onClick={()=>updateColor(COLORS.GREEN)} style={{
                            backgroundColor: COLORS.GREEN
                        }} />

                        <div className={styles.colorBox} onClick={()=>updateColor(COLORS.BLUE)} style={{
                            backgroundColor: COLORS.BLUE
                        }} />

                        <div className={styles.colorBox} onClick={()=>updateColor(COLORS.ORANGE)} style={{
                            backgroundColor: COLORS.ORANGE
                        }} />

                        <div className={styles.colorBox} onClick={()=>updateColor(COLORS.YELLOW)} style={{
                            backgroundColor: COLORS.YELLOW
                        }} />

                    </div>
                </div>)
            }

            {
                showBrush && (<div className={styles.toolItem}>
                    <h4 className={styles.toolText} >Brush Size </h4>
                    <div className={styles.itemContainer} >
                        <input type='range' min={1} max={10} step={1} onChange={updateBrushSize} />
                    </div>
                </div>)
            }
        </div>
    )
}

export default ToolBox
