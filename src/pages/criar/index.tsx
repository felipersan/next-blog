import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";


export default function CreatePost() {
  const [editorState, setEditorState] = useState<any>();
  return (
      <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={()=>{}}
        />
  );
}
