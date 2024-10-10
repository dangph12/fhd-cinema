import PageMetaData from '@/components/PageMetaData';
import { AccountProvider } from './context/AccountContext';
import SearchBar from './components/SearchBar'; // Corrected import
import AccountPagination from './components/AccountPagination';
import AccountDetailTable from './components/AccountDetailTable';

const AccountsTables = () => {
  return (
    <>
      <PageMetaData title="Account Tables" />
      <AccountProvider>
        <SearchBar />
        <AccountDetailTable />
        <AccountPagination />
      </AccountProvider>
    </>
  );
};

export default AccountsTables;
