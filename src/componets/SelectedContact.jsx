import { useState, useEffect } from 'react'
const contactAPI = 'http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/';
import ContactRow from './ContactRow'



export default function SelectedContact({ selectedContactId, setSelectedContactId }) {

    const [contact, setContact] = useState({});

    useEffect(()=>{
        async function singleContact() {
            try{
                const response = await fetch(`${contactAPI}${selectedContactId}`);
                const jsonData = await response.json();
                setContact(jsonData)
            } catch(error) {
                console.log(error);
            } 
        }
        singleContact();
        
    }, []);

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {
                    <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>
                }
            </tbody>
        </table>
        </>
    )
};