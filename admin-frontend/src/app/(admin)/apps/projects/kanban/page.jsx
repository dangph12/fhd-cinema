import { KanbanProvider } from '@/context/useKanbanContext';
import Board from './components/Board';
import KanbanHeader from './components/KanbanHeader';
import Modals from './components/Modals';
import PageMetaData from '@/components/PageMetaData';
const Kanban = () => {
  return <>
      <PageMetaData title="Kanban Board" />
      <KanbanProvider>
        <KanbanHeader />
        <Board />
        <Modals />
      </KanbanProvider>
    </>;
};
export default Kanban;