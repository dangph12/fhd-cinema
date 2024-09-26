import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

//style
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondPluginFileEncode, FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
const FilePondUploader = () => {
  return <>
      {/* @ts-ignore */}
      <FilePond allowMultiple={true} allowReorder={true} allowDrop />
    </>;
};
export default FilePondUploader;