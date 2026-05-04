import './task-card.css'
import Tag from '../Tag/Tag'
import deleteIcon from '../../assets/delete.png'

const TaskCard = () => {
  return (
    <div className='task_card'>
      <h3 className='task_card_heading'>This is Sample Text</h3>
      <div className="task_card_bottom">
        <div className="task_card_tag">
        <Tag tagName = "DEV"/>
        <Tag tagName = "QA"/>
        </div>
        <div className="task_card_delete">
            <img src={deleteIcon} alt="" className='task_card_delete_icon'/>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
