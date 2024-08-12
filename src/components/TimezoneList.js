import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../styles/TimezoneList.css';

const TimezoneList = ({ timezones, addTimezone, removeTimezone, reorderTimezones }) => {
  const [newTimezone, setNewTimezone] = useState('');

  const handleAddTimezone = () => {
    if (newTimezone && !timezones.includes(newTimezone)) {
      addTimezone(newTimezone);
      setNewTimezone('');
    }
  };

  return (
    <div className="timezone-list">
      <input
        type="text"
        value={newTimezone}
        onChange={(e) => setNewTimezone(e.target.value)}
        placeholder="Add new timezone"
      />
      <button onClick={handleAddTimezone}>Add</button>
      
      <DragDropContext onDragEnd={(result) => {
        if (!result.destination) return;
        reorderTimezones(result.source.index, result.destination.index);
      }}>
        <Droppable droppableId="timezones">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {timezones.map((zone, index) => (
                <Draggable key={zone} draggableId={zone} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="timezone-item"
                    >
                      {zone}
                      <button onClick={() => removeTimezone(index)}>X</button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TimezoneList;
