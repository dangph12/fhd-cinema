import React, { useEffect } from 'react'
import Home from '../../components/Home'
import StarMember from '../home/components/StarMember'
import { useNavigate } from 'react-router-dom';

function Users() {
    let navigate = useNavigate();

    useEffect(() => {
        let session = sessionStorage.getItem('account');
        console.log("Session:", session); // Kiểm tra giá trị của session
        if (!session) {
            console.log("Navigating to login");
            navigate("/login");
        }
    }, []);
    

    return (
        <div>
            <StarMember />
        </div>
    )
}

export default Users