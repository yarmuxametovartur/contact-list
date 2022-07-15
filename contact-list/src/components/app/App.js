import React from 'react';
import { useState } from 'react';
import Button from '../button/button';
import Input from '../input/input';
import Table from '../table/table';
import './App.css';

const initialValues = {
  name: '',
  telephoneNumber: ''
}

function App() {
  const [contactData, setContactData] = useState(initialValues);
  const [contacts, setContacts] = useState([])
  const [editableContact, setEditableContact] = useState({
    isEdit: false,
    contactIndex: null
  });


  // Запись контакта в таблицу с проверкой пустых полей
  const isFieldsFilled = contactData.name && contactData.telephoneNumber;

  const handleSubmitContact = (e) => {
    e.preventDefault();
    if (isFieldsFilled) {
      if (editableContact.isEdit) {
        const editedData = contacts;
        editedData.splice(editableContact.contactIndex, 1, contactData);

        setContacts(editedData);

        setEditableContact({
          isEdit: false,
          contactIndex: null
        });
      } else {
        setContacts((prevState) => [...prevState, contactData])
      }
      setContactData(initialValues);
    }
  }

  // Очистка полей ввода (Отмена добавления контакта)
  const handleCleanClick = () => {
    setContactData(initialValues)
  }

  // Удаление контакта из таблицы
  const handleRemoveClick = ({ index }) => {
    setContacts(contacts.filter((contact, contactIndex) => contactIndex !== index));
  }

  // Редактирование контакта
  const handleEditClick = ({ contact, index }) => {
    setContactData(contact);
    setEditableContact({
      isEdit: true,
      contactIndex: index
    });
  }

  const handleInputChange = (e, name, telephoneNumber) => setContactData((prevState) => ({
    ...prevState,
    [name]: e.target.value,
    [telephoneNumber]: e.target.value
  }))

  console.log('contactData:', contactData)

  return (
    <div className='wrapper'>
      <div className='wrapper-content'>
        <div className='contacts-table'>
          <Table
            contacts={contacts}
            handleEditClick={handleEditClick}
            handleRemoveClick={handleRemoveClick}
          />
        </div>
        <div>

          <a href="#modal-one" className="modal-btn">Добавить контакт</a>

          <div className="modal-window" id="modal-one" aria-hidden="true">
            <div className="modal-window-dialog">

              <div className="modal-window-header">
                Добавление контакта
                <a href="#close" className="close-btn" aria-hidden="true">×</a>
              </div>

              <div className="modal-window-body">
                <form onSubmit={handleSubmitContact} onReset={handleCleanClick} >

                  <Input
                    placeholder="Введите имя контакта"
                    handleChange={handleInputChange}
                    value={contactData.name}
                    fieldName="name" />

                  <Input
                    placeholder="Введите номер телефона"
                    handleChange={handleInputChange}
                    value={contactData.telephoneNumber}
                    fieldName="telephoneNumber" />

                  <div className="form-buttons">


                    <Button
                      label="Отмена"
                      type='reset'
                      handleClick={() => { }}
                      classNames=''
                    />

                    <Button
                      label="Сохранить"
                      type='submit'
                      disabled={!isFieldsFilled}
                      handleClick={() => { }}
                      classNames=''
                    />

                  </div>

                </form>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default App;