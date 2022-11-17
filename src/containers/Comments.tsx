import { useState } from "react"
import { HiOutlineFaceSmile } from "react-icons/hi2"

export default function Comments() {
  const [comments] = useState(Array(15)
    .fill(1)
    .map((value, index) =>
    ({
      id: index + 1,
      createdBy: "u1",
      message: `The paragraph number ${index + 1}`,
      createdAt: "2022/11/16"
    })
    ))

  return <div className="comments mt-6 border-t border-gray-200 pt-4 px-8 bg-gray-100 relative">
    <div className="comment-list divide-y divide-gray-200">
      {comments.map(comment => {
        return <div className="comment-item py-4" key={comment.id}>
          <div className="comment-header flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="avatar avatar-sm" />
              { /*<h2 className="font-bold">{comment.createdBy}</h2>*/}
              <h2 className="text-gray-600 text-sm font-medium">Theresa Clawman</h2>
            </div>
            <div className="comment-created text-xs">{comment.createdAt}</div>
          </div>
          <p className="text-sm mt-2">{comment.message}</p>
        </div>
      })}
    </div>
    <div className="comment-add sticky bottom-0 left-0 w-full pb-4">
      <div className="comment-input border border-gray-200 w-full rounded-lg p-4 bg-white flex items-center justify-between">
        <div className="flex items-center gap-2 w-full">
          <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="avatar avatar-sm" />
          <input type="text" placeholder="Add comment" className="w-full pr-4" />
        </div>
        <div className="right flex-shrink-0">
          <HiOutlineFaceSmile className="w-5 h-5" />
        </div>
      </div>
    </div>
  </div>
}
