import {useMemo, useEffect, useState} from 'react'
import styles from './searchSortSection.module.css'
import {debounce} from 'lodash'

function SearchSortSection({setSerchValue, sortFlag, setSortFlag}) {
    const [localValueInput, setLocalValueInput] = useState('')

    const handleChange = useMemo(
        () =>
            debounce((text) => {
                setSerchValue(text)
            }, 400),
        [setSerchValue]
    )

    useEffect(() => {
        handleChange(localValueInput)
        return () => {
            handleChange.cancel()
        }
    }, [localValueInput, handleChange])

    return (
        <div className={styles.searchSortSection}>
            <input
                value={localValueInput}
                type="text"
                className={styles.searchInput}
                placeholder="Search..."
                onChange={(e) => setLocalValueInput(e.target.value)}
            />
            <button
                className={styles.resetBtn}
                onClick={() => {
                    setSerchValue('')
                    setLocalValueInput('')
                }}
            >
                &times;
            </button>
            <button
                className={`${styles.sortBtn}  ${sortFlag && styles.sortBtnOn}`}
                onClick={() => setSortFlag((prev) => !prev)}
            >
                {sortFlag ? 'Sort On' : 'Sort Off'}
            </button>
        </div>
    )
}

export default SearchSortSection
