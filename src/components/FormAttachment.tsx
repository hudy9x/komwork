import dayjs from "dayjs"
import { HiOutlineArrowUpCircle } from "react-icons/hi2"
interface Props {
  className?: string
}
export default function FormAttachment({ className }: Props) {
  const files = [
    { name: "Image 1.jpg", url: "https://picsum.photos/id/27/100/100", createdAt: "2022/11/15", uploaded: true },
    { name: "Image 2.jpg", url: "https://picsum.photos/id/16/100/100", createdAt: "2022/11/15", uploaded: false },
  ]

  return <div className={`${className} form-attachments`}>

    <div className="form-upload-file border-b border-gray-200 mx-8 flex items-center gap-2 text-sm gap-2 py-1 cursor-pointer">
      <HiOutlineArrowUpCircle />
      <span>Upload or drag and drop</span>
    </div>

    <div className="form-file-list mx-8 text-sm">
      {files.map((file, index) => {
        const createdAt = dayjs(file.createdAt).format("MMM D");

        return <div className="form-file-item flex items-center justify-between py-2 border-b border-gray-200" key={index}>
          <div className="flex items-center gap-2">
            <img src={file.url} className="rounded-md w-8 h-8" alt="" />
            <span>{file.name}</span>
          </div>
          <div className="form-file-info">
            {file.uploaded ? createdAt : "Uploading"}
          </div>
        </div>
      })}
    </div>

  </div>
}
