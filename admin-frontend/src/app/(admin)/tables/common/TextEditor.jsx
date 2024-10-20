import { useState, useCallback, useRef } from "react";
import ReactQuill from "react-quill-new";
import "react-quill/dist/quill.snow.css";
import uploadToS3 from "./UploadToS3";

const TextEditor = ({object, description, field, setField}) => {

  const quillRef = useRef(null);
  const [content, setContent] = useState(description);

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      if (input?.files) {
        const file = input.files[0];
        const url = await uploadToS3(object, file);
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        range && quill.insertEmbed(range.index, "image", url);
        }
      }
    }, []);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { indent: "-1" }, { indent: "+1" }],
        ["link", "image"],
        ["code-block"],
        ["clean"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "indent",
    "link",
    "image",
    "video"
  ];

  return (
    <div>

      <ReactQuill
        theme="snow"
        ref={quillRef}
        placeholder="Write something amazing..."
        modules={modules}
        onChange={(content) => {
          setContent(content);
          if (setField) {
            setField(field, content);
          }
        }}
        formats={formats}
        value={content}
      />


    </div>
  );
};

export default TextEditor;
