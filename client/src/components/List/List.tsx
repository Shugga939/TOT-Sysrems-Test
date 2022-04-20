import React,{FC} from "react";
import listStyle from './List.module.scss'

interface ListProps<T> {
  items: T[] | undefined
  renderItem: (item:T) => React.ReactNode
  className: string
}

export default function List<T> ({items, renderItem, className}:ListProps<T>) {
  return (
    <div className={listStyle[className]}>
      {items?.map(renderItem)}
    </div>
  )
}

