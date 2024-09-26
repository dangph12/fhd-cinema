import PageMetaData from '@/components/PageMetaData';
import { getAllCustomers } from '@/helpers/data';
//import AllDataTables from './components/AllDataTables';
import CustomDataTables from './components/CustomDataTables';
import { useEffect, useState } from 'react';

const DataTables = () => {
  const [customers, setCustomers] = useState()
  useEffect(() => {
    (async () => {
      const data = await getAllCustomers()
      setCustomers(data)
    })()
  }, [])

  const [accounts, setAccounts] = useState()

  useEffect(() => {
    fetch('http://localhost:8080/accounts')
    .then(response => response.json())
    .then(json =>setAccounts(json.data))
  }, [])
  

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAccounts = accounts?.filter(account =>
    account.accountName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <PageMetaData title="Account Tables" />
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search by account name"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            fontSize: '16px'
          }}
        />
      </div>
      {filteredAccounts && <CustomDataTables accounts={filteredAccounts} />}
    </>
  );
}
export default DataTables
