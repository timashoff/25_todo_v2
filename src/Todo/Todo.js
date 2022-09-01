export const Todo = ({ todo }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="checkbox" />
      <input type="text" placeholder="add todo" value={todo.text} />
      <button>Delete</button>
    </form>
  )
}
