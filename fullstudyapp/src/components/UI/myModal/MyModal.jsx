import React from 'react'
import classes from './MyModal.module.css'

export default function MyModal({children}) {
  return (
    <div className={[classes.MyModal, classes.active].join(' ')}>
      <div className={classes.myModalContent}>
        {children}
      </div>

    </div>
  )
}
