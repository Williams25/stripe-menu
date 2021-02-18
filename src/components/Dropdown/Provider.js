import { createContext, useState, useCallback, useEffect } from 'react'

export const Context = createContext()

export const DropdownProvider = ({ children }) => {
  const [options, setOptions] = useState([])
  const [targetId, setTargetId] = useState(null)
  const [cacheId, setCacheId] = useState(null)

  const registerOptions = useCallback(({
    id,
    optionDimensions,
    optionCenterX,
    WrappedContent,
    backgroundHeight,
  }) => {
    setOptions(items => [
      ...items,
      {
        id,
        optionDimensions,
        optionCenterX,
        WrappedContent,
        backgroundHeight,
      }
    ])
  }, [setOptions])

  const updateOptionProps = useCallback((optionId, props) => {
    setOptions(items => {
      items.map(item => {
        if (item.id === optionId) {
          item = { ...item, ...props }
        }
        return item
      })
    })
  }, [setOptions])

  const getOptionById = useCallback(id => {
    return options.find(option => option.id === id)
  }, [options])

  const deleteOptionById = useCallback(id => {
    setOptions(items => items.filter(item => item.id !== id))
  }, [setOptions])

  useEffect(() => {
    targetId !== null && setCacheId(targetId)

  }, [targetId])

  return (
    <Context.Provider
      value={{
        registerOptions,
        updateOptionProps,
        getOptionById,
        deleteOptionById,
        options,
        targetId,
        setTargetId,
        cacheId,
        setCacheId
      }}
    >
      {children}
    </Context.Provider>
  )
}