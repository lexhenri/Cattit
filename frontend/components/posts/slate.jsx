import React from 'react';
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const Slate = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
    },
  ])
  
  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)} >
      <Editable />
    </Slate>
  )
}

export default Slate;