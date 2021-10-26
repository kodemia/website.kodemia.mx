import classNames from "classnames"

type Props = {
  items: string[] | { text: string }[],
  styleType?: 'disc' | 'none'
  stylePosition?: 'inside' | 'outside'
}

export default function SimpleBulletList (props: Props) {
  return (
    <ul
      className={classNames(
        `list-${props.stylePosition ?? 'outside'}`,
        `list-${props.styleType ?? 'disc'}`
      )}
    >
      {
        props.items.map(item => (
          <li>
            { typeof item === 'string' ? item : item.text }
          </li>
        ))
      }
    </ul>
  )
}
