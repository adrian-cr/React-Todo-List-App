export default function Task({ id, title, status, onEdit, onDelete, onComplete}) {
  const completed = status==="completed";
  return (
    <div className={`el-container task-container${completed?" completed" : ""}`}>
      <button
        className="task-button delete-button"
        onClick={
          (e) => {
            e.stopPropagation();
            onDelete();
          }
        }
      >❌</button>
      <p
        className="el-body task-body"
        onClick={
          completed? null
          :
            (e) => {
              e.stopPropagation();
              onEdit();
            }
        }
      >
        {title}
      </p>
      {
        !completed &&
          <button
          className="task-button complete-button"
          onClick={() => onComplete()}
          >
            <img src="./images/check_icon.svg" />
          </button>
      }
    </div>
  )
}
