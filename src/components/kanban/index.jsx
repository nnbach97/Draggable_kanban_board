import './kanban.scss'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import mockData from '../../mockData'
import { useState } from 'react'
import Card from '../card'

const Kanban = () => {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result) => {
    console.log('result, result');
    if(!result.destination) return;

    const {source, destination} = result

    // check có move trong task k
    if(source.droppableId !== destination.droppableId) {
      // check dang thuoc task nao (theo index)
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId)
      const destinationColIndex = data.findIndex((e) => e.id === destination.droppableId)

      // Gọi element trong mock
      const sourceCol = data[sourceColIndex]
      const destinationCol = data[destinationColIndex]

      //
      const sourceTask = [...sourceCol.tasks]
      const destinationTask = [...destinationCol.tasks]

      // Get và Remove task trong source
      const [removeSourceTask] = sourceTask.splice(source.index, 1);
      // Thêm mới 1 task trong destination
      destinationTask.splice(destination.index, 0 , removeSourceTask)

      // gán lại data
      data[sourceColIndex].tasks = sourceTask
      data[destinationColIndex].tasks = destinationTask

      setData(data)
    }
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='kanban'>
        {
          data.map((section) => (
            <Droppable
              key={section.id}
              droppableId={section.id}
            >
              {
                (provided) => (
                  <div
                    {...provided.droppableProps}
                    className="kanban__section"
                    ref={provided.innerRef}
                  >
                    <div className="kanban__section__ttl">
                      {section.title}
                    </div>
                    <div className="kanban__section__content">
                      {
                        section.tasks.map((item, idx) => (
                          <Draggable
                            draggableId={item.id}
                            index={idx}
                            key={item.id}
                          >
                            {
                              (provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    ...provided.draggableProps.style,
                                    opacity: snapshot.isDragging ? '0.5' : '1'
                                  }}
                                >
                                  <Card>
                                    {item.title}
                                  </Card>
                                </div>
                              )
                            }
                          </Draggable>
                        ))
                      }
                      {provided.placeholder}
                    </div>
                  </div>
                )
              }
            </Droppable>
          ))
        }
      </div>
    </DragDropContext>
  )
}

export default Kanban
