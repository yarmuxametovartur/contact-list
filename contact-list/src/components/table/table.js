import React from 'react'
import Button from '../button/button';
import './table.css'

const Table = ({
    contacts,
    handleEditClick,
    handleRemoveClick
}) => {
    return (
        <table>
            <th>№</th>
            <th>Имя</th>
            <th>Номер телефона</th>
            <th>Действие</th>

            <tbody>
                {contacts.map((contact, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{contact.name}</td>
                        <td>{contact.telephoneNumber}</td>
                        <td>

                            <div>
                                <a href="#modal-one" class="btn-modal-edit"><Button
                                    label="Изменить"
                                    handleClick={(handleEditClick)}
                                    classNames='edit-btn'
                                    data={({ contact, index })}
                                />
                                </a>

                                <a href="#modal-two" class="btn-modal">Удалить</a>

                                <div class="modal" id="modal-two" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-header">
                                            Удалить контакт?

                                        </div>
                                        <div class="modal-body">

                                            <a href="#close" class="btn-close-delete" ><Button
                                                label="Да"
                                                handleClick={handleRemoveClick}
                                                classNames='remove-btn'
                                                data={({ index })}
                                            /></a>
                                            <a href="#close" class="btn-close" >Отмена</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;