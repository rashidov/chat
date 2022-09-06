import React, { FC, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear'

export const MessengerWidgetBodySearch: FC = () => {
  const [searchState, setSearchState] = useState('')
  const [searchNotEmptyState, setSearchNotEmptyState] = useState(false)
  const searchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value.length) {
      setSearchNotEmptyState(true)
    } else {
      setSearchNotEmptyState(false)
    }

    setSearchState(event.target.value)
  }

  const clearSearchStateHandler = () => {
    setSearchNotEmptyState(false)
    setSearchState('')
  }

  return (
    <div className="messengerWidget-body-search">
      <input placeholder={'Search'} value={searchState} onChange={searchInputChange} />
      {searchNotEmptyState && (
        <div className="messengerWidget-body-search-icon" onClick={clearSearchStateHandler}>
          <ClearIcon />
        </div>
      )}
    </div>
  )
}
