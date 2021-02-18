import { useState, useRef, useContext, useEffect } from 'react'

import { motion } from 'framer-motion'
import { useDimensions } from './dimensions'
import { Context } from './Provider'

let lastOpinionId = 0

export const DropdownOption = ({ name, content: Content, backgroundHeight }) => {
  const idRef = useRef(++lastOpinionId)
  const id = idRef.current

  const [optionHook, optionDimensions] = useDimensions()
  const [registered, setRegistered] = useState(false)

  const {
    registerOptions,
    updateOptionProps,
    getOptionById,
    deleteOptionById,
    targetId,
    setTargetId
  } = useContext(Context)

  useEffect(() => {
    if (!registered && optionDimensions) {
      const WrappedContent = () => {
        const contentRef = useRef()

        useEffect(() => {
          const contentDimensions = contentRef.current.getBoundingClientRect()
          updateOptionProps(id, { contentDimensions })
        }, [])

        return (
          <div ref={contentRef}>
            <Content />
          </div>
        )
      }

      registerOptions({
        id,
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2,
        WrappedContent,
        backgroundHeight
      })

      setRegistered(true)
    } else if (registered && optionDimensions) {
      
    }
  }, [])

  return (
    <motion.button className="dropdown-option">
      {name}
    </motion.button>
  )
}

