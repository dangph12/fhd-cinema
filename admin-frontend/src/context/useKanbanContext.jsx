'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { createContext, startTransition, useContext, useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { kanbanSectionsData, kanbanTasksData } from '@/assets/data/apps';
const ThemeContext = createContext(undefined);
export const kanbanTaskSchema = yup.object({
  title: yup.string().required('Please enter project title'),
  description: yup.string().required('Please enter project description'),
  priority: yup.mixed().required('Please select project priority'),
  tags: yup.mixed().required('Please Select a tag'),
  totalTasks: yup.number().required('Please enter number of tasks')
});
export const kanbanSectionSchema = yup.object({
  sectionTitle: yup.string().required('Section title is required')
});
const useKanbanContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useKanbanContext can only be used within KanbanProvider');
  }
  return context;
};
const KanbanProvider = ({
  children
}) => {
  const [sections, setSections] = useState(kanbanSectionsData);
  const [tasks, setTasks] = useState(kanbanTasksData);
  const [activeSectionId, setActiveSectionId] = useState();
  const [activeTaskId, setActiveTaskId] = useState();
  const [taskFormData, setTaskFormData] = useState();
  const [sectionFormData, setSectionFormData] = useState();
  const [dialogStates, setDialogStates] = useState({
    showNewTaskModal: false,
    showSectionModal: false
  });
  const {
    control: newTaskControl,
    handleSubmit: newTaskHandleSubmit,
    reset: newTaskReset
  } = useForm({
    resolver: yupResolver(kanbanTaskSchema)
  });
  const {
    control: sectionControl,
    handleSubmit: sectionHandleSubmit,
    reset: sectionReset
  } = useForm({
    resolver: yupResolver(kanbanSectionSchema)
  });
  const emptySectionForm = useCallback(() => {
    sectionReset({
      sectionTitle: ''
    });
  }, []);
  const emptyTaskForm = useCallback(() => {
    newTaskReset({
      title: undefined,
      description: undefined,
      priority: undefined,
      tags: undefined,
      totalTasks: undefined
    });
  }, []);
  const toggleNewTaskModal = (sectionId, taskId) => {
    if (sectionId) setActiveSectionId(sectionId);
    if (taskId) {
      const foundTask = tasks.find(task => task.id === taskId);
      if (foundTask) {
        newTaskReset({
          title: foundTask.title,
          description: foundTask.description,
          priority: foundTask.priority,
          totalTasks: foundTask.totalTasks,
          tags: foundTask.tags ? foundTask.tags[0] : 'API'
        });
        startTransition(() => {
          setActiveTaskId(taskId);
        });
        startTransition(() => {
          setTaskFormData(foundTask);
        });
      }
    }
    if (dialogStates.showNewTaskModal) emptyTaskForm();
    startTransition(() => {
      setDialogStates({
        ...dialogStates,
        showNewTaskModal: !dialogStates.showNewTaskModal
      });
    });
  };
  const toggleSectionModal = sectionId => {
    if (sectionId) {
      const foundSection = sections.find(section => section.id === sectionId);
      if (foundSection) {
        startTransition(() => {
          setSectionFormData(foundSection);
        });
        startTransition(() => {
          setActiveSectionId(foundSection.id);
        });
        sectionReset({
          sectionTitle: foundSection.title
        });
      }
    }
    if (dialogStates.showSectionModal) emptySectionForm();
    startTransition(() => {
      setDialogStates({
        ...dialogStates,
        showSectionModal: !dialogStates.showSectionModal
      });
    });
  };
  const getAllTasksPerSection = useCallback(id => {
    return tasks.filter(task => task.sectionId == id);
  }, [tasks]);
  const handleNewTask = newTaskHandleSubmit(values => {
    const formData = {
      title: values.title,
      description: values.description,
      priority: values.priority,
      tags: values.tags,
      totalTasks: values.totalTasks
    };
    if (activeSectionId) {
      const newTask = {
        ...formData,
        tags: [formData.tags],
        sectionId: activeSectionId,
        id: Number(tasks.slice(-1)[0].id) + 1 + '',
        completedTasks: 0,
        commentsCount: 0
      };
      setTasks([...tasks, newTask]);
    }
    startTransition(() => {
      toggleNewTaskModal();
    });
    setActiveSectionId(undefined);
    newTaskReset();
  });
  const handleEditTask = newTaskHandleSubmit(values => {
    const formData = {
      title: values.title,
      description: values.description,
      priority: values.priority,
      tags: values.tags,
      totalTasks: values.totalTasks
    };
    if (activeSectionId && activeTaskId) {
      const newTask = {
        ...formData,
        tags: [formData.tags],
        sectionId: activeSectionId,
        id: activeTaskId,
        completedTasks: 0,
        commentsCount: 0
      };
      setTasks(tasks.map(t => t.id === activeTaskId ? newTask : t));
    }
    startTransition(() => {
      toggleNewTaskModal();
    });
    startTransition(() => {
      setActiveSectionId(undefined);
    });
    startTransition(() => {
      newTaskReset();
    });
    startTransition(() => {
      setTaskFormData(undefined);
    });
  });
  const handleDeleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  const onDragEnd = result => {
    const {
      source,
      destination
    } = result;
    if (!destination) {
      return;
    }
    let sourceOccurrence = source.index;
    let destinationOccurrence = destination.index;
    let sourceId = 0,
      destinationId = 0;
    tasks.forEach((task, index) => {
      if (task.sectionId == source.droppableId) {
        if (sourceOccurrence == 0) {
          sourceId = index;
        }
        sourceOccurrence--;
      }
      if (task.sectionId == destination.droppableId) {
        if (destinationOccurrence == 0) {
          destinationId = index;
        }
        destinationOccurrence--;
      }
    });
    const task = tasks[sourceId];
    const newTasks = tasks.filter(t => t.id != task.id);
    task.sectionId = destination.droppableId;
    const parity = destination.droppableId != source.droppableId ? -1 : 0;
    setTasks([...newTasks.slice(0, destinationId + parity), task, ...newTasks.slice(destinationId + parity)]);
  };
  const handleNewSection = sectionHandleSubmit(values => {
    const section = {
      // TODO test, test when array is empty
      id: Number(sections.slice(-1)[0].id) + 1 + '',
      title: values.sectionTitle
    };
    setSections([...sections, section]);
    startTransition(() => {
      toggleSectionModal();
    });
    sectionReset();
  });
  const handleEditSection = sectionHandleSubmit(values => {
    if (activeSectionId) {
      const newSection = {
        id: activeSectionId,
        title: values.sectionTitle
      };
      setSections(sections.map(section => {
        return section.id === activeSectionId ? newSection : section;
      }));
    }
    startTransition(() => {
      toggleSectionModal();
    });
    sectionReset();
  });
  const handleDeleteSection = sectionId => {
    setSections(sections.filter(section => section.id !== sectionId));
  };
  return <ThemeContext.Provider value={useMemo(() => ({
    sections,
    activeSectionId,
    taskFormData,
    sectionFormData,
    newTaskModal: {
      open: dialogStates.showNewTaskModal,
      toggle: toggleNewTaskModal
    },
    sectionModal: {
      open: dialogStates.showSectionModal,
      toggle: toggleSectionModal
    },
    taskForm: {
      control: newTaskControl,
      newRecord: handleNewTask,
      editRecord: handleEditTask,
      deleteRecord: handleDeleteTask
    },
    sectionForm: {
      control: sectionControl,
      newRecord: handleNewSection,
      editRecord: handleEditSection,
      deleteRecord: handleDeleteSection
    },
    getAllTasksPerSection,
    onDragEnd
  }), [sections, tasks, activeSectionId, taskFormData, sectionFormData, dialogStates])}>
      {children}
    </ThemeContext.Provider>;
};
export { KanbanProvider, useKanbanContext };