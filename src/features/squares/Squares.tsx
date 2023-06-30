import { animated, useTransition } from "@react-spring/web"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { setSquare, removeSquare, selectList } from "./squaresSlice"
import styles from "./Squares.module.css"

interface listItemInterface {
  color: string
}

export function Squares() {
  const list = useAppSelector(selectList)
  const dispatch = useAppDispatch()

  const transitions = useTransition(list, {
    from: { opacity: 0, transform: "translateX(-50%)", width: "0" },
    enter: { opacity: 1, transform: "translateX(0%)", width: "20vw" },
    leave: { opacity: 0, transform: "translateX(50%)" },
  })

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.addButton}
          aria-label="Add square"
          onClick={() => dispatch(setSquare())}
        >
          Добавить
        </button>

        <button
          className={styles.removeButton}
          aria-label="Remove square"
          onClick={() => dispatch(removeSquare())}
        >
          Удалить
        </button>
      </div>

      {list.length > 0 && (
        <div className={styles.list}>
          {transitions((style, item: listItemInterface) => {
            return (
              <animated.div
                style={{
                  height: "20vw",
                  backgroundColor: item.color,
                  ...style,
                }}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
